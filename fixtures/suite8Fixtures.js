import { test as base } from "playwright-bdd";
//import { LoginPage } from '../pages/LoginPage.js';
import { AccountsPage } from "../pages/AccountsPage.js";
import { UserProfilePage } from "../pages/UserProfilePage.js";
import { AccountsImportFile } from "../pages/AccountsImportFile.js";
import { QuickActionsPage } from "../pages/QuickActionsPage.js";
import { More1Page } from "../pages/More1Page.js";
//import { test } from '../fixtures/pageFixtures.js';
import { CalendarPage } from "../pages/CalendarPage.js";
import { DocumentPage } from "../pages/DocumentPage.js";
import { More4Page } from "../pages/More4Page.js";
import testData from "../test-data/loginData.json" with { type: "json" };

export const test = base.extend({
  // Accounts fixture
  accountsPage: async ({ page }, use) => {
    // //await page.goto('https://suite8demo.suiteondemand.com/#/home');

    const accountsPage = new AccountsPage(page);

    await use(accountsPage);
  },

  //AccountsImportFile fixture
  importfilePage: async ({ page }, use) => {
    //await page.goto('https://suite8demo.suiteondemand.com/#/home');

    const importfilePage = new AccountsImportFile(page);

    await use(importfilePage);
  },

  //userprofile fixture
  userProfilePage: async ({ page }, use) => {
    const userProfilePage = new UserProfilePage(page);

    await use(userProfilePage);
  },
  //quickActions fixture
  quickActionsPage: async ({ page }, use) => {
    const quickActionsPage = new QuickActionsPage(page);
    await use(quickActionsPage);
  },
  //More1 fixture
  more1Page: async ({ page }, use) => {
    const more1Page = new More1Page(page);
    await use(more1Page);
  },
  // Calendar fixture
  calendarPage: async ({ page }, use) => {
    // await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const calendarPage = new CalendarPage(page);
    await use(calendarPage);
  },
  // Document fixture
  documentPage: async ({ page }, use) => {
    // await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const documentPage = new DocumentPage(page);
    await use(documentPage);
  },
  // More4 fixture
  more4Page: async ({ page }, use) => {
    // await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const more4Page = new More4Page(page);
    await use(more4Page);
  },
});

// 2. Pass your extended test to createBdd
//export const { Given, When, Then } = createBdd(test);
