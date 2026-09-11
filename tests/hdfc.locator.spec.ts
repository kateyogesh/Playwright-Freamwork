import { test,expect} from "@playwright/test";


test('Title', async ({ page }) => {

 await page.goto('https://sdetqa.vercel.app/pw-locators-demo-app.html');

//let discover=page.getByRole('button', { name: 'Login ' })
//await expect(discover).toBeVisible();

 //await discover.click();

 let welcme=page.getByText('Welcome, John! 👋');
 await expect(welcme).toBeVisible();


//getbyelabel

const emaillable=page.getByLabel('Email Address');
await expect(emaillable).toBeVisible();
await emaillable.fill('john.doe@example.com');


//getbyeplaceholder

const placeholder=page.getByPlaceholder('Search tests...');
await expect(placeholder).toBeVisible();

//getbyealttext

await expect(page.getByAltText('Playwright logo')).toBeVisible();

// getbyetitle;

const title=page.getByTitle('Total test runs');
await expect(title).toBeVisible();
await expect(title).toHaveText('4,821Total Runs');





})