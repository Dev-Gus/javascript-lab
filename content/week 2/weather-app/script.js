const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const statusText = document.getElementById('status');
const weatherBox = document.getElementById('weatherResult');

const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const timeEl = document.getElementById('time');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput?.value?.trim();
    if (!city) {
        statusText?.textContent = 'Please enter a city.';
        return;
    }

    getWeather(city);
});

const padStart = (value) => String(value).padStart(2, '0');

const formatTime = (time) => {
    const date = new Date(time);

    const formattedTime = date.toLocaleString('en-US', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const formattedDate = date.toLocaleDateString('en-GB');

    return `${formattedTime} - ${formattedDate}`;
}

async function getWeather(city = "Montevideo") {
    statusText?.textContent = 'Loading...';
    weatherBox?.classList.add('hidden');

    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
        if (!geoRes.ok) throw new Error('Failed geocoding request');
        const geoData = await geoRes.json();

        const firstResult = geoData?.results?.[0] ?? null;

        if (!firstResult) {
            statusText?.textContent = 'City not found.';
            return;
        }

        const { latitude, longitude, name } = firstResult;

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherRes?.json();

        const { temperature, windspeed, time } = weatherData?.current_weather ?? {};

        cityName?.textContent = name;
        temp?.textContent = temperature;
        wind?.textContent = windspeed;
        timeEl?.textContent = formatTime(time);

        weatherBox?.classList.remove('hidden');
        statusText?.textContent = '';
        cityInput?.value = '';
    } catch (error) {
        console.error(error);
        statusText?.textContent = 'Error fetching weather data.';
    }
}