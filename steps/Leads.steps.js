import { createBdd } from 'playwright-bdd';

import { test} from '../fixtures/suite8Fixtures.js';

import { expect } from '@playwright/test';

//import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('User launches the application', async ({}) => {
  // Step: Given User launches the application
  // From: features\Leads.feature:5:1
});

Given('User successfully logged in to the application', async ({}) => {
  // Step: Given User successfully logged in to the application
  // From: features\Leads.feature:9:5
});
//not needed
When('User is on the Home dashboard page', async ({}) => {
  // Step: When User is on the Home dashboard page
  // From: features\Leads.feature:10:5
});

Then('User should see Leads menu in the Menu bar', async ({}) => {
  // Step: Then User should see Leads menu in the Menu bar
  // From: features\Leads.feature:11:5
});

When('User hovers over the Leads Menu', async ({}) => {
  // Step: When User hovers over the Leads Menu
  // From: features\Leads.feature:16:7
});

Then('Leads menu drop down list is displayed', async ({}) => {
  // Step: Then Leads menu drop down list is displayed
  // From: features\Leads.feature:17:7
});

Given('Leads menu drop-down list is displayed', async ({}) => {
  // Step: Given Leads menu drop-down list is displayed
  // From: features\Leads.feature:21:9
});

When('User clicks on the Create Lead option in the Leads Menu', async ({}) => {
  // Step: When User clicks on the Create Lead option in the Leads Menu
  // From: features\Leads.feature:22:9
});

Then('User should see the correct components on the Create Lead page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Create Lead page
  // From: features\Leads.feature:23:9
});

Given('User is on the Create Lead page', async ({}) => {
  // Step: Given User is on the Create Lead page
  // From: features\Leads.feature:31:11
});

When('User enters Leads Valid Data1 and clicks the Save button', async ({}) => {
  // Step: When User enters Leads Valid Data1 and clicks the Save button
  // From: features\Leads.feature:32:11
});

Then('User should see Create Leads Detailed view page of new Lead', async ({}) => {
  // Step: Then User should see Create Leads Detailed view page of new Lead
  // From: features\Leads.feature:33:11
});

When('User enters Leads No Data and clicks the Save button', async ({}) => {
  // Step: When User enters Leads No Data and clicks the Save button
  // From: features\Leads.feature:32:11
});

Then('User should see Create Leads Required field error messages', async ({}) => {
  // Step: Then User should see Create Leads Required field error messages
  // From: features\Leads.feature:33:11
});

When('User enters Leads Valid Data2 and clicks the Cancel button', async ({}) => {
  // Step: When User enters Leads Valid Data2 and clicks the Cancel button
  // From: features\Leads.feature:32:11
});

Then('User should see Create Leads Confirmation dialog appears', async ({}) => {
  // Step: Then User should see Create Leads Confirmation dialog appears
  // From: features\Leads.feature:33:11
});

When('User clicks on the View Leads option in the Leads Menu', async ({}) => {
  // Step: When User clicks on the View Leads option in the Leads Menu
  // From: features\Leads.feature:43:9
});

Then('User should see the correct components on the Leads dashboard page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Leads dashboard page
  // From: features\Leads.feature:44:9
});

When('User clicks on Create Lead from vCard option', async ({}) => {
  // Step: When User clicks on Create Lead from vCard option
  // From: features\Leads.feature:55:9
});


Then('User should see the import vCard page with correct components', async ({}, dataTable) => {
  // Step: Then User should see the import vCard page with correct components
  // From: features\Leads.feature:56:9
});

Given('User is on import vCard page', async ({}) => {
  // Step: Given User is on import vCard page
  // From: features\Leads.feature:64:11
});

When('User uploads Valid File and clicks Import Vcard button', async ({}) => {
  // Step: When User uploads Valid File and clicks Import Vcard button
  // From: features\Leads.feature:65:11
});

Then('User should see the Import vCard Detailed view page of new Lead', async ({}) => {
  // Step: Then User should see the Import vCard Detailed view page of new Lead
  // From: features\Leads.feature:66:11
});

When('User uploads No File and clicks Import Vcard button', async ({}) => {
  // Step: When User uploads No File and clicks Import Vcard button
  // From: features\Leads.feature:65:11
});

Then('User should see the Import vCard Select a Vcard file Alert appears', async ({}) => {
  // Step: Then User should see the Import vCard Select a Vcard file Alert appears
  // From: features\Leads.feature:66:11
});

When('User uploads InValid File and clicks Import Vcard button', async ({}) => {
  // Step: When User uploads InValid File and clicks Import Vcard button
  // From: features\Leads.feature:65:11
});

Then('User should see the Import vCard Required field error messages', async ({}) => {
  // Step: Then User should see the Import vCard Required field error messages
  // From: features\Leads.feature:66:11
});

Given('Leads menu is visible', async ({}) => {
  // Step: Given Leads menu is visible
  // From: features\Leads.feature:75:9
});

When('User clicks on Import Leads option in Leads Menu', async ({}) => {
  // Step: When User clicks on Import Leads option in Leads Menu
  // From: features\Leads.feature:76:9
});

Then('User should see the import Leads page with correct components', async ({}, dataTable) => {
  // Step: Then User should see the import Leads page with correct components
  // From: features\Leads.feature:77:9
});

Given('User is on Import Leads page', async ({}) => {
  // Step: Given User is on Import Leads page
  // From: features\Leads.feature:87:11
});

When('User uploads Leads Valid File and clicks Next button', async ({}) => {
  // Step: When User uploads Leads Valid File and clicks Next button
  // From: features\Leads.feature:88:11
});

Then('User should see Import Leads Leads dashboard page', async ({}) => {
  // Step: Then User should see Import Leads Leads dashboard page
  // From: features\Leads.feature:89:11
});

When('User uploads Leads No File and clicks Next button', async ({}) => {
  // Step: When User uploads Leads No File and clicks Next button
  // From: features\Leads.feature:88:11
});

Then('User should see Import Leads Required field error messages', async ({}) => {
  // Step: Then User should see Import Leads Required field error messages
  // From: features\Leads.feature:89:11
});

When('User uploads Leads InValid File and clicks Next button', async ({}) => {
  // Step: When User uploads Leads InValid File and clicks Next button
  // From: features\Leads.feature:88:11
});

Then('User should see Import Leads Invalid Import File name message', async ({}) => {
  // Step: Then User should see Import Leads Invalid Import File name message
  // From: features\Leads.feature:89:11
});