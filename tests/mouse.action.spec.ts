
import {test,expect} from '@playwright/test'


test.beforeEach("Naviagation url",async({page})=>{

await page.goto("https://sdetqa.vercel.app/autoplay")
await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay");

})

test.describe('Mouse Action',()=>{


test('Toggesl Button handeling',async({page})=>{


const toggelbutton=page.locator('#toggleBtn');

const togglecontain= await toggelbutton.textContent();

console.log(togglecontain);
await expect(toggelbutton).toBeVisible();

await toggelbutton.scrollIntoViewIfNeeded();

await toggelbutton.click()

const aftertoggleconatin=await toggelbutton.textContent();

await expect(togglecontain).not.toBe(aftertoggleconatin);

})

test('Right button ',async({page})=>{

const Rightbutton=page.locator('button',{hasText:'Right Click Me'});
await expect(Rightbutton).toBeVisible();

await Rightbutton.click({button:'right'});

const allinnertext= await page.locator('#customContextMenu').allInnerTexts();

console.log(allinnertext);

const quiteoption=  page.locator('button',{hasText:'Quit'});



page.on('dialog',(dialog)=>{

console.log(dialog.message())
expect(dialog.message()).toContain('Quit');
 dialog.accept()

})
await quiteoption.click()



})




test('Mouse hover',async({page})=>{

//await page.goto('https://www.amazon.in/')

const hoverbutton=page.locator('span:has-text("Hover me")')
await hoverbutton.hover();

console.log("tool tip validation:",await hoverbutton.getAttribute('title'));

expect(await hoverbutton.getAttribute('title')).toBe('This is a tooltip');



})

test('double click',async({page})=>{

//await page.goto('https://www.amazon.in/')

const doublebutton=page.locator('button',{hasText:'Double click'})

await doublebutton.dblclick()


const copytext=page.locator('button',{hasText:'Copy Text'});

await expect(copytext).toBeVisible();

await page.locator('#field1').fill('welcome');

await copytext.dblclick();



await expect(page.locator('#field2')).toHaveValue('welcome')


})


test('drag and drop',async({page})=>{

await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

const source=page.frameLocator('[src*="photo-manager.html"]').getByAltText('The peaks of High Tatras');
await expect(source).toBeVisible();

const destination=page.frameLocator('[src*="photo-manager.html"]').getByText('Trash Trash');

await expect(destination).toBeVisible();

//await page.waitForTimeout(20000);

//await page.dragAndDrop('source' ,'destination')

await source.dragTo(destination);


//2nd approach  Maual dragging
const source1= page.frameLocator('[src*="photo-manager.html"]').getByAltText('The chalet at the Green mountain lake', { exact: true });
await expect(source).toBeVisible();
 await source1.hover();
 await page.mouse.down();

 await destination.hover();
 await page.mouse.up();
})

test('slider',async({page})=>{

    const Slider=page.locator('#priceSlider')

    

    await Slider.focus()

     await page.keyboard.press('Home')

     //await page.keyboard.press('End');

     for(let i=0; i<45;i++){

await page.keyboard.press('ArrowRight');

     }

     await expect(Slider).toHaveValue('45');



})





})