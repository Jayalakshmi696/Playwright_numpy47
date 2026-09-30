import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
//import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd(test);
import { AccountsPage } from '../pages/AccountsPage.js';
import accountData from '../test-data/accountData.json' with { type: 'json' };



When('the user clicks on Accounts module from left navigation', async ({page,accountsPage }) => {
  // Step: When the user clicks on Accounts module from left navigation
  // From: features\Accounts.feature:13:5
    //await page.goto('https://suite8demo.suiteondemand.com/#/home');
     console.log('Current URL before Accounts:', page.url());

   
    await accountsPage.clickAccountsModule();

    //  await expect(
    // accountsPage.accountsDashboard
    //  ).toBeVisible({ timeout: 10000 });

     console.log('Current URL after load:', page.url());
    
});

Then('the user should be navigated to Accounts Dashboard page and should see the list in dropdown', async ({accountsPage}, dataTable) => {
  // Step: Then the user should be navigated to Accounts Dashboard page and should see the list in dropdown
  // From: features\Accounts.feature:14:5
       // Verify Accounts Dashboard
         
    await accountsPage.verifyAccountsDashboard();

    for (const [label] of dataTable.raw()) {
      await expect(
        accountsPage.page.getByRole('link', { name: label, exact: true })
      ).toBeVisible();
    }

  });

When('the user opens Accounts module and clicks Create Account', async ({accountsPage}) => {
  // Step: When the user opens Accounts module and clicks Create Account
  // From: features\Accounts.feature:21:5
  // const accountsPage = new AccountsPage(page);
 // await accountsPage.page.goto('https://suite8demo.suiteondemand.com/#/home');
  await accountsPage.clickAccountsModule();
  await accountsPage.clickCreateAccount();
  
 
});

Then('the user should be navigated to Create Account page', async ({accountsPage}) => {
  // Step: Then the user should be navigated to Create Account page
  // From: features\Accounts.feature:22:5
   //const accountsPage = new AccountsPage(page);
   //await accountsPage.verifyCreateAccountPage();

   await accountsPage.verifyCreateAccountPage();
    //await accountsPage.verifyCreatedAccount('ABC Test Account');
});


Given('User is on Create Account page', async ({accountsPage}) => {
  // Step: Given User is on Create Account page
  // From: features\Accounts.feature:25:5
  await accountsPage.clickAccountsModule();
  await accountsPage.clickCreateAccount();
  await accountsPage.verifyCreateAccountPage();

});

When('User clicks the save button without entering mandatory fields', async ({accountsPage}) => {
  // Step: When User clicks the save button without entering mandatory fields
  // From: features\Accounts.feature:26:5

   await accountsPage.clickSaveWithoutData();


});

When('User enters valid data in all mandatory fields and clicks save button', async ({accountsPage}) => {
  // Step: When User enters valid data in all mandatory fields and clicks save button
  // From: features\Accounts.feature:31:5

   const validAccounts = [
        accountData.validData1,
        accountData.validData2
    ];

  for (const [index, account] of validAccounts.entries()) {

    await accountsPage.enterMandatoryFields(account);
    await accountsPage.clickSave();

    await accountsPage.verifyCreatedAccount(account.name);

    // Only go back if another account still needs to be created
    if (index < validAccounts.length - 1) {
        // await accountsPage.clickAccountsModule();
        // await accountsPage.clickCreateAccount();
        await accountsPage.openCreateAccountPage();
    }
}
  
});

Then('User should be navigating to newly created account page', async ({accountsPage }) => {
  // Step: Then User should be navigating to newly created account page
  // From: features\Accounts.feature:32:5

  // Each created account is verified immediately after saving in the When step.
  await expect(accountsPage.page).toHaveURL(/#\/accounts\/record\//);
  //await accountsPage.verifyCreateAccountPage();
});

When('the user clicks on Import Accounts from dropdown', async ({accountsPage}) => {
  // Step: When the user clicks on Import Accounts from dropdown
  // From: features\Accounts.feature:36:5
  await accountsPage.clickAccountsModule();
  await accountsPage.clickImportAccount();

});

Then('the user should be navigated to Import Accounts page', async ({accountsPage}) => {
  // Step: Then the user should be navigated to Import Accounts page
  // From: features\Accounts.feature:37:5

  await accountsPage.verifyImportPageNav();
});


When('the user clicks on View Accounts from dropdown', async ({accountsPage}) => {
  // Step: When the user clicks on View Accounts from dropdown
  // From: features\Accounts.feature:41:5
  await accountsPage.clickAccountsModule();
  await accountsPage.clickViewAccounts();

});

Then('the user should be navigated to View Accounts page', async ({accountsPage}) => {
  // Step: Then the user should be navigated to View Accounts page
  // From: features\Accounts.feature:42:5
  await accountsPage.verifyViewAccountNavigation();

});

When('the user clicks on Recently Viewed from dropdown', async ({accountsPage}) => {
  // Step: When the user clicks on Recently Viewed from dropdown
  // From: features\Accounts.feature:46:5

  await accountsPage.clickRecentlyViewed();
});

Then('the user should be navigated to Recently Viewed page', async ({accountsPage}) => {
  // Step: Then the user should be navigated to Recently Viewed page
  // From: features\Accounts.feature:47:5
 await accountsPage.verifyRecentlyViewedPage();

});

Then('User should see the createName error message {string}', async ({accountsPage},errorMessage) => {
  // Step: Then User should see the createName error message "Missing required field: Name"
  // From: features\Accounts.feature:28:5
    await accountsPage.verifyErrorMessage(errorMessage);
    //await accountsPage.verifyNameRequiredError();
  
});


//Recently viewed account of exisiting account

Given('User opens the exisiting aacount', async ({accountsPage}) => {
  // Step: Given User opens the exisiting aacount
  // From: features\Accounts.feature:53:5

  await accountsPage.openExistingAccount();

});

When('User clicks the Recently viewed', async ({accountsPage}) => {
  // Step: When User clicks the Recently viewed
  // From: features\Accounts.feature:54:5

  await accountsPage.clickRecentlyViewed();
});

Then('existing account should be displayed in recently viewed', async ({accountsPage}) => {
  // Step: Then existing account should be displayed in recently viewed
  // From: features\Accounts.feature:55:5
  await accountsPage.verifyRecentlyViewedRecord(accountsPage.existingAccountName);
});

//cancel button validation 
Given('User in Create Page of Account', async ({accountsPage}) => {
  // Step: Given User in Create Page of Account
  // From: features\Accounts.feature:59:5
  await accountsPage.clickAccountsModule();


  await accountsPage.clickCreateAccount();
  await accountsPage.enterMandatoryFields(accountData.validData1);

});

When('User clicks cancel button inside accountpage having data', async ({accountsPage}) => {
  // Step: When User clicks cancel button inside accountpage having data
  // From: features\Accounts.feature:60:5
   await accountsPage.clickCancel();


});

Then('User will get popup with message', async ({accountsPage}) => {
  // Step: Then User will get popup with message
  // From: features\Accounts.feature:61:5

  await accountsPage.verifyCancelPopupMessage();

});


//Create account page cancel button

Given('User is in create account page', async ({accountsPage}) => {
  // Step: Given User is in create account page
  // From: features\Accounts.feature:65:5
  await accountsPage.clickAccountsModule();
  await accountsPage.clickCreateAccount();
});

When('User clicks cancel button without entering data', async ({accountsPage}) => {
  // Step: When User clicks cancel button without entering data
  // From: features\Accounts.feature:66:5

  await accountsPage.clickCancel();

});

Then('User is navigating back to the Accounts Dashboard', async ({accountsPage}) => {
  // Step: Then User is navigating back to the Accounts Dashboard
  // From: features\Accounts.feature:67:5
await accountsPage.verifyAccountsDashboardPage();
  
});


