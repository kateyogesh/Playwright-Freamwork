
import {test,expect, firefox} from '@playwright/test'

//test.skip
//test.failed
//test.slow
//test.only
//test.describe
//test.step

const url ="https://playwright.dev/";

//skip tentionally failling tes
test.skip('skipping the test',async({page})=>{ 

await page. goto(url);

expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
console.log('skip this test');

})

//test fail= suppose we failed testcases

test.fail('failed testcases the test',async({page})=>{ 

await page. goto(url);

expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwrigh..wrong tittle");
console.log('failed this test');

})

//Fixme it will indicate work is needed for this testcase
test.fixme('fixingin requiredthe test',async({page})=>{ 

await page. goto(url);

expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
console.log('fix this test');

})


test('slow the test',async({page})=>{ 

    test.slow();
 page. goto(url);

await page.waitForTimeout(5000);

expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
//console.log('slow this test');

//await page.close()
})

//test.only   this annatation used to run particular testcases
/*
test.only('Only testcase will be run',async({page})=>{

await page. goto(url);

await page.waitForTimeout(5000);

await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

console.log('this testcase only run')



})

*/
//test.steps 

test('test.steps use',async({page})=>{

    await page.goto("https://www.saucedemo.com/");

   const username = page.locator("#user-name");
   await expect(username).toBeVisible();

 await expect(username).toBeEditable();
   await username.fill("standard_user");


   const password = page.locator('#password');
   //await expect(password).toBeEditable();
   await expect(password).toBeVisible();
   await password.fill('secret_sauce');

   const loginbutton =page.locator('#login-button');
   await expect(loginbutton).toBeVisible();
   await loginbutton.click();
   
   const product=page.getByText('Products');
  await expect(product).toBeVisible()
   
  expect(page).toHaveURL(/inventory/);






})


test('test.steps use for evry steps',async({page})=>{


 await test.step('launch url',async()=>{

 await page.goto("https://www.saucedemo.com/");

 })
    

await test.step('login with valid credentials',async()=>{

 const username = page.locator("#user-name");
   await expect(username).toBeVisible();

 await expect(username).toBeEditable();
   await username.fill("standard_user");


   const password = page.locator('#password');
   //await expect(password).toBeEditable();
   await expect(password).toBeVisible();
   await password.fill('secret_sauce');

   const loginbutton =page.locator('#login-button');
   await expect(loginbutton).toBeVisible();
   await loginbutton.click();

 })
    



await test.step("navigation valiadation",async()=>{
    const product=page.getByText('Products');
  await expect(product).toBeVisible()
   
  expect(page).toHaveURL(/inventory/);


})
   
  



})


test('skipping the test on condition',async({page,browserName})=>{ 

    console.log("skip the test ${browsername}");
    test.skip(browserName !== "firefox",'run only on firefox');
await page. goto(url);

//expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
console.log('skip this test');

})

