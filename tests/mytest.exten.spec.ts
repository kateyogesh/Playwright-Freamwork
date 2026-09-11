import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
});await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
await page.locator('.title').first().click();
await page.getByRole('link', { name: 'Computers' }).nth(1).click();
await page.getByRole('link', { name: 'Computers' }).nth(1).click();