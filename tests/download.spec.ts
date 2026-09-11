//download file using 

import{test,expect} from '@playwright/test';
import fs from 'fs';

test.beforeEach('navigate to download page',async({page})=>{

await page.goto('https://sdetqa.vercel.app/autoplay');


})


test.afterEach('close browser',async({page})=>{

await page.close();

}


)



test('download file',async({page})=>{

const [download]= await Promise.all(

[

    page.waitForEvent('download'),

    page.locator('button',{hasText:'download'}).click(),

]


)

await expect(download.suggestedFilename()).toContain("sample.txt")

// saving downloaded file in  folder

const downloadpath="download/sample.txt"

await download.saveAs(downloadpath);

//verify downloeded same file after saving or not

const fristexist=fs.existsSync(downloadpath)

expect (fristexist).toBeTruthy();

//delete file after 

if(fristexist){
    fs.unlinkSync(downloadpath);////important
}


}



)


test("open pdf",async({page})=>{


const[newpage]= await Promise.all(

    [

        page.context().waitForEvent('page'),

        page.locator('button',{hasText:'open pdf'}).click(),

    ]
)

await newpage.waitForTimeout(5000);

await newpage.close()


}



)