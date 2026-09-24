import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();

Then('User should see Opportunities menu in the menu bar', async ({}) => {
  // Step: Then User should see Opportunities menu in the menu bar
  // From: features\opportunities.feature:10:5
});

When('User hovers over the Opportunities Menu', async ({}) => {
  // Step: When User hovers over the Opportunities Menu
  // From: features\opportunities.feature:15:7
});

Then('Opportunities menu drop down list is displayed', async ({}) => {
  // Step: Then Opportunities menu drop down list is displayed
  // From: features\opportunities.feature:16:7
});

Given('Opportunities menu drop-down list is displayed', async ({}) => {
  // Step: Given Opportunities menu drop-down list is displayed
  // From: features\opportunities.feature:20:9
});

When('User clicks on the Create Opportunities option in the Opportunities Menu', async ({}) => {
  // Step: When User clicks on the Create Opportunities option in the Opportunities Menu
  // From: features\opportunities.feature:21:9
});

Then('User should see the correct components on the Create Opportunities page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Create Opportunities page
  // From: features\opportunities.feature:22:9
});

Given('User is on the Create Opportunities page', async ({}) => {
  // Step: Given User is on the Create Opportunities page
  // From: features\opportunities.feature:30:11
});

When('User enters Opportunities Valid Data and clicks the Save button', async ({}) => {
  // Step: When User enters Opportunities Valid Data and clicks the Save button
  // From: features\opportunities.feature:31:11
});

Then('User should see create Opportunities Detailed view page of new Opportunity', async ({}) => {
  // Step: Then User should see create Opportunities Detailed view page of new Opportunity
  // From: features\opportunities.feature:32:11
});

When('User enters Opportunities No Data and clicks the Save button', async ({}) => {
  // Step: When User enters Opportunities No Data and clicks the Save button
  // From: features\opportunities.feature:31:11
});

Then('User should see create Opportunities Required field error messages', async ({}) => {
  // Step: Then User should see create Opportunities Required field error messages
  // From: features\opportunities.feature:32:11
});
When('User enters Opportunities Valid Data and clicks the Cancel button', async ({}) => {
  // Step: When User enters Opportunities Valid Data and clicks the Cancel button
  // From: features\opportunities.feature:31:11
});

Then('User should see create Opportunities Confirmation dialog appears', async ({}) => {
  // Step: Then User should see create Opportunities Confirmation dialog appears
  // From: features\opportunities.feature:32:11
});

When('User clicks on the {string} option in the Opportunities Menu', async ({}, arg) => {
  // Step: When User clicks on the "View Opportunities" option in the Opportunities Menu
  // From: features\opportunities.feature:42:9
});

Then('User should see the correct components on the Opportunities dashboard page', async ({}, dataTable) => {
  // Step: Then User should see the correct components on the Opportunities dashboard page
  // From: features\opportunities.feature:43:9
});

Given('User has opened Opportunities menu', async ({}) => {
  // Step: Given User has opened Opportunities menu
  // From: features\opportunities.feature:53:9
});

When('User clicks the Import Opportunities option', async ({}) => {
  // Step: When User clicks the Import Opportunities option
  // From: features\opportunities.feature:54:9
});

Then('User should see the import Opportunities page with correct components', async ({}, dataTable) => {
  // Step: Then User should see the import Opportunities page with correct components
  // From: features\opportunities.feature:55:9
});

When('User uploads OpportunitiesValid File and clicks Next button', async ({}) => {
  // Step: When User uploads OpportunitiesValid File and clicks Next button
  // From: features\opportunities.feature:66:11
});

Then('User should see Import Opportunities Detailed view page of new Opportunity', async ({}) => {
  // Step: Then User should see Import Opportunities Detailed view page of new Opportunity
  // From: features\opportunities.feature:67:11
});

When('User uploads OpportunitiesNo File and clicks Next button', async ({}) => {
  // Step: When User uploads OpportunitiesNo File and clicks Next button
  // From: features\opportunities.feature:66:11
});

Then('User should see Import Opportunities Select a Vcard file Alert appears', async ({}) => {
  // Step: Then User should see Import Opportunities Select a Vcard file Alert appears
  // From: features\opportunities.feature:67:11
});

When('User uploads OpportunitiesInValid File and clicks Next button', async ({}) => {
  // Step: When User uploads OpportunitiesInValid File and clicks Next button
  // From: features\opportunities.feature:66:11
});

Then('User should see Import Opportunities Required field error messages', async ({}) => {
  // Step: Then User should see Import Opportunities Required field error messages
  // From: features\opportunities.feature:67:11
});

