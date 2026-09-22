// Generated from: features\Accounts.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Accounts module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application'); 
  });
  
  test('Verify Accounts module navigation', { tag: ['@AccountsModule', '@Accounts1'] }, async ({ When, Then, accountsPage }) => { 
    await When('the user clicks on Accounts module from left navigation', null, { accountsPage }); 
    await Then('the user should be navigated to Accounts Dashboard page and should see the list in dropdown', {"dataTable":{"rows":[{"cells":[{"value":"Create Account"}]},{"cells":[{"value":"Import Accounts"}]},{"cells":[{"value":"View Accounts"}]}]}}, { accountsPage }); 
  });

  test.skip('Verify Create Account page navigation', { tag: ['@AccountsModule', '@Accounts2', '@skip'] }, async ({ When, Then }) => { 
    await When('the user opens Accounts module and clicks Create Account'); 
    await Then('the user should be navigated to Create Account page'); 
  });

  test('Verify Create Account page validation', { tag: ['@AccountsModule', '@CreateAccount'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on Create Account page', null, { page }); 
    await When('User clicks the save button without entering mandatory fields'); 
    await Then('User should see the error message "Missing required field: Name"'); 
  });

  test('Verify Create Account page with valid data', { tag: ['@AccountsModule', '@validDataCreateAccount'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on Create Account page', null, { page }); 
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
  {"pwTestLine":10,"pickleLine":12,"tags":["@AccountsModule","@Accounts1"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks on Accounts module from left navigation","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Accounts Dashboard page and should see the list in dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":20,"skipped":true,"tags":["@AccountsModule","@Accounts2","@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user opens Accounts module and clicks Create Account"},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Create Account page"}]},
  {"pwTestLine":20,"pickleLine":25,"tags":["@AccountsModule","@CreateAccount"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on Create Account page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks the save button without entering mandatory fields","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Missing required field: Name\"","children":[{"start":35,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":30,"tags":["@AccountsModule","@validDataCreateAccount"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on Create Account page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User enters valid data in all mandatory fields and clicks save button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should be navigating to newly created account page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":36,"tags":["@AccountsModule","@ImportAccounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When the user clicks on Import Accounts from dropdown","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Import Accounts page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":41,"tags":["@AccountsModule","@viewAccounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user clicks on View Accounts from dropdown","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to View Accounts page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":46,"tags":["@AccountsModule","@RecentlyViewed"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When the user clicks on Recently Viewed from dropdown","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Recently Viewed page","stepMatchArguments":[]}]},
]; // bdd-data-end