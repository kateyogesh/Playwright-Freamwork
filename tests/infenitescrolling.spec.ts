
import {test,expect} from '@playwright/test';


test('infenite Scrolling page',async({page})=>{

await page.goto('https://infinite-scroll.com/demo/full-page/');


//await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))

let previouseheight=0;

while(true){

await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight))


await page.waitForTimeout(3000)

const nextheight=await page.evaluate(()=>{

    return  document.body.scrollHeight;
})

console.log('****************************')
console.log("previousheight:",previouseheight);
console.log("Nextheight:",nextheight);

if(previouseheight==nextheight){
    break;
}

previouseheight=nextheight;




}

console.log("you reached to bottom")


})