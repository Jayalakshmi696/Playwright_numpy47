import { expect } from '@playwright/test';

export class AccountsPage {
  constructor(page) {
    this.page = page;

    this.accountsMenu = page.locator('a').filter({ hasText: /^Accounts$/ });
    this.createAccount= page.getByRole('link', { name: 'Create Account' });
    this.viewAccount = page.getByRole('link', { name: 'View Accounts' });
    this.importAccount = page.getByRole('link', { name: 'Import Accounts' });
    this.create=page.getByText('Create', { exact: true });
      
    
  }


    async clickAccountsModule() {
     await expect(this.accountsMenu).toBeVisible();
    await this.accountsMenu.click();
    console.log('After Accounts click:', this.page.url());
  }

  async clickCreateAccount() {
    await this.createAccount.click();
  }

   async verifyCreateAccountPage() {
  await expect(this.create).toBeVisible();
}

  async verifyAccountsDashboard() {
    await expect(this.createAccount).toBeVisible({ timeout: 10000 });
    await expect(this.importAccount).toBeVisible({ timeout: 10000 });
    await expect(this.viewAccount).toBeVisible({ timeout: 10000 });
  }

  

 
}