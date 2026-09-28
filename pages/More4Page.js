import { expect } from '@playwright/test';

export class More4Page {
  constructor(page) {

    this.page=page


   this.moreMenu = this.page.getByText('More', { exact: true }).first()

    // Items in the More dropdown
    this.pdfTemplatesLink = this.page.getByRole('link', { name: 'PDF - Templates' });
    this.reportsLink = this.page.getByRole('link', { name: 'Reports', exact: true });
    this.knowledgeBaseLink = this.page.getByRole('link', { name: 'Knowledge Base', exact: true });
    this.kbCategoriesLink = this.page.getByRole('link', { name: 'KB - Categories' });
    this.emailTemplatesLink = this.page.getByRole('link', { name: /^Email - Template/ });
    this.surveysLink = this.page.getByRole('link', { name: 'Surveys', exact: true });

    // Maps the names in the feature file to the locators above
    this.more4Items = {
      'PDF - Templates': this.pdfTemplatesLink,
      'Reports': this.reportsLink,
      'Knowledge Base': this.knowledgeBaseLink,
      'KB - Categories': this.kbCategoriesLink,
      'Email - Templates': this.emailTemplatesLink,
      'Surveys': this.surveysLink,
    };

    this.pageUrls = {
      'PDF - Templates': /pdf-templates/i,
      'Reports': /reports/i,
      'Knowledge Base': /knowledge/i,
      'KB - Categories': /categor/i,
      'Email - Templates': /email-templates/i,
      'Surveys': /surveys/i,
    };
  }

  // Open the More dropdown
  async openMoreMenu() {
    await this.moreMenu.hover();
  }

  // Click an item in the More dropdown by its name
  async clickMoreItem(name) {
    const item = this.more4Items[name];
    await expect(item).toBeVisible();   // wait for the dropdown to show it
    await item.click();
  }

  async verifyPageOpened(name) {
    await expect(this.page).toHaveURL(this.pageUrls[name], { timeout: 15000 });
  }
}

  











