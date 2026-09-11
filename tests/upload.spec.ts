//handle upload and download of file

import {test,expect} from '@playwright/test';





test.afterEach("close",async({page})=>{
 
    await page.close()
}

)



test('upload single files',async({page})=>{

    const singleinput1=await page.locator('#singleFileInput');
    const uploadbutton= await page.getByRole('button',{name:'Upload Single File'});
    const singlefilestatus=await page.locator('#singleFileStatus');

     await singleinput1.setInputFiles("upload/yogesh_bill 2026.pdf");


    await  uploadbutton.click()
    //await page.waitForTimeout(10000);
    await expect(singlefilestatus).toHaveText("Single file selected: yogesh_bill 2026.pdf, Size: 409129 bytes, Type: application/pdf")

    await page.waitForTimeout(5000);
}




)


test('upload multiple files',async({page})=>{

    const multipleinput=await page.locator('#multipleFilesInput');
    const uploadbutton= await page.getByRole('button',{name:'Upload Multiple Files'});
    const singlefilestatus=await page.locator('#multipleFilesStatus');

     await multipleinput.setInputFiles(["upload/nileshsasunform.pdf","upload/yogesh_bill 2026.pdf"]);


    await  uploadbutton.click()
    //await page.waitForTimeout(10000);
    //await expect(singlefilestatus).toContainText('test2.docs')
     //await expect(singlefilestatus).toContainText('text1.docx')

    await page.waitForTimeout(10000);
}




)