import {test, chromium } from '@playwright/test'





test("storage save data",async()=>{
async function savestorage() {

    const browser=await chromium.launch({headless:false});
    
const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://sdetqa.vercel.app/login_app");

    await page.getByRole('textbox', { name: 'Username' })
        .fill('admin');

    await page.getByLabel('Password')
        .fill('admin123 ');

    await page.getByRole('button', { name: 'Login' }).click();

    //const dashboard = page.getByText('Log out', { exact: true });


    await context.storageState({path:"./storage-data/data.json"});






}
savestorage()

})
