export const cityInput = document.getElementById("cityInput");
const statusText = document.getElementById("status");
const weatherBox = document.getElementById("weatherResult");

const btn = document.getElementById('getWeatherBtn');
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const windEl = document.getElementById("wind");
const timeEl = document.getElementById("time");

const ui = {
  getCityInput: () => cityInput?.value.trim(),

  showLoading: () => {
    if (statusText) statusText.className = "";
    if (statusText) statusText.innerHTML = `<div class='loader'></div>`;
    if (weatherBox) weatherBox.classList.add("hidden");
  },

  showError: (msg) => {
    if (statusText) statusText.className = "error";
    if (statusText) statusText.textContent = msg;
    if (weatherBox) weatherBox.classList.add("hidden");
  },

  showSuccess: () => {
    if (statusText) statusText.className = "success";
    if (statusText) statusText.textContent = "";
  },

  updateWeatherUI: (name, weather) => {
    const { temperature, windspeed, timeFormatted } = weather;

    if (cityNameEl) cityNameEl.textContent = name;
    if (tempEl) tempEl.textContent = temperature;
    if (windEl) windEl.textContent = windspeed;
    if (timeEl) timeEl.textContent = timeFormatted;

    if (weatherBox) weatherBox.classList.remove("hidden");
    ui.showSuccess();
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
    statusText.textContent = '';
  },
};

export default ui;