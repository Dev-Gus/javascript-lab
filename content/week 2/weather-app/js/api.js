export async function getCoordinates(city) {
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
        throw error;
    }
}

export async function getWeatherData(lat, lon) {
    try {
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if(!weatherRes.ok) throw new Error('Failed to fetch weather data');
        const weatherData = await weatherRes.json();

        const { temperature, windspeed, time } = weatherData?.current_weather ?? {};
    
        return { temperature, windspeed, time };
    } catch (error) {
        throw error;
    }
}