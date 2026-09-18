// Generated from: features\loginPageUI.feature
import { test } from "playwright-bdd";

test.describe('Login Page UI Verification', () => {

  test.beforeEach('Background', async ({ When, page }, testInfo) => { if (testInfo.error) return;
    await When('user enters application url', null, { page }); 
  });
  
  test('Login Non functional validation', { tag: ['@LoginPageUI'] }, async ({ Then, page }) => { 
    await Then('user should see the application logo,username field, password field, and Login button on the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\loginPageUI.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@LoginPageUI"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user enters application url","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user should see the application logo,username field, password field, and Login button on the login page","stepMatchArguments":[]}]},
]; // bdd-data-end