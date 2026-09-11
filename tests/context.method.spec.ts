//Brosser context method

import {test} from '@playwright/test';


test('context method',async({browser})=>{


const context= await browser.newContext({


    locale:'en-IN',

    
 viewport:{
 width:1000,
 height:1250


 },

 //ignore certificate error

 ignoreHTTPSErrors:true,

}
)

const page3= await context.newPage();
//await page3.goto('https://www.saucedemo.com/');
await page3.goto('https://expired-rsa-dv.ssl.com');

await page3.waitForTimeout(5000);





})

test('page method',async({page})=>{

await page.setViewportSize({width:1900,height:1000});


await page.goto('https://demowebshop.tricentis.com/');

await page.waitForTimeout(5000);


}
)



