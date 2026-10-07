import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
import { logger } from "../utils/logger.js";
const { Given, When, Then } = createBdd();

Then('User should see More menu in the menu bar', async ({}) => {
  // Step: Then User should see More menu in the menu bar
  // From: features\More2.feature:12:9
});

When('User clicks on View Tasks option in More Menu', async ({more2Page}) => {
  // Step: When User clicks on View Tasks option in More Menu
  // From: features\More2.feature:15:13
  await more2Page.clickViewTasks();
});

Then('User should be navigated to Tasks dashboard page', async ({more2Page}) => {
  // Step: Then User should be navigated to Tasks dashboard page
  // From: features\More2.feature:16:13
  await more2Page.verifyTasksDashboard();
});

When('User clicks on View Notes option in More Menu', async ({more2Page}) => {
  // Step: When User clicks on View Notes option in More Menu
  // From: features\More2.feature:21:13
  await more2Page.clickViewNotes();
});

Then('User should be navigated to Notes dashboard page', async ({more2Page}) => {
  // Step: Then User should be navigated to Notes dashboard page
  // From: features\More2.feature:22:13
  await more2Page.verifyNotesDashboard();
});

When('User clicks on View Invoices option in More Menu', async ({more2Page}) => {
  // Step: When User clicks on View Invoices option in More Menu
  // From: features\More2.feature:27:13
  await more2Page.clickViewInvoices();
});

Then('User should be navigated to Invoices dashboard page', async ({more2Page}) => {
  // Step: Then User should be navigated to Invoices dashboard page
  // From: features\More2.feature:28:13
  await more2Page.verifyInvoicesDashboard();
});

When('User clicks on View Contracts option in More Menu', async ({more2Page}) => {
  // Step: When User clicks on View Contracts option in More Menu
  // From: features\More2.feature:33:13
  await more2Page.clickViewContracts();
});

Then('User should be navigated to Contracts dashboard page', async ({more2Page}) => {
  // Step: Then User should be navigated to Contracts dashboard page
  // From: features\More2.feature:34:13
  await more2Page.verifyContractsDashboard();
});

When('User clicks on View Cases option in More Menu', async ({more2Page}) => {
  // Step: When User clicks on View Cases option in More Menu
  // From: features\More2.feature:39:13
  await more2Page.clickViewCases();
});

Then('User should be navigated to Cases dashboard page', async ({more2Page}) => {
  // Step: Then User should be navigated to Cases dashboard page
  // From: features\More2.feature:40:13
  await more2Page.verifyCasesDashboard(); 
});

When('User clicks on View Targets option in More Menu', async ({more2Page}) => { 
  // Step: When User clicks on View Targets option in More Menu
  // From: features\More2.feature:45:13
  await more2Page.clickViewTargets();
});

Then('User should be navigated to Targets dashboard page', async ({more2Page}) => {
  // Step: Then User should be navigated to Targets dashboard page
  // From: features\More2.feature:46:13
  await more2Page.verifyTargetsDashboard();
});