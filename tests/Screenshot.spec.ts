import {test,expect} from '@playwright/test'




test.beforeEach('Launch Url',async({page})=>{

await page.goto('https://playwright.dev/');

await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

})



//1.viewport screenshot




test('View portpage screenshot',async({page})=>{

await page.screenshot({path:'./Screenshot/01-Viewport.png'});

})


test('Fullpage screenshot',async({page})=>{

await page.screenshot({path:'./Screenshot/01-Viewport.png',fullPage:true});

})


test('JPEG screenshot',async({page})=>{

await page.screenshot({path:'./Screenshot/03-Viewport.png',
    
    type:'jpeg',

    quality:75
    
    });

})


//specific area screehshot

test('Clip screenshot',async({page})=>{

await page.screenshot({path:'./Screenshot/04-Viewport.png',
    
    clip:{

x:100,
y:100,
width:500,
height:500
    }

    
    
    });

})



test('Specif element screenshot',async({page})=>{


    const logo=page.getByAltText('Playwright logo');
await logo.screenshot({path:'./Screenshot/05-Viewport.png'
     
    });

})


test('Specicif area screenshot',async({page})=>{


    await page.evaluate(()=>window.scrollTo(0,600));
    
await page.screenshot({path:'./Screenshot/06-Viewport.png'
     
    });

})



test('Specicif area mask screenshot',async({page})=>{


   const searchbox=page.getByText('Search', { exact: true });
    
await page.screenshot({path:'./Screenshot/07-Viewport.png',

    mask:[searchbox]
     
    });

})



test('Caret(hide) screenshot',async({page})=>{


   await page.keyboard.press('/')
    
await page.screenshot({path:'./Screenshot/08-Viewport.png',

    caret:'hide'
     
    });

})



test('Transperant baground Screenshot',async({page})=>{


   //await page.keyboard.press('/')
    
await page.screenshot({path:'./Screenshot/09-Viewport.png',

    omitBackground:true
     
    });

})



test('animation Screenshot',async({page})=>{


   //await page.keyboard.press('/')
    
await page.screenshot({path:'./Screenshot/10-Viewport.png',

    animations:'disabled'
     
    });

})



test('Generation of Screenshot with timestamp',async({page})=>{


   const timestamp=Date.now();
   //console.log(timestamp);


const filename=`./Screenshot/Homepage_${timestamp}.png`

await page.screenshot({path:filename})


})




test('Attach Screeshot to test',async({page},tesinfo)=>{


//const screehshot=await page.screenshot();

await tesinfo.attach('Homepage Screenshot',{

    body:await page.screenshot(),
    contentType:'image/png'


})




})