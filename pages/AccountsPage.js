import { expect } from '@playwright/test';
import { logger } from "../utils/logger.js";


export class AccountsPage {
  constructor(page) {
    this.page = page;
    this.existingAccountName = undefined;
    this.existingAccountHref = undefined;

    this.accountsMenu = page
      .locator('a')
      .filter({ hasText: /^Accounts$/ })
      .first();
    this.createAccount = page.getByRole('link', { name: 'Create Account', exact: true });
    this.viewAccount = page.getByRole('link', { name: 'View Accounts' });
    this.importAccount = page.getByRole('link', { name: 'Import Accounts' });
    this.create = page.getByRole('link', { name: 'Create Account', exact: true });
    this.createPage=page.locator("//span[@class='dynamic-label ng-star-inserted']");
    this.recentlyviewd = this.accountsMenu
      .locator('xpath=ancestor::li[1]')
      .getByText('Recently Viewed', { exact: true });

      this.recentlyViewedAccountRecords = page.locator(
  'scrm-table-body table tbody tr td.cdk-column-name a'
);

    //existing account
    this.existingAccount =page.locator('scrm-table-body table tbody tr td.cdk-column-name a');

   
    
    //create Account page elements

     // Input fields
    this.inputNameField = page.locator(
        //('//label[normalize-space()="NAME"]/parent::*//input'));
      '//label[contains(normalize-space(),"NAME")]/following::input[1]');
    this.inputEmail = page.locator(
      '//label[contains(normalize-space(),"EMAIL ADDRESS")]/following::input[1]'
    );
    // Buttons
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    // Created account page
    this.createdPagenavigation = page.locator(
      'span.dynamic-label.ng-star-inserted:visible'
    );
   
    this.nameErrorMessage = page.getByText('Missing required field: Name', { exact: true });
  
    //popup
   // this.cancelPopupMessage=page.locator("//span[contains(text(),'You are about to leave this record without saving ')]");
    this.cancelPopupMessage = this.page.getByRole('dialog');

   
   // Labels
    // this.inputName = page.locator('label:has-text("NAME")');
    // this.Email = page.locator('label:has-text("EMAIL ADDRESS")');
    
  }

  async enterMandatoryFields(accountData) {
    await this.inputNameField.fill(accountData.name);
    await this.inputEmail.fill(accountData.emailAddress);
    logger.info("input name field");
  }

  async clickSave() {
    await this.saveButton.click();
    await this.page.waitForTimeout(2000);

    console.log('URL after Save:', this.page.url());
  }

  async clickCancel()
  {
    await  expect(this.cancelButton).toBeVisible();
    await this.cancelButton.click();
  }
  async verifyCreatedAccount(accountName) {
    await this.createdPagenavigation.waitFor();

    await expect(this.page
     .getByRole('tabpanel', { name: 'OVERVIEW' })
      .getByText(accountName, { exact: true })
    ).toBeVisible();
      
  }
  

    async clickAccountsModule() {
    await expect(this.accountsMenu).toBeVisible({ timeout: 20000 });
    
    await this.accountsMenu.click();
    console.log('After Accounts click:', this.page.url());
  }

  async clickCreateAccount() {
    await expect(this.createAccount).toBeVisible();
    await this.createAccount.click();
   // await expect(this.inputNameField).toBeVisible();
    await expect(this.inputNameField).toBeVisible({ timeout: 10000 });
    await expect(this.inputEmail).toBeVisible({ timeout: 10000 });
    console.log('Name input count:', await this.inputNameField.count());
  }


  //---------------

  async openCreateAccountPage() {
  await expect(this.accountsMenu).toBeVisible();

  await this.accountsMenu.click();

  await expect(this.createAccount).toBeVisible();
  await this.createAccount.click();

  await expect(this.inputNameField).toBeVisible();
  await expect(this.inputEmail).toBeVisible();
}
  async verifyCreateAccountPage() {
   // await expect(this.inputNameField).toBeVisible({ timeout: 10000 });
    await expect(this.inputEmail).toBeVisible({ timeout: 10000 });
  }

  async verifyAccountsDashboard() {
    await expect(this.createAccount).toBeVisible({ timeout: 10000 });
    await expect(this.importAccount).toBeVisible({ timeout: 10000 });
    await expect(this.viewAccount).toBeVisible({ timeout: 10000 });
  }

  //save without entering AccountDetails in CreateAccount page
  async clickSaveWithoutData() {
  await this.saveButton.click();
}
 //createAccount Name validation
async verifyNameRequiredError() {
  await expect(this.nameErrorMessage).toBeVisible();
}

//recentlyview
async clickRecentlyViewed() {
  await expect(this.accountsMenu).toBeVisible();
  await this.accountsMenu.click();
  await expect(this.recentlyviewd).toBeVisible();
  await this.recentlyviewd.click();
}

async verifyRecentlyViewedPage() {
  await expect(this.page).toHaveURL(/#\/accounts(?:$|[?])/);
  await expect(this.page.getByText('ACCOUNTS', { exact: true })).toBeVisible();
}


//view accounts
async clickViewAccounts()
{
  await expect(this.viewAccount).toBeVisible();
  await this.viewAccount.click();
}

async verifyViewAccountNavigation()
{
   await expect(this.page).toHaveURL(
    /#\/accounts\/index\?return_module=Accounts&return_action=DetailView/)
}

async verifyAccountsDashboardPage()
{
  await expect(this.page).toHaveURL(/#\/accounts(?:$|\?)/);

  await expect(
    this.page.getByText('ACCOUNTS', { exact: true })
  ).toBeVisible();

  
  console.log('User navigated back to Accounts Dashboard');

}

//import Account
async clickImportAccount()
{
  await expect(this.importAccount).toBeVisible();
  await this.importAccount.click();
}

async verifyImportPageNav()
{
   await expect(this.page).toHaveURL(
    /#\/import\/step1\?import_module=Accounts&return_module=Accounts&return_action=index/
  );
}

//existingaccount
async openExistingAccount() {
  await this.clickAccountsModule();
  await expect(this.viewAccount).toBeVisible();
  await this.viewAccount.click();

  const account =this.existingAccount.first();

  await expect(account).toBeVisible();

  const accountName = (await account.innerText()).trim();
  this.existingAccountName = accountName;
  this.existingAccountHref = await account.getAttribute('href');

  console.log('Existing account:', accountName);

  await account.click();

  await expect(this.page).toHaveURL(/#\/accounts\/record\//);

  return accountName;
}

//recentlyviewd record
async verifyRecentlyViewedRecord(accountName) {
   const recentlyViewedRecord =
    this.recentlyViewedAccountRecords.filter({
      hasText: accountName
    });

  await expect(recentlyViewedRecord.first()).toBeVisible();

  console.log(
    `Recently Viewed record verified: ${accountName}`
  );
}

//verifycancel popup
async verifyCancelPopupMessage() {
     await expect(this.cancelPopupMessage).toBeVisible({ timeout: 10000 });
  await expect(this.cancelPopupMessage).toContainText(
    /You are about to leave this record without saving any changes you may have made to the record\. Are you sure you want to navigate away from this record\?/i
  );
  }


async verifyErrorMessage(expectedMessage)
{
  await expect(this.nameErrorMessage).toHaveText(expectedMessage);
}

}
