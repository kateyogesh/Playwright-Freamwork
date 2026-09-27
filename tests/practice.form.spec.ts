
import {test,expect} from '@playwright/test'


test("form validation",async({page})=>{

await page.goto("https://automationexercise.com/");

 const loginbutton= page.getByRole('link',{name:'Signup / Login'});

 await expect(loginbutton).toBeVisible();

 
 
 
 await loginbutton.click();

 //verify login page

const loginpage=  page.getByText('Login to your account');

await expect (loginpage).toBeVisible();

await expect (loginpage).toHaveText('Login to your account');


const nametextbox=page.getByPlaceholder('Name');

await expect(nametextbox).toBeVisible()
 await expect(nametextbox).toBeEditable();

 await nametextbox.fill("yogesh Kate");

 const emailcheckbox=  page.locator(`input[data-qa='signup-email']`);

 await expect(emailcheckbox).toBeVisible();
 await expect(emailcheckbox).toBeEditable();

 await emailcheckbox.fill('kateyogesh77@gmail.com')

await page.getByText('Signup', { exact: true }).click();

//validate login 

const signuppageheading= page.getByText('Enter Account Information');

await expect(signuppageheading).toHaveText('Enter Account Information');

const Title=  page.getByText('Title');

await expect.soft(Title).toBeVisible();


//country selection
//1st step

const country= page.locator('#country');
await expect(country).toBeVisible()
 await expect(country).toHaveValue('India');

await country.selectOption({label:'Australia'});

await page.mouse.wheel(0,1200);

await country.selectOption({value:'Israel'});

await country.selectOption({index:2});

console.log(await country.allTextContents());


const radio1= page.locator("#id_gender1");
await radio1.check();

await expect(radio1).toBeChecked();

const radio2=page.locator('#id_gender2');

await expect(radio2).toBeVisible();
 await expect(radio2).not.toBeChecked();




//await page.mouse.wheel(0,1000)

})


test("fream handle",async({browser})=>{

    const context1= await browser.newContext()

    const page1= await context1.newPage();

await page1.goto("https://automationexercise.com/");

 const loginbutton= page1.getByRole('link',{name:'Signup / Login'});

 await expect(loginbutton).toBeVisible();
await loginbutton.click();

const nametextbox=page1.getByPlaceholder('Name');

await expect(nametextbox).toBeVisible()
 await expect(nametextbox).toBeEditable();

 await nametextbox.fill("yogesh Kate");

 const emailcheckbox=  page1.locator(`input[data-qa='signup-email']`);

 await expect(emailcheckbox).toBeVisible();
 await expect(emailcheckbox).toBeEditable();

 await emailcheckbox.fill('kateyogesh77@gmail.com')

await page1.getByText('Signup', { exact: true }).click();






     //context1.waitForEvent('page'),

    const link1= page1.getByTitle('Test automation services');

    await link1.scrollIntoViewIfNeeded();
     await expect(link1).toBeVisible();

//const fream1=page1.frameLocator('[title="Search results for Test automation services"]').getByRole('heading', { name: 'Embracing Test Automation for Efficiency' })

//await expect(fream1).toBeVisible();














})