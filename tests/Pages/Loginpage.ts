import {test,expect, Page, Locator} from '@playwright/test'


export class Loginpage{


//define constructor

private readonly page:Page;
private readonly Loginlink:Locator;
private readonly Usernameinput:Locator;
private readonly Passwordinput:Locator;
private readonly Loginbutton:Locator;

constructor(page:Page){

    this.page=page;

    this.Loginlink=this.page.locator('#login2');
    this.Usernameinput=this.page.locator('#loginusername');
    this.Passwordinput=this.page.locator('#loginpassword');
    this.Loginbutton=this.page.getByRole('button', { name: 'Log in' })

}


async NavigatetoLoginpage(){

await this.Loginlink.click()

}



async Fillusername(username:string){

this.Usernameinput.clear();

await this.Usernameinput.fill(username);

}



async Fillpassword(password:string){

this.Passwordinput.clear()

await this.Passwordinput.fill(password)

}

async Clickonloginbutton(){

    await this.Loginbutton.click()
}


async Loginpage(username:string,password:string){

//await this.NavigatetoLoginpage();

await this.Fillusername(username);
await this.Fillpassword(password);

await this.Clickonloginbutton();




}








}