import {test ,expect} from '@playwright/test'


test('Checkbox validation',async({page})=>{


await page.goto("https://sdetqa.vercel.app/autoplay");

await expect(page).toHaveURL('https://sdetqa.vercel.app/autoplay');

await expect(page).toHaveTitle('Web Automation Playground');

const suncheckbox= page.getByLabel('Sun');


 //await suncheckbox.check();

 //await suncheckbox.uncheck();

 const allday=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

 /*

 const allcheckboxes=allday.map((day)=>{

    return page.getByLabel(day);

 })

 for (const checkbox of allcheckboxes){
 
    await checkbox.check()

   await expect(checkbox).toBeChecked();

 }
*/

/*

for(const day of allday){

    const checkbox1= page.getByLabel(day);

    await checkbox1.check()

}

for(const day of ['Fri','Sat','Sun']){

    const checkbox2= page.getByLabel(day);

    await checkbox2.uncheck();

    await expect(checkbox2).not.toBeChecked();

}

//toggaling  


for(const day of allday){

    const checkbox3= page.getByLabel(day);
    
    if(await checkbox3.isChecked()){

        await checkbox3.uncheck();

        await expect(checkbox3).not.toBeChecked()



    }

    else{

    await checkbox3.check()

     await expect(checkbox3).toBeChecked()


    }

}
*/

//select on indexing

const index=[1,3,5]

for(const i of index){

 const checkbox4= page.getByLabel(allday[i])

 await checkbox4.check();

 await expect(checkbox4).toBeChecked();

}

}
)