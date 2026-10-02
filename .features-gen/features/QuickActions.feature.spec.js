// Generated from: features\QuickActions.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Quick Actions module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify Quick Actions module dropdown list', { tag: ['@QuickActionsModule', '@quickDropDown'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('the user clicks plus icon on right side of application', null, { quickActionsPage }); 
    await Then('the user should see the list of items in dropdown of quickActions', null, { quickActionsPage }); 
  });

  test('Verify Create Account page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickCreate'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Create Account item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Create Account page', null, { quickActionsPage }); 
  });

  test('Verify Create Contact page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickContact'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Create Contact item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Create Contact page', null, { quickActionsPage }); 
  });

  test('Verify Create Opportunity page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickOpportunity'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Create Opportunity item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Create Opportunity page', null, { quickActionsPage }); 
  });

  test('Verify Create Lead page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickLead'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Create Lead item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Create Lead page', null, { quickActionsPage }); 
  });

  test('Verify Create Quote page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickQuote'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Create Quote item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Create Quote page', null, { quickActionsPage }); 
  });

  test('Verify Schedule Meeting page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickSchedule'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Schedule Meeting item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Schedule Meeting page', null, { quickActionsPage }); 
  });

  test('Verify Schedule Call page navigation from Quick Actions', { tag: ['@QuickActionsModule', '@QuickScheduleCall'] }, async ({ When, Then, quickActionsPage }) => { 
    await When('User clicks Schedule Call item from Quick Actions', null, { quickActionsPage }); 
    await Then('User is navigating to the Schedule Call page', null, { quickActionsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\QuickActions.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@QuickActionsModule","@quickDropDown"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks plus icon on right side of application","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should see the list of items in dropdown of quickActions","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":16,"tags":["@QuickActionsModule","@QuickCreate"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User clicks Create Account item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":21,"tags":["@QuickActionsModule","@QuickContact"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks Create Contact item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Contact page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":26,"tags":["@QuickActionsModule","@QuickOpportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks Create Opportunity item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Opportunity page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":31,"tags":["@QuickActionsModule","@QuickLead"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User clicks Create Lead item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Lead page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":36,"tags":["@QuickActionsModule","@QuickQuote"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When User clicks Create Quote item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Create Quote page","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":41,"tags":["@QuickActionsModule","@QuickSchedule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User clicks Schedule Meeting item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Schedule Meeting page","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":46,"tags":["@QuickActionsModule","@QuickScheduleCall"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks Schedule Call item from Quick Actions","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Schedule Call page","stepMatchArguments":[]}]},
]; // bdd-data-end