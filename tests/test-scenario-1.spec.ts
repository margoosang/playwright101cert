import { test, expect } from "@playwright/test";

test("Test Scenario 1", async ({ page }) => {
  await page.goto("https://www.testmuai.com/selenium-playground/");

  await page.getByRole("link", { name: "Simple Form Demo" }).click();

  await expect(page).toHaveURL(/simple-form-demo/);

  const msg = "Welcome to TestMu AI";

  await page
    .getByRole("textbox", { name: "Please enter your Message" })
    .fill(msg);

  await page.getByRole("button", { name: "Get Checked Value" }).click();

  await expect(page.locator("#message")).toHaveText(msg);
});
