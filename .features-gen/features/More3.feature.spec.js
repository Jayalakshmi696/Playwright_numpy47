// Generated from: features\More3.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Testing 3rd section of modules listed on More menu in SuiteCRM application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User launches the application'); 
  });
  
  test('Verify that More Menu is present in the Menu bar', { tag: ['@MoreModuleSection3', '@MoreMenu'] }, async ({ Given, When, Then }) => { 
    await Given('User successfully logged in to the application'); 
    await When('User is on the Home dashboard page'); 
    await Then('User should see More menu in the menu bar'); 
  });

  test('Verify that View Target List page', { tag: ['@MoreModuleSection3', '@ViewLTargetListPage'] }, async ({ Given, When, Then }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Target List option in More Menu'); 
    await Then('User should be navigated to Target List dashboard page'); 
  });

  test('Verify that View Projects page', { tag: ['@MoreModuleSection3', '@ViewProjectsPage'] }, async ({ Given, When, Then }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Projects option in More Menu'); 
    await Then('User should be navigated to Projects dashboard page'); 
  });

  test('Verify that View Projects Templates page', { tag: ['@MoreModuleSection3', '@ViewProjectsTemplatesPage'] }, async ({ Given, When, Then }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Projects Templates option in More Menu'); 
    await Then('User should be navigated to Projects Templates dashboard page'); 
  });

  test('Verify that View Events page', { tag: ['@MoreModuleSection3', '@ViewEventsPage'] }, async ({ Given, When, Then }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Events option in More Menu'); 
    await Then('User should be navigated to Events dashboard page'); 
  });

  test('Verify that View Locations page', { tag: ['@MoreModuleSection3', '@ViewLocationsPage'] }, async ({ Given, When, Then }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Locations option in More Menu'); 
    await Then('User should be navigated to Locations dashboard page'); 
  });

  test('Verify that View Products page', { tag: ['@MoreModuleSection3', '@ViewProductsPage'] }, async ({ Given, When, Then }) => { 
    await Given('More menu drop down list is displayed'); 
    await When('User clicks on View Products option in More Menu'); 
    await Then('User should be navigated to Products dashboard page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More3.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@MoreModuleSection3","@MoreMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged in to the application","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User is on the Home dashboard page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see More menu in the menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@MoreModuleSection3","@ViewLTargetListPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User clicks on View Target List option in More Menu","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Target List dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@MoreModuleSection3","@ViewProjectsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks on View Projects option in More Menu","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Projects dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":["@MoreModuleSection3","@ViewProjectsTemplatesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on View Projects Templates option in More Menu","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Projects Templates dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":31,"tags":["@MoreModuleSection3","@ViewEventsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks on View Events option in More Menu","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Events dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":37,"tags":["@MoreModuleSection3","@ViewLocationsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User clicks on View Locations option in More Menu","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Locations dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":43,"tags":["@MoreModuleSection3","@ViewProductsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When User clicks on View Products option in More Menu","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Products dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end