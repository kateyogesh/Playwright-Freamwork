//in built fixture of playwright page context browser

import{test} from '@playwright/test';

test('page Fixture',async({page})=>{


await page.goto('https://demowebshop.tricentis.com/')


})

test ('browser context',async({context})=>{

const page1=await context.newPage()

await page1.goto("https://www.saucedemo.com/");

const  page2=await context.newPage()

await page2.goto('https://demowebshop.tricentis.com/');

await page1.waitForTimeout(5000);
await page2.waitForTimeout(4000);



}



)






