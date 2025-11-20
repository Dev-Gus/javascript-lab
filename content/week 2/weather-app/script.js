const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const statusText = document.getElementById('status');
const weatherBox = document.getElementById('weatherResult');

const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const timeEl = document.getElementById('time');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (!city) {
        statusText.textContent = 'Please enter a city.';
        return;
    }

    getWeather(city);
});

async function getWeather(city) {
    statusText.textContent = 'Loading...';
    weatherBox.classList.add('hidden');

    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            statusText.textContent = 'City not found.';
            return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherRes.json();

        const { temperature, windspeed, time } = weatherData.current_weather;

        cityName.textContent = name;
        temp.textContent = temperature;
        wind.textContent = windspeed;
        timeEl.textContent = time;

        weatherBox.classList.remove('hidden');
        statusText.textContent = '';
    } catch (error) {
        console.error(error);
        statusText.textContent = 'Error fetching weather data.';
    }
}