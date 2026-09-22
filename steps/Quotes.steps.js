import { createBdd } from 'playwright-bdd';

import { test} from '../fixtures/suite8Fixtures.js';

import { expect } from '@playwright/test';

//import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Then('User should see Quotes menu in the menu bar', async ({}) => {
  // Step: Then User should see Quotes menu in the menu bar
  // From: features\Quotes.feature:10:5
});

When('User hovers over the Quotes Menu', async ({}) => {
  // Step: When User hovers over the Quotes Menu
  // From: features\Quotes.feature:15:7
});

Then('Quotes menu drop down list is displayed', async ({}) => {
  // Step: Then Quotes menu drop down list is displayed
  // From: features\Quotes.feature:16:7
});

Given('Quotes menu drop-down list is displayed', async ({}) => {
  // Step: Given Quotes menu drop-down list is displayed
  // From: features\Quotes.feature:20:9
});

When('User clicks on the Create Quote option in the Quotes Menu', async ({}) => {
  // Step: When User clicks on the Create Quote option in the Quotes Menu
  // From: features\Quotes.feature:21:9
});

Then('User should see the correct components on the Create Quote page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Create Quote page
  // From: features\Quotes.feature:22:9
});

Given('User is on the Create Quote page', async ({}) => {
  // Step: Given User is on the Create Quote page
  // From: features\Quotes.feature:30:11
});

When('User enters Quotes Valid Data and clicks the Save button', async ({}) => {
  // Step: When User enters Quotes Valid Data and clicks the Save button
  // From: features\Quotes.feature:31:11
});

Then('User should see create Quotes Detailed view page of new Quote', async ({}) => {
  // Step: Then User should see create Quotes Detailed view page of new Quote
  // From: features\Quotes.feature:32:11
});

When('User enters Quotes No Data and clicks the Save button', async ({}) => {
  // Step: When User enters Quotes No Data and clicks the Save button
  // From: features\Quotes.feature:31:11
});

Then('User should see create Quotes Required field error messages', async ({}) => {
  // Step: Then User should see create Quotes Required field error messages
  // From: features\Quotes.feature:32:11
});

When('User enters Quotes Valid Data and clicks the Cancel button', async ({}) => {
  // Step: When User enters Quotes Valid Data and clicks the Cancel button
  // From: features\Quotes.feature:31:11
});

Then('User should see create Quotes Confirmation dialog appears', async ({}) => {
  // Step: Then User should see create Quotes Confirmation dialog appears
  // From: features\Quotes.feature:32:11
});

When('User clicks on the {string} option in the Quotes Menu', async ({}, arg) => {
  // Step: When User clicks on the "View Quotes" option in the Quotes Menu
  // From: features\Quotes.feature:42:9
});

Then('User should see the correct components on the Quotes dashboard page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Quotes dashboard page
  // From: features\Quotes.feature:43:9
});

Given('User has opened Quotes menu', async ({}) => {
  // Step: Given User has opened Quotes menu
  // From: features\Quotes.feature:53:9
});

When('User clicks the Import option', async ({}) => {
  // Step: When User clicks the Import option
  // From: features\Quotes.feature:54:9
});

Then('User should see the import page with correct components', async ({}, dataTable) => {
  // Step: Then User should see the import page with correct components
  // From: features\Quotes.feature:55:9
});

Given('User is on Upload Import File page', async ({}) => {
  // Step: Given User is on Upload Import File page
  // From: features\Quotes.feature:65:11
});

When('User uploads QuotesValid File and clicks Next button', async ({}) => {
  // Step: When User uploads QuotesValid File and clicks Next button
  // From: features\Quotes.feature:66:11
});

Then('User should see Import Quotes Detailed view page of new Quote', async ({}) => {
  // Step: Then User should see Import Quotes Detailed view page of new Quote
  // From: features\Quotes.feature:67:11
});

When('User uploads QuotesNo File and clicks Next button', async ({}) => {
  // Step: When User uploads QuotesNo File and clicks Next button
  // From: features\Quotes.feature:66:11
});

Then('User should see Import Quotes Select a Vcard file Alert appears', async ({}) => {
  // Step: Then User should see Import Quotes Select a Vcard file Alert appears
  // From: features\Quotes.feature:67:11
});

When('User uploads QuotesInValid File and clicks Next button', async ({}) => {
  // Step: When User uploads QuotesInValid File and clicks Next button
  // From: features\Quotes.feature:66:11
});

Then('User should see Import Quotes Required field error messages', async ({}) => {
  // Step: Then User should see Import Quotes Required field error messages
  // From: features\Quotes.feature:67:11
});

Given('Quotes menu is visible', async ({}) => {
  // Step: Given Quotes menu is visible
  // From: features\Quotes.feature:76:9
});

When('User clicks on Import Line Items option in Quotes Menu', async ({}) => {
  // Step: When User clicks on Import Line Items option in Quotes Menu
  // From: features\Quotes.feature:77:9
});

Then('User should see the import Line Items page with correct components', async ({}, dataTable) => {
  // Step: Then User should see the import Line Items page with correct components
  // From: features\Quotes.feature:78:9
});

Given('User is on Import Line Items page', async ({}) => {
  // Step: Given User is on Import Line Items page
  // From: features\Quotes.feature:88:11
});

When('User uploads Line ItemsValid File and clicks Next button', async ({}) => {
  // Step: When User uploads Line ItemsValid File and clicks Next button
  // From: features\Quotes.feature:89:11
});

Then('User should see Import Line Items Line Items dashboard page', async ({}) => {
  // Step: Then User should see Import Line Items Line Items dashboard page
  // From: features\Quotes.feature:90:11
});

When('User uploads Line ItemsNo File and clicks Next button', async ({}) => {
  // Step: When User uploads Line ItemsNo File and clicks Next button
  // From: features\Quotes.feature:89:11
});

Then('User should see Import Line Items Required field error messages', async ({}) => {
  // Step: Then User should see Import Line Items Required field error messages
  // From: features\Quotes.feature:90:11
});

When('User uploads Line ItemsInValid File and clicks Next button', async ({}) => {
  // Step: When User uploads Line ItemsInValid File and clicks Next button
  // From: features\Quotes.feature:89:11
});

Then('User should see Import Line Items Invalid Import File name message', async ({}) => {
  // Step: Then User should see Import Line Items Invalid Import File name message
  // From: features\Quotes.feature:90:11
});