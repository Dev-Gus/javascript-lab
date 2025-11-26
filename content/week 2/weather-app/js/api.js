import { formatTime } from "./utils.js";

/**
 * Get geographic coordinates (latitude, longitude) for a city name
 * Uses Open-Meteo Geocoding API to find location data
 * 
 * @param {string} city - City name to search for (e.g., "London", "New York")
 * @returns {Promise<{latitude: number, longitude: number, name: string}>} Location coordinates and official name
 * @throws {Error} "No internet connection" if offline, "City not found" if city doesn't exist
 * 
 * @example
 * const { latitude, longitude, name } = await getCoordinates("London");
 * console.log(`${name}: ${latitude}, ${longitude}`);
 */
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

/**
 * Get current weather data for a specific location
 * Fetches temperature, humidity, wind speed, UV index, and weather condition
 * 
 * @param {number} lat - Latitude coordinate
 * @param {number} lon - Longitude coordinate
 * @returns {Promise<{temperature: number, feelsLike: number, humidity: number, windspeed: number, weathercode: number, uvIndex: number, timeFormatted: string}>} Current weather data
 * @throws {Error} "Failed to fetch weather data" if API request fails
 * 
 * @example
 * const weather = await getWeatherData(51.5074, -0.1278); // London
 * console.log(`Temperature: ${weather.temperature}°C, Feels like: ${weather.feelsLike}°C`);
 */
export async function getWeatherData(lat, lon) {
    if (!navigator.onLine) throw new Error("No internet connection");
    
    try {
        // Request current weather with multiple metrics from Open-Meteo API
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