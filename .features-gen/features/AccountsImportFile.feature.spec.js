// Generated from: features/AccountsImportFile.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Accounts module import file functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('verify import file of CreateAccount', { tag: ['@AccountsImportFile', '@CreateAccountByImportFile'] }, async ({ Given, When, Then, importfilePage }) => { 
    await Given('User is on the Import Accounts page', null, { importfilePage }); 
    await When('User clicks the Choose File button and uploads the account file', null, { importfilePage }); 
    await Then('User should see the uploaded file name', null, { importfilePage }); 
  });

  test('User imports account file data using Import Now', { tag: ['@AccountsImportFile', '@ImportnowofAccountsfile'] }, async ({ Given, When, Then, importfilePage }) => { 
    await Given('User uploads the file on the Import Accounts page', null, { importfilePage }); 
    await When('User selects creates new records and clicks import now by fallowing steps', null, { importfilePage }); 
    await Then('user should view the imported results', null, { importfilePage }); 
  });

  test('Verify newrecords and import existing records functionality', { tag: ['@AccountsImportFile', '@CreateNewrecordsandUpdateexisting'] }, async ({ Given, When, Then, importfilePage }) => { 
    await Given('User uploads the file in the Import file page', null, { importfilePage }); 
    await When('User selects createnew records,update existing records and clicks next', null, { importfilePage }); 
    await Then('User should get a dialog box with a message', null, { importfilePage }); 
  });

  test('Verify undoimport functionality of importedaccounts', { tag: ['@AccountsImportFile', '@UndoImportofAccountsImport'] }, async ({ Given, When, Then, importfilePage }) => { 
    await Given('User is in View Import Results Page', null, { importfilePage }); 
    await When('User clicks undoImport button', null, { importfilePage }); 
    await Then('User can navigate to the UndoImport page with message', null, { importfilePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/AccountsImportFile.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@AccountsImportFile","@CreateAccountByImportFile"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User is on the Import Accounts page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User clicks the Choose File button and uploads the account file","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see the uploaded file name","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":18,"tags":["@AccountsImportFile","@ImportnowofAccountsfile"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User uploads the file on the Import Accounts page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User selects creates new records and clicks import now by fallowing steps","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then user should view the imported results","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":24,"tags":["@AccountsImportFile","@CreateNewrecordsandUpdateexisting"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User uploads the file in the Import file page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User selects createnew records,update existing records and clicks next","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should get a dialog box with a message","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":30,"tags":["@AccountsImportFile","@UndoImportofAccountsImport"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is in View Import Results Page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When User clicks undoImport button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User can navigate to the UndoImport page with message","stepMatchArguments":[]}]},
]; // bdd-data-end