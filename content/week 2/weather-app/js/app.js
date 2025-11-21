import { getCoordinates, getWeatherData } from "./api.js";
import ui from "./ui.js";

const getWeatherBtn = document.getElementById('getWeatherBtn');

getWeatherBtn.addEventListener('click', async () => {
    try {
        ui.showLoading();
        const city = ui.getCityInput();

        if (!city) {
            ui.showError("Please type a city name");
            return;
        }

        const cityData = await getCoordinates(city);
        const { latitude, longitude, name } = cityData;

        const weatherData = await getWeatherData(latitude, longitude);

        ui.updateWeatherUI(name, weatherData);
        ui.clearInput();
    } catch (error) {
        console.error(error)
        ui.showError(error.message);
    }
});