import { expect } from "@playwright/test";
import { logger } from "../utils/logger.js";

export class DocumentPage {
  constructor(page) {
    this.page = page;

    this.documentlink = page
      .locator("a.top-nav-link")
      .filter({ hasText: /^Documents$/ });
    this.creatDocumentLink = page.getByRole("link", {
      name: "Create Document",
    });
    this.viewDocumentLink = page.getByRole("link", { name: "View Documents" });

    this.documentDropdownOptions = {
      "Create Document": this.creatDocumentLink,
      "View Documents": this.viewDocumentLink,
    };

    this.documentTittle = page.getByText("DOCUMENTS", { exact: true });
    this.documentFilterButton = page.getByRole("button", { name: "Filter" });

    // Scenario: Verify "Creat Document" page opens

    this.creatDocumentPageTitle = this.page.getByText("Create", {
      exact: true,
    });
    this.creatDocumentSaveButton = this.page.getByRole("button", {
      name: "Save",
    });
    this.creatDocumentCancelButton = this.page.getByRole("button", {
      name: "Cancel",
    });
    this.DocumentCreatOtherTab = this.page.getByRole("tab", {
      name: "OVERVIEW",
    });
    this.DocumentOtherTab = this.page.getByRole("tab", { name: "OTHER" });

    //Scenario Outline: Validate error on saving Create Document Page with a mandatory field left blank

    this.docFileField = page.getByText("Upload Click or drag a file");
    this.docNameField = page.getByRole("textbox").nth(1);
    this.docPublishDateField = page
      .getByRole("textbox", { name: "yyyy-mm-dd" })
      .first();
    this.docRevisionField = page.getByRole("textbox").nth(2);
    this.documentFields = {
      File: this.docFileField,
      "Document Name": this.docNameField,
      "Publish Date": this.docPublishDateField,
      Revision: this.docRevisionField,
    };
    //Scenario: Create a document and verify it on the detail page and in the View Documents list

    this.CreateDocFileInput = this.page.locator('input[type="file"]');
    this.createEditButton = page.getByRole("button", { name: "Edit" });
    this.createActionButton = page.getByRole("button", { name: "Actions" });

    this.CreateDetailButton = {
      Edit: this.createEditButton,
      Action: this.createActionButton,
    };

    // Scenario: Verify "View Document" page opens

    this.bulkActionDropdown = page
      .locator("scrm-table-header")
      .getByRole("button", { name: "Bulk Action" });
    this.viewDocumentName = page.getByRole("columnheader", {
      name: "Document Name",
    });
    this.columnFile = page.getByRole("columnheader", { name: "File" });
    this.columnCategory = page.getByRole("columnheader", {
      name: "Category",
      exact: true,
    });
    this.columnSubCategory = page.getByRole("columnheader", {
      name: "Sub Category",
    });
    this.columnRevisionDate = page.getByRole("columnheader", {
      name: "Revision Date",
    });
    this.columnExpirationDate = page.getByRole("columnheader", {
      name: "Expiration Date",
    });
    this.columnUser = page.getByRole("columnheader", { name: "User" });

    this.documentColumns = {
      "Document Name": this.viewDocumentName,
      File: this.columnFile,
      Category: this.columnCategory,
      "Sub Category": this.columnSubCategory,
      "Revision Date": this.columnRevisionDate,
      "Expiration Date": this.columnExpirationDate,
      User: this.columnUser,
    };
    this.paginationFirst = page
      .locator("scrm-table-header")
      .getByRole("button", { name: "Navigate to first page" });
    this.paginationPrevious = page
      .locator("scrm-table-header")
      .getByRole("button", { name: "Previous page" });
    this.paginationNext = page
      .locator("scrm-table-header")
      .getByRole("button", { name: "Next page" });
    this.paginationLast = page
      .locator("scrm-table-header")
      .getByRole("button", { name: "Navigate to last page" });
    this.paginationCount = page
      .locator("scrm-table-header")
      .getByText(/\d+ - \d+ of \d+/);
  }

  //Scenario: Verify the "Documents"  Button.
  async documentHoverIcon() {
    logger.info("documentHoverIcon: Opening Documents dropdown");

    await this.documentlink.hover();
  }
  documentDropdownOption(name) {
    return this.documentDropdownOptions[name];
  }

  async clickDocumentLink() {
    await this.documentlink.click();
  }
  async verifyDocumentPageTitle() {
    await expect(this.documentTittle).toBeVisible();
  }
  async verifyDocumentPageFilterButton() {
    await expect(this.documentFilterButton).toBeVisible();
  }

  // // Scenario: Verify "Creat Document" page opens

  async CreatDocumentDropdown() {
    await this.creatDocumentLink.click();
    
  }
  async verifyCreatDocumentPage() {
    await expect(this.creatDocumentPageTitle).toBeVisible();
    await expect(this.creatDocumentSaveButton).toBeVisible();
    await expect(this.creatDocumentCancelButton).toBeVisible();
    await expect(this.DocumentCreatOtherTab).toBeVisible();
    await expect(this.DocumentOtherTab).toBeVisible();
  }
  //Scenario Outline: Validate error on saving Create Document Page with a mandatory field left blank

  async openCreateDocumentForm() {
    await this.documentHoverIcon();
    await this.CreatDocumentDropdown();
  }
  async clearCreatDocumentField(name) {
    // File is an upload field that starts empty
    if (name === "File") return;
    const field = this.documentFields[name];
    logger.info(`Clearing the "${name}" field`);

    // Date fields sometimes refill themselves; retry until the field stays empty (max 10s)
    await expect(async () => {
      await field.click();
      await field.press("ControlOrMeta+a");
      await field.press("Backspace");
      await field.press("Tab");
      await expect(field).toHaveValue("", { timeout: 1000 });
    }).toPass({ timeout: 10000 });
  }
  async clickCreatDocumentSave() {
     logger.info('Clicking Save on Create Document');
    await this.creatDocumentSaveButton.click();
  }
  getCreatDocumentValidationMessage(text) {
    return this.page.getByText(text).first();
  }
  // Scenario: Create a document and verify it on the detail page and in the View Documents list

  async fillCreateMandatoryDocumentFields(filePath, documentName) {
    logger.info(`Uploading file: ${filePath}`)
    await this.CreateDocFileInput.setInputFiles(filePath);
    await expect(this.docNameField).toHaveValue(/sampleDocument/);
      logger.warn('Document Name was auto-filled with the file name, replacing it');
    await expect(async () => {
      await this.docNameField.fill(documentName);
      await expect(this.docNameField).toHaveValue(documentName, {
        timeout: 1000,
      });
    }).toPass({ timeout: 10000 });
  }
  getDetailButton(name) {
    return this.CreateDetailButton[name];
  }
  getDocumentRow(documentName) {
    return this.page.getByRole("row").filter({ hasText: documentName });
  }
  // Scenario: Verify "View Document" page opens
  async verifyViewDocumentsPage(columnNames) {
    logger.info('Checking View Documents page components');
    await expect(this.documentTittle).toBeVisible();

    await expect(this.documentFilterButton).toBeVisible();
    await expect(this.bulkActionDropdown).toBeVisible();
    // Columns
    await expect(this.viewDocumentName).toBeVisible();
    await expect(this.columnFile).toBeVisible();
    await expect(this.columnCategory).toBeVisible();
    await expect(this.columnSubCategory).toBeVisible();
    await expect(this.columnRevisionDate).toBeVisible();
    await expect(this.columnExpirationDate).toBeVisible();
    await expect(this.columnUser).toBeVisible();
    // Pagination
    await expect(this.paginationFirst).toBeVisible();
    await expect(this.paginationPrevious).toBeVisible();
    await expect(this.paginationCount).toBeVisible();
    await expect(this.paginationNext).toBeVisible();
    await expect(this.paginationLast).toBeVisible();
  }
  async ViewDocumentDropdown() {
    await this.viewDocumentLink.click();
  }
}
