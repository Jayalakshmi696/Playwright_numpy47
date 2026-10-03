import { test} from '../fixtures/suite8Fixtures.js';
import { createBdd } from 'playwright-bdd';
import { logger } from "../utils/logger.js";

import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(test);
import path from 'node:path';
import contactsData from '../test-data/contactsData.json' with { type: 'json' };
import { ContactsPage } from '../pages/ContactsPage.js';



Then('User should see Contacts menu in the Menu bar', async ({contactsPage}) => {
// const contactsPage = new ContactsPage(page);
  await contactsPage.viewContactsMenu();
});


When('User hovers over the Contacts Menu', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  await contactsPage.hoverContactsMenu();
});

Then('Contacts menu drop down list is displayed', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  await expect(contactsPage.createContactOption).toBeVisible();
  await expect(contactsPage.viewContactsOption).toBeVisible();
  await expect(contactsPage.createFromVCardOption).toBeVisible();
  await expect(contactsPage.importContactsOption).toBeVisible();
});

Given('Contacts menu drop-down list is displayed', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  await contactsPage.hoverContactsMenu();
  await expect(contactsPage.createContactOption).toBeVisible();
});

When('User clicks on the Create Contact option in the Contacts Menu', async ({contactsPage}) => {
   //const contactsPage = new ContactsPage(page);
  await contactsPage.clickCreateContact();
});

Then('User should see the correct components on the Create Contact page', async ({contactsPage}, dataTable) => {
  //const contactsPage = new ContactsPage(page);
  await expect(contactsPage.createContactPageTitle).toContainText(/create/i);
  await expect(contactsPage.saveButton).toBeVisible();
  await expect(contactsPage.cancelButton).toBeVisible();
  await expect(contactsPage.overviewTab).toBeVisible();
  await expect(contactsPage.moreInformationTab).toBeVisible();
});

Given('User is on the Create Contact page', async ({contactsPage}) => {
 //const contactsPage = new ContactsPage(page);
  await contactsPage.hoverContactsMenu();
  await contactsPage.clickCreateContact();
  await expect(contactsPage.createContactPageTitle).toBeVisible();
});

When('User enters Contacts Valid Data and clicks the Save button', async ({contactsPage}) => {
 

for (const contact of Object.values(contactsData)) {

    await contactsPage.createContact(contact);

}
});
  
   Then('User should see Create Contacts Detailed view page of new Contacts', async ({contactsPage}) => {
   //await expect(contactsPage).toHaveURL(/contacts.*(view|detail)/i);
   await contactsPage.verifyCreatedContact();

  console.log(`Created contact: ${contactsPage.createdContactName}`);
});

When('User enters Contacts No Data and clicks the Save button', async ({contactsPage}) => {
 //const contactsPage = new ContactsPage(page);
  await contactsPage.save();
});

Then('User should see Create Contacts Required field error messages', async ({contactsPage}) => {
//const contactsPage = new ContactsPage(page);
  await expect(contactsPage.requiredFieldError).toBeVisible();
});

When('User enters Contacts Valid Data and clicks the Cancel button', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  await contactsPage.fillContactForm({
    //firstName: 'John',
    //lastName: 'Doe',
    //email: `john.doe.${Date.now()}@example.com`,
  });
  await contactsPage.cancel();
});

Then('User should see Create Contacts Confirmation dialog appears', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  await expect(contactsPage.cancelConfirmDialog).toBeVisible();
});

// View Contacts (dashboard) page
When('User clicks on the View Contacts option in the Contacts Menu', async ({contactsPage}) => {
 //const contactsPage = new ContactsPage(page);
  await contactsPage.clickViewContacts();
});

Then('User should see the correct components on the Contacts dashboard page', async ({contactsPage}, dataTable) => {
  //const contactsPage = new ContactsPage(page);
  await expect(contactsPage.contactsDashboardTitle).toBeVisible();
  await expect(contactsPage.filterButton).toBeVisible();
  //await expect(contactsPage.insightsButton).toBeVisible();
  //await expect(contactsPage.recordsSection).toBeVisible();
 
  await expect(contactsPage.headerSelectDropDown).toBeVisible();
  await expect(contactsPage.headerBulkActionsDropDown).toBeVisible();
  await expect(contactsPage.nextPageButtonHeader).toBeVisible();
  await expect(contactsPage.previousPageButtonHeader).toBeVisible();
  await expect(contactsPage.beginningPageButtonHeader).toBeVisible();
  await expect(contactsPage.endPageButtonHeader).toBeVisible();
  //await expect(contactsPage.pageNumberHeader).toBeVisible();
 
  await expect(contactsPage.footerSelectDropDown).toBeVisible();
  await expect(contactsPage.footerBulkActionsDropDown).toBeVisible();
  await expect(contactsPage.nextPageButtonFooter).toBeVisible();
  await expect(contactsPage.previousPageButtonFooter).toBeVisible();
  await expect(contactsPage.beginningPageButtonFooter).toBeVisible();
  await expect(contactsPage.endPageButtonFooter).toBeVisible();
  //await expect(contactsPage.pageNumberFooter).toBeVisible();
});

// Import Contact from vCard

When('User clicks on Create Contact From vCard option', async ({contactsPage}) => {
 //const contactsPage = new ContactsPage(page);
 await contactsPage.hoverContactsMenu();
 await contactsPage.clickCreateFromVCard();
 //await contactsPage.VCardChooseFileButton();s
 //await contactsPage.uploadVCardFile();
 //await contactsPage.clickImportVCardButton();
timeout: 30000;
});

Then('User should see the import vCard page with correct components', async ({contactsPage}, dataTable) => {
  //const contactsPage = new ContactsPage(page);
  await contactsPage.importVCardPageVisible();
  

  
});

Given('Contacts menu is visible', async ({contactsPage}) => {
 // const contactsPage = new ContactsPage(page);





   
  

});
When('User uploads {string} and clicks Import Vcard button', async ({contactsPage}, InputFile) => {
  // Step: When User uploads "Valid File" and clicks Import Vcard button
  // From: features\Contacts.feature:62:11
  //await contactsPage.importVCardNewPageTitle();
    await contactsPage.hoverContactsMenu();
  await contactsPage.clickCreateFromVCard();
   await contactsPage.importVCardPageVisible();
await contactsPage.importVCardPageVisible();

    await contactsPage.uploadVCardFile(InputFile);

    await contactsPage.clickImportVCardButton();
    });
  /*
  await contactsPage.importVCardPageVisible();
    await contactsPage.uploadVCardFile();
    await contactsPage.clickImportVCardButton();
});
*/
Then('User should see the Import vCard {string}', async ({contactsPage}, Result) => {
  // Step: Then User should see the Import vCard "Detailed view page of new Contact"
  // From: features\Contacts.feature:63:11


  switch (Result.trim()) {

      case 'Detailed view page of new Contact':
        await contactsPage.verifyImportVCardResult(Result);
        break;

      case 'Select a Vcard file Alert appears':
        await contactsPage.noFileVCardVisible();
        break;

      case 'Required field error messages':
        await contactsPage.invalidVCardFileMessageVisible();
        break;

      default:
        throw new Error(`Unknown vCard result: ${Result}`);
    }
  /*
    await contactsPage.verifyImportVCardResult(Result);
    await contactsPage.noFileVCardVisible();
    await contactsPage.invalidVCardFileMessageVisible();
    */
});

When('User clicks on Import Contacts option in Contacts Menu', async ({contactsPage}) => {
  // Step: When User clicks on Import Contacts option in Contacts Menu
  // From: features\Contacts.feature:73:9
   await contactsPage.hoverContactsMenu();
 await contactsPage.clickImportContacts();
});

Then('User should see the import Contacts   page with correct components', async ({contactsPage}, dataTable) => {
  // Step: Then User should see the import Contacts   page with correct components
  // From: features\Contacts.feature:74:9
  await contactsPage.importFilePageTitleVisible();
});

Given('User is on Import Contacts page', async ({contactsPage}) => {
  // Step: Given User is on Import Contacts page
  // From: features\Contacts.feature:84:11
  //await contactsPage.importFilePageTitleVisible();
  await contactsPage.hoverContactsMenu();
  await contactsPage.clickImportContacts();
  await contactsPage.importFilePageTitleVisible();
});

When('User uploads Contacts {string} and clicks Next button', async ({contactsPage}, InputFile) => {
  // Step: When User uploads Contacts "Valid File" and clicks Next button
  // From: features\Contacts.feature:85:11
   // await contactsPage.chooseFileButtonImportVisible();

    await contactsPage.uploadContactsFile(InputFile);

    await contactsPage.clickNextButtonImport();
});

Then('User should see Import Contacts {string}', async ({contactsPage}, Result) => {
  // Step: Then User should see Import Contacts "Contacts dashboard page"
  // From: features\Contacts.feature:86:11
   //await contactsPage.step2PageTitleVisible();
    await contactsPage.verifyImportContactsResult(Result);
   
});




















//here
/*
When('User uploads Contacts Valid File and clicks Next button', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  //await contactsPage.uploadImportContactsFile(importFiles['Valid File']);
  await contactsPage.chooseFileButtonImportVisible();
  await contactsPage.nextButtonImportVisible();

     
});

Then('User should see Import Contacts Contacts dashboard page', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  await expect(contactsPage.contactsDashboardTitle).toBeVisible();
});

When('User uploads Contacts No File and clicks Next button', async ({contactsPage}) => {
  // const contactsPage = new ContactsPage(page);
  // No file selected: click Next directly without setting input files.
await contactsPage.nextButtonImportVisible();});

Then('User should see Import Contacts Required field error messages', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
    await contactsPage.step2PageTitleVisible();

});

When('User uploads Contacts InValid File and clicks Next button', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
   await contactsPage.uploadInvalidImportContactsFile();

});

Then('User should see Import Contacts Invalid Import File name message', async ({contactsPage}) => {
  //const contactsPage = new ContactsPage(page);
  //await expect(contactsPage.invalidImportFileMessage).toBeVisible();
  await contactsPage.requiredFieldErrorVisible();
});*/

