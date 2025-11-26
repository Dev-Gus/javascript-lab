import ui from "./ui.js";
import { getCoordinates, getWeatherData } from "./api.js";
import { getWeatherIcon } from "./utils.js";
import { cityInput } from "./ui.js";

const getWeatherBtn = document.getElementById("getWeatherBtn");
const retryBtn = document.getElementById("retryBtn");

/**
 * User-friendly error messages mapping
 * Transform technical errors into helpful, actionable messages
 */
const getErrorMessage = (error) => {
  const message = error.message || "Unknown error occurred";

  // Map technical errors to user-friendly messages
  const errorMap = {
    "No internet connection": "📡 No internet connection. Please check your connection and try again.",
    "City not found": "🏙️ City not found. Please check the spelling and try again.",
    "Unable to connect to geocoding server": "🔗 Unable to reach location server. Please try again in a moment.",
    "Failed to fetch weather data": "☁️ Unable to fetch weather data. Please try again.",
    "Input must be a city name": "✏️ Please enter a valid city name.",
    "Missing weather data": "📊 Missing weather data. Please try another city."
  };

  // Return mapped message or original message
  return errorMap[message] || `❌ ${message}`;
};

/**
 * Wrapper for API calls with timeout functionality
 * If request takes longer than 10 seconds, fail gracefully
 */
const withTimeout = async (promise, timeoutMs = 10000) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timeout. Please check your connection and try again.")), timeoutMs)
  );
  return Promise.race([promise, timeoutPromise]);
};

export const fetchWeather = async (city) => {
  try {
    if (!city) {
      throw new Error("Input must be a city name");
    }

    // Store this city as "last attempted" in case error occurs
    ui.setLastAttemptedCity(city);

    // Fetch coordinates with timeout protection
    const { latitude, longitude, name } = await withTimeout(
      getCoordinates(city)
    );

    // Fetch weather with timeout protection
    const weather = await withTimeout(
      getWeatherData(latitude, longitude)
    );

    return { name, latitude, longitude, weather };
  } catch (error) {
    throw error;
  }
};

export const renderWeather = (data) => {
  if (!data || !data.weather) {
    ui.setStatus({ type: "error", message: getErrorMessage(new Error("Missing weather data")) });
    return;
  }

  ui.updateWeatherUI(data.name, data.weather);

  // Get and display weather icon
  const { emoji, description } = getWeatherIcon(data.weather.weather_code);
  ui.updateWeatherIcon(emoji, description);

  ui.setStatus({ type: "success" });
};

export const initApp = async () => {
  getWeatherBtn.addEventListener("click", () => {
    handleWeatherRequest();
  });

  /**
   * Retry button: retry with current input (or last attempted city if input is empty)
   */
  retryBtn.addEventListener("click", () => {
    const currentInput = ui.getCityInput();
    const lastCity = ui.getLastAttemptedCity();

    // If user has edited the input, use the new value
    if (currentInput && currentInput !== lastCity) {
      handleWeatherRequest();
    }
    // Otherwise, if input is empty, restore the last attempted city
    else if (!currentInput && lastCity) {
      cityInput.value = lastCity;
      handleWeatherRequest();
    }
    // If both are empty, do nothing (user will get error message)
  });

  /**
   * Only clear status when user submits a NEW search (not while typing)
   * This keeps error messages visible so user can read context while editing
   */
  // Remove: cityInput.addEventListener("input", () => { ui.clearStatus(); });

  /**
   * Clear the "last attempted city" when user edits input
   * This way, retry button will use the new (corrected) input instead of old failed search
   */
  cityInput.addEventListener("input", () => {
    ui.setLastAttemptedCity(""); // Clear so retry uses current input
  });

  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleWeatherRequest();
    }
  });

  // Try to load last saved city on app startup
  try {
    const lastCityStored = localStorage.getItem("lastCity");
    if (lastCityStored) {
      ui.disableBtn();
      ui.setStatus({ type: "loading" });
      const cityWeather = await fetchWeather(lastCityStored);
      renderWeather(cityWeather);
    }
  } catch (error) {
    // Expected errors are handled gracefully in setStatus, no need to log
    ui.setStatus({ type: "error", message: getErrorMessage(error) });
  } finally {
    ui.enableBtn();
  }
};

/**
 * Handle weather request with professional error handling
 */
const handleWeatherRequest = async () => {
  const city = ui.getCityInput();
  if (!city) {
    ui.setStatus({ type: "error", message: getErrorMessage(new Error("Input must be a city name")) });
    return;
  }

  // Clear previous status when starting a new search
  ui.clearStatus();

  ui.disableBtn();
  ui.setStatus({ type: "loading" });
  try {
    const cityWeather = await fetchWeather(city);
    renderWeather(cityWeather);
    localStorage.setItem("lastCity", cityWeather.name);
    ui.clearInput();
  } catch (error) {
    // Expected errors are handled gracefully in setStatus, no need to log
    ui.setStatus({ type: "error", message: getErrorMessage(error) });
  } finally {
    ui.enableBtn();
  }
};