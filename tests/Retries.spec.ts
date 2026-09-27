import {test,expect} from '@playwright/test'


test.describe.configure({retries:3})



test('Login method',async({page})=>{


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





})