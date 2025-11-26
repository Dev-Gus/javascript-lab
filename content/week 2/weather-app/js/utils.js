export const formatTime = (time) => {
    const date = new Date(time);

    const formattedTime = date.toLocaleString('en-US', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const formattedDate = date.toLocaleDateString('en-GB');

    return `${formattedTime} - ${formattedDate}`;
}

/**
 * Map WMO Weather codes to emoji and description
 * WMO Weather interpretation codes from Open-Meteo API
 * @param {number} code - WMO weather code
 * @returns {Object} { emoji, description }
 */
export const getWeatherIcon = (code) => {
    const weatherMap = {
        // Clear sky
        0: { emoji: '☀️', description: 'Clear Sky' },
        1: { emoji: '🌤️', description: 'Mainly Clear' },
        2: { emoji: '⛅', description: 'Partly Cloudy' },
        3: { emoji: '☁️', description: 'Overcast' },
        
        // Fog and mist
        45: { emoji: '🌫️', description: 'Foggy' },
        48: { emoji: '🌫️', description: 'Foggy' },
        
        // Drizzle
        51: { emoji: '🌧️', description: 'Light Drizzle' },
        53: { emoji: '🌧️', description: 'Moderate Drizzle' },
        55: { emoji: '🌧️', description: 'Dense Drizzle' },
        
        // Freezing drizzle
        56: { emoji: '❄️', description: 'Freezing Drizzle' },
        57: { emoji: '❄️', description: 'Freezing Drizzle' },
        
        // Rain
        61: { emoji: '🌧️', description: 'Slight Rain' },
        63: { emoji: '🌧️', description: 'Moderate Rain' },
        65: { emoji: '⛈️', description: 'Heavy Rain' },
        
        // Freezing rain
        66: { emoji: '🧊', description: 'Freezing Rain' },
        67: { emoji: '🧊', description: 'Heavy Freezing Rain' },
        
        // Snow
        71: { emoji: '❄️', description: 'Slight Snow' },
        73: { emoji: '❄️', description: 'Moderate Snow' },
        75: { emoji: '❄️', description: 'Heavy Snow' },
        77: { emoji: '❄️', description: 'Snow Grains' },
        
        // Snow showers
        80: { emoji: '🌨️', description: 'Rain Showers' },
        81: { emoji: '🌨️', description: 'Moderate Rain Showers' },
        82: { emoji: '⛈️', description: 'Violent Rain Showers' },
        
        // Snow showers
        85: { emoji: '🌨️', description: 'Snow Showers' },
        86: { emoji: '🌨️', description: 'Heavy Snow Showers' },
        
        // Thunderstorm
        80: { emoji: '⛈️', description: 'Thunderstorm' },
        81: { emoji: '⛈️', description: 'Thunderstorm with Rain' },
        82: { emoji: '⛈️', description: 'Thunderstorm with Heavy Rain' },
        95: { emoji: '⛈️', description: 'Thunderstorm' },
        96: { emoji: '⛈️', description: 'Thunderstorm with Hail' },
        99: { emoji: '⛈️', description: 'Thunderstorm with Heavy Hail' },
    };

    // Return matched weather or default to clear
    return weatherMap[code] || { emoji: '🌤️', description: 'Unknown' };
};