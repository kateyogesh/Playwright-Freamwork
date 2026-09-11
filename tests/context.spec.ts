//browser context ,browser ,pages

// browser ...>browser context.....> pages

//browser we can create only once ...but browser context we can create multiple time also pages ..in testcase


//browser-chromium ,firefox ,safari //browser contex provides isolation and storage session detailes

//pages-new tab, windows, 


import{test,chromium} from '@playwright/test';

test('Browsercontext', async()=>{

//frist we launch browser 

const browser=await chromium.launch() // launching new brower application

const context1=await browser.newContext();
const context2=await browser.newContext();

const page1= await context1.newPage();
const page2=await context2.newPage();

await page1.goto('https://www.rediff.com/');

await page2.goto('https://www.amazon.in/');

context1.setDefaultTimeout(10000);
context2.setDefaultTimeout(10000);

 await context1.close(); 

 await context2.close();


}


)


test ('browser context for 2 user', async()=>{

const browser=await chromium.launch()


const context_admin=await browser.newContext();
const page_admin=await context_admin.newPage();

 await page_admin.goto('https://www.saucedemo.com/');
const admin_user= await page_admin.locator('#user-name').fill('standard_user');

const admin_password= await page_admin.locator('#password').fill('secret_sauce');

const login_button= await page_admin.locator('#login-button').click;


// another user login

const context_normal=await browser.newContext();
const page_normal=await context_normal.newPage();

 await page_admin.goto('https://www.saucedemo.com/');
const context_normal_user= await page_admin.locator('#user-name').fill('locked_out_user');

const context_normal_password= await page_admin.locator('#password').fill('secret_sauce');

const normal_button= await page_admin.locator('#login-button').click;


await page_admin.waitForTimeout(5000);
await page_normal.waitForTimeout(5000);

 await page_admin.close();

 await page_normal.close();


})



