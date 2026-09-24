const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { Given, When, Then, Before } = createBdd();



When('the user hovers over the {string} button in the top navigation bar', async ({}, arg) => {
  // Step: When the user hovers over the "Documents" button in the top navigation bar
  // From: features/Document.feature:11:5
});

Then('user should see the  {string} and {string} options in the dropdown menu', async ({}, arg, arg1) => {
  // Step: Then user should see the  "Create Document" and "View Documents" options in the dropdown menu
  // From: features/Document.feature:12:5
});

Then('the user should be navigated to {string} Dashboard page and should see the components.', async ({}, arg, dataTable) => {
  // Step: Then the user should be navigated to " Document" Dashboard page and should see the components.
  // From: features/Document.feature:16:5
});

Given('the user has opened the"Documents" dropdown menu', async ({}) => {
  // Step: Given the user has opened the"Documents" dropdown menu
  // From: features/Document.feature:24:5
});

When('the user fills in all the mandatory fields', async ({}) => {
  // Step: When the user fills in all the mandatory fields
  // From: features/Document.feature:53:3
});

Then('the document detail page is displayed', async ({}) => {
  // Step: Then the document detail page is displayed
  // From: features/Document.feature:55:3
});

Then('the page shows an {string} button', async ({}, arg) => {
  // Step: And the page shows an "Edit" button
  // From: features/Document.feature:56:3
});

When('the user navigates to the {string} page', async ({}, arg) => {
  // Step: When the user navigates to the "View Documents" page
  // From: features/Document.feature:59:3
});

Then('the new document appears as a row in the grid', async ({}) => {
  // Step: Then the new document appears as a row in the grid
  // From: features/Document.feature:60:3
});

Then('the row shows the correct {string}', async ({}, arg) => {
  // Step: And the row shows the correct "Document Name"
  // From: features/Document.feature:61:3
});

Then('the row shows the uploaded {string}', async ({}, arg) => {
  // Step: And the row shows the uploaded "File"
  // From: features/Document.feature:62:3
});

Then('the row shows the {string} the document is assigned to', async ({}, arg) => {
  // Step: And the row shows the "User" the document is assigned to
  // From: features/Document.feature:63:3
});
