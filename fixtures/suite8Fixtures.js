import { test as base,createBdd } from 'playwright-bdd';
//import { LoginPage } from '../pages/LoginPage.js';
import {ContactsPage} from '../pages/ContactsPage.js';
import {AccountsPage} from '../pages/AccountsPage.js';
import testData from '../test-data/loginData.json' with {
  type: 'json'
};

export const test = base.extend({

   // Accounts fixture
  accountsPage: async ({ page }, use) => {
    await page.goto('https://suite8demo.suiteondemand.com/#/home');

    const accountsPage = new AccountsPage(page);

    await use(accountsPage);
  },
     
   // Contacts fixture
  contactsPage: async ({ page }, use) => {
    await page.goto('https://suite8demo.suiteondemand.com/#/home');

    const contactsPage = new ContactsPage(page);

    await use(contactsPage);
  }
  
});

// 2. Pass your extended test to createBdd
//export const { Given, When, Then } = createBdd(test);