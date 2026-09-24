const cityInput = document.getElementById("cityInput");
const generateButton = document.getElementById("generateButton");
const weatherText = document.getElementById("weather");
const headline = document.getElementById("headline");

generateButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) {
        headline.textContent = "Please enter a city.";
        return;
    }

    try {
        headline.textContent = "Checking the weather...";

        const response = await fetch(
            `/api/weather?city=${encodeURIComponent(city)}`
        );

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const data = await response.json();

        weatherText.textContent =
            `${data.city}: ${data.temperature}°C`;

        if (data.precipitation > 0) {
            headline.textContent =
                "Rain outside? Stay dry and shop from home.";
        } else if (data.temperature >= 20) {
            headline.textContent =
                "Sunny day? Get ready for summer.";
        } else if (data.temperature <= 5) {
            headline.textContent =
                "Cold outside? Warm up with our winter collection.";
        } else {
            headline.textContent =
                "Whatever the weather, we've got you covered.";
        }

        gsap.fromTo(
    "#ad",
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power2.out"
    }
);

    } catch (error) {
        console.error(error);

        headline.textContent =
            "Sorry, we couldn't generate an advert.";
    }
});