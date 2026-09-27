
import {test,expect} from '@playwright/test';

test('Keyboard action',async({page})=>{

await page.goto('https://codeshack.io/diff-checker/');

//await page.waitForTimeout(10000);

page.on('dialog',dialog=>{

    dialog.accept();
})

const inputfild=page.locator('#originalText');

await expect(inputfild).toBeEditable();

await inputfild.focus();


//await page.keyboard.insertText('Welcome'); //inser value in shot

await page.keyboard.type('Welcome'); // inert value bye character

//ctrl+a

await page.keyboard.down('Control');
await page.keyboard.press('A')
await page.keyboard.up('Control');


//ctrl+c

await page.keyboard.down('Control');
await page.keyboard.press('C')
await page.keyboard.up('Control');

//navigate to another tab

await page.keyboard.press('Tab');

//Ctr+v

await page.keyboard.down('Control');
await page.keyboard.press('V')
await page.keyboard.up('Control');


await expect(page.locator('#changedText')).toHaveValue('Welcome');


})



test('Keyboard action2',async({page})=>{

await page.goto('https://codeshack.io/diff-checker/');

//await page.waitForTimeout(10000);

page.on('dialog',dialog=>{

    dialog.accept();
})

const inputfild=page.locator('#originalText');

await expect(inputfild).toBeEditable();

await inputfild.focus();


//await page.keyboard.insertText('Welcome'); //inser value in shot

await page.keyboard.type('Welcome'); // inert value bye character

//ctrl+a


await page.keyboard.press('Control+A')



//ctrl+c


await page.keyboard.press('Control+C')


//navigate to another tab

await page.keyboard.press('Tab');

//Ctr+v

await page.keyboard.press('Control+V')



await expect(page.locator('#changedText')).toHaveValue('Welcome');


})