# Weather Ad Generator

A small full-stack project that generates advertising copy based on live weather data.

The project uses a Node.js and Express backend to fetch current weather data from Open-Meteo. The frontend then changes the advertising message depending on the returned temperature and precipitation.

I built this project while learning Node.js and Express and experimenting with how live external data can be used to change digital creative content.

## Tech

- JavaScript
- Node.js
- Express
- HTML
- CSS
- Open-Meteo API
- GSAP
- Playwright

## How it works

1. The user enters a city.
2. The frontend sends a request to the Node.js backend.
3. The backend uses Open-Meteo to find the city's coordinates.
4. It then fetches the current temperature and precipitation.
5. The frontend receives the weather data.
6. Advertising copy changes depending on the conditions.
7. GSAP adds a small animation when the generated advert appears.

For example, warm weather can produce:

> Sunny day? Get ready for summer.

Rain can produce:

> Rain outside? Stay dry and shop from home.

## Run locally

First, install the project dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The terminal should display:

```text
Server running at http://localhost:3000
```

Then open this address in your browser:

```text
http://localhost:3000
```

## Testing

The project includes automated browser tests using Playwright.

The tests cover the main user flow, including entering a city and checking that weather information appears.

To run the tests:

```bash
npx playwright test
```

To run the tests using Playwright UI Mode:

```bash
npx playwright test --ui
```

To run the tests in debug mode:

```bash
npx playwright test --debug
```

## What I learned

This project gave me hands-on experience with:

- running JavaScript on the backend with Node.js
- creating API routes with Express
- making asynchronous API requests with `fetch` and `async/await`
- working with JSON responses
- connecting frontend and backend code
- changing UI content based on live data
- adding web animations with GSAP
- writing browser automation with Playwright
