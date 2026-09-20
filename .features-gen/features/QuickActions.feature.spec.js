// Generated from: features\QuickActions.feature
import { test } from "../../fixtures/loginFixture.js";

test.describe('Quick Actions module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application'); 
  });
  
  test('Verify Quick Actions module dropdown list', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('the user clicks plus icon on right side of application'); 
    await Then('the user should see the list of items in dropdown'); 
  });

  test('Verify Create Account page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Create Account item from Quick Actions'); 
    await Then('User is navigating to the Create Account page'); 
  });

  test('Verify Create Contact page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Create Contact item from Quick Actions'); 
    await Then('User is navigating to the Create Contact page'); 
  });

  test('Verify Create Opportunity page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Create Opportunity item from Quick Actions'); 
    await Then('User is navigating to the Create Opportunity page'); 
  });

  test('Verify Create Lead page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Create Lead item from Quick Actions'); 
    await Then('User is navigating to the Create Lead page'); 
  });

  test('Verify Create Quote page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Create Quote item from Quick Actions'); 
    await Then('User is navigating to the Create Quote page'); 
  });

  test('Verify Schedule Meeting page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Schedule Meeting item from Quick Actions'); 
    await Then('User is navigating to the Schedule Meeting page'); 
  });

  test('Verify Schedule Call page navigation from Quick Actions', { tag: ['@QuickActionsModule'] }, async ({ When, Then }) => { 
    await When('User clicks Schedule Call item from Quick Actions'); 
    await Then('User is navigating to the Schedule Call page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\QuickActions.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user clicks plus icon on right side of application","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the user should see the list of items in dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks Create Account item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks Create Contact item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Contact page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks Create Opportunity item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Opportunity page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":26,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks Create Lead item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Lead page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":30,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User clicks Create Quote item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Quote page","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":34,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User clicks Schedule Meeting item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Schedule Meeting page","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":38,"tags":["@QuickActionsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User clicks Schedule Call item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Schedule Call page","stepMatchArguments":[]}]},
]; // bdd-data-end