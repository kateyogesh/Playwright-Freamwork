import { test, expect } from '@playwright/test';
import fs from 'fs';

const cookiesData = './storage-data/cookies.data.json';
const url = 'https://www.saucedemo.com/';

test.describe.configure({ mode: 'serial' });

// Test 1: Login and store cookies
test('store login details', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(url);

    await page.getByRole('textbox', { name: 'Username' })
        .fill('standard_user');

    await page.getByLabel('Password')
        .fill('secret_sauce');

    await page.locator('#login-button').click();

    const dashboard = page.getByText('Products', { exact: true });

    await expect(dashboard).toBeVisible();

    const cookies = await context.cookies();

    fs.writeFileSync(
        cookiesData,
        JSON.stringify(cookies, null, 2)
    );

    console.log('Cookies saved successfully');

    await context.close();
});


// Test 2: Login using saved cookies
test('login with saved details', async ({ browser }) => {

    const context = await browser.newContext();

    const savedCookies = JSON.parse(
        fs.readFileSync(cookiesData, 'utf8')
    );

    await context.addCookies(savedCookies);

    const page = await context.newPage();

    await page.goto(url);

    const dashboard = page.getByText('Products', { exact: true });

    await expect(dashboard).toBeVisible();

    console.log('Login successful using saved cookies');

    await context.close();
});