import { expect } from '@playwright/test';
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
    this.importVCardPageTitlelabel = page.locator('scrm-dynamic-label').getByText('John Doe')

    

    // ----- Import Contacts page -----
    this.uploadImportFilePageTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
    this.chooseFileButtonImport = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
    this.nextButtonImport = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
    this.noFileChosenLabelImport = page.locator('text=No File Chosen').first();
    this.downloadTemplateLink = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
    this.createNewOnlyRadio = page.locator('iframe').contentFrame().locator('#import_create');
    this.createNewAndUpdateRadio = page.locator('iframe').contentFrame().locator('#import_update');
    this.importRequiredFieldError = page.locator('.error-message, .field-error, [role="alert"]').first();
    this.invalidImportFileMessage = page.locator('text=/invalid import file/i').first();
    this.importVCardPageTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Import vCard' });
    this.step2pageTitle=page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
    //this.demolabel=page.locator('scrm-dynamic-label').getByText('John Doe');
    this.requiredFieldError = page.locator('iframe').contentFrame().getByText('Missing required fields:');
  }


  
  // ----- Menu actions -----
  async hoverContactsMenu() {


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
    console.log('Clicked Create From vCard option');

    await this.createFromVCardOption.click();
  }

  async clickImportContacts() {
    await this.importContactsOption.click();

  }
  async importVCardPageVisible(){
    await expect(this.importVCardPageTitle).toBeVisible();
        console.log('Import vCard page is visible');

  }
async importFilePageTitleVisible(){
  console.log('Import file page title is visible');
  await expect(this.uploadImportFilePageTitle).toBeVisible();
}
   

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

async fillContactForm({
  firstName,
  lastName,
  email,
  
} = {}) {

  if (firstName) {
    await this.firstNameField.fill(firstName);
  }

  if (lastName) {
    await this.lastNameField.fill(lastName);
  }

  if (email) {
    await this.emailField.fill(email);
  }
  //this.createdContactName = `${firstName} ${lastName}`;
  
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
  const uniqueEmail = contact.email.replace(
    '@',
    `.${Date.now()}@`
  );

  const contactToCreate = {
    ...contact,
    email: uniqueEmail
  };

  console.log(`Creating contact: ${contact.firstName} ${contact.lastName}`);
  console.log(`Generated email: ${uniqueEmail}`);

  await this.fillContactForm(contactToCreate);

  this.createdContactName =
    `${contact.firstName} ${contact.lastName}`;

  await this.save();

  console.log(`Saved contact: ${this.createdContactName}`);

  // Wait until SuiteCRM navigates to the Contact Detail/Edit page
  await this.page.waitForURL(
    /#\/contacts\/edit\?return_module=Contacts&return_action=DetailView/i,
    { timeout: 30000 }
  );

  console.log('Contact Detail View page opened');
  console.log('Current URL:', this.page.url());


   
  };



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
  async uploadVCardFile() {
      console.log(`Uploading vCard file: ${filePath}`);
   const fileInput = this.page
    .locator('iframe')
    .contentFrame()
    .locator('input[type="file"]');
  await fileInput.setInputFiles(filePath);

  console.log('vCard file uploaded successfully');
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


  async uploadFile(fileType) {
    await this.chooseFileButtonImport.setInputFiles("C:\\Users\\HP\\Downloads\\Contacts.csv");
     console.log(`Uploading file`);
     await this.nextButtonImport.click();

    

  }



/*
async verifyVCardCreatedContact() {

  console.log('Verifying Contact created from vCard');

  await expect(this.page).toHaveURL(
    /contacts/i,
    { timeout: 30000 }
  );

  console.log(
    'Contact created from vCard successfully'
  );
}



async verifyImportVCardPage() {

  console.log('Checking Import vCard page...');


  await expect(this.importVCardPageTitle).toBeVisible({
    timeout: 15000
  });

  await expect(this.chooseFileButtonVCard).toBeVisible({
    timeout: 15000
  });

  await expect(this.importVCardButton).toBeVisible({
    timeout: 15000
  });

  console.log('Import vCard page displayed successfully');
}

async uploadImportContactsFile(filePath) {

  console.log(
    `Uploading Contacts import file: ${filePath}`
  );

  await this.chooseFileButtonImport.setInputFiles(
    filePath
  );

  await this.nextButtonImport.click();
}




async clickImportContactsNextWithoutFile() {

  console.log(
    'Clicking Next without selecting an import file'
  );

  await this.nextButtonImport.click();
}

async verifyImportContactsPage() {

  console.log('Checking Import Contacts page...');

  await expect(
    this.uploadImportFilePageTitle
  ).toBeVisible({ timeout: 15000 });

  await expect(
    this.chooseFileButtonImport
  ).toBeVisible({ timeout: 15000 });

  await expect(
    this.nextButtonImport
  ).toBeVisible({ timeout: 15000 });

  await expect(
    this.downloadTemplateLink
  ).toBeVisible({ timeout: 15000 });

  await expect(
    this.createNewOnlyRadio
  ).toBeVisible({ timeout: 15000 });

  await expect(
    this.createNewAndUpdateRadio
  ).toBeVisible({ timeout: 15000 });

  console.log(
    'Import Contacts page displayed successfully'
  );
}

async verifyImportContactsDashboard() {

  console.log(
    'Verifying Contacts dashboard after import'
  );

  await expect(
    this.contactsDashboardTitle
  ).toBeVisible({ timeout: 30000 });

  console.log(
    'Contacts dashboard displayed successfully'
  );
}
  async uploadInvalidImportContactsFile() {

  const filePath = contactsData.importContacts.invalidFile;

  console.log(`Uploading invalid Contact Import file: ${filePath}`);

  await this.chooseFileButtonImport.setInputFiles(filePath);

  await this.nextButtonImport.click();
}
async verifyContactDetailsPage() {

  await expect(this.page).toHaveURL(/contact.*(view|detail)/i);

}

  // ----- Import Contacts actions -----
  async uploadImportContactsFile(filePath) {

  console.log(
    `Uploading Contacts import file: ${filePath}`
  );

  await this.chooseFileButtonImport.setInputFiles(
    filePath
  );

  await this.nextButtonImport.click();
}*/


}