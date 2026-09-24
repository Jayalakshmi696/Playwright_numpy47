
import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();


Then('User should see Contacts menu in the Menu bar', async ({}) => {
  // Step: Then User should see Contacts menu in the Menu bar
  // From: features\contact.feature:11:5
});

When('User hovers over the Contacts Menu', async ({}) => {
  // Step: When User hovers over the Contacts Menu
  // From: features\contact.feature:16:7
});

Then('Contacts menu drop down list is displayed', async ({}) => {
  // Step: Then Contacts menu drop down list is displayed
  // From: features\contact.feature:17:7
});

Given('Contacts menu drop-down list is displayed', async ({}) => {
  // Step: Given Contacts menu drop-down list is displayed
  // From: features\contact.feature:21:9
});

When('User clicks on the Create Contact option in the Contacts Menu', async ({}) => {
  // Step: When User clicks on the Create Contact option in the Contacts Menu
  // From: features\contact.feature:22:9
});

Then('User should see the correct components on the Create Contact page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Create Contact page
  // From: features\contact.feature:23:9
});

Given('User is on the Create Contact page', async ({}) => {
  // Step: Given User is on the Create Contact page
  // From: features\contact.feature:31:11
});

When('User enters Contacts Valid Data and clicks the Save button', async ({}) => {
  // Step: When User enters Contacts Valid Data and clicks the Save button
  // From: features\contact.feature:32:11
});

Then('User should see Create Contacts Detailed view page of new Contacts', async ({}) => {
  // Step: Then User should see Create Contacts Detailed view page of new Contacts
  // From: features\contact.feature:33:11
});

When('User enters Contacts No Data and clicks the Save button', async ({}) => {
  // Step: When User enters Contacts No Data and clicks the Save button
  // From: features\contact.feature:32:11
});

Then('User should see Create Contacts Required field error messages', async ({}) => {
  // Step: Then User should see Create Contacts Required field error messages
  // From: features\contact.feature:33:11
});

When('User enters Contacts Valid Data and clicks the Cancel button', async ({}) => {
  // Step: When User enters Contacts Valid Data and clicks the Cancel button
  // From: features\contact.feature:32:11
});

Then('User should see Create Contacts Confirmation dialog appears', async ({}) => {
  // Step: Then User should see Create Contacts Confirmation dialog appears
  // From: features\contact.feature:33:11
});

When('User clicks on the View Contacts option in the Contacts Menu', async ({}) => {
  // Step: When User clicks on the View Contacts option in the Contacts Menu
  // From: features\contact.feature:43:9
});

Then('User should see the correct components on the Contacts dashboard page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Contacts dashboard page
  // From: features\contact.feature:44:9
});

When('User clicks on Create Contact From vCard option', async ({}) => {
  // Step: When User clicks on Create Contact From vCard option
  // From: features\contact.feature:55:9
});

Then('User should see the Import vCard Detailed view page of new Contact', async ({}) => {
  // Step: Then User should see the Import vCard Detailed view page of new Contact
  // From: features\contact.feature:66:11
});

Given('Contacts menu is visible', async ({}) => {
  // Step: Given Contacts menu is visible
  // From: features\contact.feature:75:9
});

When('User clicks on Import Contacts option in Contacts Menu', async ({}) => {
  // Step: When User clicks on Import Contacts option in Contacts Menu
  // From: features\contact.feature:76:9
});

Then('User should see the import Contacts   page with correct components', async ({}, dataTable) => {
  // Step: Then User should see the import Contacts   page with correct components
  // From: features\contact.feature:77:9
});

Given('User is on Import Contacts page', async ({}) => {
  // Step: Given User is on Import Contacts page
  // From: features\contact.feature:87:11
});

When('User uploads Contacts Valid File and clicks Next button', async ({}) => {
  // Step: When User uploads Contacts Valid File and clicks Next button
  // From: features\contact.feature:88:11
});

Then('User should see Import Contacts Contacts dashboard page', async ({}) => {
  // Step: Then User should see Import Contacts Contacts dashboard page
  // From: features\contact.feature:89:11
});

When('User uploads Contacts No File and clicks Next button', async ({}) => {
  // Step: When User uploads Contacts No File and clicks Next button
  // From: features\contact.feature:88:11
});

Then('User should see Import Contacts Required field error messages', async ({}) => {
  // Step: Then User should see Import Contacts Required field error messages
  // From: features\contact.feature:89:11
});

When('User uploads Contacts InValid File and clicks Next button', async ({}) => {
  // Step: When User uploads Contacts InValid File and clicks Next button
  // From: features\contact.feature:88:11
});

Then('User should see Import Contacts Invalid Import File name message', async ({}) => {
  // Step: Then User should see Import Contacts Invalid Import File name message
  // From: features\contact.feature:89:11
});


