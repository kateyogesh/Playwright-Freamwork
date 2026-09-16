import { test, expect } from '@playwright/test';

const logindata: string[][] = [
    ['abgl@gmail.com', 'Abcd@123', 'valid'],
    ['ab@gmail.com', 'Abcd@123', 'invalid'],
    ['', '', 'invalid']
];

for (const [email, password, validation] of logindata) {

    test(`Login test with ${email} and ${password}`, async({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/login');

        await page.locator('#Email').fill(email);
        await page.locator('#Password').fill(password);

        await page.locator('input[value="Log in"]').click();

        if (validation.toLowerCase() === 'valid') {

            const logoutLink = page.getByText('Log out');

            await expect(logoutLink).toBeVisible({
               timeout: 10000
});
            
        } else {

            const errorMessage = page.locator('.validation-summary-errors');

            await expect(errorMessage).toBeVisible({
                timeout: 5000
            });

            await expect(page).toHaveURL(
                'https://demowebshop.tricentis.com/login'
            );
        }
    });
}