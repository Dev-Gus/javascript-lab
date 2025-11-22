import ui from "./ui.js";
import { getCoordinates, getWeatherData } from "./api.js";

const getWeatherBtn = document.getElementById('getWeatherBtn');

export const fetchWeather = async (city) => {
    try {
        if (!city) {
            throw new Error('Input must be a city name');
        }

        const { latitude, longitude, name } = await getCoordinates(city);

        const weather = await getWeatherData(latitude, longitude);

        return { name, latitude, longitude, weather }
    } catch (error) {
        throw error;
    }
}

export const renderWeather = (data) => {
    if (!data || !data.weather) {
        ui.showError('Missing weather data');
        return;
    }

    ui.updateWeatherUI(data.name, data.weather);
    ui.showSuccess();
}

export const initApp = async () => {
    getWeatherBtn.addEventListener('click', async () => {
        ui.showLoading();
        try {
            const city = ui.getCityInput();

            const cityWeather = await fetchWeather(city);
            renderWeather(cityWeather);
            localStorage.setItem('lastCity', cityWeather.name);
        } catch (error) {
            console.error(error);
            ui.showError(error.message);
        }
    });

    try {
        const lastCityStored = localStorage.getItem('lastCity');
        if (lastCityStored) {
            ui.showLoading();
            const cityWeather = await fetchWeather(lastCityStored);
            renderWeather(cityWeather);
        }
    } catch (error) {
        console.error(error);
        ui.showError(error.message);
    }
};