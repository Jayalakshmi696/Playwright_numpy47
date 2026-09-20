// Generated from: features\Leads.feature
import { test } from "../../fixtures/loginFixture.js";

test.describe('Testing Leads module in SuiteCRM application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User launches the application'); 
  });
  
  test('Verify that Leads Menu is present in the Menu bar', { tag: ['@LeadsModule', '@LeadsMenu'] }, async ({ Given, When, Then }) => { 
    await Given('User successfully logged in to the application'); 
    await When('User is on the Home dashboard page'); 
    await Then('User should see Leads menu in the Menu bar'); 
  });

  test('Verify that Leads Menu drop down list contents', { tag: ['@LeadsModule', '@LeadsDropDownList'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the Home dashboard page'); 
    await When('User hovers over the Leads Menu'); 
    await Then('Leads menu drop down list is displayed'); 
  });

  test('Verify components on the Create Lead page', { tag: ['@LeadsModule', '@CreateLeadPage'] }, async ({ Given, When, Then }) => { 
    await Given('Leads menu drop-down list is displayed'); 
    await When('User clicks on the Create Lead option in the Leads Menu'); 
    await Then('User should see the correct components on the Create Lead page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"create"}]},{"cells":[{"value":"Buttons"},{"value":"Save, Cancel"}]},{"cells":[{"value":"Tabs"},{"value":"Overview, MoreInformation, other"}]}]}}); 
  });

  test.describe('Verify that user is able to create a new Lead', () => {

    test('Example #1', { tag: ['@LeadsModule', '@CreateLeadFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on the Create Lead page'); 
      await When('User enters Leads Valid Data and clicks the Save button'); 
      await Then('User should see Create Leads Detailed view page of new Lead'); 
    });

    test('Example #2', { tag: ['@LeadsModule', '@CreateLeadFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on the Create Lead page'); 
      await When('User enters Leads No Data and clicks the Save button'); 
      await Then('User should see Create Leads Required field error messages'); 
    });

    test('Example #3', { tag: ['@LeadsModule', '@CreateLeadFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on the Create Lead page'); 
      await When('User enters Leads Valid Data and clicks the Cancel button'); 
      await Then('User should see Create Leads Confirmation dialog appears'); 
    });

  });

  test('Verify components on the View Leads page', { tag: ['@LeadsModule', '@ViewLeadsPage'] }, async ({ Given, When, Then }) => { 
    await Given('Leads menu drop-down list is displayed'); 
    await When('User clicks on the View Leads option in the Leads Menu'); 
    await Then('User should see the correct components on the Leads dashboard page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"Leads"}]},{"cells":[{"value":"Buttons"},{"value":"Filter, Insights"}]},{"cells":[{"value":"Sections"},{"value":"Records, QuickCharts"}]},{"cells":[{"value":"Header Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]},{"cells":[{"value":"Footer Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]}]}}); 
  });

  test('Verify that user is on the vCard page', { tag: ['@LeadsModule', '@VCardpage'] }, async ({ Given, When, Then }) => { 
    await Given('Leads menu drop-down list is displayed'); 
    await When('User clicks on Create Lead from vCard option'); 
    await Then('User should see the import vCard page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"Import VCard"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Import VCard"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]}]}}); 
  });

  test.describe('Verify the functionality of creating Lead from vCard', () => {

    test('Example #1', { tag: ['@LeadsModule', '@CreateLeadFromVCard'] }, async ({ Given, When, Then }) => { 
      await Given('User is on import vCard page'); 
      await When('User uploads Valid File and clicks Import Vcard button'); 
      await Then('User should see the Import vCard Detailed view page of new Lead'); 
    });

    test('Example #2', { tag: ['@LeadsModule', '@CreateLeadFromVCard'] }, async ({ Given, When, Then }) => { 
      await Given('User is on import vCard page'); 
      await When('User uploads No File and clicks Import Vcard button'); 
      await Then('User should see the Import vCard Select a Vcard file Alert appears'); 
    });

    test('Example #3', { tag: ['@LeadsModule', '@CreateLeadFromVCard'] }, async ({ Given, When, Then }) => { 
      await Given('User is on import vCard page'); 
      await When('User uploads InValid File and clicks Import Vcard button'); 
      await Then('User should see the Import vCard Required field error messages'); 
    });

  });

  test('Verify that user is on Import Leads Page', { tag: ['@LeadsModule', '@ImportLeadsPage'] }, async ({ Given, When, Then }) => { 
    await Given('Leads menu is visible'); 
    await When('User clicks on Import Leads option in Leads Menu'); 
    await Then('User should see the import Leads page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImport File"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Next"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]},{"cells":[{"value":"HyperLink"},{"value":"Download Import File Template"}]},{"cells":[{"value":"Radio buttons"},{"value":"Create New Records only, Create New Records and Update Existing Records"}]}]}}); 
  });

  test.describe('Verify the functionality of importing Leads', () => {

    test('Example #1', { tag: ['@LeadsModule', '@ImportLeads'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Import Leads page'); 
      await When('User uploads Leads Valid File and clicks Next button'); 
      await Then('User should see Import Leads Leads dashboard page'); 
    });

    test('Example #2', { tag: ['@LeadsModule', '@ImportLeads'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Import Leads page'); 
      await When('User uploads Leads No File and clicks Next button'); 
      await Then('User should see Import Leads Required field error messages'); 
    });

    test('Example #3', { tag: ['@LeadsModule', '@ImportLeads'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Import Leads page'); 
      await When('User uploads Leads InValid File and clicks Next button'); 
      await Then('User should see Import Leads Invalid Import File name message'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Leads.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@LeadsModule","@LeadsMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged in to the application","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User is on the Home dashboard page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see Leads menu in the Menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@LeadsModule","@LeadsDropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User is on the Home dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User hovers over the Leads Menu","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Leads menu drop down list is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@LeadsModule","@CreateLeadPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Lead option in the Leads Menu","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Create Lead page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":36,"tags":["@LeadsModule","@CreateLeadFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User enters Leads Valid Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Leads Detailed view page of new Lead","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":37,"tags":["@LeadsModule","@CreateLeadFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User enters Leads No Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Leads Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":38,"tags":["@LeadsModule","@CreateLeadFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User enters Leads Valid Data and clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Leads Confirmation dialog appears","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":41,"tags":["@LeadsModule","@ViewLeadsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User clicks on the View Leads option in the Leads Menu","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Leads dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":53,"tags":["@LeadsModule","@VCardpage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When User clicks on Create Lead from vCard option","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see the import vCard page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":69,"tags":["@LeadsModule","@CreateLeadFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given User is on import vCard page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When User uploads Valid File and clicks Import Vcard button","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard Detailed view page of new Lead","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":70,"tags":["@LeadsModule","@CreateLeadFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given User is on import vCard page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When User uploads No File and clicks Import Vcard button","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard Select a Vcard file Alert appears","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":71,"tags":["@LeadsModule","@CreateLeadFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given User is on import vCard page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When User uploads InValid File and clicks Import Vcard button","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":74,"tags":["@LeadsModule","@ImportLeadsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given Leads menu is visible","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When User clicks on Import Leads option in Leads Menu","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Leads page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":92,"tags":["@LeadsModule","@ImportLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given User is on Import Leads page","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When User uploads Leads Valid File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Leads Leads dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":93,"tags":["@LeadsModule","@ImportLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given User is on Import Leads page","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When User uploads Leads No File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Leads Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":94,"tags":["@LeadsModule","@ImportLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given User is on Import Leads page","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When User uploads Leads InValid File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Leads Invalid Import File name message","stepMatchArguments":[]}]},
]; // bdd-data-end