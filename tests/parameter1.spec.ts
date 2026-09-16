import { test ,expect } from "@playwright/test";



//approach 1
//https://demowebshop.tricentis.com/

const searchitem:string[]=['laptop','Gift card','smartphone', 'Monitor']
/*
for (const item of searchitem){

test(`validate ${item} on`,async({page})=>{


await page.goto("https://demowebshop.tricentis.com/");

await page.locator('#small-searchterms').fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item ,{ignoreCase:true});

console.log(item);

}) }
*/


searchitem.forEach((item)=>{

 test(`validate ${item} on`,async({page})=>{


await page.goto("https://demowebshop.tricentis.com/");

await page.locator('#small-searchterms').fill(item);
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item ,{ignoreCase:true});

console.log(item);
   


})





})
