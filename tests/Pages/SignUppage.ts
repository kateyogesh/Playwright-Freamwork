
import {test,expect, Page, Locator} from '@playwright/test'


export class SignUppage{


private readonly page:Page;
private readonly Signuplink:Locator;
private readonly Usernameinput:Locator;
private readonly Passwordinput:Locator;
private readonly signupButton:Locator;


constructor(page:Page){

this.page=page;
this.Signuplink=this.page.locator('#signin2');
this.Usernameinput=this.page.locator('#sign-username');
this.Passwordinput=this.page.locator('#sign-password');
this.signupButton=this.page.getByRole('button', { name: 'Sign up' });

}

async Signupnavigate(){

    await this.Signuplink.click()
}


async FillUsername(username:string){

    await this.Usernameinput.clear();

    await this.Usernameinput.fill(username);
}

async Fillpassword(password:string){

    await this.Passwordinput.clear();

    await this.Passwordinput.fill(password);
}



async Clickonsubmit(){

    

    await this.signupButton.click();
}

async Signup(username:string,password:string):Promise<string>{
    

 await this.Signupnavigate();

await this.FillUsername(username);
await this.Fillpassword(password);

const dialogpromise=this.page.waitForEvent('dialog');
await this.Clickonsubmit();

const  dialog=await dialogpromise
const message=dialog.message();
await dialog.accept();

return message;





}




}