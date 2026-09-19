import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();

When('the user clicks on Accounts module from left navigation', async ({}) => {
  // Step: When the user clicks on Accounts module from left navigation
  // From: features\Accounts.feature:13:5
});

Then('the user should be navigated to Accounts Dashboard page and should see the list in dropdown', async ({}, dataTable) => {
  // Step: Then the user should be navigated to Accounts Dashboard page and should see the list in dropdown
  // From: features\Accounts.feature:14:5
});

When('the user clicks on Create Account from dropdown', async ({}) => {
  // Step: When the user clicks on Create Account from dropdown
  // From: features\Accounts.feature:21:5
});

Then('the user should be navigated to Create Account page', async ({}) => {
  // Step: Then the user should be navigated to Create Account page
  // From: features\Accounts.feature:22:5
});

Given('User is on Create Account page', async ({}) => {
  // Step: Given User is on Create Account page
  // From: features\Accounts.feature:25:5
});

When('User clicks the save button without entering mandatory fields', async ({}) => {
  // Step: When User clicks the save button without entering mandatory fields
  // From: features\Accounts.feature:26:5
});

When('User enters valid data in all mandatory fields and clicks save button', async ({}) => {
  // Step: When User enters valid data in all mandatory fields and clicks save button
  // From: features\Accounts.feature:31:5
});

Then('User should be navigating to newly created account page', async ({}) => {
  // Step: Then User should be navigating to newly created account page
  // From: features\Accounts.feature:32:5
});

When('the user clicks on Import Accounts from dropdown', async ({}) => {
  // Step: When the user clicks on Import Accounts from dropdown
  // From: features\Accounts.feature:36:5
});

Then('the user should be navigated to Import Accounts page', async ({}) => {
  // Step: Then the user should be navigated to Import Accounts page
  // From: features\Accounts.feature:37:5
});


When('the user clicks on View Accounts from dropdown', async ({}) => {
  // Step: When the user clicks on View Accounts from dropdown
  // From: features\Accounts.feature:41:5
});

Then('the user should be navigated to View Accounts page', async ({}) => {
  // Step: Then the user should be navigated to View Accounts page
  // From: features\Accounts.feature:42:5
});

When('the user clicks on Recently Viewed from dropdown', async ({}) => {
  // Step: When the user clicks on Recently Viewed from dropdown
  // From: features\Accounts.feature:46:5
});

Then('the user should be navigated to Recently Viewed page', async ({}) => {
  // Step: Then the user should be navigated to Recently Viewed page
  // From: features\Accounts.feature:47:5
});



