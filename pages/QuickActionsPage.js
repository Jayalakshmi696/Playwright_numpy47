import { expect } from '@playwright/test';

export class QuickActionsPage {
    constructor(page) {
        this.page = page;
        this.quickCreate=page.getByLabel('Quick Create');
        this.quickActiontext= page.getByText('Quick Actions');
        this.createAccount = page.getByRole('link', { name: 'Create Account' }); 
        this.createContact=page.getByRole('link', { name: 'Create Contact' });
        this.createOpportunity=page.getByRole('link', { name: 'Create Opportunity' });
        this.createLead=page.getByRole('link', { name: 'Create Lead' });
        this.createQuote=page.getByRole('link', { name: 'Create Quote' });
        this.scheduleMeeting=page.getByRole('link', { name: 'Schedule Meeting' });
        this.scheduleCall=page.getByRole('link', { name: 'Schedule Call' });
        this.createPage=page.getByText('Create', { exact: true });

    }

    async clickQuickActions() {
        await this.quickCreate.click();
        await expect(this.quickActiontext).toBeVisible();
    }

  async clickCreateAccount() {
    await this.createAccount.click();
    await expect(this.createPage).toBeVisible();
  }

  async clickCreateContact() {
    await this.createContact.click();
    await expect(this.createPage).toBeVisible();
  }

  async clickCreateOpportunity() {
    await this.createOpportunity.click();
    await expect(this.createPage).toBeVisible();
  }
  async clickCreateLead() {
    await this.createLead.click();
    await expect(this.createPage).toBeVisible();
  }
  async clickCreateQuote() {
    await this.createQuote.click();
    await expect(this.createPage).toBeVisible();
  }
  async clickScheduleMeeting() {
    await this.scheduleMeeting.click();
    await expect(this.createPage).toBeVisible();
  }
  async clickScheduleCall() {
    await this.scheduleCall.click();
    await expect(this.createPage).toBeVisible();
  }


}

