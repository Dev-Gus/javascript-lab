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
        // Add current and additional metrics to the API request
        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,uv_index`
        );
        if(!weatherRes.ok) throw new Error('Failed to fetch weather data');
        const weatherData = await weatherRes.json();

        const currentWeather = weatherData?.current ?? {};
        const { 
            temperature_2m: temperature, 
            apparent_temperature: feelsLike,
            relative_humidity_2m: humidity,
            weather_code: weathercode, 
            wind_speed_10m: windspeed,
            uv_index: uvIndex,
            time
        } = currentWeather;
        
        const timeFormatted = formatTime(time);
    
        return { 
            temperature, 
            feelsLike,
            humidity,
            windspeed, 
            timeFormatted, 
            weathercode,
            uvIndex
        };
    } catch (error) {
        throw error;
    }
}