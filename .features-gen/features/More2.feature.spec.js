// Generated from: features\More2.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Testing 2nd section of modules listed on More menu in suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify that More Menu is present in the Menu bar', { tag: ['@MoreModuleSection2', '@MoreMenu'] }, async ({ Then }) => { 
    await Then('User should see More menu in the menu bar'); 
  });

  test('Verify that View Tasks page', { tag: ['@MoreModuleSection2', '@ViewLTargetListPage'] }, async ({ Given, When, Then, more2Page }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Tasks option in More Menu', null, { more2Page }); 
    await Then('User should be navigated to Tasks dashboard page', null, { more2Page }); 
  });

  test('Verify that View Notes page', { tag: ['@MoreModuleSection2', '@ViewNotesPage'] }, async ({ Given, When, Then, more2Page }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Notes option in More Menu', null, { more2Page }); 
    await Then('User should be navigated to Notes dashboard page', null, { more2Page }); 
  });

  test('Verify that View Invoices page', { tag: ['@MoreModuleSection2', '@ViewInvoicesPage'] }, async ({ Given, When, Then, more2Page }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Invoices option in More Menu', null, { more2Page }); 
    await Then('User should be navigated to Invoices dashboard page', null, { more2Page }); 
  });

  test('Verify that View Contracts page', { tag: ['@MoreModuleSection2', '@ViewContractsPage'] }, async ({ Given, When, Then, more2Page }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Contracts option in More Menu', null, { more2Page }); 
    await Then('User should be navigated to Contracts dashboard page', null, { more2Page }); 
  });

  test('Verify that View Cases page', { tag: ['@MoreModuleSection2', '@ViewCasesPage'] }, async ({ Given, When, Then, more2Page }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Cases option in More Menu', null, { more2Page }); 
    await Then('User should be navigated to Cases dashboard page', null, { more2Page }); 
  });

  test('Verify that View Targets page', { tag: ['@MoreModuleSection2', '@ViewTargetsPage'] }, async ({ Given, When, Then, more2Page }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Targets option in More Menu', null, { more2Page }); 
    await Then('User should be navigated to Targets dashboard page', null, { more2Page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More2.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@MoreModuleSection2","@MoreMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see More menu in the menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":16,"tags":["@MoreModuleSection2","@ViewLTargetListPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When User clicks on View Tasks option in More Menu","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Tasks dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":22,"tags":["@MoreModuleSection2","@ViewNotesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When User clicks on View Notes option in More Menu","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Notes dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":28,"tags":["@MoreModuleSection2","@ViewInvoicesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User clicks on View Invoices option in More Menu","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Invoices dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":34,"tags":["@MoreModuleSection2","@ViewContractsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks on View Contracts option in More Menu","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Contracts dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":40,"tags":["@MoreModuleSection2","@ViewCasesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User clicks on View Cases option in More Menu","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Cases dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":46,"tags":["@MoreModuleSection2","@ViewTargetsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When User clicks on View Targets option in More Menu","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Targets dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end