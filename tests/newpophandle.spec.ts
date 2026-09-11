
//we use browser context method , handle multiple pages

//https://the-internet.herokuapp.com/basic_auth
import {test,expect} from '@playwright/test';

test('auth pop handle',async({browser})=>{


const context1=  await browser.newContext(

{

    httpCredentials:{

        username:"admin",

        password:"admin"
    }


}

);

const page5=await context1.newPage();

//await page5.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')

await page5.goto('https://the-internet.herokuapp.com/basic_auth');

await page5.setDefaultTimeout(10000);

})


