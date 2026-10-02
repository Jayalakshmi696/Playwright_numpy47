// Generated from: features\Accounts.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Accounts module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify Accounts module navigation', { tag: ['@AccountsModule', '@Accounts1'] }, async ({ When, Then, accountsPage, page }) => { 
    await When('the user clicks on Accounts module from left navigation', null, { accountsPage, page }); 
    await Then('the user should be navigated to Accounts Dashboard page and should see the list in dropdown', {"dataTable":{"rows":[{"cells":[{"value":"Create Account"}]},{"cells":[{"value":"Import Accounts"}]},{"cells":[{"value":"View Accounts"}]}]}}, { accountsPage }); 
  });

  test('Verify Create Account page navigation', { tag: ['@AccountsModule', '@Accounts2'] }, async ({ When, Then, accountsPage }) => { 
    await When('the user opens Accounts module and clicks Create Account', null, { accountsPage }); 
    await Then('the user should be navigated to Create Account page', null, { accountsPage }); 
  });

  test('Verify Create Account page validation', { tag: ['@AccountsModule', '@CreateAccount'] }, async ({ Given, When, Then, accountsPage }) => { 
    await Given('User is on Create Account page', null, { accountsPage }); 
    await When('User clicks the save button without entering mandatory fields', null, { accountsPage }); 
    await Then('User should see the createName error message "Missing required field: Name"', null, { accountsPage }); 
  });

  test('Verify Create Account page with valid data', { tag: ['@AccountsModule', '@validDataCreateAccount'] }, async ({ Given, When, Then, accountsPage }) => { 
    await Given('User is on Create Account page', null, { accountsPage }); 
    await When('User enters valid data in all mandatory fields and clicks save button', null, { accountsPage }); 
    await Then('User should be navigating to newly created account page', null, { accountsPage }); 
  });

  test('Verify Import Accounts page navigation', { tag: ['@AccountsModule', '@ImportAccounts'] }, async ({ When, Then, accountsPage }) => { 
    await When('the user clicks on Import Accounts from dropdown', null, { accountsPage }); 
    await Then('the user should be navigated to Import Accounts page', null, { accountsPage }); 
  });

  test('Verify View Accounts page navigation', { tag: ['@AccountsModule', '@viewAccounts'] }, async ({ When, Then, accountsPage }) => { 
    await When('the user clicks on View Accounts from dropdown', null, { accountsPage }); 
    await Then('the user should be navigated to View Accounts page', null, { accountsPage }); 
  });

  test('Verify Recently Viewed page navigation', { tag: ['@AccountsModule', '@RecentlyViewed'] }, async ({ When, Then, accountsPage }) => { 
    await When('the user clicks on Recently Viewed from dropdown', null, { accountsPage }); 
    await Then('the user should be navigated to Recently Viewed page', null, { accountsPage }); 
  });

  test('verify existing Account appears in Recently viewed', { tag: ['@AccountsModule', '@RecentlyViewedofexisitingAccount'] }, async ({ Given, When, Then, accountsPage }) => { 
    await Given('User opens the exisiting aacount', null, { accountsPage }); 
    await When('User clicks the Recently viewed', null, { accountsPage }); 
    await Then('existing account should be displayed in recently viewed', null, { accountsPage }); 
  });

  test('Verify cancel button validation in createAccount page with data', { tag: ['@AccountsModule', '@CreateAccountCancelbuttonValidation'] }, async ({ Given, When, Then, accountsPage }) => { 
    await Given('User in Create Page of Account', null, { accountsPage }); 
    await When('User clicks cancel button inside accountpage having data', null, { accountsPage }); 
    await Then('User will get popup with message', null, { accountsPage }); 
  });

  test('verify create page cancel button', { tag: ['@AccountsModule', '@CreateCancelbutton'] }, async ({ Given, When, Then, accountsPage }) => { 
    await Given('User is in create account page', null, { accountsPage }); 
    await When('User clicks cancel button without entering data', null, { accountsPage }); 
    await Then('User is navigating back to the Accounts Dashboard', null, { accountsPage }); 
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
  {"pwTestLine":15,"pickleLine":20,"tags":["@AccountsModule","@Accounts2"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user opens Accounts module and clicks Create Account","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":25,"tags":["@AccountsModule","@CreateAccount"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on Create Account page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks the save button without entering mandatory fields","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see the createName error message \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Missing required field: Name\"","children":[{"start":46,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":31,"tags":["@AccountsModule","@validDataCreateAccount"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given User is on Create Account page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User enters valid data in all mandatory fields and clicks save button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User should be navigating to newly created account page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":37,"tags":["@AccountsModule","@ImportAccounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user clicks on Import Accounts from dropdown","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Import Accounts page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":42,"tags":["@AccountsModule","@viewAccounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When the user clicks on View Accounts from dropdown","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to View Accounts page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":47,"tags":["@AccountsModule","@RecentlyViewed"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When the user clicks on Recently Viewed from dropdown","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Recently Viewed page","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":52,"tags":["@AccountsModule","@RecentlyViewedofexisitingAccount"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given User opens the exisiting aacount","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When User clicks the Recently viewed","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then existing account should be displayed in recently viewed","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":58,"tags":["@AccountsModule","@CreateAccountCancelbuttonValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given User in Create Page of Account","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When User clicks cancel button inside accountpage having data","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then User will get popup with message","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":64,"tags":["@AccountsModule","@CreateCancelbutton"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given User is in create account page","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When User clicks cancel button without entering data","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then User is navigating back to the Accounts Dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end