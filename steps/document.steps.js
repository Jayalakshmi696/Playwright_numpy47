import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { DocumentPage } from "../pages/DocumentPage.js";
import { test } from "../fixtures/suite8Fixtures.js";
import documentData from "../test-data/documentData.json" with { type: "json" };
import { logger } from "../utils/logger.js";
const { Given, When, Then } = createBdd(test);

When(
  "the user hovers over the {string} button in the top navigation bar",
  async ({ documentPage }, arg) => {
    // Step: When the user hovers over the "Documents" button in the top navigation bar
    // From: features/Document.feature:11:5
    //const documentPage = new DocumentPage(page);
    await documentPage.documentHoverIcon();
  },
);

Then(
  "user should see the {string} and {string} options in the dropdown menu",
  async ({ documentPage }, opt1, opt2) => {
    // Step: Then user should see the "Create Document" and "View Documents" options in the dropdown menu
    // From: features/Document.feature:12:5
    //const documentPage = new DocumentPage(page);
    for (const opt of [opt1, opt2]) {
      await expect(documentPage.documentDropdownOption(opt)).toBeVisible();
    }
  },
);
When("the user clicks the {string} menu item", async ({documentPage }, menuName) => {
  //the user clicks the "Documents" menu item
  //const documentPage = new DocumentPage(page);
  await documentPage.clickDocumentLink();
});

Then(
  "the user should be navigated to {string} Dashboard page and should see the components.",
  async ({ documentPage }, dashboardName, dataTable) => {
    // Step: Then the user should be navigated to " Document" Dashboard page and should see the components.
    // From: features/Document.feature:16:5
    //const documentPage = new DocumentPage(page);
    await documentPage.verifyDocumentPageTitle();
    await documentPage.verifyDocumentPageFilterButton();
  },
);

Given('the user has opened the"Documents" dropdown menu', async ({documentPage }) => {
  // Step: Given the user has opened the"Documents" dropdown menu
  // From: features/Document.feature:24:5
  //const documentPage = new DocumentPage(page);
  await documentPage.documentHoverIcon();
});

When(
  "the user selects {string} from the Documents dropdown",
  async ({ page,documentPage }, optionName) => {
    // Step: When the user selects "Create Document" from the Documents dropdown
    // From: features/Document.feature:27:5
    //const documentPage = new DocumentPage(page);
    if (optionName === "Create Document") {
      await documentPage.CreatDocumentDropdown();
      await expect(page).toHaveURL(/edit/, { timeout: 15000 });
    } else if (optionName === "View Documents") {
      await documentPage.ViewDocumentDropdown();
      await expect(page).toHaveURL(/documents\/index/, { timeout: 15000 });
    }
  },
);

Then(
  "the {string} page is displayed with the components",
  async ({ documentPage }, pageName, dataTable) => {
    // Step: Then the "Create Document" page is displayed with the components
    // From: features/Document.feature:28:5
    //const documentPage = new DocumentPage(page);
    await documentPage.verifyCreatDocumentPage();
  },
);

Given("the user is on the {string} form", async ({page, documentPage}, arg) => {
  // Step: Given the user is on the "Create Document" form
  // From: features/Document.feature:38:3
  //const documentPage = new DocumentPage(page);
  await documentPage.openCreateDocumentForm();
  await expect(page).toHaveURL(/edit/, { timeout: 15000 });
});

When(
  "the user leaves the document {string} field blank and clicks Save",
  async ({ documentPage }, fieldName) => {
    // Step: When the user leaves the document "File" field blank and clicks Save
    // From: features/Document.feature:39:3
   // const documentPage = new DocumentPage(page);
    await documentPage.clearCreatDocumentField(fieldName);
    await documentPage.clickCreatDocumentSave();
  },
);

Then(
  "a document validation message is displayed {string}",
  async ({ documentPage }, message) => {
    // Step: Then a document validation message is displayed "Missing required field: File"
    // From: features/Document.feature:40:3
    //const documentPage = new DocumentPage(page);
    await expect(
      documentPage.getCreatDocumentValidationMessage(message),
    ).toBeVisible({ timeout: 15000} );
  },
);

const newDoc = documentData.newDocument;
const fileName = newDoc.FilePath.split("/").pop(); // "test-data/sampleDocument.txt" → "sampleDocument.txt"
let createdDocumentName;

When("the user uploads a file and enters a document name", async ({ documentPage }) => {
  // Step: When the user uploads a file and enters a document name
  // From: features/Document.feature:54:5
  //const documentPage = new DocumentPage(page);
  createdDocumentName = `${newDoc.DocumentName}-${Date.now()}`; // unique every run
  await documentPage.fillCreateMandatoryDocumentFields(
    newDoc.FilePath,
    createdDocumentName,
  );
});
When("the user saves the document", async ({ documentPage }) => {
  // Step: And the user saves the document
  // From: features/Document.feature:55:5
  //const documentPage = new DocumentPage(page);
  await documentPage.clickCreatDocumentSave();
});

Then("the document detail page is displayed", async ({ page }) => {
  // Step: Then the document detail page is displayed
  // From: features/Document.feature:55:3
  await expect(page).not.toHaveURL(/edit/, { timeout: 15000 });
  await expect(page.getByText(createdDocumentName).first()).toBeVisible();

  logger.info(`Then: Document ${createdDocumentName} created.`);
});
Then(
  "the page shows an {string} and {string} button.",
  async ({ documentPage }, button1, button2) => {
    // Step: And the page shows an "Edit" and "Action" button.
    // From: features/Document.feature:57:5
   //const documentPage = new DocumentPage(page);
    for (const name of [button1, button2]) {
      await expect(documentPage.getDetailButton(name)).toBeVisible();
    }
  },
);

When("the user navigates to the {string} page", async ({ documentPage }, arg) => {
  // Step: When the user navigates to the "View Documents" page
  // From: features/Document.feature:59:3
  //const documentPage = new DocumentPage(page);
  await documentPage.documentHoverIcon();
  await documentPage.viewDocumentLink.click();
});

Then("the new document appears as a row in the grid", async ({ documentPage }) => {
  // Step: Then the new document appears as a row in the grid
  // From: features/Document.feature:60:3
  //const documentPage = new DocumentPage(page);
  await expect(documentPage.getDocumentRow(createdDocumentName)).toBeVisible();
});
Then(
  "the row shows the correct document name, file and assigned user",
  async ({ documentPage }) => {
    // Step: And the row shows the correct document name, file and assigned user
    // From: features/Document.feature:61:5
    //const documentPage = new DocumentPage(page);
    const row = documentPage.getDocumentRow(createdDocumentName);
    await expect(row).toContainText(createdDocumentName);
    await expect(row).toContainText(fileName);
    await expect(row).toContainText(newDoc.AssignedUser);
  },
);
Then(
  "the View Documents list is displayed with the components",
  async ({ documentPage }, dataTable) => {
    // Step: Then the View Documents list is displayed with the components
    // From: features/Document.feature:67:5
   //const documentPage = new DocumentPage(page);
    await documentPage.verifyViewDocumentsPage();
  },
);
