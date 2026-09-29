import { expect } from '@playwright/test';

export class More2Page {
  constructor(page) {
    this.page = page;

    // More menu
    this.moreMenu = page.locator('a').filter({ hasText: 'More' });

    // More menu options
    this.viewTasksOption = page.getByRole('link', { name: 'Tasks' });
    this.viewNotesOption = page.getByRole('link', { name: 'Notes' });
    this.viewInvoicesOption = page.getByRole('link', { name: 'Invoices' });
    this.viewContractsOption = page.getByRole('link', { name: 'Contracts' });
    this.viewCasesOption = page.getByRole('link', { name: 'Cases' });
    this.viewTargetsOption = page.getByRole('link', { name: 'Targets', exact: true });

    // Dashboard/page headings
    this.tasksDashboard = page.getByText('TASKS', { exact: true });
    this.notesDashboard = page.getByText('NOTES', { exact: true });
    this.invoicesDashboard = page.getByText('INVOICES', { exact: true });
    this.contractsDashboard = page.getByText('CONTRACTS', { exact: true });
    this.casesDashboard = page.getByText('CASES', { exact: true });
    this.targetsDashboard = page.getByText('TARGETS', { exact: true });
  }

  async verifyMoreMenuIsVisible() {
    await expect(this.moreMenu).toBeVisible();
  }

  async openMoreMenu() {
    await expect(this.moreMenu).toBeVisible();
    await this.moreMenu.click();
  }

  async verifyMoreMenuDropdownIsDisplayed() {
    await this.openMoreMenu();

    await expect(this.viewTasksOption).toBeVisible();
    await expect(this.viewNotesOption).toBeVisible();
    await expect(this.viewInvoicesOption).toBeVisible();
    await expect(this.viewContractsOption).toBeVisible();
    await expect(this.viewCasesOption).toBeVisible();
    await expect(this.viewTargetsOption).toBeVisible();
  }

  async clickViewTasks() {
    await this.openMoreMenu();
    await expect(this.viewTasksOption).toBeVisible();
    await this.viewTasksOption.click();
  }

  async clickViewNotes() {
    await this.openMoreMenu();
    await expect(this.viewNotesOption).toBeVisible();
    await this.viewNotesOption.click();
  }

  async clickViewInvoices() {
    await this.openMoreMenu();
    await expect(this.viewInvoicesOption).toBeVisible();
    await this.viewInvoicesOption.click();
  }

  async clickViewContracts() {
    await this.openMoreMenu();
    await expect(this.viewContractsOption).toBeVisible();
    await this.viewContractsOption.click();
  }

  async clickViewCases() {
    await this.openMoreMenu();
    await expect(this.viewCasesOption).toBeVisible();
    await this.viewCasesOption.click();
  }

  async clickViewTargets() {
    await this.openMoreMenu();
    await expect(this.viewTargetsOption).toBeVisible();
    await this.viewTargetsOption.click();
  }

  async verifyTasksDashboard() {
   // await this.tasksDashboard.click();
    await expect(this.tasksDashboard).toBeVisible();
  }

  async verifyNotesDashboard() {
    await expect(this.notesDashboard).toBeVisible();
  }

  async verifyInvoicesDashboard() {
    await expect(this.invoicesDashboard).toBeVisible();
  }

  async verifyContractsDashboard() {
    await expect(this.contractsDashboard).toBeVisible();
  }

  async verifyCasesDashboard() {
    await expect(this.casesDashboard).toBeVisible();
  }

  async verifyTargetsDashboard() {
    await expect(this.targetsDashboard).toBeVisible();
  }
}



    
