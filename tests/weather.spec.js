const { test, expect } = require("@playwright/test");

test("shows weather after entering a city", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByPlaceholder("Enter a city").fill("Tokyo");
    await page.getByRole("button", { name: "Generate Ad" }).click();

    await expect(page.locator("#weather")).toContainText("Tokyo:");
});

test("shows summer advert for warm weather", async ({ page }) => {

    await page.route("**/api/weather?city=*", async route => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                city: "Test City",
                temperature: 25,
                precipitation: 0
            })
        });
    });

    await page.goto("http://localhost:3000");

    await page.getByPlaceholder("Enter a city").fill("Test City");
    await page.getByRole("button", { name: "Generate Ad" }).click();

    await expect(page.locator("#headline"))
        .toHaveText("Sunny day? Get ready for summer.");
});

test("shows rain advert when precipitation is present", async ({ page }) => {
    await page.route("**/api/weather?city=*", async route => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                city: "Test City",
                temperature: 15,
                precipitation: 2
            })
        });
    });

    await page.goto("http://localhost:3000");

    await page.getByPlaceholder("Enter a city").fill("Test City");
    await page.getByRole("button", { name: "Generate Ad" }).click();

    await expect(page.locator("#headline"))
        .toHaveText("Rain outside? Stay dry and shop from home.");
});

test("shows cold advert for low temperature", async ({ page }) => {
    await page.route("**/api/weather?city=*", async route => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({
                city: "Test City",
                temperature: 2,
                precipitation: 0
            })
        });
    });

    await page.goto("http://localhost:3000");

    await page.getByPlaceholder("Enter a city").fill("Test City");
    await page.getByRole("button", { name: "Generate Ad" }).click();

    await expect(page.locator("#headline"))
        .toHaveText("Cold outside? Warm up with our winter collection.");
});

test("asks for a city when input is empty", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", { name: "Generate Ad" }).click();

    await expect(page.locator("#headline"))
        .toHaveText("Please enter a city.");
});