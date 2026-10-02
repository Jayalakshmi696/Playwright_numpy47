import { test as base } from "playwright-bdd";
import { ContactsPage } from "../pages/ContactsPage.js";
//import { LoginPage } from '../pages/LoginPage.js';
import { AccountsPage } from "../pages/AccountsPage.js";
import { OpportunitiesPage } from "../pages/OpportunitiesPage.js";
import { UserProfilePage } from "../pages/UserProfilePage.js";
import { More2Page } from "../pages/More2Page.js";
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

  // Contacts fixture
  contactsPage: async ({ page }, use) => {
    // await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const contactsPage = new ContactsPage(page);
    await use(contactsPage);
  },
  // Opportunities fixture
  opportunitiesPage: async ({ page }, use) => {
    // await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const opportunitiesPage = new OpportunitiesPage(page);
    await use(opportunitiesPage);
  },
   // More2 fixture
  more2Page: async ({ page }, use) => {
    // await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const more2Page = new More2Page(page);
    await use(more2Page);
  }
});

// 2. Pass your extended test to createBdd
//export const { Given, When, Then } = createBdd(test);
