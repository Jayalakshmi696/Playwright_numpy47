import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
//import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(test);
import { AccountsPage } from '../pages/AccountsPage.js';
import accountData from '../test-data/accountData.json' with { type: 'json' };



Given('User is on the Import Accounts page', async ({importfilePage}) => {
  // Step: Given User is on the Import Accounts page
  // From: features\AccountsImportFile.feature:13:5
 await importfilePage.openImportAccountsPage();

});

When('User clicks the Choose File button and uploads the account file', async ({importfilePage}) => {
  // Step: When User clicks the Choose File button and uploads the account file
  // From: features\AccountsImportFile.feature:14:5

 await importfilePage.uploadAccountFile('test-data/ImportsAccounts.csv');
});

Then('User should see the uploaded file name', async ({importfilePage}) => {
  // Step: Then User should see the uploaded file name
  // From: features\AccountsImportFile.feature:15:5
  

  await expect(importfilePage.fileInput).toHaveValue(
      /ImportsAccounts\.csv/);
});

Given('User uploads the file on the Import Accounts page', async ({importfilePage}) => {
  // Step: Given User uploads the file on the Import Accounts page
  // From: features\AccountsImportFile.feature:19:1
  await importfilePage.openImportAccountsPage();
  await importfilePage.uploadAccountFile('test-data/ImportsAccounts.csv');

});

When('User selects creates new records and clicks import now by fallowing steps', async ({importfilePage}) => {
  // Step: When User selects creates new records and clicks import now by fallowing steps
  // From: features\AccountsImportFile.feature:20:1
  await importfilePage.clickFirstNext();
  await importfilePage.clickSecondNext();
  await importfilePage.clickThirdNext();
  await importfilePage.clickImportNow();

});

Then('user should view the imported results', async ({importfilePage}) => {
  // Step: Then user should view the imported results
  // From: features\AccountsImportFile.feature:21:1

  await importfilePage.viewImportResults();
});

Given('User uploads the file in the Import file page', async ({importfilePage}) => {
  // Step: Given User uploads the file in the Import file page
  // From: features\AccountsImportFile.feature:25:1
  await importfilePage.openImportAccountsPage();
  await importfilePage.uploadAccountFile('test-data/ImportsAccounts.csv');

});

When('User selects createnew records,update existing records and clicks next', async ({importfilePage}) => {
  // Step: When User selects createnew records,update existing records and clicks next
  // From: features\AccountsImportFile.feature:26:1
  await importfilePage.selectUpdateMode();
  await importfilePage.clickNextAndAcceptUpdateWarning();
});

Then('User should get a dialog box with a message', async ({importfilePage}) => {
  // Step: Then User should get a dialog box with a message
  // From: features\AccountsImportFile.feature:27:1

await importfilePage.expectUpdateWarningMessage();
});

Given('User is in View Import Results Page', async ({importfilePage}) => {
  // Step: Given User is in View Import Results Page
  // From: features\AccountsImportFile.feature:31:1

  const uniqueName = `Playwright Undo Import ${Date.now()}`;
  const csv = `Name,Website\n${uniqueName},https://example.test\n`;

  await importfilePage.openImportAccountsPage();
  await importfilePage.uploadAccountFile({
    name: 'ImportsAccountsUndo.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from(csv)
  });
  await importfilePage.clickFirstNext();
  await importfilePage.clickSecondNext();
  await importfilePage.clickThirdNext();
  await importfilePage.clickImportNow();
  await importfilePage.viewImportResults();
});

When('User clicks undoImport button', async ({importfilePage}) => {
  // Step: When User clicks undoImport button
  // From: features\AccountsImportFile.feature:32:1
await importfilePage.clickUndoImport();
});

Then('User can navigate to the UndoImport page with message', async ({importfilePage}) => {
  // Step: Then User can navigate to the UndoImport page with message
  // From: features\AccountsImportFile.feature:33:1
  await importfilePage.undoimportresults();
});