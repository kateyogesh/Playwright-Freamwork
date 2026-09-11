
import { test, expect, Locator } from '@playwright/test';

//getbyrole- use on when element role attibute and intractable

test('practice', async ({ page }) => {

    
//getbyrole- use on when element role attibute and intractable
await page.goto("https://www.naukri.com/");

//await page.goto("https://demowebshop.tricentis.com/");

//await page.goto("https://demowebshop.tricentis.com/");



 //await page.goto("https://in.search.yahoo.com/");

// getByRole
/*
const bestsell=page.getByRole('link', { name: 'Bestsellers' })

await expect(bestsell).toBeVisible();

await bestsell.click();


//page.getByRole('link', {name:'Sell'});

//page.getByRole('heading',{ name: 'Sign in or create account'});
*/

//getBycText- use when element text is unique and visible
/*
const tex=page.getByText('See personalized recommendations');

await expect(tex).toBeVisible()
*/

//getByLabel- use when element label is uinque and it is mostley use for input filed

/*
const lable:Locator=page.getByLabel('Full Name *');


 await expect(lable).toBeVisible();

 lable.fill('Saurabh');

 */

 //getByPlaceholder- use when element placeholder is unique and it is mostley use for input filed
 /*
const placeholder:Locator=page.getByPlaceholder('Search the web');
 await expect(placeholder).toBeVisible();
 await placeholder.fill('Saurabh');

 */

 //getbyealtText- use when element alt text is unique and it is mostley use for image
/*
const alttext:Locator=page.getByAltText(`T-shirts, shirts | Levi's, Allen Solly & more`);

await expect(alttext).toBeVisible();
*/

//getByTitle- use when element title is unique 


/*
const title:Locator=page.getByTitle('914 review(s)')

await expect(title).toBeVisible();

await expect(title).toContainText('$25 Virtual Gift Card');
*/

// testid

const testid=page.getByTestId('backdrop');

//await expect(testid).toBeVisible();

await page.close();



})
