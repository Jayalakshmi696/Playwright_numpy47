import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();
When('User clicks on View Tasks option in More Menu', async ({}) => {
  // Step: When User clicks on View Tasks option in More Menu
  // From: features\More2.feature:15:13
});

Then('User should be navigated to Tasks dashboard page', async ({}) => {
  // Step: Then User should be navigated to Tasks dashboard page
  // From: features\More2.feature:16:13
});

When('User clicks on View Notes option in More Menu', async ({}) => {
  // Step: When User clicks on View Notes option in More Menu
  // From: features\More2.feature:21:13
});

Then('User should be navigated to Notes dashboard page', async ({}) => {
  // Step: Then User should be navigated to Notes dashboard page
  // From: features\More2.feature:22:13
});

When('User clicks on View Invoices option in More Menu', async ({}) => {
  // Step: When User clicks on View Invoices option in More Menu
  // From: features\More2.feature:27:13
});

Then('User should be navigated to Invoices dashboard page', async ({}) => {
  // Step: Then User should be navigated to Invoices dashboard page
  // From: features\More2.feature:28:13
});

When('User clicks on View Contracts option in More Menu', async ({}) => {
  // Step: When User clicks on View Contracts option in More Menu
  // From: features\More2.feature:33:13
});

Then('User should be navigated to Contracts dashboard page', async ({}) => {
  // Step: Then User should be navigated to Contracts dashboard page
  // From: features\More2.feature:34:13
});

When('User clicks on View Cases option in More Menu', async ({}) => {
  // Step: When User clicks on View Cases option in More Menu
  // From: features\More2.feature:39:13
});

Then('User should be navigated to Cases dashboard page', async ({}) => {
  // Step: Then User should be navigated to Cases dashboard page
  // From: features\More2.feature:40:13
});

When('User clicks on View Targets option in More Menu', async ({}) => {
  // Step: When User clicks on View Targets option in More Menu
  // From: features\More2.feature:45:13
});

Then('User should be navigated to Targets dashboard page', async ({}) => {
  // Step: Then User should be navigated to Targets dashboard page
  // From: features\More2.feature:46:13
});