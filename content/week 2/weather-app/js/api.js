import { formatTime } from "./utils.js";

export async function getCoordinates(city) {
    if (!navigator.onLine) throw new Error("No internet connection");
    
    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
        if (!geoRes.ok) throw new Error('Failed geocoding request');
        const geoData = await geoRes.json();

        const firstResult = geoData?.results?.[0] ?? null;

        if (!firstResult) {
            throw new Error('City not found');
        }

        const { latitude, longitude, name } = firstResult;

        return { latitude, longitude, name };
    } catch (error) {
        if (error.message.includes('Failed geocoding')) {
            throw new Error('Unable to connect to geocoding server');
        }
        throw error;
    }
}

export async function getWeatherData(lat, lon) {
    if (!navigator.onLine) throw new Error("No internet connection");
    
    try {
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&weather_code=true`);
        if(!weatherRes.ok) throw new Error('Failed to fetch weather data');
        const weatherData = await weatherRes.json();

        const { temperature, windspeed, time, weather_code } = weatherData?.current_weather ?? {};
        const timeFormatted = formatTime(time);
    
        return { temperature, windspeed, timeFormatted, weather_code };
    } catch (error) {
        throw error;
    }
}