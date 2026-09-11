// emulator is used to run url on mobile device


import{test,devices} from '@playwright/test';


test('emulator device testing',async({browser})=>{

    const context=await browser.newContext({...devices['iPhone 15']})

const page1=await context.newPage()

await page1.goto('https://www.saucedemo.com/')

await page1.waitForTimeout(5000);
}
)

test('emulator device testing bye configuration file',async({page})=>{

    



await page.goto('https://www.saucedemo.com/')

await page.waitForTimeout(5000);
}
)

