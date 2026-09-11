// css loca

import { test, expect} from '@playwright/test';


/*
test('css by id', async({page})=>{


    await page.goto("https://demowebshop.tricentis.com/");

const cssid=page.locator('#small-searchterms');/// css with id tag is optional

 await cssid.fill('14.1-inch Laptop');

 await page.locator('[Value="Search"]').click(); //value syntax for attribut


 await expect (page.locator('h2[class="product-title"]>a')).toHaveText("14.1-inch Laptop");



})
*/
test('css by class', async({page})=>{


    await page.goto("https://demowebshop.tricentis.com/");

const cssclass=page.locator('.search-box-text');/// css with id tag is optional

 await cssclass.fill('14.1-inch Laptop');
await page.waitForTimeout(5000)
 await page.locator('[Value="Search"]').click(); //value syntax for attribut


 await expect (page.locator('h2[class="product-title"]>a')).toHaveText("14.1-inch Laptop");



})


