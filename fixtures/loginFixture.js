import { test as base,createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import {AccountsPage} from '../pages/AccountsPage.js';
import testData from '../test-data/loginData.json' with {
  type: 'json'
};

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);

    const user = testData.validUsernameAndPassword;

    await page.goto(
      'https://suite8demo.suiteondemand.com/#/Login'
    );

    await loginPage.login(
      user.username,
      user.password
    );

    await use(page);
  },
   // Accounts fixture
  accountsPage: async ({ loggedInPage }, use) => {

    const accountsPage = new AccountsPage(loggedInPage);

    await use(accountsPage);
  },

  //Leads fixture
  leadsPage: async ({ loggedInPage }, use) => {
    const leadsPage = new LeadsPage(loggedInPage);

    await use(leadsPage);
  }
    

});

// 2. Pass your extended test to createBdd
export const { Given, When, Then } = createBdd(test);