const cityInput = document.getElementById('cityInput');
const statusText = document.getElementById('status');
const weatherBox = document.getElementById('weatherResult');

const cityNameEl = document.getElementById('cityName');
const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const timeEl = document.getElementById('time');

const ui = {
    getCityInput: () => cityInput?.value.trim(),
    showLoading: () => {
        statusText?.className = '';
        statusText?.innerHTML = `<div class='loader'></div>`;
        weatherBox?.classList.add('hidden');
    },
    showError: (msg) => {
        statusText?.className = 'error';
        statusText?.textContent = msg;
        weatherBox?.classList.add('hidden');
    },
    showSuccess: () => {
        statusText?.className = 'success';
        statusText?.textContent = '';
    },
    updateWeatherUI: (name, weather) => {
        const { temperature, windspeed, timeFormatted } = weather;

        cityNameEl?.textContent = name;
        tempEl?.textContent = temperature;
        windEl?.textContent = windspeed;
        timeEl?.textContent = timeFormatted;

        weatherBox?.classList.remove('hidden');
        ui.showSuccess();
    }, 
    clearInput: () => {
        cityInput?.value = '';
    }
};

export default ui;