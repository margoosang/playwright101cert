import { test, expect } from "@playwright/test";

test('Test Scenario 2', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.')).not.toBeVisible();

    await page.getByRole('textbox', { name: 'Name' }).fill('Marcus');
    await page.getByRole('textbox', { name: 'Email*' }).fill('abc123@gmail.com');
    await page.getByRole('textbox', { name: 'Password*' }).fill('Qwerty123');
    await page.getByRole('textbox', { name: 'Company' }).fill('TestMu AI');
    await page.getByRole('textbox', { name: 'Website' }).fill('https://www.testmuai.com/selenium-playground/input-form-demo/');
    await page.getByRole('textbox', { name: 'City', exact: true }).fill('US');
    await page.getByRole('textbox', { name: 'Address 1' }).fill('1 Sesame Street');
    await page.getByRole('textbox', { name: 'Address 2' }).fill('#01-23');
    await page.getByRole('textbox', { name: 'City* State*' }).fill('US');
    await page.getByRole('textbox', { name: 'Zip Code*' }).fill('101101');
    await page.getByRole('combobox').selectOption('US');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('.loginform')).toBeVisible();
})