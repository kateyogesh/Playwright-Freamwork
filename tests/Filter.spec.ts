// hastex
import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async({page})=>{
   
await page.goto('https://sdetqa.vercel.app/filters_practice.html'); 
})
 

test.afterAll(async({page})=>{

await page.close();

})
 

test('verify add to acrt button for product 2', async ({ page }) =>{

//await page.goto('https://sdetqa.vercel.app/filters_practice.html');

const product=page.getByRole('listitem')
 .filter({ hasText: 'Product 2' })
 .getByRole('button', { name: 'Add to Cart' });

await expect(product).toBeVisible();

await product.click();

})


test('count item not having out of stock', async({page})=>{

const instock=page.locator(".card").nth(1)
page.getByRole('listitem')
.filter({ hasNotText: 'Out of stock' })

// verify count using assertion
await expect(instock).toHaveCount(3);

    
})


test('count in stock item', async({page})=>{

const instock=page.getByRole('listitem')
.filter({hasText: 'in stock'});

// verify count using assertion
await expect(instock).toHaveCount(3);


})




test('count number out of stock',async({page})=>{

const outofstock=page.getByRole('listitem')
.filter({hasText: 'Out of Stock'});

// verify count using assertion
await expect(outofstock).toHaveCount(2);


}

)

// element bye testid

test('Element validation bye testid',async({page})=>{

const apple=page.getByTestId("apple");

await expect(apple).toBeVisible();

expect(apple).toContainText('apple');



})

// frist last nth

test('Print all fruits name', async({page})=>{

const fristname=page.locator('[data-testid]').first();
const lastname=page.locator('[data-testid]').last();
const nth=page.locator('[data-testid]').nth(3);

console.log('.....fruits are', await fristname.innerText(), await lastname.innerText(),await nth.innerText());

const testidelement=page.locator('[data-testid]')

await expect(testidelement).toHaveCount(5)

})


//Chainnig loactor


test('Chainnig of locator',async({page})=>{


const Chaining=page.getByRole('listitem')
.filter({hasText:'john'})
.getByRole('button',{name:'Say goodbye'})

await expect(Chaining).toBeVisible();



})

//multiple element handeling


test('multiple element handeling',async({page})=>{

const multiple:Locator=page.getByRole('button').and(page.getByTitle('subscribe'))

//await expect(multiple.first()).toBeVisible();
 //await expect(multiple.last()).toBeVisible();

 await expect(multiple.first()).toBeVisible();
 await expect(multiple.last()).toBeVisible();

 await expect(multiple).toHaveCount(2);

})


test('multiple condition ',async({page})=>{

const condi=page.getByRole('listitem')
.filter({hasText:'done'}).getByRole('button',{name:'details'})

await expect(condi).toHaveCount(2);

})











