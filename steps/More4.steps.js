
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { More4Page } from '../pages/More4Page.js';
import { test} from '../fixtures/suite8Fixtures.js';
import { logger } from "../utils/logger.js";

const { Given,When, Then } = createBdd(test);

// PDF - Templates
When('User clicks "PDF - Templates" item from More', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.openMoreMenu();
  await morePage.clickMoreItem('PDF - Templates');
});
Then('User is navigating to the "PDF - Templates" page', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.verifyPageOpened('PDF - Templates');
});

// Reports
When('User clicks "Reports" item from More', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.openMoreMenu();
  await morePage.clickMoreItem('Reports');
});
Then('User is navigating to the "Reports" page', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.verifyPageOpened('Reports');
});

// Knowledge Base
When('User clicks "Knowledge Base" item from More', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.openMoreMenu();
  await morePage.clickMoreItem('Knowledge Base');
});
Then('User is navigating to the "Knowledge Base" page', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.verifyPageOpened('Knowledge Base');
});

// KB - Categories
When('User clicks "KB - Categories" item from More', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.openMoreMenu();
  await morePage.clickMoreItem('KB - Categories');
});
Then('User is navigating to the "KB - Categories" page', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.verifyPageOpened('KB - Categories');
});

// Email - Templates
When('User clicks "Email - Templates" item from More', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.openMoreMenu();
  await morePage.clickMoreItem('Email - Templates');
});
Then('User is navigating to the "Email - Templates" page', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.verifyPageOpened('Email - Templates');
});

// Surveys
When('User clicks "Surveys" item from More', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.openMoreMenu();
  await morePage.clickMoreItem('Surveys');
});
Then('User is navigating to the "Surveys" page', async ({ page }) => {
  const morePage = new More4Page(page);
  await morePage.verifyPageOpened('Surveys');
});