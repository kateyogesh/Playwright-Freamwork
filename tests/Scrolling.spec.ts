
import {test,expect} from '@playwright/test';


test.describe("Scrolling of page",()=>{



    test('Automatic web handeling',async({page})=>{


await page.goto("https://www.worldometers.info/geography/flags-of-the-world/");

const flagofusa= page.getByAltText('Flag of United States');

await expect(flagofusa).toBeVisible();







    })

test('Scrolling to pixesl',async({page})=>{


await page.goto("https://www.worldometers.info/geography/flags-of-the-world/");


await page.evaluate(()=>window.scrollTo(0,2000)
)

await page.evaluate(()=>window.scrollBy(0,2000)
)


const Scrollpositi=await page.evaluate(()=>window.scrollY
)

console.log(Scrollpositi);

})


test('Scrolling upto element visible',async({page})=>{


await page.goto("https://www.worldometers.info/geography/flags-of-the-world/");

const indiaflag=page.getByAltText('Flag of Lesotho');

await indiaflag.scrollIntoViewIfNeeded();

await page.screenshot({path:'./screenshot/flagpag.png'});




})


test('Scroll to bottom page',async({page})=>{


await page.goto("https://www.worldometers.info/geography/flags-of-the-world/");

//Scroll to bottom of page

await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight)
)

//top of page

//await page.evaluate(()=>window.scrollTo(0,-document.body.scrollHeight)
//)

await expect(page.getByRole('link', { name: 'about' })).toBeVisible();



})





})