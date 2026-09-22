import { createBdd } from 'playwright-bdd';

import { test} from '../fixtures/suite8Fixtures.js';

import { expect } from '@playwright/test';

//import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);
Then('User should see More menu in the menu bar', async ({}) => {
  // Step: Then User should see More menu in the menu bar
  // From: features\MoreItems3.feature:10:9
});

Given('More menu drop down list is displayed', async ({}) => {
  // Step: Given More menu drop down list is displayed
  // From: features\MoreItems3.feature:14:13
});

When('User clicks on View Target List option in More Menu', async ({}) => {
  // Step: When User clicks on View Target List option in More Menu
  // From: features\MoreItems3.feature:15:13
});

Then('User should be navigated to Target List dashboard page', async ({}) => {
  // Step: Then User should be navigated to Target List dashboard page
  // From: features\MoreItems3.feature:16:13
});

When('User clicks on View Projects option in More Menu', async ({}) => {
  // Step: When User clicks on View Projects option in More Menu
  // From: features\MoreItems3.feature:21:13
});

Then('User should be navigated to Projects dashboard page', async ({}) => {
  // Step: Then User should be navigated to Projects dashboard page
  // From: features\MoreItems3.feature:22:13
});

When('User clicks on View Projects Templates option in More Menu', async ({}) => {
  // Step: When User clicks on View Projects Templates option in More Menu
  // From: features\MoreItems3.feature:27:13
});

Then('User should be navigated to Projects Templates dashboard page', async ({}) => {
  // Step: Then User should be navigated to Projects Templates dashboard page
  // From: features\MoreItems3.feature:28:13
});

When('User clicks on View Events option in More Menu', async ({}) => {
  // Step: When User clicks on View Events option in More Menu
  // From: features\MoreItems3.feature:33:13
});

Then('User should be navigated to Events dashboard page', async ({}) => {
  // Step: Then User should be navigated to Events dashboard page
  // From: features\MoreItems3.feature:34:13
});

When('User clicks on View Locations option in More Menu', async ({}) => {
  // Step: When User clicks on View Locations option in More Menu
  // From: features\MoreItems3.feature:39:13
});

Then('User should be navigated to Locations dashboard page', async ({}) => {
  // Step: Then User should be navigated to Locations dashboard page
  // From: features\MoreItems3.feature:40:13
});

When('User clicks on View Products option in More Menu', async ({}) => {
  // Step: When User clicks on View Products option in More Menu
  // From: features\MoreItems3.feature:45:13
});

Then('User should be navigated to Products dashboard page', async ({}) => {
  // Step: Then User should be navigated to Products dashboard page
  // From: features\MoreItems3.feature:46:13
});