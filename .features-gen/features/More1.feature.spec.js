// Generated from: features\More1.feature
import { test } from "../../fixtures/suite8Fixture.js";

test.describe('More module dropdown list functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application'); 
  });
  
  test('Verify More module dropdown list', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on More module from left navigation'); 
    await Then('the user should see the list of items in dropdown'); 
  });

  test('HomePage Navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Home item from More'); 
    await Then('User is navigating to the HomePage'); 
  });

  test('Verify Email page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Email item from More'); 
    await Then('User is navigating to the Email page'); 
  });

  test('Verify Campaigns page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Campaigns item from More'); 
    await Then('User is navigating to the Campaigns page'); 
  });

  test('Verify Calls page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Calls item from More'); 
    await Then('User is navigating to the Calls page'); 
  });

  test('Verify Meetings page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Meetings item from More'); 
    await Then('User is navigating to the Meetings page'); 
  });

  test('Verify PDF - Templates page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks PDF - Templates item from More'); 
    await Then('User is navigating to the PDF - Templates page'); 
  });

  test('Verify Reports page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Reports item from More'); 
    await Then('User is navigating to the Reports page'); 
  });

  test('Verify Knowledge Base page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Knowledge Base item from More'); 
    await Then('User is navigating to the Knowledge Base page'); 
  });

  test('Verify KB-Categories page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks KB-Categories item from More'); 
    await Then('User is navigating to the KB-Categories page'); 
  });

  test('Verify Email-Templates page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Email-Templates item from More'); 
    await Then('User is navigating to the Email-Templates page'); 
  });

  test('Verify Surveys page navigation', { tag: ['@MoreModule'] }, async ({ When, Then }) => { 
    await When('User clicks Surveys item from More'); 
    await Then('User is navigating to the Surveys page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More1.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on More module from left navigation","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user should see the list of items in dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User clicks Home item from More","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the HomePage","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks Email item from More","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Email page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks Campaigns item from More","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Campaigns page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks Calls item from More","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Calls page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":29,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User clicks Meetings item from More","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Meetings page","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":34,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User clicks PDF - Templates item from More","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the PDF - Templates page","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":38,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User clicks Reports item from More","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Reports page","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":42,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User clicks Knowledge Base item from More","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Knowledge Base page","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":46,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks KB-Categories item from More","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the KB-Categories page","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":50,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When User clicks Email-Templates item from More","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Email-Templates page","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":54,"tags":["@MoreModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When User clicks Surveys item from More","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Surveys page","stepMatchArguments":[]}]},
]; // bdd-data-end
