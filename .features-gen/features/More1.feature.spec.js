// Generated from: features\More1.feature
import { test } from "playwright-bdd";

test.describe('More module dropdown list functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application'); 
  });
  
  test('Verify More module dropdown list', { tag: ['@MoreModule1'] }, async ({ When, Then }) => { 
    await When('the user clicks on More module from left navigation'); 
    await Then('the user should see the list of items in dropdown'); 
  });

  test('HomePage Navigation', { tag: ['@MoreModule1'] }, async ({ When, Then }) => { 
    await When('User clicks Home item from More'); 
    await Then('User is navigating to the HomePage'); 
  });

  test('Verify Email page navigation', { tag: ['@MoreModule1'] }, async ({ When, Then }) => { 
    await When('User clicks Email item from More'); 
    await Then('User is navigating to the Email page'); 
  });

  test('Verify Campaigns page navigation', { tag: ['@MoreModule1'] }, async ({ When, Then }) => { 
    await When('User clicks Campaigns item from More'); 
    await Then('User is navigating to the Campaigns page'); 
  });

  test('Verify Calls page navigation', { tag: ['@MoreModule1'] }, async ({ When, Then }) => { 
    await When('User clicks Calls item from More'); 
    await Then('User is navigating to the Calls page'); 
  });

  test('Verify Meetings page navigation', { tag: ['@MoreModule1'] }, async ({ When, Then }) => { 
    await When('User clicks Meetings item from More'); 
    await Then('User is navigating to the Meetings page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More1.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@MoreModule1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on More module from left navigation","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user should see the list of items in dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@MoreModule1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User clicks Home item from More","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the HomePage","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@MoreModule1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks Email item from More","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Email page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":["@MoreModule1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks Campaigns item from More","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Campaigns page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":["@MoreModule1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks Calls item from More","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Calls page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":29,"tags":["@MoreModule1"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User clicks Meetings item from More","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Meetings page","stepMatchArguments":[]}]},
]; // bdd-data-end