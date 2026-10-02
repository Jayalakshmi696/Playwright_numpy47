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
        this.quotecreatePage=page.getByRole('link', {name: 'Quotes',
            exact: true
        });
        //page.getByText('Quotes', { exact: true });
        this.scheduleMeetingPage=page.locator('iframe').contentFrame().getByText('Meetings');
    }

    async clickQuickActions() {
        await this.quickCreate.click();
        await expect(this.quickActiontext).toBeVisible();
    }

  async clickCreateAccount() {
    await this.clickQuickActions();
    await expect(this.createAccount).toBeVisible();
    await this.createAccount.click();
    await expect(this.createPage).toBeVisible();
  }

  async clickCreateContact() {
    await this.clickQuickActions();
    await expect(this.createContact).toBeVisible();
    await this.createContact.click();
    await expect(this.createPage).toBeVisible();
  }

  async clickCreateOpportunity() {
    await this.clickQuickActions();
    await expect(this.createOpportunity).toBeVisible();
    await this.createOpportunity.click();
    await expect(this.createPage).toBeVisible();
  }
  async clickCreateLead() {
    await this.clickQuickActions();
    await expect(this.createLead).toBeVisible();
    await this.createLead.click();
    await expect(this.createPage).toBeVisible();
  }
  async clickCreateQuote() {
     await this.clickQuickActions();
    await expect(this.createQuote).toBeVisible();
    await this.createQuote.click();
    await expect(this.page).toHaveURL(/#\/quotes/);
    //await expect(this.quotecreatePage).toBeVisible();
  }
  async clickScheduleMeeting() {
    await this.clickQuickActions();
    await expect(this.scheduleMeeting).toBeVisible();
    await this.scheduleMeeting.click();
    await expect(this.scheduleMeetingPage).toBeVisible();
  }
  async clickScheduleCall() {
    await this.clickQuickActions();
    await expect(this.scheduleCall).toBeVisible();
    await this.scheduleCall.click();
  }

  async verifyQuickActionsItems() {
    const expectedItems = [
      'Create Account',
      'Create Contact',
      'Create Lead',
      'Create Opportunity',
      'Create Quote',
      'Schedule Meeting',
      'Schedule Call'
    ];

    for (const item of expectedItems) {
      await expect(
      this.page.getByRole('link', { name: item, exact: true })
    ).toBeVisible();
  
  }

  }
}

