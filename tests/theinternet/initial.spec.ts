import test, { expect } from "@playwright/test";

test("opens the page", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  const title = await page.title();
  const heading = await page.locator("h1").textContent();

  expect(title).toBe("The Internet");
  expect(heading).toBe("Welcome to the-internet");
});
