
import{test,expect} from '@playwright/test'


test("Login with storage data",async({browser})=>{


const context= await browser.newContext({storageState:'./storage-data/data.json'})

const page=await context.newPage();

await page.goto("https://www.saucedemo.com/");


 
await page.waitForTimeout(5000);
    const dashboard = page.getByText('Log out', { exact: true });

    await expect(dashboard).toBeVisible();

    await page.waitForTimeout(10000);

})