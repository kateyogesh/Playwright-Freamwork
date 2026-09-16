

import {test, expect} from '@playwright/test'


test.beforeAll('start session',()=>{


console.log('start execution');

})

test.afterAll('end session',()=>{


console.log('end execution');

})


test.beforeEach('Launch browser',async({page})=>{

await page.goto("https://www.saucedemo.com/");
console.log("launch url ")
})


test.afterEach('Close browser',async({page})=>{

await page.close();

})

test('Validate login fild' ,async({page})=>{

   const username= page.locator('#user-name');
   await expect(username).toBeVisible();
   console.log('pass');


})


test('Validate password filed' ,async({page})=>{

   const password= page.locator('#password');
   await expect(password).toBeVisible();
   console.log('pass');


})
