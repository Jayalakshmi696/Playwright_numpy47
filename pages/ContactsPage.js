import { expect } from '@playwright/test';
import { logger } from "../utils/logger.js";
import cData from "../test-data/contactsData.json" with { type: "json" };
import opportunitiesData from '../test-data/opportunitiesData.json' with { type: 'json' };

export class ContactsPage {
  constructor(page) {
    this.page = page;

    // ----- Menu bar -----
    //this.contactsMenu = page.locator('a').filter({ hasText: /^Contacts$/ });
    this.contactsMenu = page.locator('scrm-base-navbar a.top-nav-link.dropdown-toggle').filter({ hasText: /^Contacts$/ });

    // ----- Contacts dropdown options -----
    this.createContactOption = page.getByRole('link', { name: 'Create Contact', exact: true });
    this.createFromVCardOption = page.getByRole('link', { name: 'Create Contact From vC...' });
   this.viewContactsOption = page.getByRole('link', { name: 'View Contacts' });
    this.importContactsOption = page.getByRole('link', { name: 'Import Contacts' });

    // ----- Create Contact page -----
    this.createContactPageTitle = page.getByText('Create', { exact: true });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW' });
    this.moreInformationTab = page.getByRole('tab', { name: 'MORE INFORMATION' });

    this.firstNameField = page.getByRole('textbox').nth(1);
    this.lastNameField = page.getByRole('textbox').nth(2);
    this.emailField = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');
   
    this.createdContactName = null;
   
    this.requiredFieldError = page.getByText('Missing required field: Last');
    this.cancelConfirmDialog = page.getByText('You are about to leave this');

    // ----- View Contacts (dashboard) page -----
    this.contactsDashboardTitle = page.getByText('CONTACTS', { exact: true });
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    //this.recordsSection = page.locator('#records, .records-section').first();

    this.headerSelectDropDown = page.locator('scrm-table-header').getByLabel('Select Action Menu');
    this.headerBulkActionsDropDown = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
    this.nextPageButtonHeader = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
    this.previousPageButtonHeader = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
    this.beginningPageButtonHeader = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
    this.endPageButtonHeader = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
   // this.pageNumberHeader = page.locator('scrm-table-header').getByText('(1 - 20 of 202)');

    this.footerSelectDropDown = page.locator('scrm-table-footer').getByLabel('Select Action Menu');
    this.footerBulkActionsDropDown = page.locator('scrm-table-footer').getByRole('button', { name: 'Bulk Action' });
    this.nextPageButtonFooter = page.locator('scrm-table-footer').getByRole('button', { name: 'Next page' });
    this.previousPageButtonFooter = page.locator('scrm-table-footer').getByRole('button', { name: 'Previous page' });
    this.beginningPageButtonFooter = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to first page' });
    this.endPageButtonFooter = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to last page' });
   // this.pageNumberFooter = page.locator('scrm-table-footer').getByText('(1 - 20 of 202)');

    // ----- Import vCard page -----
    this.importVCardPageTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Import vCard' });
    this.chooseFileButtonVCard = page.locator('iframe').contentFrame().getByRole('button', { name: 'Choose File' });
    this.importVCardButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
    //this.noFileChosenLabelVCard = page.locator('iframe').contentFrame().getByText('No File Chosen').first();
    this.selectVCardAlert = page.locator('iframe').contentFrame().getByText(/select a vcard file/i).first();
    this.vCardRequiredFieldError = page.locator('.error-message, .field-error, [role="alert"]').first();
    this.importVCardPageTitlelabel = page.locator('scrm-dynamic-label').getByText('Test User1');
    this.invalidvcffileMessage = page.locator('iframe').contentFrame().getByText('vCard does not have all the');
    this.nofilevcard = page.locator('iframe').contentFrame().getByText('Alert');

    

    // ----- Import Contacts page -----
    //this.uploadImportFilePageTitle = page.locator('iframe').contentFrame().locator('h2.module-title-text').filter({ hasText: 'Step 1: Upload Import File' });
   this.uploadImportFilePageTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
    this.chooseFileButtonImport = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
    this.nextButtonImport = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
    this.noFileChosenLabelImport = page.locator('text=No File Chosen').first();
    this.downloadTemplateLink = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
    this.createNewOnlyRadio = page.locator('iframe').contentFrame().locator('#import_create');
    this.createNewAndUpdateRadio = page.locator('iframe').contentFrame().locator('#import_update');
    this.importRequiredFieldError = page.locator('.error-message, .field-error, [role="alert"]').first();
    this.invalidImportFileMessage = page.locator('iframe').contentFrame().getByText('Invalid import file name');
    this.importVCardPageTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Import vCard' });
    this.step2pageTitle=page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
    //this.demolabel=page.locator('scrm-dynamic-label').getByText('John Doe');
    this.requiredFieldError = page.locator('iframe').contentFrame().getByText('Missing required fields:');
  }

  
  // ----- Menu actions -----
  async hoverContactsMenu() {
    logger.info('Opening contacts menu');



    await this.contactsMenu.hover();
    console.log('Hovered over Contacts menu');

    
  }
  async viewContactsMenu()
 {
 await expect(this.contactsMenu).toBeVisible();
 }

  async clickCreateContact() {
    await  this.createContactOption.click();
  }

  async clickViewContacts() {
    await this.viewContactsOption.click();
  }

  async clickCreateFromVCard() {

    console.log('Before clicking Create Contact From vCard');

  await this.createFromVCardOption.click();

  console.log('After clicking Create Contact From vCard');
}
    /*
    
    console.log('Clicked Create From vCard option');

    await this.createFromVCardOption.click();

    */
  

  async clickImportContacts() {
    await this.importContactsOption.click();

  }
  async importVCardPageVisible(){
    await expect(this.importVCardPageTitle).toBeVisible();
        console.log('Import vCard page is visible');

  }
  async importFilePageTitleVisible() {

      //await this.page.waitForURL(url =>url.toString().includes('/#/import/step1') && url.toString().includes('import_module=Contacts') && url.toString().includes('return_module=Contacts'));

  await expect(this.uploadImportFilePageTitle).toBeVisible();

  console.log('Import file page title is visible');

  await expect(this.uploadImportFilePageTitle).toBeVisible({
    timeout: 10000
  });

  console.log('Import file page title is visible');
}

  /*
async importFilePageTitleVisible(){
  console.log('Import file page title is visible');
  await expect(this.uploadImportFilePageTitle).toBeVisible();
}*/
   

  async chooseFileButtonImportVisible(){
    await this.chooseFileButtonImport.click();
  }
  async nextButtonImportVisible(){
    await expect(this.nextButtonImport).click();
  }
async step2PageTitleVisible(){
  await expect(this.step2pageTitle).toBeVisible();
} 

async
  async requiredFieldErrorVisible(){
    await expect(this.requiredFieldError).toBeVisible();
  }


  uploadImportFilePageTitle
  // ----- Create Contact actions -----

async fillContactForm({ firstName, lastName } = {}) {
  logger.info('Filling contact form)');
  if (firstName) {
    await this.firstNameField.fill(firstName);
  }

  if (lastName) {
    await this.lastNameField.fill(lastName);
  }
}

async verifyCreatedContact() {
  console.log('Verifying Contact Detail View page');
  console.log('Current URL:', this.page.url());

  await expect(this.page).toHaveURL(
    /#\/contacts\/edit\?return_module=Contacts&return_action=DetailView/i,
    { timeout: 30000 }
  );

  console.log('Contact Detail View page is displayed successfully');
    
    }
  



async createContact(contact) {
  await this.hoverContactsMenu();
  await this.clickCreateContact();

  console.log('Contact received:', contact);

  const contactToCreate = {
    firstName: contact.firstName,
    lastName: contact.lastName
  };

  console.log(
    `Creating contact: ${contactToCreate.firstName} ${contactToCreate.lastName}`
  );

  await this.fillContactForm(contactToCreate);

  this.createdContactName =
    `${contactToCreate.firstName} ${contactToCreate.lastName}`;

  await this.save();

  console.log(`Saved contact: ${this.createdContactName}`);

  await this.page.waitForURL(
    /#\/contacts\/edit\?return_module=Contacts&return_action=DetailView/i,
    { timeout: 30000 }
  );

  console.log('Contact Detail View page opened');
  console.log('Current URL:', this.page.url());
}


  async save() {
    await this.saveButton.click();
  }


  async cancel() {
    await this.cancelButton.click();
  }
    async VCardChooseFileButton(){
      await this .chooseFileButtonVCard.click();
      console.log('Choose file button for vCard clicked');
    }
  // ----- vCard actions -----
 async uploadVCardFile(inputFile) {
  logger.info('Uploading vCard file')

//console.log(`Uploading vCard file: ${inputFile}`);
  const fileMap = {
    ValidFile: 'ValidVcardFile',
    InValidFile: 'InValidFile',
    NoFile: 'NoFile'
  };

  const fileKey = fileMap[inputFile];

  if (!fileKey) {
    throw new Error(`Unknown vCard file type: ${inputFile}`);
  }

  // No file selected
  if (inputFile === 'NoFile') {
    console.log('No vCard file selected');
    return;
  }

  const filePath = opportunitiesData[fileKey]?.filepath;

  if (!filePath) {
    throw new Error(`File path is missing for: ${fileKey}`);
  }

  console.log(`Uploading vCard ${inputFile}: ${filePath}`);

  const fileInput = this.page
    .locator('iframe')
    .first()
    .contentFrame()
    .locator('input[type="file"]');

  await fileInput.setInputFiles(filePath, {
    timeout: 10000
  });

  const fileName = await fileInput.evaluate(
    input => input.files[0]?.name
  );

  console.log(`Selected vCard file: ${fileName}`);
}
async clickImportVCardButton() {
  console.log('Clicking Import vCard button');

   await this.importVCardButton.click();

  await this.page.waitForTimeout(2000);

  console.log('After Import vCard click');
  console.log('Current URL:', this.page.url());
}
  



async importVCardNewPageTitle() {
 await expect(this.importVCardPageTitlelabel).toBeVisible();
 //await expect(this.importVCardPageTitle).toBeVisible();
  console.log('Verifying Import vCard new page title');
}


  async uploadContactsFile(inputFile) {
    logger.info('Uploading Contacts file');

  const fileMap = {
    ValidFile: 'ValidContactsCSVFile',
    InValidFile: 'InvalidContactsCSVFile',
    NoFile: 'NoContactsFile'
  };

  const fileKey = fileMap[inputFile];

  if (!fileKey) {
    throw new Error(`Unknown Contacts file type: ${inputFile}`);
  }

  // No file selected
  if (inputFile === 'NoFile') {
    console.log('No Contacts file selected');
    return;
  }

  const filePath = opportunitiesData[fileKey]?.filepath;

  if (!filePath) {
    throw new Error(`File path is missing for: ${fileKey}`);
  }

  console.log(`Uploading Contacts ${inputFile}: ${filePath}`);

  await this.chooseFileButtonImport.setInputFiles(filePath);

  console.log(`${inputFile} uploaded successfully`);
}
    
async clickNextButtonImport() {
  await this.nextButtonImport.click();
}

async verifyImportContactsResult(result) {

  if (result === 'Contacts dashboard page') {
    await this.step2PageTitleVisible();

  } else if (result === 'Required field error messages') {
    await this.requiredFieldErrorVisible();

  } else if (result === 'Invalid Import File name message') {
    await this.invalidImportFileMessageVisible();

  } else {
    throw new Error(`Unknown import result: ${result}`);
  }
}

async invalidImportFileMessageVisible() {
  console.log('Verifying invalid import file message');
  await expect(this.invalidImportFileMessage).toBeVisible();
}

async verifyImportVCardResult(result) {

  if (result === 'Detailed view page of new Contact') {

    await this.importVCardNewPageTitle();

  } else if (result === 'Select a Vcard file Alert appears') {

    await this.selectVCardAlertVisible();

  } else if (result === 'Required field error messages') {

    await this.requiredFieldErrorVisible();

  } else {

    throw new Error(`Unknown vCard result: ${result}`);
  }
}
async selectVCardAlertVisible() {
  await expect(this.selectVCardAlert).toBeVisible({
    timeout: 10000
  });

  console.log('Select a vCard file alert is visible');
}

async invalidVCardFileMessageVisible() {
  console.log('Verifying invalid vCard file message');
  await expect(this.invalidvcffileMessage).toBeVisible({ timeout: 10000 });
}
async noFileVCardVisible() {
  
  console.log('Verifying no file vCard message');
  await expect(this.nofilevcard).toBeVisible({ timeout: 10000 });
}


  }
