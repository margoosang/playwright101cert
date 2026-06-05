import { test, expect } from "@playwright/test";

test('Test Scenario 2', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
    await page.locator('#slider3').getByRole('slider').fill('95');
    await expect(page.locator('#slider3').getByRole('slider')).toHaveValue('95');
})