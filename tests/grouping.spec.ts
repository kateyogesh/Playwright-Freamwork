
import {test,expect} from '@playwright/test'

//grouping is used for combine testcasases

test.describe('login method',() => {



test('playwright page',async({page})=>{


await page.goto("https://playwright.dev/")

 await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
await expect(page).toHaveURL('https://playwright.dev/');

await page.screenshot({path:'screenshots/fullpage.png',fullPage:true});
})

test('demo sauce lab',async({page})=>{


await page.goto("https://www.saucedemo.com/")

 //await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
await expect(page).toHaveURL('https://www.saucedemo.com/');

await page.screenshot({path:'screenshots/fullpage.png',fullPage:true});
})


})