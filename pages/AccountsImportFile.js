import { expect } from '@playwright/test';
import { AccountsPage } from './AccountsPage.js';

export class AccountsImportFile {
  constructor(page) {
 this.page=page;
 this.updateWarningMessage = null;
 this.accountsPage = new AccountsPage(page);

 //this.choosefilebutton=page.locator('iframe').contentFrame().locator('#userfile');
 
 this.iframe = page.locator('iframe:visible').contentFrame();
 this.fileInput = this.iframe.locator('#userfile');
 this.nextButton = this.iframe.locator('#gonext:visible');
    //this.uploadedFileName = iframe.locator('#userfile');
 this.createnewrecord=this.iframe.getByText('Create new records only');
 this.updateExistingRadio = this.iframe.getByRole('radio').nth(1);
 //this.next=page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
 this.downloadimportfile=this.iframe.getByRole('link', { name: 'Download Import File Template' });
 this.importNow =this.iframe.getByRole('button', { name: 'Import Now' });
 this.viewResults = this.iframe.getByRole('heading', { name: 'Step 5: View Import Results' });
 //this.undoimportbutton=this.locator('iframe').contentFrame().getByRole('button', { name: 'Undo Import' });
 //this.undoimportPage=this.locator('iframe').contentFrame().getByRole('heading', { name: 'Undo Import' });
this.undoimportbutton = this.iframe.getByRole('button', { name: 'Undo Import' });
this.undoimportPage = this.iframe.getByRole('heading', { name: 'Undo Import' }); 
}
  //open import file
   async openImportAccountsPage() {
 await this.page.waitForURL(/#\/home/, { timeout: 30000 });

  await expect(this.accountsPage.accountsMenu).toBeVisible({
    timeout: 30000
  });

    await this.accountsPage.clickAccountsModule();
    await this.accountsPage.clickImportAccount();
  }

  //upload file
 async uploadAccountFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
  }

  async clickFirstNext() {
  await this.createnewrecord.click();  
  await this.clickNextAndWaitForStepChange();
}

async clickSecondNext() {
  await this.clickNextAndWaitForStepChange();
}

async clickThirdNext() {
  await this.clickNextAndWaitForStepChange();
}

async clickNextAndWaitForStepChange() {
  const heading = this.iframe.getByRole('heading', { level: 2 });
  const currentStep = await heading.innerText();

  await this.nextButton.click();
  await expect(heading).not.toHaveText(currentStep);
}

async clickImportNow() {
  await this.importNow.click();
}

async viewImportResults()
{
  await expect(this.viewResults).toBeVisible();
}

async selectUpdateMode() {
  await this.updateExistingRadio.check();
  await expect(this.updateExistingRadio).toBeChecked();
}
async clickNextAndAcceptUpdateWarning() {
  const dialogPromise = this.page.waitForEvent('dialog').then(async dialog => {
    expect(dialog.type()).toBe('confirm');
    const message = dialog.message();
    await dialog.accept();
    return message;
  });

  await this.nextButton.click();
  this.updateWarningMessage = await dialogPromise;
  expect(this.updateWarningMessage).toContain('You have selected to update records');
}

async expectUpdateWarningMessage() {
  expect(this.updateWarningMessage).toContain('You have selected to update records');
}


async viewresultsPage()
{

  await expect(this.viewResults).toBeVisible();
}

async clickUndoImport()
{
  await this.undoimportbutton.click();
}
async  undoimportresults()
{
  await expect(this.page).toHaveURL(
    /#\/import\/Last\?current_step=4.*import_module=Accounts/
  );
}
}
