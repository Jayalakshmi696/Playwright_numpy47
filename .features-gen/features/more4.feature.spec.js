// Generated from: features\more4.feature
import { test } from "playwright-bdd";

test.describe('more Module - View, Navigate and  Activities', () => {

  test.beforeEach('Background', async ({ Given, And }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged into the SuitCRM'); 
    await And('the user navigates to the "more" module in the menu'); 
  });
  
  test('Verify PDF - Templates page navigation', { tag: ['@More4module'] }, async ({ When, Then }) => { 
    await When('User clicks PDF - Templates item from More'); 
    await Then('User is navigating to the PDF - Templates page'); 
  });

  test('Verify Reports page navigation', { tag: ['@More4module'] }, async ({ When, Then }) => { 
    await When('User clicks Reports item from More'); 
    await Then('User is navigating to the Reports page'); 
  });

  test('Verify Knowledge Base page navigation', { tag: ['@More4module'] }, async ({ When, Then }) => { 
    await When('User clicks Knowledge Base item from More'); 
    await Then('User is navigating to the Knowledge Base page'); 
  });

  test('Verify KB-Categories page navigation', { tag: ['@More4module'] }, async ({ When, Then }) => { 
    await When('User clicks KB-Categories item from More'); 
    await Then('User is navigating to the KB-Categories page'); 
  });

  test('Verify Email-Templates page navigation', { tag: ['@More4module'] }, async ({ When, Then }) => { 
    await When('User clicks Email-Templates item from More'); 
    await Then('User is navigating to the Email-Templates page'); 
  });

  test('Verify Surveys page navigation', { tag: ['@More4module'] }, async ({ When, Then }) => { 
    await When('User clicks Surveys item from More'); 
    await Then('User is navigating to the Surveys page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\more4.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":12,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"more\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"more\"","children":[{"start":27,"value":"more","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks PDF - Templates item from More","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the PDF - Templates page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":16,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"more\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"more\"","children":[{"start":27,"value":"more","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User clicks Reports item from More","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Reports page","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":20,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"more\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"more\"","children":[{"start":27,"value":"more","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks Knowledge Base item from More","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Knowledge Base page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":24,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"more\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"more\"","children":[{"start":27,"value":"more","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks KB-Categories item from More","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the KB-Categories page","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":28,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"more\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"more\"","children":[{"start":27,"value":"more","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User clicks Email-Templates item from More","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Email-Templates page","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":32,"tags":["@More4module"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"more\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"more\"","children":[{"start":27,"value":"more","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks Surveys item from More","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Surveys page","stepMatchArguments":[]}]},
]; // bdd-data-end