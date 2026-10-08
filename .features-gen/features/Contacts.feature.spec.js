// Generated from: features/Contacts.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Contacts module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify that Contacts Menu is present in the Menu bar', { tag: ['@ContactsModule', '@ContactsMenu'] }, async ({ Then, contactsPage }) => { 
    await Then('User should see Contacts menu in the Menu bar', null, { contactsPage }); 
  });

  test('Verify that Contacts Menu drop down list contents', { tag: ['@ContactsModule', '@ContactsDropDownList'] }, async ({ When, Then, contactsPage }) => { 
    await When('User hovers over the Contacts Menu', null, { contactsPage }); 
    await Then('Contacts menu drop down list is displayed', null, { contactsPage }); 
  });

  test('Verify components on the Create Contact page', { tag: ['@ContactsModule', '@CreateContactPage'] }, async ({ Given, When, Then, contactsPage }) => { 
    await Given('Contacts menu drop-down list is displayed', null, { contactsPage }); 
    await When('User clicks on the Create Contact option in the Contacts Menu', null, { contactsPage }); 
    await Then('User should see the correct components on the Create Contact page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"create"}]},{"cells":[{"value":"Buttons"},{"value":"Save, Cancel"}]},{"cells":[{"value":"Tabs"},{"value":"Overview, MoreInformation, other"}]}]}}, { contactsPage }); 
  });

  test('Verify that user is able to create new Contacts', { tag: ['@ContactsModule', '@CreateContactFunctionality'] }, async ({ Given, When, Then, contactsPage }) => { 
    await Given('User is on the Create Contact page', null, { contactsPage }); 
    await When('User enters Contacts Valid Data and clicks the Save button', null, { contactsPage }); 
    await Then('User should see Create Contacts Detailed view page of new Contacts', null, { contactsPage }); 
  });

  test('Verify components on the View Contacts page', { tag: ['@ContactsModule', '@ViewContactsPage'] }, async ({ Given, When, Then, contactsPage }) => { 
    await Given('Contacts menu drop-down list is displayed', null, { contactsPage }); 
    await When('User clicks on the View Contacts option in the Contacts Menu', null, { contactsPage }); 
    await Then('User should see the correct components on the Contacts dashboard page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"Contacts"}]},{"cells":[{"value":"Buttons"},{"value":"Filter"}]},{"cells":[{"value":"Sections"},{"value":"Records"}]},{"cells":[{"value":"Header Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]},{"cells":[{"value":"Footer Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]}]}}, { contactsPage }); 
  });

  test('Verify that user is on the vCard page', { tag: ['@ContactsModule', '@VCardpage'] }, async ({ Given, When, Then, contactsPage }) => { 
    await Given('Contacts menu drop-down list is displayed', null, { contactsPage }); 
    await When('User clicks on Create Contact From vCard option', null, { contactsPage }); 
    await Then('User should see the import vCard page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"Import VCard"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Import VCard"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]}]}}, { contactsPage }); 
  });

  test.describe('Verify the functionality of creating Contact from vCard', () => {

    test('Example #1', { tag: ['@ContactsModule', '@CreateContactFromVCard'] }, async ({ Given, When, Then, contactsPage }) => { 
      await Given('Contacts menu is visible', null, { contactsPage }); 
      await When('User uploads "ValidFile" and clicks Import Vcard button', null, { contactsPage }); 
      await Then('User should see the Import vCard "Detailed view page of new Contact"', null, { contactsPage }); 
    });

    test('Example #2', { tag: ['@ContactsModule', '@CreateContactFromVCard'] }, async ({ Given, When, Then, contactsPage }) => { 
      await Given('Contacts menu is visible', null, { contactsPage }); 
      await When('User uploads "NoFile" and clicks Import Vcard button', null, { contactsPage }); 
      await Then('User should see the Import vCard "Select a Vcard file Alert appears"', null, { contactsPage }); 
    });

    test('Example #3', { tag: ['@ContactsModule', '@CreateContactFromVCard'] }, async ({ Given, When, Then, contactsPage }) => { 
      await Given('Contacts menu is visible', null, { contactsPage }); 
      await When('User uploads "InValidFile" and clicks Import Vcard button', null, { contactsPage }); 
      await Then('User should see the Import vCard "Required field error messages"', null, { contactsPage }); 
    });

  });

  test('Verify that user is on Import Contacts Page', { tag: ['@ContactsModule', '@ImportContactsPage'] }, async ({ Given, When, Then, contactsPage }) => { 
    await Given('Contacts menu is visible', null, { contactsPage }); 
    await When('User clicks on Import Contacts option in Contacts Menu', null, { contactsPage }); 
    await Then('User should see the import Contacts   page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImport File"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Next"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]},{"cells":[{"value":"HyperLink"},{"value":"Download Import File Template"}]},{"cells":[{"value":"Radio buttons"},{"value":"Create New Records only, Create New Records and Update Existing Records"}]}]}}, { contactsPage }); 
  });

  test.describe('Verify the functionality of importing Contacts', () => {

    test('Example #1', { tag: ['@ContactsModule', '@ImportContacts'] }, async ({ Given, When, Then, contactsPage }) => { 
      await Given('User is on Import Contacts page', null, { contactsPage }); 
      await When('User uploads Contacts "ValidFile" and clicks Next button', null, { contactsPage }); 
      await Then('User should see Import Contacts "Contacts dashboard page"', null, { contactsPage }); 
    });

    test('Example #2', { tag: ['@ContactsModule', '@ImportContacts'] }, async ({ Given, When, Then, contactsPage }) => { 
      await Given('User is on Import Contacts page', null, { contactsPage }); 
      await When('User uploads Contacts "NoFile" and clicks Next button', null, { contactsPage }); 
      await Then('User should see Import Contacts "Required field error messages"', null, { contactsPage }); 
    });

    test('Example #3', { tag: ['@ContactsModule', '@ImportContacts'] }, async ({ Given, When, Then, contactsPage }) => { 
      await Given('User is on Import Contacts page', null, { contactsPage }); 
      await When('User uploads Contacts "InValidFile" and clicks Next button', null, { contactsPage }); 
      await Then('User should see Import Contacts "Invalid Import File name message"', null, { contactsPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Contacts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":14,"tags":["@ContactsModule","@ContactsMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see Contacts menu in the Menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":18,"tags":["@ContactsModule","@ContactsDropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User hovers over the Contacts Menu","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Contacts menu drop down list is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":24,"tags":["@ContactsModule","@CreateContactPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given Contacts menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Contact option in the Contacts Menu","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Create Contact page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":34,"tags":["@ContactsModule","@CreateContactFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User is on the Create Contact page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User enters Contacts Valid Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see Create Contacts Detailed view page of new Contacts","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":39,"tags":["@ContactsModule","@ViewContactsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given Contacts menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User clicks on the View Contacts option in the Contacts Menu","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Contacts dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":51,"tags":["@ContactsModule","@VCardpage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given Contacts menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When User clicks on Create Contact From vCard option","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see the import vCard page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":67,"tags":["@ContactsModule","@CreateContactFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given Contacts menu is visible","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User uploads \"ValidFile\" and clicks Import Vcard button","stepMatchArguments":[{"group":{"start":13,"value":"\"ValidFile\"","children":[{"start":14,"value":"ValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard \"Detailed view page of new Contact\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Detailed view page of new Contact\"","children":[{"start":34,"value":"Detailed view page of new Contact","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":68,"tags":["@ContactsModule","@CreateContactFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given Contacts menu is visible","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User uploads \"NoFile\" and clicks Import Vcard button","stepMatchArguments":[{"group":{"start":13,"value":"\"NoFile\"","children":[{"start":14,"value":"NoFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard \"Select a Vcard file Alert appears\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Select a Vcard file Alert appears\"","children":[{"start":34,"value":"Select a Vcard file Alert appears","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":57,"pickleLine":69,"tags":["@ContactsModule","@CreateContactFromVCard"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given Contacts menu is visible","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User uploads \"InValidFile\" and clicks Import Vcard button","stepMatchArguments":[{"group":{"start":13,"value":"\"InValidFile\"","children":[{"start":14,"value":"InValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the Import vCard \"Required field error messages\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Required field error messages\"","children":[{"start":34,"value":"Required field error messages","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":65,"pickleLine":72,"tags":["@ContactsModule","@ImportContactsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"Given Contacts menu is visible","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When User clicks on Import Contacts option in Contacts Menu","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Contacts   page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":73,"pickleLine":90,"tags":["@ContactsModule","@ImportContacts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is on Import Contacts page","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User uploads Contacts \"ValidFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":22,"value":"\"ValidFile\"","children":[{"start":23,"value":"ValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Contacts \"Contacts dashboard page\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Contacts dashboard page\"","children":[{"start":33,"value":"Contacts dashboard page","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":79,"pickleLine":91,"tags":["@ContactsModule","@ImportContacts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is on Import Contacts page","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User uploads Contacts \"NoFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":22,"value":"\"NoFile\"","children":[{"start":23,"value":"NoFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":82,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Contacts \"Required field error messages\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Required field error messages\"","children":[{"start":33,"value":"Required field error messages","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":85,"pickleLine":92,"tags":["@ContactsModule","@ImportContacts"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is on Import Contacts page","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User uploads Contacts \"InValidFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":22,"value":"\"InValidFile\"","children":[{"start":23,"value":"InValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":88,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Contacts \"Invalid Import File name message\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Invalid Import File name message\"","children":[{"start":33,"value":"Invalid Import File name message","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end