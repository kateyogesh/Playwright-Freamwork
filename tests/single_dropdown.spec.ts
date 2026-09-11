
/////////////////////////////////////////////////////////////

import { test, expect } from '@playwright/test';



test.describe('login module',() => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://sdetqa.vercel.app/autoplay');
  });

  test("simple dropdown handling",async({page})=>{

//locate the element 1st 

const country = await page.locator('#country option');

expect(country).toBeVisible();






});


});