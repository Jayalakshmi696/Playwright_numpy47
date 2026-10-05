// Generated from: features/More3.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Testing 3rd section of modules listed on More menu in suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify the more Menu drop down list contents', { tag: ['@MoreModuleSection3', '@More3DropDownList'] }, async ({ When, Then, more3Page }) => { 
    await When('User hovers over the More Menu', null, { more3Page }); 
    await Then('User should see the displayed More menu drop down list', null, { more3Page }); 
  });

  test('Verify that View Target List page', { tag: ['@MoreModuleSection3', '@ViewLTargetListPage'] }, async ({ Given, When, Then, more3Page }) => { 
    await Given('More menu drop down list is displayed', null, { more3Page }); 
    await When('User clicks on View Target List option in More Menu', null, { more3Page }); 
    await Then('User should be navigated to Target List dashboard page', null, { more3Page }); 
  });

  test('Verify that View Projects page', { tag: ['@MoreModuleSection3', '@ViewProjectsPage'] }, async ({ Given, When, Then, more3Page }) => { 
    await Given('More menu drop down list is displayed', null, { more3Page }); 
    await When('User clicks on View Projects option in More Menu', null, { more3Page }); 
    await Then('User should be navigated to Projects dashboard page', null, { more3Page }); 
  });

  test('Verify that View Projects Templates page', { tag: ['@MoreModuleSection3', '@ViewProjectsTemplatesPage'] }, async ({ Given, When, Then, more3Page }) => { 
    await Given('More menu drop down list is displayed', null, { more3Page }); 
    await When('User clicks on View Projects Templates option in More Menu', null, { more3Page }); 
    await Then('User should be navigated to Projects Templates dashboard page', null, { more3Page }); 
  });

  test('Verify that View Events page', { tag: ['@MoreModuleSection3', '@ViewEventsPage'] }, async ({ Given, When, Then, more3Page }) => { 
    await Given('More menu drop down list is displayed', null, { more3Page }); 
    await When('User clicks on View Events option in More Menu', null, { more3Page }); 
    await Then('User should be navigated to Events dashboard page', null, { more3Page }); 
  });

  test('Verify that View Locations page', { tag: ['@MoreModuleSection3', '@ViewLocationsPage'] }, async ({ Given, When, Then, more3Page }) => { 
    await Given('More menu drop down list is displayed', null, { more3Page }); 
    await When('User clicks on View Locations option in More Menu', null, { more3Page }); 
    await Then('User should be navigated to Locations dashboard page', null, { more3Page }); 
  });

  test('Verify that View Products page', { tag: ['@MoreModuleSection3', '@ViewProductsPage'] }, async ({ Given, When, Then, more3Page }) => { 
    await Given('More menu drop down list is displayed', null, { more3Page }); 
    await When('User clicks on View Products option in More Menu', null, { more3Page }); 
    await Then('User should be navigated to Products dashboard page', null, { more3Page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/More3.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@MoreModuleSection3","@More3DropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User hovers over the More Menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should see the displayed More menu drop down list","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@MoreModuleSection3","@ViewLTargetListPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks on View Target List option in More Menu","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Target List dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":23,"tags":["@MoreModuleSection3","@ViewProjectsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks on View Projects option in More Menu","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Projects dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":29,"tags":["@MoreModuleSection3","@ViewProjectsTemplatesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User clicks on View Projects Templates option in More Menu","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Projects Templates dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":35,"tags":["@MoreModuleSection3","@ViewEventsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When User clicks on View Events option in More Menu","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Events dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":41,"tags":["@MoreModuleSection3","@ViewLocationsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User clicks on View Locations option in More Menu","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Locations dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":47,"tags":["@MoreModuleSection3","@ViewProductsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given More menu drop down list is displayed","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When User clicks on View Products option in More Menu","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to Products dashboard page","stepMatchArguments":[]}]},
]; // bdd-data-end