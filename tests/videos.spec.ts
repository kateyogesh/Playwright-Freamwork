import {test ,chromium,expect} from '@playwright/test'


test('Video Recording',async({},testinfo)=>{


const broewser= await chromium.launch();

const context=await broewser.newContext(

{
recordVideo:{
    dir:'Videos/',

    size:{

        width:1250,
        height:750
    }
}}

)

const page= await context.newPage();


await page.goto('https://opensource-demo.orangehrmlive.com/');

await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

const loginbox=page.locator("input[name='username']");

await expect(loginbox).toBeVisible();
await loginbox.fill('Admin');


const passwordbox=page.locator("input[name='password']")

await expect(passwordbox).toBeVisible();
await passwordbox.fill('admin123');


const loginbutton=page.locator('button',{hasText:'Login'});

await expect(loginbutton).toBeVisible();

await loginbutton.click()


await context.close();



await testinfo.attach('Execution video',{

path:await page.video()?.path(),
contentType:'video/webm'
})


})