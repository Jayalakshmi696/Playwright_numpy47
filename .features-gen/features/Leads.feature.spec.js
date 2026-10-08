// Generated from: features/Leads.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Leads module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify that Leads Menu drop down list contents', { tag: ['@LeadsModule', '@LeadsDropDownList'] }, async ({ When, Then, leadsPage }) => { 
    await When('User hovers over the Leads Menu', null, { leadsPage }); 
    await Then('Leads menu drop down list is displayed', null, { leadsPage }); 
  });

  test('Verify components on the Create Lead page', { tag: ['@LeadsModule', '@CreateLeadPage'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('Leads menu drop-down list is displayed', null, { leadsPage }); 
    await When('User clicks on the Create Lead option in the Leads Menu', null, { leadsPage }); 
    await Then('User should see the correct components on the Create Lead page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"LeadCreate"}]},{"cells":[{"value":"Buttons"},{"value":"LeadSave, LeadCancel"}]},{"cells":[{"value":"Tabs"},{"value":"LeadOverview, LeadMoreInformation, LeadOther"}]}]}}, { leadsPage }); 
  });

  test.describe('Verify creating a lead when user clicks <Action> with <Data>', () => {

    test('Verify creating a lead when user clicks LeadSave with leadData1', { tag: ['@LeadsModule', '@CreateLeadFunctionality'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on the Create Lead page', null, { leadsPage }); 
      await When('User enters Leads "leadData1" and clicks the "LeadSave" button', null, { leadsPage }); 
      await Then('User should see Create Leads "Detailed view page of creating Leads"', null, { leadsPage }); 
    });

    test('Verify creating a lead when user clicks LeadSave with noData', { tag: ['@LeadsModule', '@CreateLeadFunctionality'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on the Create Lead page', null, { leadsPage }); 
      await When('User enters Leads "noData" and clicks the "LeadSave" button', null, { leadsPage }); 
      await Then('User should see Create Leads "Create Lead Required field error messages"', null, { leadsPage }); 
    });

    test('Verify creating a lead when user clicks LeadCancel with leadData2', { tag: ['@LeadsModule', '@CreateLeadFunctionality'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on the Create Lead page', null, { leadsPage }); 
      await When('User enters Leads "leadData2" and clicks the "LeadCancel" button', null, { leadsPage }); 
      await Then('User should see Create Leads "Create Lead Confirmation dialog appears"', null, { leadsPage }); 
    });

  });

  test('Verify components on the View Leads page', { tag: ['@LeadsModule', '@ViewLeadsPage'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('Leads menu drop-down list is displayed', null, { leadsPage }); 
    await When('User clicks on the View Leads option in the Leads Menu', null, { leadsPage }); 
    await Then('User should see the correct components on the Leads dashboard page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"ViewLeads"}]},{"cells":[{"value":"Buttons"},{"value":"LeadFilter, LeadInsights"}]},{"cells":[{"value":"Sections"},{"value":"Records, QuickCharts"}]},{"cells":[{"value":"Header Contents"},{"value":"SelectDropDown, BulkActionsDropDown, ColumnButton, NextPageButton, PreviousPageButton, EndPageButton, BeginingPageButton, PageNumber"}]},{"cells":[{"value":"Footer Contents"},{"value":"SelectDropDown, BulkActionsDropDown, columnButton, NextPageButton, PreviousPageButton, EndPageButton, BeginingPageButton, PageNumber"}]}]}}, { leadsPage }); 
  });

  test('Verify that user is on the vCard page', { tag: ['@LeadsModule', '@LeadsVCardpageComponents'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('Leads menu drop-down list is displayed', null, { leadsPage }); 
    await When('User clicks on Create Lead from vCard option', null, { leadsPage }); 
    await Then('User should see the import vCard page with correct components for Leads module', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"ImportVCard"}]},{"cells":[{"value":"Buttons"},{"value":"VcardChooseFile, ImportVCard"}]},{"cells":[{"value":"Label"},{"value":"InformationTextVcard"}]}]}}, { leadsPage }); 
  });

  test.describe('Verify importing a lead via vCard using <InputFile>', () => {

    test('Verify importing a lead via vCard using ValidVcardFile', { tag: ['@LeadsModule', '@CreateLeadFromVCard'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on import vCard page for Leads module', null, { leadsPage }); 
      await When('User uploads "ValidVcardFile" and clicks Import Vcard button for Leads module', null, { leadsPage }); 
      await Then('User should see the Import vCard "Detailed view page of new Lead via Vcard" for Leads module', null, { leadsPage }); 
    });

    test('Verify importing a lead via vCard using NoFile', { tag: ['@LeadsModule', '@CreateLeadFromVCard'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on import vCard page for Leads module', null, { leadsPage }); 
      await When('User uploads "NoFile" and clicks Import Vcard button for Leads module', null, { leadsPage }); 
      await Then('User should see the Import vCard "Select a Vcard file Alert appears" for Leads module', null, { leadsPage }); 
    });

    test('Verify importing a lead via vCard using InValidFile', { tag: ['@LeadsModule', '@CreateLeadFromVCard'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on import vCard page for Leads module', null, { leadsPage }); 
      await When('User uploads "InValidFile" and clicks Import Vcard button for Leads module', null, { leadsPage }); 
      await Then('User should see the Import vCard "Vcard Required field error messages" for Leads module', null, { leadsPage }); 
    });

  });

  test('Verify that user is on Import Leads Page', { tag: ['@LeadsModule', '@ImportLeadsPageComponents'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('Leads menu drop-down list is displayed', null, { leadsPage }); 
    await When('User clicks on Import Leads option in Leads Menu', null, { leadsPage }); 
    await Then('User should see the import Leads page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImportFile"}]},{"cells":[{"value":"Buttons"},{"value":"ImportChooseFile, LeadNext"}]},{"cells":[{"value":"Label"},{"value":"InformationTextImportLead"}]},{"cells":[{"value":"HyperLink"},{"value":"DownloadImportFileTemplate"}]},{"cells":[{"value":"Radiobuttons"},{"value":"RadioButton1, RadioButton2"}]}]}}, { leadsPage }); 
  });

  test.describe('Verify importing Leads using <InputFile>', () => {

    test('Verify importing Leads using ValidLeadFile', { tag: ['@LeadsModule', '@ImportAndCreateLeads'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on Import Leads page', null, { leadsPage }); 
      await When('User uploads Leads "ValidLeadFile" and clicks Next button', null, { leadsPage }); 
      await Then('User should see Import Leads "Detailed view page after importing Leads"', null, { leadsPage }); 
    });

    test('Verify importing Leads using NoFile', { tag: ['@LeadsModule', '@ImportAndCreateLeads'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on Import Leads page', null, { leadsPage }); 
      await When('User uploads Leads "NoFile" and clicks Next button', null, { leadsPage }); 
      await Then('User should see Import Leads "Import Lead Required field error messages"', null, { leadsPage }); 
    });

    test('Verify importing Leads using InValidFile', { tag: ['@LeadsModule', '@ImportAndCreateLeads'] }, async ({ Given, When, Then, leadsPage }) => { 
      await Given('User is on Import Leads page', null, { leadsPage }); 
      await When('User uploads Leads "InValidFile" and clicks Next button', null, { leadsPage }); 
      await Then('User should see Import Leads "Import Lead Error Popup alert appears"', null, { leadsPage }); 
    });

  });

  test('Verify the availability recently viewed item in Leads menu', { tag: ['@LeadsModule', '@RecentlyViewedMenuInLeads'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('User opened and viewed a lead record', null, { leadsPage }); 
    await When('User hovers over the Leads menu', null, { leadsPage }); 
    await Then('User should see the option Recently viewed in the Leads menu', null, { leadsPage }); 
  });

  test('Verify the availability recently viewed Lead record', { tag: ['@LeadsModule', '@RecentlyViewedRecordInLeads'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('User opened and viewed a lead record', null, { leadsPage }); 
    await When('User hovers over the Recently viewed option', null, { leadsPage }); 
    await Then('User should see the name of the recently viewed Lead record in its drop down', null, { leadsPage }); 
  });

  test('Verify opening recently viewed Lead record', { tag: ['@LeadsModule', '@OpenRecentlyViewedRecordInLeads'] }, async ({ Given, When, Then, leadsPage }) => { 
    await Given('User opened and viewed a lead record', null, { leadsPage }); 
    await When('User clicks and opens the recently viewed Lead record from the Leads menu', null, { leadsPage }); 
    await Then('User should see detailed view page of the recently viewed Lead record', null, { leadsPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Leads.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@LeadsModule","@LeadsDropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User hovers over the Leads Menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Leads menu drop down list is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":18,"tags":["@LeadsModule","@CreateLeadPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Lead option in the Leads Menu","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Create Lead page","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":34,"tags":["@LeadsModule","@CreateLeadFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User enters Leads \"leadData1\" and clicks the \"LeadSave\" button","stepMatchArguments":[{"group":{"start":18,"value":"\"leadData1\"","children":[{"start":19,"value":"leadData1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"LeadSave\"","children":[{"start":46,"value":"LeadSave","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Leads \"Detailed view page of creating Leads\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Detailed view page of creating Leads\"","children":[{"start":30,"value":"Detailed view page of creating Leads","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":35,"tags":["@LeadsModule","@CreateLeadFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User enters Leads \"noData\" and clicks the \"LeadSave\" button","stepMatchArguments":[{"group":{"start":18,"value":"\"noData\"","children":[{"start":19,"value":"noData","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"LeadSave\"","children":[{"start":43,"value":"LeadSave","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Leads \"Create Lead Required field error messages\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Create Lead Required field error messages\"","children":[{"start":30,"value":"Create Lead Required field error messages","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":36,"tags":["@LeadsModule","@CreateLeadFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When User enters Leads \"leadData2\" and clicks the \"LeadCancel\" button","stepMatchArguments":[{"group":{"start":18,"value":"\"leadData2\"","children":[{"start":19,"value":"leadData2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"LeadCancel\"","children":[{"start":46,"value":"LeadCancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Leads \"Create Lead Confirmation dialog appears\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Create Lead Confirmation dialog appears\"","children":[{"start":30,"value":"Create Lead Confirmation dialog appears","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":39,"tags":["@LeadsModule","@ViewLeadsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User clicks on the View Leads option in the Leads Menu","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Leads dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":51,"tags":["@LeadsModule","@LeadsVCardpageComponents"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When User clicks on Create Lead from vCard option","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see the import vCard page with correct components for Leads module","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":67,"tags":["@LeadsModule","@CreateLeadFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given User is on import vCard page for Leads module","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User uploads \"ValidVcardFile\" and clicks Import Vcard button for Leads module","stepMatchArguments":[{"group":{"start":13,"value":"\"ValidVcardFile\"","children":[{"start":14,"value":"ValidVcardFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard \"Detailed view page of new Lead via Vcard\" for Leads module","stepMatchArguments":[{"group":{"start":33,"value":"\"Detailed view page of new Lead via Vcard\"","children":[{"start":34,"value":"Detailed view page of new Lead via Vcard","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":68,"tags":["@LeadsModule","@CreateLeadFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given User is on import vCard page for Leads module","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User uploads \"NoFile\" and clicks Import Vcard button for Leads module","stepMatchArguments":[{"group":{"start":13,"value":"\"NoFile\"","children":[{"start":14,"value":"NoFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard \"Select a Vcard file Alert appears\" for Leads module","stepMatchArguments":[{"group":{"start":33,"value":"\"Select a Vcard file Alert appears\"","children":[{"start":34,"value":"Select a Vcard file Alert appears","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":69,"pickleLine":69,"tags":["@LeadsModule","@CreateLeadFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given User is on import vCard page for Leads module","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User uploads \"InValidFile\" and clicks Import Vcard button for Leads module","stepMatchArguments":[{"group":{"start":13,"value":"\"InValidFile\"","children":[{"start":14,"value":"InValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard \"Vcard Required field error messages\" for Leads module","stepMatchArguments":[{"group":{"start":33,"value":"\"Vcard Required field error messages\"","children":[{"start":34,"value":"Vcard Required field error messages","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":72,"tags":["@LeadsModule","@ImportLeadsPageComponents"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"Given Leads menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When User clicks on Import Leads option in Leads Menu","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Leads page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":90,"tags":["@LeadsModule","@ImportAndCreateLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is on Import Leads page","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User uploads Leads \"ValidLeadFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":19,"value":"\"ValidLeadFile\"","children":[{"start":20,"value":"ValidLeadFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":88,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Leads \"Detailed view page after importing Leads\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Detailed view page after importing Leads\"","children":[{"start":30,"value":"Detailed view page after importing Leads","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":91,"pickleLine":91,"tags":["@LeadsModule","@ImportAndCreateLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is on Import Leads page","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User uploads Leads \"NoFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":19,"value":"\"NoFile\"","children":[{"start":20,"value":"NoFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Leads \"Import Lead Required field error messages\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Import Lead Required field error messages\"","children":[{"start":30,"value":"Import Lead Required field error messages","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":97,"pickleLine":92,"tags":["@LeadsModule","@ImportAndCreateLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is on Import Leads page","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User uploads Leads \"InValidFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":19,"value":"\"InValidFile\"","children":[{"start":20,"value":"InValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Leads \"Import Lead Error Popup alert appears\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Import Lead Error Popup alert appears\"","children":[{"start":30,"value":"Import Lead Error Popup alert appears","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":105,"pickleLine":95,"tags":["@LeadsModule","@RecentlyViewedMenuInLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":96,"keywordType":"Context","textWithKeyword":"Given User opened and viewed a lead record","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"When User hovers over the Leads menu","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then User should see the option Recently viewed in the Leads menu","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":101,"tags":["@LeadsModule","@RecentlyViewedRecordInLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"Given User opened and viewed a lead record","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"When User hovers over the Recently viewed option","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then User should see the name of the recently viewed Lead record in its drop down","stepMatchArguments":[]}]},
  {"pwTestLine":117,"pickleLine":107,"tags":["@LeadsModule","@OpenRecentlyViewedRecordInLeads"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":108,"keywordType":"Context","textWithKeyword":"Given User opened and viewed a lead record","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When User clicks and opens the recently viewed Lead record from the Leads menu","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then User should see detailed view page of the recently viewed Lead record","stepMatchArguments":[]}]},
]; // bdd-data-end