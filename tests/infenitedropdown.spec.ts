

import {test ,expect} from '@playwright/test';
import { resolve } from 'node:dns';
import { promises } from 'node:dns';

test('infenite Scroll drodwon',async({page})=>{


await page.goto('https://sdetqa.vercel.app/autoplay');


const scrollbale=page.locator('#scrollable');


await scrollbale.evaluate(async(select:HTMLSelectElement)=>{

while(true){

    //scrooll upto itemfinding

    const itemfound=Array.from(select.options).some(Option=>Option.text==='Item 50')

    if(itemfound) break;

    //scrollbottom to load more item

select.scrollTop=select.scrollHeight;

//await to new load item
 await  new Promise((resolve)=>setTimeout(resolve,100))

}



}




)


await scrollbale.selectOption({label:'Item 50'});


await expect(scrollbale).toHaveValue('Item 50')

})