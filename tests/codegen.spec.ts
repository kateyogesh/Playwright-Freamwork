import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('strong').filter({ hasText: 'Categories' }).click();
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
});