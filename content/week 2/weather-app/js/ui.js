const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const statusText = document.getElementById('status');
const weatherBox = document.getElementById('weatherResult');

const cityNameEl = document.getElementById('cityName');
const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const timeEl = document.getElementById('time');

export const getCityInput = () => cityInput?.value.trim();

export const showLoading = () => {
    statusText?.textContent = 'Loading...';
    weatherBox?.classList.add('hidden');
};

export const showError = (message) => {
    statusText?.textContent = message;
    weatherBox?.classList.add('hidden');
};

export const updateWeatherUI = (name, weather) => {
    const { temperature, windspeed, timeFormatted } = weather;

    cityNameEl?.textContent = name;
    tempEl?.textContent = temperature;
    windEl?.textContent = windspeed;
    timeEl?.textContent = timeFormatted;

    weatherBox?.classList.remove('hidden');
    statusText?.textContent = '';
};

export const clearInput = () => {
    cityInput?.value = '';
}