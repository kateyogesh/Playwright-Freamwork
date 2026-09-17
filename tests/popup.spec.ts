
import {test,expect} from '@playwright/test'


test.beforeEach("launch url",async({page})=>{

await page.goto("https://sdetqa.vercel.app/autoplay.html");

})

test.describe("popup handle",()=>{


test("simple alert handle",async({page})=>{

page.on('dialog',(dialog)=>{

    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain('Simple alert!');
    dialog.accept()
    }
)
    
 await page.waitForTimeout(5000);
   await page.getByRole('button',{ name:'Simple' }).click();
 await page.waitForTimeout(5000);

})

test("confirmation alert handle",async({page})=>{

page.on('dialog',(dialog)=>{

    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toContain('Confirm?');
    dialog.dismiss();
    }
)
    
 await page.waitForTimeout(5000);
   await page.getByRole('button',{ name:'Confirm' }).click();
 await page.waitForTimeout(5000);

})



test("prompt alert handle",async({page})=>{


page.on('dialog',(dialog)=>{

    if(dialog.type()==="prompt"){

        dialog.accept("welcome to india")
    }
   

}
)
    

    
 await page.waitForTimeout(5000);
   await page.getByRole('button',{ name:'Prompt' }).click();
 await page.waitForTimeout(5000);







})
})