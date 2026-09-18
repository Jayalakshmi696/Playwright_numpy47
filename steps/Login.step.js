import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import testData from '../test-data/loginData.json' with {
  type: 'json'
};

import { LoginPage } from '../pages/LoginPage.js';

const { Given, When, Then } = createBdd();
//const { LoginPage } = require('../pages/LoginPage').default;

Given('User is on suite8demo login page', async ({page}) => {
  // Step: Given User is on suite8demo login page
  // From: features\login.feature:9:5

 await page.goto('https://suite8demo.suiteondemand.com/#/Login');

  await expect(page).toHaveURL(/.*#\/Login/);
});

When('user enters {string}', async ({page}, loginData) => {
  // Step: When user enters "emptyUsername"
  // From: features\login.feature:12:5
const data = testData[loginData];

  if (!data) {
    throw new Error(
      `Test data "${loginData}" was not found in loginTestData.json`
    );
  }

  console.log(`Running test data: ${loginData}`);
  console.log(`Username: ${data.username}`);
  console.log(`Password: ${data.password}`);

  // Username
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);

  // Password
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);

  // Login
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForTimeout(2000);

  console.log('URL:', page.url());

  console.log('BODY:', await page.locator('body').innerText());
  
});

Then('User should see the expected login result', async ({page}) => {
  // Step: Then User should see the expected login result
  // Validation scenarios
   // Required field validation
  const requiredMessage = page.getByText(/Missing required field/i).first();

  if (await requiredMessage.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(requiredMessage).toBeVisible();
    return;
  }

  // Invalid credentials
  const invalidMessage = page.getByText(
    /Login credentials incorrect, please try again\.|Too many failed login attempts, please try again later\./i
  );

  if (await invalidMessage.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expect(invalidMessage).toBeVisible();
    return;
  }

  // Successful login
  await expect(page).not.toHaveURL(/.*#\/Login/);

});

When('User enters a password', async ({ page }) => {
  // Step: When User enters a password
  // From: features\login.feature:25:3
  await page.getByRole('textbox', { name: 'Password' }).fill('will');
});

Then('User should see the password displayed as hidden characters',
   async ({page}) => {
  // Step: Then User should see the password displayed as hidden characters
  // From: features\login.feature:26:3

    const passwordField = page.getByRole('textbox', { name: 'Password' });

    await expect(passwordField).toHaveAttribute('type', 'password');

    await expect(passwordField).toHaveValue('will');
  });

// Given('User is on the  browser', async ({}) => {
//   // Step: Given User is on the  browser
//   // From: features\loginPageUI.feature:8:5
// this.loginPage = new LoginPage(this.page);

// });

When('user enters application url', async ({page}) => {
  // Step: When user enters application url
  // From: features\loginPageUI.feature:9:5
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage(
        process.env.BASE_URL
    );
});

Then('user should see the application logo,username field, password field, and Login button on the login page', async ({page}) => {
  // Step: Then user should see the application logo,username field, password field, and Login button on thelogin page
  // From: features\loginPageUI.feature:12:5
  const loginPage = new LoginPage(page);
  await loginPage.verifyLoginPageUI();
});

