// Generated from: features\More4.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('more Module - View, Navigate and  Activities', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged into the SuitCRM', null, { page }); 
  });
  
  test('Verify PDF - Templates page navigation', { tag: ['@More4module'] }, async ({ When, Then, page }) => { 
    await When('User clicks "PDF - Templates" item from More', null, { page }); 
    await Then('User is navigating to the "PDF - Templates" page', null, { page }); 
  });

  test('Verify Reports page navigation', { tag: ['@More4module'] }, async ({ When, Then, page }) => { 
    await When('User clicks "Reports" item from More', null, { page }); 
    await Then('User is navigating to the "Reports" page', null, { page }); 
  });

  test('Verify Knowledge Base page navigation', { tag: ['@More4module'] }, async ({ When, Then, page }) => { 
    await When('User clicks "Knowledge Base" item from More', null, { page }); 
    await Then('User is navigating to the "Knowledge Base" page', null, { page }); 
  });

  test('Verify KB-Categories page navigation', { tag: ['@More4module'] }, async ({ When, Then, page }) => { 
    await When('User clicks "KB - Categories" item from More', null, { page }); 
    await Then('User is navigating to the "KB - Categories" page', null, { page }); 
  });

  test('Verify Email-Templates page navigation', { tag: ['@More4module'] }, async ({ When, Then, page }) => { 
    await When('User clicks "Email - Templates" item from More', null, { page }); 
    await Then('User is navigating to the "Email - Templates" page', null, { page }); 
  });

  test('Verify Surveys page navigation', { tag: ['@More4module'] }, async ({ When, Then, page }) => { 
    await When('User clicks "Surveys" item from More', null, { page }); 
    await Then('User is navigating to the "Surveys" page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More4.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks \"PDF - Templates\" item from More","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the \"PDF - Templates\" page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks \"Reports\" item from More","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the \"Reports\" page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks \"Knowledge Base\" item from More","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the \"Knowledge Base\" page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks \"KB - Categories\" item from More","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the \"KB - Categories\" page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":26,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks \"Email - Templates\" item from More","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the \"Email - Templates\" page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":30,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User clicks \"Surveys\" item from More","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the \"Surveys\" page","stepMatchArguments":[]}]},
]; // bdd-data-end