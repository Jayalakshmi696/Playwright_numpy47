import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();

When('the user clicks on More module from left navigation', async ({}) => {
  // Step: When the user clicks on More module from left navigation
  // From: features\More.feature:12:9
});

Then('the user should see the list of items in dropdown', async ({}) => {
  // Step: Then the user should see the list of items in dropdown
  // From: features\More.feature:13:9
});

When('User clicks Home item from More', async ({}) => {
  // Step: When User clicks Home item from More
  // From: features\More.feature:16:6
});

Then('User is navigating to the HomePage', async ({}) => {
  // Step: Then User is navigating to the HomePage
  // From: features\More.feature:17:6
});

When('User clicks Email item from More', async ({}) => {
  // Step: When User clicks Email item from More
  // From: features\More.feature:20:6
});

Then('User is navigating to the Email page', async ({}) => {
  // Step: Then User is navigating to the Email page
  // From: features\More.feature:21:6
});

When('User clicks Campaigns item from More', async ({}) => {
  // Step: When User clicks Campaigns item from More
  // From: features\More.feature:24:6
});

Then('User is navigating to the Campaigns page', async ({}) => {
  // Step: Then User is navigating to the Campaigns page
  // From: features\More.feature:25:6
});

When('User clicks Calls item from More', async ({}) => {
  // Step: When User clicks Calls item from More
  // From: features\More.feature:28:6
});

Then('User is navigating to the Calls page', async ({}) => {
  // Step: Then User is navigating to the Calls page
  // From: features\More.feature:29:6
});


When('User clicks Meetings item from More', async ({}) => {
  // Step: When User clicks Meetings item from More
  // From: features\More.feature:32:6
});

Then('User is navigating to the Meetings page', async ({}) => {
  // Step: Then User is navigating to the Meetings page
  // From: features\More.feature:33:6
});

