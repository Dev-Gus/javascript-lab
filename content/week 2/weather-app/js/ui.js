export const cityInput = document.getElementById("cityInput");
const statusText = document.getElementById("status");
const weatherBox = document.getElementById("weatherResult");

const btn = document.getElementById('getWeatherBtn');
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const windEl = document.getElementById("wind");
const timeEl = document.getElementById("time");
const statusArea = document.getElementById("statusArea");

const ui = {
  getCityInput: () => cityInput?.value.trim(),

  setStatus: ({ type, message }) => {
    if (!statusText) return;
    statusText.classList.remove("loading", "error", "success", "visible");
    statusText.innerHTML = "";

    if (type === "loading") {
      statusArea.classList.add("loading");
      statusText.textContent = "";
      statusText.classList.add("visible");
      ui.hideWeatherBox();
      return;
    }

    else if (type === "error") {
      statusArea.classList.remove("loading");
      statusText.classList.add("error", "visible");
      statusText.textContent = message;
      ui.hideWeatherBox();
      return;
    }

    else if (type === "success") {
      statusArea.classList.remove("loading");
      statusText.innerHTML = "";
      statusText.classList.remove("visible", "loading");
      return;
    }
  },

  updateWeatherUI: (name, weather) => {
    const { temperature, windspeed, timeFormatted } = weather;

    if (cityNameEl) cityNameEl.textContent = name;
    if (tempEl) tempEl.textContent = temperature;
    if (windEl) windEl.textContent = windspeed;
    if (timeEl) timeEl.textContent = timeFormatted;

    if (weatherBox) ui.showWeatherBox();
  },

  clearInput: () => {
    if (cityInput) cityInput.value = "";
  },

  disableBtn: () => {
    btn.disabled = true;
  },

  enableBtn: () => {
    btn.disabled = false;
  },

  clearStatus: () => {
    if (!statusText) return;
    statusText.classList.remove("visible", "loading", "error", "success");
    statusText.textContent = '';
  },

  hideWeatherBox: () => {
    if (!weatherBox) return;
    weatherBox.classList.remove("visible");
  },

  showWeatherBox: () => {
    if (!weatherBox) return;
    weatherBox.classList.add("visible");
  }
};

export default ui;