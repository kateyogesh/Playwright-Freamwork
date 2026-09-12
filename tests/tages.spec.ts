import {test,expect} from '@playwright/test'


test.describe("Tags",()=>{


test('@smoke test1',()=>{

console.log('this is smoke test case1');
 
})


test('@regression test case',()=>{

console.log('this is Regression test case1');

})

test('@smoke test2',()=>{

console.log('this is smoke test case2');
 
})


test('@regression test case2',()=>{

console.log('this is Regression test case2');

})


test('@smoke test3', {tag:'@smoke'},()=>{


console.log('this is smoke test case3');
 
})


test('@regression @smoke test case4',()=>{

console.log('this is Regression test case4');

})



test('test case4',{tag: ["@smoke","@regression"] },()=>{

console.log('this is Regression test case5')

})


//npx playwright test ./tests/tages.spec.ts --grep "@smoke" --grep-invert "@regression" //run patricular testcase

//npx playwright test ./tests/tages.spec.ts --grep " (?=.*@smoke)(?=.*@regression)" --project=chromiu ..//run testcase using and




})