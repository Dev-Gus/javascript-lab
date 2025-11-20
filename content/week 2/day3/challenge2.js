/* CHALLENGE #2 — “The Weather Mini-App” */

async function getWeather() {
    console.log("Loading weather...");

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.9&longitude=-56.2&current_weather=true"
        );

        if (!response.ok) {
            throw new Error(`HTTP error (status ${response.status})`);
        }

        const data = await response.json();
        if (!data) throw new Error("Mising data");
        if (!data.current_weather) throw new Error("Missing current_weather data");

        const { temperature, windspeed, time } = data.current_weather;

        if (temperature == null) throw new Error("Missing temperature");
        if (typeof temperature !== "number") throw new Error("Temperature must be a number");

        if (windspeed == null) throw new Error("Missing windspeed");
        if (typeof windspeed !== "number") throw new Error("Windspeed must be a number");

        if (time == null) throw new Error("Missing time");
        if (typeof time !== "string") throw new Error("Time must be a string");

        console.log("Weather loaded ✓");
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Windspeed: ${windspeed} km/h`);
        console.log(`Time: ${time}`);
    } catch (error) {
        console.error("Could not load weather 😔");
        console.error("Reason:", error.message);
    } finally {
        console.log("Done");
    }
}

getWeather();