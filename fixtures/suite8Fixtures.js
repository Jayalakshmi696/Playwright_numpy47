import { test as base,createBdd } from 'playwright-bdd';
//import { LoginPage } from '../pages/LoginPage.js';
import {ContactsPage} from '../pages/ContactsPage.js';
import {OpportunitiesPage} from '../pages/OpportunitiesPage.js';
import {More2Page} from '../pages/More2Page.js';
import {AccountsPage} from '../pages/AccountsPage.js';
import testData from '../test-data/loginData.json' with {
  type: 'json'
};

export const test = base.extend({

   // Accounts fixture
  accountsPage: async ({ page }, use) => {
    //await page.goto('https://suite8demo.suiteondemand.com/#/home');

    const accountsPage = new AccountsPage(page);

    await use(accountsPage);
  },
     
   // Contacts fixture
  contactsPage: async ({ page }, use) => {
    //await page.goto('https://suite8demo.suiteondemand.com/#/home');

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
  },
  
});

// 2. Pass your extended test to createBdd
//export const { Given, When, Then } = createBdd(test);