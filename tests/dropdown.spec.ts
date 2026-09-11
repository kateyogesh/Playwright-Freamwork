import { test, expect } from '@playwright/test';

test.describe('login module', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://sdetqa.vercel.app/autoplay');
  });

  test('handle single dropdown', async ({page}) =>{

    //loacte value 1st

    const country = page.locator('#country');

    await expect(country).toBeVisible();

    await expect(country).toHaveValue('india')

   //ways to select values from dropdown


   //label

   await country.selectOption({label:'USA'})

   await expect(country).toHaveValue('usa')

//bye value

   await country.selectOption({value:'uk'})

   await expect(country).toHaveValue('uk')

//bye idex

await country.selectOption({index:3})

   await expect(country).toHaveValue('germany')

const option=country.locator('option');


expect(option).toHaveCount(5);

const numberofelement= await page.locator('#country option').count(); // calculate number of element in dropdown.
console.log(numberofelement);


expect(numberofelement).toBe(5);

//capture all element

const alltext= await option.allTextContents()

console.log(alltext);

//print of all element

for(const option of alltext){

    console.log(option)



}






  });

});