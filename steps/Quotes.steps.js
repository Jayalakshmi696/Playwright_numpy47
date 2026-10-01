import { createBdd } from 'playwright-bdd';

import { test} from '../fixtures/suite8Fixtures.js';

import { expect } from '@playwright/test';

//import { expect } from '@playwright/test';

import { logger } from "../utils/logger.js";

import { QuotesPage } from '../pages/QuotesPage.js';
const { Given, When, Then } = createBdd(test);

When('User hovers over the Quotes Menu', async ({quotesPage}) => {
  // Step: When User hovers over the Quotes Menu
  // From: features\Quotes.feature:13:7
  logger.info (`Quotes module Tests`);
  await quotesPage.openQuotesDropDown();
});

Then('Quotes menu drop down list is displayed', async ({quotesPage}) => {
  // Step: Then Quotes menu drop down list is displayed
  // From: features\Quotes.feature:14:7
  await quotesPage.verifyQuotesDropDownList();
});

Given('Quotes menu drop-down list is displayed', async ({quotesPage}) => {
  // Step: Given Quotes menu drop-down list is displayed
  // From: features\Quotes.feature:18:9
  await quotesPage.openQuotesDropDown();
});

When('User clicks on the Create Quote option in the Quotes Menu', async ({quotesPage}) => {
  // Step: When User clicks on the Create Quote option in the Quotes Menu
  // From: features\Quotes.feature:19:9
    await quotesPage.clickCreateQuote();
});

Then('User should see the correct components on the Create Quote page', async ({quotesPage}, dataTable) => {
  // Step: Then User should see the correct components on the Create Quote page
  // From: features\Quotes.feature:20:9
  const componentsList = dataTable.hashes();
  await quotesPage.verifyQuotesPageComponents(componentsList);
});

Given('User is on the Create Quote page', async ({quotesPage}) => {
  // Step: Given User is on the Create Quote page
  // From: features\Quotes.feature:28:11
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickCreateQuote();
});

When('User enters Quotes {string} and clicks the {string} button', async ({quotesPage}, Data, Action) => {
  // Step: When User enters Quotes "quoteData1" and clicks the "Save" button
  // From: features\Quotes.feature:29:11
    await quotesPage.fillCreateQuotePage(Data);
    await quotesPage.confirmQuoteCreate(Action);
});

Then('User should see create Quotes {string}', async ({quotesPage}, Result) => {
  // Step: Then User should see create Quotes "Detailed view page of new Quote"
  // From: features\Quotes.feature:30:11
    await quotesPage.verifyCreateAllQuotesResult(Result);
});

/* When('User enters Quotes No Data and clicks the Save button', async ({quotesPage}) => {
  // Step: When User enters Quotes No Data and clicks the Save button
  // From: features\Quotes.feature:29:11
});

Then('User should see create Quotes Required field error messages', async ({quotesPage}) => {
  // Step: Then User should see create Quotes Required field error messages
  // From: features\Quotes.feature:30:11
});

When('User enters Quotes Valid Data2 and clicks the Cancel button', async ({quotesPage}) => {
  // Step: When User enters Quotes Valid Data2 and clicks the Cancel button
  // From: features\Quotes.feature:29:11
});

Then('User should see create Quotes Confirmation dialog appears', async ({quotesPage}) => {
  // Step: Then User should see create Quotes Confirmation dialog appears
  // From: features\Quotes.feature:30:11
});*/

When('User clicks on the View Quotes option in the Quotes Menu', async ({quotesPage}) => {
  // Step: When User clicks on the View Quotes option in the Quotes Menu
  // From: features\Quotes.feature:40:9
  await quotesPage.clickViewQuote();
});

Then('User should see the correct components on the Quotes dashboard page', async ({quotesPage}, dataTable) => {
  // Step: Then User should see the correct components on the Quotes dashboard page
  // From: features\Quotes.feature:41:9
  logger.info(`Opened the Quotes Dashboard Page`);
  const componentsList = dataTable.hashes();
  await quotesPage.verifyQuotesPageComponents(componentsList);
});

When('User clicks on Import option in Quotes Menu', async ({quotesPage}) => {
  // Step: When User clicks on Import option in Quotes Menu
  // From: features\Quotes.feature:52:9
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickCreateQuoteFromImport();
  logger.info(`Importing Quotes`);
});

Then('User should see the import Quotes page with correct components', async ({quotesPage}, dataTable) => {
  // Step: Then User should see the import Quotes page with correct components
  // From: features\Quotes.feature:53:9
  const componentsList = dataTable.hashes();
  await quotesPage.verifyQuotesPageComponents(componentsList);
});

Given('User is on Upload Import File page', async ({quotesPage}) => {
  // Step: Given User is on Upload Import File page
  // From: features\Quotes.feature:63:11
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickCreateQuoteFromImport();
});

When('User uploads Quotes {string} and clicks Next button', async ({quotesPage}, InputFile) => {
  // Step: When User uploads Quotes "ValidQuoteFile" and clicks Next button
  // From: features\Quotes.feature:64:11
  await quotesPage.uploadAndImportAllQuoteFiles(InputFile,'importQuote');
});

Then('User should see Import Quotes {string}', async ({quotesPage}, Result) => {
  // Step: Then User should see Import Quotes "Quote Dashboard page"
  // From: features\Quotes.feature:65:11
  await quotesPage.verifyCreateAllQuotesResult(Result);
});

/*When('User uploads Quotes No File and clicks Next button', async ({quotesPage}) => {
  // Step: When User uploads Quotes No File and clicks Next button
  // From: features\Quotes.feature:64:11
});

Then('User should see Import Quotes Select a Vcard file Alert appears', async ({quotesPage}) => {
  // Step: Then User should see Import Quotes Select a Vcard file Alert appears
  // From: features\Quotes.feature:65:11
});

When('User uploads Quotes InValid File and clicks Next button', async ({quotesPage}) => {
  // Step: When User uploads Quotes InValid File and clicks Next button
  // From: features\Quotes.feature:64:11
});

Then('User should see Import Quotes Required field error messages', async ({quotesPage}) => {
  // Step: Then User should see Import Quotes Required field error messages
  // From: features\Quotes.feature:65:11
});*/

When('User clicks on Import Line Items option in Quotes Menu', async ({quotesPage}) => {
  // Step: When User clicks on Import Line Items option in Quotes Menu
  // From: features\Quotes.feature:75:9
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickImportLineItems();
});

Then('User should see the import Line Items page with correct components', async ({quotesPage}, dataTable) => {
  // Step: Then User should see the import Line Items page with correct components
  // From: features\Quotes.feature:76:9
  const componentsList = dataTable.hashes();
  await quotesPage.verifyQuotesPageComponents(componentsList);
});

Given('User is on Import Line Items page', async ({quotesPage}) => {
  // Step: Given User is on Import Line Items page
  // From: features\Quotes.feature:86:11
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickImportLineItems();
});

When('User uploads Line Items {string} and clicks Next button', async ({quotesPage}, InputFile) => {
  // Step: When User uploads Line Items "Valid File" and clicks Next button
  // From: features\Quotes.feature:87:11
  await quotesPage.uploadAndImportAllQuoteFiles(InputFile,'importLineItems');
});

Then('User should see Import Line Items {string}', async ({quotesPage}, Result) => {
  // Step: Then User should see Import Line Items "Line Items dashboard page"
  // From: features\Quotes.feature:88:11
  await quotesPage.verifyCreateAllQuotesResult(Result);
});

/*When('User uploads Line Items No File and clicks Next button', async ({quotesPage}) => {
  // Step: When User uploads Line Items No File and clicks Next button
  // From: features\Quotes.feature:87:11
});

Then('User should see Import Line Items Required field error messages', async ({quotesPage}) => {
  // Step: Then User should see Import Line Items Required field error messages
});

When('User uploads Line Items InValid File and clicks Next button', async ({quotesPage}) => {
  // Step: When User uploads Line Items InValid File and clicks Next button
  // From: features\Quotes.feature:87:11
});

Then('User should see Import Line Items Invalid Import File name message', async ({quotesPage}) => {
  // Step: Then User should see Import Line Items Invalid Import File name message
  // From: features\Quotes.feature:88:11
});*/

Given('User created a quote', async ({quotesPage}) => {
  // Step: Given User created a quote
  // From: features\Quotes.feature:97:11
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickViewQuote();
  await quotesPage.openTopQuoteRecord();
  await quotesPage.openQuotesDropDown();
  await quotesPage.clickCreateQuote();
});

When('User hovers over the Quotes menu', async ({quotesPage}) => {
  // Step: When User hovers over the Quotes menu
  // From: features\Quotes.feature:98:11
  await quotesPage.openQuotesDropDown();
});

Then('User should see the option Recently viewed in the Quotes menu', async ({quotesPage}) => {
  // Step: Then User should see the option Recently viewed in the Quotes menu
  // From: features\Quotes.feature:99:11
  await quotesPage.checkRecentViewInQuote();
});

When('User hovers over the Recently viewed option in the quotes menu', async ({quotesPage}) => {
  // Step: When User hovers over the Recently viewed option in the quotes menu
  // From: features\Quotes.feature:104:13
  await quotesPage.openQuotesDropDown();
  await quotesPage.checkRecentViewInQuote();
  await quotesPage.openRecentViewSubmenuInQuote();
});

Then('User should see the name of the recently viewed Quote record in its drop down', async({quotesPage}) => {
  // Step: Then User should see the name of the recently viewed Quote record in its drop down
  // From: features\Quotes.feature:105:13
  await quotesPage.checkRecentViewQuotesSubMenu();
});

When('User clicks and opens the recently viewed Quotes record from the Quotes menu', async ({quotesPage}) => {
  // Step: When User clicks and opens the recently viewed Quotes record from the Quotes menu
  // From: features\Quotes.feature:109:15
  await quotesPage.openQuotesDropDown();
  await quotesPage.checkRecentViewInQuote();
  await quotesPage.openRecentViewSubmenuInQuote();
  await quotesPage.checkRecentViewQuotesSubMenu();
  await quotesPage.openRecentViewedQuote();

});

Then('User should see detailed view page of the recently viewed Quotes record', async ({quotesPage}) => {
  // Step: Then User should see detailed view page of the recently viewed Quotes record
  // From: features\Quotes.feature:110:15
  await quotesPage.checkOpeningRecentViewedQuoterecord();
});
