import { test as base,createBdd } from 'playwright-bdd';
//import { LoginPage } from '../pages/LoginPage.js';
import {AccountsPage} from '../pages/AccountsPage.js';
import {LeadsPage} from '../pages/LeadsPage.js';
import {QuotesPage} from '../pages/QuotesPage.js';
import {More3Page} from '../pages/More3Page.js';
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
     
     // Leads fixture
  leadsPage: async ({ page }, use) => {
  
    const leadsPage = new LeadsPage(page);

    await use(leadsPage);
  },

      // Quotes fixture
    quotesPage: async ({ page }, use) => {
  
    const quotesPage = new QuotesPage(page);

    await use(quotesPage);
  },

    // More3 fixture
    more3Page: async ({ page }, use) => {
  
    const more3Page = new More3Page(page);

    await use(more3Page);
  }

});


// 2. Pass your extended test to createBdd
//export const { Given, When, Then } = createBdd(test);