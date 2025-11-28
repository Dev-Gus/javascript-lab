export const cityInput = document.getElementById("cityInput");
const statusText = document.getElementById("status");
const weatherBox = document.getElementById("weatherResult");
const retryBtn = document.getElementById("retryBtn");
const weatherWarning = document.getElementById("weatherWarning");

const btn = document.getElementById('getWeatherBtn');
const cityNameEl = document.getElementById("cityName");
const weatherIconEl = document.getElementById("weatherIcon");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const windEl = document.getElementById("wind");
const timeEl = document.getElementById("time");
const feelsLikeEl = document.getElementById("feelsLike");
const humidityEl = document.getElementById("humidity");
const uvIndexEl = document.getElementById("uvIndex");
const statusArea = document.getElementById("statusArea");

/**
 * Store the last attempted city so retry button knows what to search for
 */
let lastAttemptedCity = "";

const ui = {
  /**
   * Get the current value from the city search input field
   * @returns {string} City name trimmed of whitespace
   */
  getCityInput: () => cityInput?.value.trim(),

  /**
   * Store the last city that was attempted in a search (used for retry button)
   * @param {string} city - City name to store for retry functionality
   */
  setLastAttemptedCity: (city) => {
    lastAttemptedCity = city;
  },

  /**
   * Retrieve the last attempted city search (for retry button functionality)
   * @returns {string} Previously searched city name
   */
  getLastAttemptedCity: () => lastAttemptedCity,

  /**
   * Update application status display (loading, error, or success state)
   * Manages UI visibility, spinner animation, and message display
   * @param {Object} options - Status configuration
   * @param {string} options.type - Status type: "loading" | "error" | "success"
   * @param {string} [options.message] - Error message (required when type is "error")
   * 
   * @example
   * ui.setStatus({ type: "loading" });
   * ui.setStatus({ type: "error", message: "City not found" });
   * ui.setStatus({ type: "success" });
   */
  setStatus: ({ type, message }) => {
    if (!statusText) return;
    statusText.classList.remove("loading", "error", "success", "visible");
    statusText.innerHTML = "";

    if (type === "loading") {
      statusArea.classList.add("loading");
      statusText.textContent = "";
      statusText.classList.add("visible");
      retryBtn.classList.add("hidden");
      ui.hideWeatherBox();
      return;
    }

    else if (type === "error") {
      statusArea.classList.remove("loading");
      statusText.classList.add("error", "visible");
      statusText.textContent = message;
      retryBtn.classList.remove("hidden");
      ui.hideWeatherBox();
      return;
    }

    else if (type === "success") {
      statusArea.classList.remove("loading");
      statusText.innerHTML = "";
      statusText.classList.remove("visible", "loading");
      retryBtn.classList.add("hidden");
      return;
    }
  },

  /**
   * Update the weather display with current metrics
   * Displays temperature, feels-like, humidity, wind speed, UV index, and time
   * @param {string} name - City name to display as header
   * @param {Object} weather - Weather data object from API
   * @param {number} weather.temperature - Current temperature in Celsius
   * @param {number} weather.feelsLike - Feels-like/apparent temperature in Celsius
   * @param {number} weather.humidity - Relative humidity percentage (0-100)
   * @param {number} weather.windspeed - Wind speed in km/h
   * @param {number} weather.uvIndex - UV index value
   * @param {string} weather.timeFormatted - Pre-formatted time string (HH:MM AM/PM - DD/MM/YYYY)
   */
  updateWeatherUI: (name, weather) => {
    const { temperature, feelsLike, humidity, windspeed, timeFormatted, uvIndex } = weather;

    if (cityNameEl) cityNameEl.textContent = name;
    if (tempEl) tempEl.textContent = temperature.toFixed(1);
    if (feelsLikeEl) feelsLikeEl.textContent = feelsLike.toFixed(1);
    if (humidityEl) humidityEl.textContent = humidity;
    if (windEl) windEl.textContent = windspeed.toFixed(1);
    if (uvIndexEl) uvIndexEl.textContent = uvIndex.toFixed(1);
    if (timeEl) timeEl.textContent = timeFormatted;
    // Update weather icon and condition (requires getWeatherIcon from utils)
    if (weatherIconEl && conditionEl) {
      // Dynamic import of getWeatherIcon will happen in controller
      // This is set by controller.updateWeatherWithIcon()
    }

    if (weatherBox) ui.showWeatherBox();
  },

  /**
   * Update the weather icon emoji and condition description text
   * Called separately from updateWeatherUI to display visual weather representation
   * @param {string} emoji - Weather emoji (e.g., "☀️", "🌧️", "❄️")
   * @param {string} description - Weather condition description (e.g., "Clear Sky", "Rainy")
   */
  updateWeatherIcon: (emoji, description) => {
    if (weatherIconEl) weatherIconEl.textContent = emoji;
    if (conditionEl) conditionEl.textContent = description;
  },

  /**
   * Show or hide the precipitation warning message (umbrella emoji)
   * @param {boolean} hasWarning - True to show warning, false to hide
   * @param {string} [message=''] - Warning message to display (required when hasWarning is true)
   * 
   * @example
   * ui.showPrecipitationWarning(true, "☔ Precipitation expected!");
   * ui.showPrecipitationWarning(false);
   */
  showPrecipitationWarning: (hasWarning, message = '') => {
    if (!weatherWarning) return;
    
    if (hasWarning) {
      weatherWarning.textContent = message;
      weatherWarning.classList.remove("hidden");
    } else {
      weatherWarning.classList.add("hidden");
    }
  },

  /**
   * Clear the city input field
   * Used after successful weather fetch to reset form for next search
   */
  clearInput: () => {
    if (cityInput) cityInput.value = "";
  },

  /**
   * Disable the "Get Weather" button
   * Prevents multiple simultaneous API requests during loading
   */
  disableBtn: () => {
    btn.disabled = true;
  },

  /**
   * Enable the "Get Weather" button
   * Re-enables after API request completes
   */
  enableBtn: () => {
    btn.disabled = false;
  },

  /**
   * Clear the status message display
   * Removes visible status messages and animations
   */
  clearStatus: () => {
    if (!statusText) return;
    statusText.classList.remove("visible", "loading", "error", "success");
    statusText.textContent = '';
  },

  /**
   * Hide the weather results card
   * Removes the visible class to trigger fade-out animation
   */
  hideWeatherBox: () => {
    if (!weatherBox) return;
    weatherBox.classList.remove("visible");
  },

  /**
   * Show the weather results card with fade-in animation
   * Adds visible class to trigger CSS animation
   */
  showWeatherBox: () => {
    if (!weatherBox) return;
    weatherBox.classList.add("visible");
  }
};

export default ui;