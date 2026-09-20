import {test,expect} from '@playwright/test';
import { freemem } from 'node:os';


test('fream handling',async({page})=>{


    await page.goto("https://ui.vision/demo/webtest/frames/");

    const fream= page.frames()

    console.log("Total number of fream:",fream.length);

     expect(fream.length).toBe(7);


     //Approach 1 locate the fream using page.frema

     const fram1=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});

     //page.locator('frameset').locator('frame').nth(0)


     if(fram1){

       await  fram1.locator(`input[name='mytext1']`).fill('john');
     }


const freamlocator= page.frameLocator('[src*="frame_1.html"]');

  await freamlocator.locator(`input[name='mytext1']`).fill("ram");


  //handle nested fream






})



test('nested fream handling',async({page})=>{


    await page.goto("https://ui.vision/demo/webtest/frames/");

    const fream1=page.frameLocator(`[src='frame_3.html']`);

    const nestedfream= fream1.frameLocator(`[src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']`);
     
    await nestedfream.getByRole('radio',{name:'I am a human'}).check()



})