# Weather Ad Generator

A small full-stack project that generates advertising copy based on live weather data.

I built this project while learning Node.js and Express after seeing how live data can be used to dynamically change advertising creative.

## Tech

- JavaScript
- Node.js
- Express
- HTML/CSS
- Open-Meteo API
- GSAP
- Playwright

## How it works

1. The user enters a city.
2. The Node/Express backend uses Open-Meteo to find the location and fetch current weather.
3. The frontend receives temperature and precipitation data.
4. Advertising copy changes depending on the weather.
5. GSAP animates the generated advert.

## Testing

Playwright tests cover:

- entering a city and displaying weather
- weather-dependent advertising behaviour
- basic form validation

## Run locally

```bash
npm install
node server.js
