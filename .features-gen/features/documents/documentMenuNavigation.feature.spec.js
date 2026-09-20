// Generated from: features\documents\documentMenuNavigation.feature
import { test } from "playwright-bdd";

test.describe('Document  Menu  Navigation', () => {

  test.beforeEach('Background', async ({ Given, And }, testInfo) => { if (testInfo.error) return;
    await Given('the user is on any page where the top navigation bar is visible.'); 
    await And('the navigation bar contains the "Documents" menu'); 
  });
  
  test('Display dropdown options  "Document " menu', { tag: ['@document', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the user is viewing the top navigation bar'); 
    await When('the user hovers on the "Documents" menu'); 
    await Then('drop down menu show up with following option:', {"dataTable":{"rows":[{"cells":[{"value":"Create Document"}]},{"cells":[{"value":"View Document"}]},{"cells":[{"value":"Recentley viewed"}]}]}}); 
  });

  test('Navigate to the Documents page', { tag: ['@document', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the application dashboard'); 
    await When('the user clicks the "Documents" button'); 
    await Then('the Documents page should open displaying the columns Document Name, File, Category, Sub Category, Revision Date, Expiration Date, and User'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\documents\\documentMenuNavigation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on any page where the top navigation bar is visible.","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the navigation bar contains the \"Documents\" menu","isBg":true,"stepMatchArguments":[{"group":{"start":32,"value":"\"Documents\"","children":[{"start":33,"value":"Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user is viewing the top navigation bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user hovers on the \"Documents\" menu","stepMatchArguments":[{"group":{"start":23,"value":"\"Documents\"","children":[{"start":24,"value":"Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then drop down menu show up with following option:","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":19,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on any page where the top navigation bar is visible.","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the navigation bar contains the \"Documents\" menu","isBg":true,"stepMatchArguments":[{"group":{"start":32,"value":"\"Documents\"","children":[{"start":33,"value":"Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given the user is on the application dashboard","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user clicks the \"Documents\" button","stepMatchArguments":[{"group":{"start":20,"value":"\"Documents\"","children":[{"start":21,"value":"Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the Documents page should open displaying the columns Document Name, File, Category, Sub Category, Revision Date, Expiration Date, and User","stepMatchArguments":[]}]},
]; // bdd-data-end