import {test,expect} from '@playwright/test';

import {SignUppage} from './Pages/SignUppage';

import {Loginpage} from './Pages/Loginpage';

test.describe.serial('Demoblaze Test',()=>{

    const baseurl= "https://www.demoblaze.com/index.html"
    const testpassword='test@123';
    let Signupuser:{username:string,password:string}|undefined;


test.beforeEach('Launch url',async({page})=>{

    await page.goto(baseurl);
})

test('User can sign up with new account',async({page})=>{

    const signuppage=new SignUppage(page);

    Signupuser={

        username:`Yogesh_${Date.now()}`,
        password:testpassword
    };

    const alretmessage= await signuppage.Signup(Signupuser.username,Signupuser.password);

     expect(alretmessage).toContain('Sign up successful');

    })



    test('Login with created username and password',async({page})=>{

        expect(Signupuser).toBeDefined()

        const loginpage=new Loginpage(page);


        await loginpage.NavigatetoLoginpage()
        await loginpage.Loginpage(Signupuser!.username,Signupuser!.password);

        //await page.waitForTimeout(5000);



    })


})


