

import {test,expect} from '@playwright/test';


test.describe('shadow dom handeling', ()=>{


test("shadow dom handle ulr launch",async({page})=>{

  await page.goto('https://sdetqa.vercel.app/autoplay');


})


test('handle shadow dom on that page',async({page})=>{


await page.goto('https://sdetqa.vercel.app/autoplay');

 const logopage=  page.locator('.logo');

 await expect(logopage).toBeVisible();


 const heading=  page.locator('h3',{hasText:' Shadow DOM'});
 heading.scrollIntoViewIfNeeded();


 const host=page.locator('shadow_host');
await expect(host).toBeVisible();






}



)
















})


