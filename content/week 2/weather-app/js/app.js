import { getCoordinates, getWeatherData } from "./api.js";
import ui from "./ui.js";







const fetchWeatherData = async (city) => {
    try {
        if (!city) {
            throw new Error('Invalid city input');
        }

        const cityData = await getCoordinates(city);
        const { latitude, longitude, name } = cityData;

        const weatherData = await getWeatherData(latitude, longitude);

        return { name, latitude, longitude, weatherData };
    } catch (error) {
        throw error;
    }
}

const renderWeather = (name, weatherData) => {
    ui.showLoading();

    if (!name) {
        ui.showError('Please enter a valid city');
        return;
    }

    if (!weatherData) {
        ui.showError('Weather data is not valid');
        return;
    }

    ui.updateWeatherUI(name, weatherData);
}