import {test,expect} from '@playwright/test'
import { countReset } from 'node:console';

test('Custome dropdown handling',async({page})=>{

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

await page.getByRole('link', { name: 'PIM' }).click()

const jobtitledrop=page.locator('form i').nth(2);

await expect(jobtitledrop).toBeVisible()
await jobtitledrop.click()



const options= page.locator("div[role='listbox'] span");

await expect(options.first()).toBeVisible();

//calculate number of element

const counts=await options.count();

console.log("Number element present:",counts);

const alloptiontext=await options.allTextContents()

console.log("All text contents:",alloptiontext);



for(let i=0;i<counts;i++){

const option=options.nth(i);

const optiontext=await option.textContent();

console.log('Text of each option:',optiontext)

if(optiontext==='Automaton Tester'){

   await  option.click();

    break;

}



}



const value=page.locator('.oxd-select-text-input').nth(2);

await expect(value).toHaveText('Automaton Tester')



})