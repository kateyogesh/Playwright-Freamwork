
import {test,expect} from '@playwright/test'

test('new tab handeling',async({browser})=>{

const context1= await browser.newContext();

const page1= await context1.newPage();

await page1.goto('https://sdetqa.vercel.app/autoplay');

const [newtab]=await Promise.all(
[

context1.waitForEvent('page'),
await page1.locator('button',{hasText:'New Tab'}).click()
]



)

console.log( await newtab.title())

await newtab.waitForTimeout(10000);

await expect(newtab).toHaveTitle(/Playwright/);

}





)


test ('new window handle', async({browser})=>{


const context2=await browser.newContext();

const page6=await context2.newPage();
await page6.goto('https://sdetqa.vercel.app/autoplay');


const [newpage]=await Promise.all(
    [

 context2.waitForEvent('page'),

  page6.locator('button',{hasText:'New Window'}).click()


    ]



)

 await newpage.waitForTimeout(5000);

 console.log( await newpage.title());

 console.log( 'number of pages in context',context2.pages().length);


}



)