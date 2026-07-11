import { test, expect } from '@playwright/test';

test('Verify GitHub Actions demo page title', async ({ page }) => {
    // 1. Instruct the browser to navigate to the Playwright website
    await page.goto('https://playwright.dev/');

    // 2. Assert that the title contains the word "Playwright"
    //await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveTitle(/IncorrectTitle/);
});