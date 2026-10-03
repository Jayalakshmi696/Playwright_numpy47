// Generated from: features/opportunities.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Opportunities module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify that Opportunities Menu is present in the Menu bar', { tag: ['@OpportunitiesModule', '@OpportunitiesMenu'] }, async ({ Then, opportunitiesPage }) => { 
    await Then('User should see Opportunities menu in the menu bar', null, { opportunitiesPage }); 
  });

  test('Verify that Opportunities Menu drop down list contents', { tag: ['@OpportunitiesModule', '@OpportunitiesDropDownList'] }, async ({ When, Then, opportunitiesPage }) => { 
    await When('User hovers over the Opportunities Menu', null, { opportunitiesPage }); 
    await Then('Opportunities menu drop down list is displayed', null, { opportunitiesPage }); 
  });

  test('Verify components on the Create Opportunities page', { tag: ['@OpportunitiesModule', '@CreateOpportunitiesPage'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
    await Given('Opportunities menu drop-down list is displayed', null, { opportunitiesPage }); 
    await When('User clicks on the Create Opportunities option in the Opportunities Menu', null, { opportunitiesPage }); 
    await Then('User should see the correct components on the Create Opportunities page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"create"}]},{"cells":[{"value":"Buttons"},{"value":"Save, Cancel"}]},{"cells":[{"value":"Tabs"},{"value":"Basic , other"}]}]}}, { opportunitiesPage }); 
  });

  test.describe('Verify that user is able to create a new Opportunity', () => {

    test('Example #1', { tag: ['@OpportunitiesModule', '@CreateOpportunitiesFunctionality'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunities page', null, { opportunitiesPage }); 
      await When('User enters Opportunities Valid Data and clicks the Save button', null, { opportunitiesPage }); 
      await Then('User should see create Opportunities Detailed view page of new Opportunity', null, { opportunitiesPage }); 
    });

    test('Example #2', { tag: ['@OpportunitiesModule', '@CreateOpportunitiesFunctionality'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunities page', null, { opportunitiesPage }); 
      await When('User enters Opportunities No Data and clicks the Save button', null, { opportunitiesPage }); 
      await Then('User should see create Opportunities Required field error messages', null, { opportunitiesPage }); 
    });

    test('Example #3', { tag: ['@OpportunitiesModule', '@CreateOpportunitiesFunctionality'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunities page', null, { opportunitiesPage }); 
      await When('User enters Opportunities Valid Data and clicks the Cancel button', null, { opportunitiesPage }); 
      await Then('User should see create Opportunities Confirmation dialog appears', null, { opportunitiesPage }); 
    });

  });

  test('Verify components on the View Opportunities page', { tag: ['@OpportunitiesModule', '@ViewOpportunitiesPage'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
    await Given('Opportunities menu drop-down list is displayed', null, { opportunitiesPage }); 
    await When('User clicks on the "View Opportunities" option in the Opportunities Menu', null, { opportunitiesPage }); 
    await Then('User should see the correct components on the Opportunities dashboard page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"Opportunities"}]},{"cells":[{"value":"Buttons"},{"value":"Filter, Insights"}]},{"cells":[{"value":"Sections"},{"value":"Records, QuickCharts"}]},{"cells":[{"value":"Header Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]},{"cells":[{"value":"Footer Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]}]}}, { opportunitiesPage }); 
  });

  test('Verify that user is on the Import page', { tag: ['@OpportunitiesModule', '@ImportOpportunitiesPage'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
    await Given('User has opened Opportunities menu', null, { opportunitiesPage }); 
    await When('User clicks the Import Opportunities option', null, { opportunitiesPage }); 
    await Then('User should see the import Opportunities page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImport File"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Next"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]},{"cells":[{"value":"HyperLink"},{"value":"Download Import File Template"}]},{"cells":[{"value":"Radio buttons"},{"value":"Create New Records only, Create New Records and Update Existing Records"}]}]}}, { opportunitiesPage }); 
  });

  test.describe('Verify the functionality of importing Opportunities', () => {

    test('Example #1', { tag: ['@OpportunitiesModule', '@ImportFunctionality'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on Upload Import File page'); 
      await When('User uploads Opportunities Valid File and clicks Next button', null, { opportunitiesPage }); 
      await Then('User should see Import Opportunities Detailed view page of new Opportunity', null, { opportunitiesPage }); 
    });

    test('Example #2', { tag: ['@OpportunitiesModule', '@ImportFunctionality'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on Upload Import File page'); 
      await When('User uploads Opportunities No File and clicks Next button', null, { opportunitiesPage }); 
      await Then('User should see Import Opportunities Select a Vcard file Alert appears', null, { opportunitiesPage }); 
    });

    test('Example #3', { tag: ['@OpportunitiesModule', '@ImportFunctionality'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on Upload Import File page'); 
      await When('User uploads Opportunities InValid File and clicks Next button', null, { opportunitiesPage }); 
      await Then('User should see Import Opportunities Required field error messages', null, { opportunitiesPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/opportunities.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":14,"tags":["@OpportunitiesModule","@OpportunitiesMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see Opportunities menu in the menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":20,"tags":["@OpportunitiesModule","@OpportunitiesDropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User hovers over the Opportunities Menu","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Opportunities menu drop down list is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":26,"tags":["@OpportunitiesModule","@CreateOpportunitiesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given Opportunities menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Opportunities option in the Opportunities Menu","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Create Opportunities page","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":42,"tags":["@OpportunitiesModule","@CreateOpportunitiesFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunities page","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User enters Opportunities Valid Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then User should see create Opportunities Detailed view page of new Opportunity","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":43,"tags":["@OpportunitiesModule","@CreateOpportunitiesFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunities page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User enters Opportunities No Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then User should see create Opportunities Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":44,"tags":["@OpportunitiesModule","@CreateOpportunitiesFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunities page","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When User enters Opportunities Valid Data and clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then User should see create Opportunities Confirmation dialog appears","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":47,"tags":["@OpportunitiesModule","@ViewOpportunitiesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given Opportunities menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When User clicks on the \"View Opportunities\" option in the Opportunities Menu","stepMatchArguments":[{"group":{"start":19,"value":"\"View Opportunities\"","children":[{"start":20,"value":"View Opportunities","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Opportunities dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":59,"tags":["@OpportunitiesModule","@ImportOpportunitiesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":60,"keywordType":"Context","textWithKeyword":"Given User has opened Opportunities menu","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"When User clicks the Import Opportunities option","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Opportunities page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":77,"tags":["@OpportunitiesModule","@ImportFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User uploads Opportunities Valid File and clicks Next button","stepMatchArguments":[{"group":{"start":27,"value":"Valid"},"parameterTypeName":"word"},{"group":{"start":33,"value":"File"},"parameterTypeName":"word"}]},{"pwStepLine":64,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Opportunities Detailed view page of new Opportunity","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":78,"tags":["@OpportunitiesModule","@ImportFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User uploads Opportunities No File and clicks Next button","stepMatchArguments":[{"group":{"start":27,"value":"No"},"parameterTypeName":"word"},{"group":{"start":30,"value":"File"},"parameterTypeName":"word"}]},{"pwStepLine":70,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Opportunities Select a Vcard file Alert appears","stepMatchArguments":[]}]},
  {"pwTestLine":73,"pickleLine":79,"tags":["@OpportunitiesModule","@ImportFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User uploads Opportunities InValid File and clicks Next button","stepMatchArguments":[{"group":{"start":27,"value":"InValid"},"parameterTypeName":"word"},{"group":{"start":35,"value":"File"},"parameterTypeName":"word"}]},{"pwStepLine":76,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Opportunities Required field error messages","stepMatchArguments":[]}]},
]; // bdd-data-end