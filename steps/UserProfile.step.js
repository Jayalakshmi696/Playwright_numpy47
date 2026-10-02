import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import path from 'node:path';
import { LoginPage } from '../pages/LoginPage.js';
const { Given, When, Then } = createBdd(test);
import { test} from '../fixtures/suite8Fixtures.js';
import loginData from '../test-data/loginData.json' with {
  type: 'json'
};
//import { userProfilePage } from '../pages/UserProfilePage.js';
import profileData from '../test-data/profileData.json' with {
  type: 'json'
};


Given('User successfully logged into the suite8demo application', async ({userProfilePage,page}) => {
  await page.goto('/#/home', { waitUntil: 'domcontentloaded' });

  const usernameInput = page.getByRole('textbox', { name: 'Username' });
  const homeSearch = page.getByRole('textbox', { name: 'Search' });

  await expect.poll(async () =>
    await usernameInput.isVisible() || await homeSearch.isVisible(),
    { timeout: 15000 }
  ).toBe(true);

  // Login only if login page is displayed
  if (await usernameInput.isVisible()) {
    const loginPage = new LoginPage(page);
    const credentials = loginData.validUsernameAndPassword;
    await loginPage.login(credentials.username, credentials.password);
  }
  await expect(page).toHaveURL(/#\/home/);
  await expect(homeSearch).toBeVisible();
  await expect(page.locator('app-full-page-spinner .app-overlay')).toBeHidden({
    timeout: 30000
  });
});

When('the user clicks the User Profile icon', async ({userProfilePage}) => {
  // Step: When the user clicks the User Profile icon
  // From: features\UserProfile.feature:12:5
  await userProfilePage.userProfileIcon();

});

Then('the User Profile dropdown should contain following options', async ({userProfilePage}, dataTable) => {
  // Step: Then the User Profile dropdown should contain following options
  // From: features\UserProfile.feature:13:5
const options = dataTable.raw().flat();

for (const option of options) {
      if (option === 'Logged-in user name') {
        // Verify the logged-in user's name
        await expect(userProfilePage.profileText).toBeVisible();
      } else {
        await expect(
          userProfilePage.page.getByText(option, { exact: true })
        ).toBeVisible();
      }
    }

});

When('the user clicks on Edit Profile from dropdown', async ({userProfilePage}) => {
  // Step: When the user clicks on Edit Profile from dropdown
  // From: features\UserProfile.feature:22:5
  await userProfilePage.userProfileIcon();
  await userProfilePage.editProfile();

  
});

Then('the user should be navigated to Edit Profile page', async ({userProfilePage}) => {
  // Step: Then the user should be navigated to Edit Profile page
  // From: features\UserProfile.feature:23:5

await expect(userProfilePage.page).toHaveURL(
        /#\/users\/edit\/seed_will_id/);
 //await expect(userProfilePage.profileText).toBeVisible();

});
When('the user clicks on Employees from dropdown', async ({userProfilePage}) => {
  // Step: When the user clicks on Employees from dropdown
  // From: features\UserProfile.feature:26:5
  await userProfilePage.userProfileIcon();
  await userProfilePage.employees.click();
});

Then('the user should be navigated to Employees page.', async ({userProfilePage}) => {
  // Step: Then the user should be navigated to Employees page.
  // From: features\UserProfile.feature:27:5
  await expect(userProfilePage.page).toHaveURL(/#\/employees\/index/);
});

When('the user clicks on Community Forum from dropdown', async ({userProfilePage}) => {
  // Step: When the user clicks on Community Forum from dropdown
  // From: features\UserProfile.feature:30:5
   await userProfilePage.userProfileIcon();
   userProfilePage.communityForumPage =await userProfilePage.communityNavigation();
});

Then('the user should be navigated to Community Forum page.', async ({userProfilePage}) => {
  // Step: Then the user should be navigated to Community Forum page.
  // From: features\UserProfile.feature:31:5

await expect(userProfilePage.communityForumPage)
  .toHaveURL('https://community.suitecrm.com/');
  await userProfilePage.communityForumPage.close();

});

When('the user clicks on About from dropdown', async ({userProfilePage}) => {
  // Step: When the user clicks on About from dropdown
  // From: features\UserProfile.feature:34:5
  await userProfilePage.userProfileIcon();
  await userProfilePage.userAbout();
});

Then('the user should be navigated to About page.', async ({userProfilePage}) => {
  // Step: Then the user should be navigated to About page.
  // From: features\UserProfile.feature:35:5
  await expect(userProfilePage.page).toHaveURL(/#\/home\/about/);
});

When('the user clicks on Logout from dropdown', async ({userProfilePage}) => {
  // Step: When the user clicks on Logout from dropdown
  // From: features\UserProfile.feature:38:5
 await userProfilePage.userProfileIcon();
  await userProfilePage.userLogout();
});

Then('the user should be logged out and navigated to login page.', async ({userProfilePage}) => {
  // Step: Then the user should be logged out and navigated to login page.
  // From: features\UserProfile.feature:39:5
  await expect(userProfilePage.page).toHaveURL(/#\/Login/);
});

Given('User is on Userprofile tab of User profile page', async ({userProfilePage}) => {
  // Step: Given User is on Userprofile tab of User profile page
  // From: features\UserProfile.feature:43:5
  await userProfilePage.userProfileIcon();
  await userProfilePage.editProfile();
  await userProfilePage.editprofilePage();


});

When('User clicks the save button without entering Last Name field', async ({userProfilePage}) => {
  // Step: When User clicks the save button without entering Last Name field
  // From: features\UserProfile.feature:44:5
  await userProfilePage.userEditSave();
});

Then('User should see the error message {string}', async ({userProfilePage}, arg) => {
  // Step: Then User should see the error message "Missing required field: Last Name"
  // From: features\UserProfile.feature:45:5
  await userProfilePage.errorMessage();
});

When('User clicks on choose file button and selects a photo to upload', async ({userProfilePage}) => {
  // Step: When User clicks on choose file button and selects a photo to upload
  // From: features\UserProfile.feature:49:5
  await userProfilePage.uploadPhoto(path.resolve(profileData.photo));
});

Then('User should see the uploaded photo in User profile page', async ({userProfilePage}) => {
  // Step: Then User should see the uploaded photo in User profile page
  // From: features\UserProfile.feature:50:5
  await expect(userProfilePage.photoFile).toHaveValue(/.+/);
});

When('User clicks settings button', async ({userProfilePage}) => {
  // Step: When User clicks settings button
  // From: features\UserProfile.feature:54:5
  await userProfilePage.editProfileSettings();
});

Then('settings popup will display with all fileds', async ({userProfilePage}) => {
  // Step: Then settings popup will display with all fileds
  // From: features\UserProfile.feature:55:5
  await userProfilePage.verifySettingsPopup();
});

When('User adds an email address by clicking the plus \\(+) button and saves the profile', async ({userProfilePage},dataTable) => {
  // Step: When User adds an email address by clicking the plus (+) button and saves the profile
  // From: features\UserProfile.feature:59:5
    const data = dataTable.rowsHash();

    await userProfilePage.addEmailAddress(data.email);
    await userProfilePage.saveProfile();
  
});

Then('User should see the email address added in the profile', async ({userProfilePage}) => {
  // Step: Then User should see the email address added in the profile
  // From: features\UserProfile.feature:60:5
});