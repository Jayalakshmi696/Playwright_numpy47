import { createBdd } from 'playwright-bdd';

import { test} from '../fixtures/suite8Fixtures.js';

import { expect } from '@playwright/test';

//import { expect } from '@playwright/test';

import { logger } from "../utils/logger.js";

import { More3Page } from '../pages/More3Page.js';
const { Given, When, Then } = createBdd(test);

When('User hovers over the More Menu', async ({more3Page}) => {
  // Step: When User hovers over the More Menu
  // From: features\More3.feature:13:9
  logger.info (`More3 module Tests`);
  await more3Page.openMore3DropDown();
});

Then('User should see the displayed More menu drop down list', async ({more3Page}) => {
  // Step: Then User should see the displayed More menu drop down list
  // From: features\More3.feature:14:9
  await more3Page.verifyMore3DropDownList();
});

Given('More menu drop down list is displayed', async ({more3Page}) => {
  // Step: Given More menu drop down list is displayed
  // From: features\More3.feature:12:13
  await more3Page.openMore3DropDown();
});

When('User clicks on View Target List option in More Menu', async ({more3Page}) => {
  // Step: When User clicks on View Target List option in More Menu
  // From: features\More3.feature:13:13
  await more3Page.clickTargetsList();
});

Then('User should be navigated to Target List dashboard page', async ({more3Page}) => {
  // Step: Then User should be navigated to Target List dashboard page
  // From: features\More3.feature:14:13
  await more3Page.verifyTargetListPageOpen();
});

When('User clicks on View Projects option in More Menu', async ({more3Page}) => {
  // Step: When User clicks on View Projects option in More Menu
  // From: features\More3.feature:19:13
  await more3Page.clickProjects();
});

Then('User should be navigated to Projects dashboard page', async ({more3Page}) => {
  // Step: Then User should be navigated to Projects dashboard page
  // From: features\More3.feature:20:13
  await more3Page.verifyProjectsPageOpen();
});

When('User clicks on View Projects Templates option in More Menu', async ({more3Page}) => {
  // Step: When User clicks on View Projects Templates option in More Menu
  // From: features\More3.feature:25:13
  await more3Page.clickProjectTemplates();
});

Then('User should be navigated to Projects Templates dashboard page', async ({more3Page}) => {
  // Step: Then User should be navigated to Projects Templates dashboard page
  // From: features\More3.feature:26:13
  await more3Page.verifyProjectTemplatesPageOpen();
});

When('User clicks on View Events option in More Menu', async ({more3Page}) => {
  // Step: When User clicks on View Events option in More Menu
  // From: features\More3.feature:31:13
  await more3Page.clickEvents();
});

Then('User should be navigated to Events dashboard page', async ({more3Page}) => {
  // Step: Then User should be navigated to Events dashboard page
  // From: features\More3.feature:32:13
  await more3Page.verifyEventsPageOpen();
});

When('User clicks on View Locations option in More Menu', async ({more3Page}) => {
  // Step: When User clicks on View Locations option in More Menu
  // From: features\More3.feature:37:13
  await more3Page.clickLocations();
});

Then('User should be navigated to Locations dashboard page', async ({more3Page}) => {
  // Step: Then User should be navigated to Locations dashboard page
  // From: features\More3.feature:38:13
  await more3Page.verifyLocationsPageOpen();
});

When('User clicks on View Products option in More Menu', async ({more3Page}) => {
  // Step: When User clicks on View Products option in More Menu
  // From: features\More3.feature:43:13
  await more3Page.clickProducts();
});

Then('User should be navigated to Products dashboard page', async ({more3Page}) => {
  // Step: Then User should be navigated to Products dashboard page
  // From: features\More3.feature:44:13
  await more3Page.verifyProductsPageOpen();
});