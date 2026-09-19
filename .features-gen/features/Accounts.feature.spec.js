// Generated from: features\Accounts.feature
import { test } from "playwright-bdd";

test.describe('Accounts module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application'); 
  });
  
  test('Verify Accounts module navigation', { tag: ['@AccountsModule', '@Accounts'] }, async ({ When, Then }) => { 
    await When('the user clicks on Accounts module from left navigation'); 
    await Then('the user should be navigated to Accounts Dashboard page and should see the list in dropdown', {"dataTable":{"rows":[{"cells":[{"value":"Create Account"}]},{"cells":[{"value":"Import Accounts"}]},{"cells":[{"value":"View Accounts"}]},{"cells":[{"value":"Recently Viewed"}]}]}}); 
  });

  test('Verify Create Account page navigation', { tag: ['@AccountsModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on Create Account from dropdown'); 
    await Then('the user should be navigated to Create Account page'); 
  });

  test('Verify Create Account page validation', { tag: ['@AccountsModule'] }, async ({ Given, When, Then }) => { 
    await Given('User is on Create Account page'); 
    await When('User clicks the save button without entering mandatory fields'); 
    await Then('User should see the error message "Missing required field: Name"'); 
  });

  test('Verify Create Account page with valid data', { tag: ['@AccountsModule'] }, async ({ Given, When, Then }) => { 
    await Given('User is on Create Account page'); 
    await When('User enters valid data in all mandatory fields and clicks save button'); 
    await Then('User should be navigating to newly created account page'); 
  });

  test('Verify Import Accounts page navigation', { tag: ['@AccountsModule', '@ImportAccounts'] }, async ({ When, Then }) => { 
    await When('the user clicks on Import Accounts from dropdown'); 
    await Then('the user should be navigated to Import Accounts page'); 
  });

  test('Verify View Accounts page navigation', { tag: ['@AccountsModule', '@viewAccounts'] }, async ({ When, Then }) => { 
    await When('the user clicks on View Accounts from dropdown'); 
    await Then('the user should be navigated to View Accounts page'); 
  });

  test('Verify Recently Viewed page navigation', { tag: ['@AccountsModule', '@RecentlyViewed'] }, async ({ When, Then }) => { 
    await When('the user clicks on Recently Viewed from dropdown'); 
    await Then('the user should be navigated to Recently Viewed page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Accounts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@AccountsModule","@Accounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks on Accounts module from left navigation","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Accounts Dashboard page and should see the list in dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":20,"tags":["@AccountsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user clicks on Create Account from dropdown","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":24,"tags":["@AccountsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on Create Account page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks the save button without entering mandatory fields","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Missing required field: Name\"","children":[{"start":35,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":29,"tags":["@AccountsModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is on Create Account page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User enters valid data in all mandatory fields and clicks save button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should be navigating to newly created account page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":35,"tags":["@AccountsModule","@ImportAccounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When the user clicks on Import Accounts from dropdown","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Import Accounts page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":40,"tags":["@AccountsModule","@viewAccounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When the user clicks on View Accounts from dropdown","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to View Accounts page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":45,"tags":["@AccountsModule","@RecentlyViewed"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When the user clicks on Recently Viewed from dropdown","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Recently Viewed page","stepMatchArguments":[]}]},
]; // bdd-data-end