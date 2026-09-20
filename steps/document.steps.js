const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { Given, When, Then, Before } = createBdd();



// ============================================
// Feature: documentMenuNavigation.feature
// ============================================
Given('the user is on any page where the top navigation bar is visible.', async ({}) => {
  // Step: Given the user is on any page where the top navigation bar is visible.
  // From: features/documents/documentMenuNavigation.feature:5:5
});

Given('the navigation bar contains the {string} menu', async ({}, arg) => {
  // Step: And the navigation bar contains the "Documents" menu
  // From: features/documents/documentMenuNavigation.feature:6:5
});

Given('the user is viewing the top navigation bar', async ({}) => {
  // Step: Given the user is viewing the top navigation bar
  // From: features/documents/documentMenuNavigation.feature:10:5
});

When('the user hovers on the {string} menu', async ({}, arg) => {
  // Step: When the user hovers on the "Documents" menu
  // From: features/documents/documentMenuNavigation.feature:11:5
});

Then('drop down menu show up with following option:', async ({}, dataTable) => {
  // Step: Then drop down menu show up with following option:
  // From: features/documents/documentMenuNavigation.feature:12:5
});

Given('the user is on the application dashboard', async ({}) => {
  // Step: Given the user is on the application dashboard
  // From: features/documents/documentMenuNavigation.feature:20:5
});

Then('the Documents page should open displaying the columns Document Name, File, Category, Sub Category, Revision Date, Expiration Date, and User', async ({}) => {
  // Step: Then the Documents page should open displaying the columns Document Name, File, Category, Sub Category, Revision Date, Expiration Date, and User
  // From: features/documents/documentMenuNavigation.feature:22:5
});

// ============================================
// Feature: documentListing.feature
// ============================================

Given('the user is on the Documents page and the list is empty', async ({}) => {
  // Step: Given the user is on the Documents page and the list is empty
  // From: features/documents/documentListing.feature:5:5
});

Given('no documents have been uploaded or match the current filter', async ({}) => {
  // Step: Given no documents have been uploaded or match the current filter
  // From: features/documents/documentListing.feature:9:5
});

When('the Documents page finishes loading', async ({}) => {
  // Step: When the Documents page finishes loading
  // From: features/documents/documentListing.feature:10:5
});

Then('the grid should display the message {string} and the record count should show {string}', async ({}, arg, arg1) => {
  // Step: Then the grid should display the message "No results found." and the record count should show "(0 - 0 of 0)"
  // From: features/documents/documentListing.feature:11:5
});

Given('the Documents grid shows {string}', async ({}, arg) => {
  // Step: And the Documents grid shows "No results found."
  // From: features/documents/documentListing.feature:16:5
});

When('the user click at the {string} dropdown', async ({}, arg) => {
  // Step: When the user click at the "Bulk Action" dropdown
  // From: features/documents/documentListing.feature:17:5
});

Then('the {string} dropdown and the row-selection checkbox should be disabled', async ({}, arg) => {
  // Step: Then the "Bulk Action" dropdown and the row-selection checkbox should be disabled
  // From: features/documents/documentListing.feature:18:5
});

Given('the user is on the Documents page', async ({}) => {
  // Step: Given the user is on the Documents page
  // From: features/documents/documentListing.feature:22:5
});

Then('a filter panel should open allowing the user to search Documents by criteria such as Document Name, Category, Sub Category,status, Revision Date, Expiration Date, Document type,Assigned to,my favorites,or User', async ({}) => {
  // Step: Then a filter panel should open allowing the user to search Documents by criteria such as Document Name, Category, Sub Category,status, Revision Date, Expiration Date, Document type,Assigned to,my favorites,or User
  // From: features/documents/documentListing.feature:25:5
});

Given('the user has opened the Filter panel', async ({}) => {
  // Step: Given the user has opened the Filter panel
  // From: features/documents/documentListing.feature:29:5
});
Given('the user enters filter criteria that match no existing document', async ({}) => {
  // Step: And the user enters filter criteria that match no existing document
  // From: features/documents/documentListing.feature:30:5
});

When('the user applies the filter', async ({}) => {
  // Step: When the user applies the filter
  // From: features/documents/documentListing.feature:31:5
});

Then('the grid should display {string} and the pagination count should reset to {string}', async ({}, arg, arg1) => {
  // Step: Then the grid should display "No results found." and the pagination count should reset to "(0 - 0 of 0)"
  // From: features/documents/documentListing.feature:32:5
});

Given('the user has opened the Filter panel and documents exist matching the criteria', async ({}) => {
  // Step: Given the user has opened the Filter panel and documents exist matching the criteria
  // From: features/documents/documentListing.feature:36:5
});

Given('the user enters valid filter criteria that match one or more documents', async ({}) => {
  // Step: And the user enters valid filter criteria that match one or more documents
  // From: features/documents/documentListing.feature:37:5
});

Then('only the documents matching the criteria should be displayed in the grid', async ({}) => {
  // Step: Then only the documents matching the criteria should be displayed in the grid
  // From: features/documents/documentListing.feature:39:5
});

Given('the Documents grid contains one or more records', async ({}) => {
  // Step: Given the Documents grid contains one or more records
  // From: features/documents/documentListing.feature:43:5
});

Given('documents are listed in the grid', async ({}) => {
  // Step: And documents are listed in the grid
  // From: features/documents/documentListing.feature:44:5
});

When('the user clicks the sort arrow on the {string} column header', async ({}, arg) => {
  // Step: When the user clicks the sort arrow on the "Document Name" column header
  // From: features/documents/documentListing.feature:45:5
});

Then('the documents should be reordered alphabetically by Document Name, toggling between ascending and descending on repeated clicks', async ({}) => {
  // Step: Then the documents should be reordered alphabetically by Document Name, toggling between ascending and descending on repeated clicks
  // From: features/documents/documentListing.feature:46:5
});
Then('the documents should be reordered alphabetically by Category, toggling between ascending and descending on repeated clicks', async ({}) => {
  // Step: Then the documents should be reordered alphabetically by Category, toggling between ascending and descending on repeated clicks
  // From: features/documents/documentListing.feature:53:5
});

Then('the documents should be reordered alphabetically by Sub Category, toggling between ascending and descending on repeated clicks', async ({}) => {
  // Step: Then the documents should be reordered alphabetically by Sub Category, toggling between ascending and descending on repeated clicks
  // From: features/documents/documentListing.feature:60:5
});

Then('the documents should be reordered chronologically by Expiration Date, toggling between ascending and descending on repeated clicks', async ({}) => {
  // Step: Then the documents should be reordered chronologically by Expiration Date, toggling between ascending and descending on repeated clicks
  // From: features/documents/documentListing.feature:67:5
});

Then('the documents should be reordered alphabetically by User, toggling between ascending and descending on repeated clicks', async ({}) => {
  // Step: Then the documents should be reordered alphabetically by User, toggling between ascending and descending onrepeated clicks
  // From: features/documents/documentListing.feature:74:5
});

Given('one or more documents are selected in the grid', async ({}) => {
  // Step: Given one or more documents are selected in the grid
  // From: features/documents/documentListing.feature:78:5
});

Given('at least one document row is selected', async ({}) => {
  // Step: And at least one document row is selected
  // From: features/documents/documentListing.feature:79:5
});

When('the user chooses an option from the {string} dropdown', async ({}, arg) => {
  // Step: When the user chooses an option from the "Bulk Action" dropdown
  // From: features/documents/documentListing.feature:80:5
});

Then('the selected action should be applied to all selected documents and a confirmation should be displayed', async ({}) => {
  // Step: Then the selected action should be applied to all selected documents and a confirmation should be displayed
  // From: features/documents/documentListing.feature:81:5
});


// ============================================
// Feature: createDocument.feature
// ============================================


Given('User is on "Create Document "Page', async ({}) => {
  // Step: Given User is on "Create Document "Page
  // From: features/documents/createDocument.feature:5:5
});

Given('The user has hovered over the {string} menu', async ({}, arg) => {
  // Step: Given The user has hovered over the "Documents" menu
  // From: features/documents/createDocument.feature:9:5
});

When('the user click the {string} from the {string}', async ({}, arg, arg1) => {
  // Step: When the user click the "Create Document" from the "Documents"
  // From: features/documents/createDocument.feature:10:5
});

Then('"create Document "page will display with two tabs "overview"and {string}.', async ({}, arg) => {
  // Step: Then "create Document "page will display with two tabs "overview"and "other".
  // From: features/documents/createDocument.feature:11:5
});

Then('{string}  tab highlighted.', async ({}, arg) => {
  // Step: And "over view"  tab highlighted.
  // From: features/documents/createDocument.feature:12:5
});

Given('The user is on {string} page\'s  {string} tab', async ({}, arg, arg1) => {
  // Step: And The user is on "Create Document" page's  "Over view" tab
  // From: features/documents/createDocument.feature:17:5
});

When('user click {string} button without filling the"Document Name"', async ({}, arg) => {
  // Step: When user click "save " button without filling the"Document Name"
  // From: features/documents/createDocument.feature:18:5
});

Then('validation eror should be displayed {string} for the {string} field', async ({}, arg, arg1) => {
  // Step: Then validation eror should be displayed "Missing required field: Document Name " for the "Document Name" field
  // From: features/documents/createDocument.feature:19:5
});

When('user click {string} button without filling the"Published Date"', async ({}, arg) => {
  // Step: When user click "save " button without filling the"Published Date"
  // From: features/documents/createDocument.feature:25:5
});

When('user click {string} button without filling the"Revision"', async ({}, arg) => {
  // Step: When user click "save " button without filling the"Revision"
  // From: features/documents/createDocument.feature:32:5
});
When('user click {string} button without filling the"File"', async ({}, arg) => {
  // Step: When user click "save " button without filling the"File"
  // From: features/documents/createDocument.feature:39:5
});

When('user clicks {string} button with all mandatory field are completed', async ({}, arg) => {
  // Step: When user clicks "save" button with all mandatory field are completed
  // From: features/documents/createDocument.feature:46:5
});

Then('saved page will reload with button n {string},{string}.', async ({}, arg, arg1) => {
  // Step: Then saved page will reload with button n "Edit","Action".
  // From: features/documents/createDocument.feature:47:5
});

Then('window refresh and saved page will reload with  buttons {string}, and"Cancel" button', async ({}, arg) => {
  // Step: Then window refresh and saved page will reload with  buttons "Save", and"Cancel" button
  // From: features/documents/createDocument.feature:54:5
});

Given('the user has just saved a document and the Document Detail View is open with saved name with star', async ({}) => {
  // Step: Given the user has just saved a document and the Document Detail View is open with saved name with star
  // From: features/documents/createDocument.feature:59:5
});

Then('Duplicate page created and listed in "Creat Document"page will display', async ({}) => {
  // Step: Then Duplicate page created and listed in "Creat Document"page will display
  // From: features/documents/createDocument.feature:68:5
});

When('user click "duplicate "page multiple time', async ({}) => {
  // Step: When user click "duplicate "page multiple time
  // From: features/documents/createDocument.feature:73:5
});

Then('created task will delete and message will come" record delet succesfully"', async ({}) => {
  // Step: And created task will delete and message will come" record delet succesfully"
  // From: features/documents/createDocument.feature:82:5
});

When('user click {string} tab', async ({}, arg) => {
  // Step: When user click "other" tab
  // From: features/documents/createDocument.feature:87:5
});

Then('save page will reload with botton {string},{string}.', async ({}, arg, arg1) => {
  // Step: Then save page will reload with botton "Edit","Action".
  // From: features/documents/createDocument.feature:88:5
});




Given('Use is on {string} Page', async ({}, arg) => {
  // Step: Given Use is on "View Documents" Page
  // From: features/documents/viewDocuments.feature:5:5
});

Then('the page open with {string} button', async ({}, arg) => {
  // Step: Then the page open with "Filter" button
  // From: features/documents/viewDocuments.feature:11:5
});

Given('the user is on the Documents  filter page and the list is empty', async ({}) => {
  // Step: Given the user is on the Documents  filter page and the list is empty
  // From: features/documents/viewDocuments.feature:29:5
});

When('user click the {string} button', async ({}, arg) => {
  // Step: When user click the "filter" button
  // From: features/documents/viewDocuments.feature:31:5
});

Then('the Documents page should open displaying the {string} section with {string} and {string} button.', async ({}, arg, arg1, arg2) => {
  // Step: Then the Documents page should open displaying the "basic filter" section with "clear" and "search" button.
  // From: features/documents/viewDocuments.feature:32:5
});

Given('the user is on the Documents with filled serch criteria', async ({}) => {
  // Step: Given the user is on the Documents with filled serch criteria
  // From: features/documents/viewDocuments.feature:36:5
});

Given('the user fill the search criteria columns {string}, {string}, {string}, {string}, {string}, {string},', async ({}, arg, arg1, arg2, arg3, arg4, arg5) => {
  // Step: And the user fill the search criteria columns "Document Name", "File", "Category", "Sub Category", "Revision Date", "Expiration Date",
  // From: features/documents/viewDocuments.feature:37:5
});

When('click the "Search "Button', async ({}) => {
  // Step: When click the "Search "Button
  // From: features/documents/viewDocuments.feature:38:5
});

Then('filterd result will show', async ({}) => {
  // Step: Then filterd result will show
  // From: features/documents/viewDocuments.feature:39:5
});