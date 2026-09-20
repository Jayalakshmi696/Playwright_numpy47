// Generated from: features\login.feature
import { test } from "../../fixtures/loginFixture.js";

test.describe('Login functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User is on suite8demo login page', null, { page }); 
  });
  
  test.describe('Login scenario with different sets of data', () => {

    test('Example #1', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "emptyUsername"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

    test('Example #2', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "emptyPassword"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

    test('Example #3', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "emptyUsernameAndPassword"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

    test('Example #4', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "invalidUsername"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

    test('Example #5', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "invalidPassword"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

    test('Example #6', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "invalidUsernameAndPassword"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

    test('Example #7', { tag: ['@loginPageFunctionality', '@Login1'] }, async ({ When, Then, page }) => { 
      await When('user enters "validUsernameAndPassword"', null, { page }); 
      await Then('User should see the expected login result', null, { page }); 
    });

  });

  test('Verify password is hidden when user enters password', { tag: ['@loginPageFunctionality', '@PasswordHidden'] }, async ({ When, Then, page }) => { 
    await When('User enters a password', null, { page }); 
    await Then('User should see the password displayed as hidden characters', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":16,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"emptyUsername\"","stepMatchArguments":[{"group":{"start":12,"value":"\"emptyUsername\"","children":[{"start":13,"value":"emptyUsername","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":17,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"emptyPassword\"","stepMatchArguments":[{"group":{"start":12,"value":"\"emptyPassword\"","children":[{"start":13,"value":"emptyPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"emptyUsernameAndPassword\"","stepMatchArguments":[{"group":{"start":12,"value":"\"emptyUsernameAndPassword\"","children":[{"start":13,"value":"emptyUsernameAndPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":19,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"invalidUsername\"","stepMatchArguments":[{"group":{"start":12,"value":"\"invalidUsername\"","children":[{"start":13,"value":"invalidUsername","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":20,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"invalidPassword\"","stepMatchArguments":[{"group":{"start":12,"value":"\"invalidPassword\"","children":[{"start":13,"value":"invalidPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":21,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"invalidUsernameAndPassword\"","stepMatchArguments":[{"group":{"start":12,"value":"\"invalidUsernameAndPassword\"","children":[{"start":13,"value":"invalidUsernameAndPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":22,"tags":["@loginPageFunctionality","@Login1"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters \"validUsernameAndPassword\"","stepMatchArguments":[{"group":{"start":12,"value":"\"validUsernameAndPassword\"","children":[{"start":13,"value":"validUsernameAndPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see the expected login result","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":25,"tags":["@loginPageFunctionality","@PasswordHidden"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on suite8demo login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User enters a password","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see the password displayed as hidden characters","stepMatchArguments":[]}]},
]; // bdd-data-end