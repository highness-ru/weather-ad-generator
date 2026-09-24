const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/weather", async (req, res) => {
    try {
        const city = req.query.city || "London";

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            return res.status(404).json({ error: "City not found" });
        }

        const location = geoData.results[0];

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,precipitation`
        );

        const weatherData = await weatherResponse.json();

        res.json({
            city: location.name,
            temperature: weatherData.current.temperature_2m,
            precipitation: weatherData.current.precipitation
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});