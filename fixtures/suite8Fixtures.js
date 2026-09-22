import { test as base,createBdd } from 'playwright-bdd';
//import { LoginPage } from '../pages/LoginPage.js';
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
  
    //Leads fixture
  leadsPage: async ({ page }, use) => {
    await page.goto('https://suite8demo.suiteondemand.com/#/home');
    const leadsPage = new LeadsPage(page);

    await use(leadsPage);
  }
  
});

// 2. Pass your extended test to createBdd
//export const { Given, When, Then } = createBdd(test);