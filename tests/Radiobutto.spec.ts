import {test, expect} from "@playwright/test";

test("radio button validation",async({page})=>{


await page.goto("https://sdetqa.vercel.app/autoplay");

await expect(page).toHaveURL('https://sdetqa.vercel.app/autoplay');

await expect(page).toHaveTitle('Web Automation Playground');

const radiobutton= page.locator('#male');

await radiobutton.scrollIntoViewIfNeeded ()
await expect(radiobutton).toBeVisible();
await expect(radiobutton).toBeEditable();

await radiobutton.check();

await page.screenshot({path:'screenshot/radio.png',fullPage:true})
 //await radiobutton.uncheck();

const radiobutton2= page.locator('#female');

await radiobutton2.scrollIntoViewIfNeeded ()
await expect(radiobutton).toBeVisible();
await expect(radiobutton).toBeEditable();

await radiobutton2.check();





})