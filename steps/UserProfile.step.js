import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();


Given('User successfully logged into the suite8demo application', async ({}) => {
  // Step: Given User successfully logged into the suite8demo application
  // From: features\UserProfile.feature:8:5
});

When('the user clicks the User Profile icon', async ({}) => {
  // Step: When the user clicks the User Profile icon
  // From: features\UserProfile.feature:12:5
});

Then('the User Profile dropdown should contain following options', async ({}, dataTable) => {
  // Step: Then the User Profile dropdown should contain following options
  // From: features\UserProfile.feature:13:5
});

When('the user clicks on Edit Profile from dropdown', async ({}) => {
  // Step: When the user clicks on Edit Profile from dropdown
  // From: features\UserProfile.feature:22:5
});

Then('the user should be navigated to Edit Profile page', async ({}) => {
  // Step: Then the user should be navigated to Edit Profile page
  // From: features\UserProfile.feature:23:5
});

When('the user clicks on Employees from dropdown', async ({}) => {
  // Step: When the user clicks on Employees from dropdown
  // From: features\UserProfile.feature:26:5
});

Then('the user should be navigated to Employees page.', async ({}) => {
  // Step: Then the user should be navigated to Employees page.
  // From: features\UserProfile.feature:27:5
});

When('the user clicks on Community Forum from dropdown', async ({}) => {
  // Step: When the user clicks on Community Forum from dropdown
  // From: features\UserProfile.feature:30:5
});

Then('the user should be navigated to Community Forum page.', async ({}) => {
  // Step: Then the user should be navigated to Community Forum page.
  // From: features\UserProfile.feature:31:5
});

When('the user clicks on About from dropdown', async ({}) => {
  // Step: When the user clicks on About from dropdown
  // From: features\UserProfile.feature:34:5
});

Then('the user should be navigated to About page.', async ({}) => {
  // Step: Then the user should be navigated to About page.
  // From: features\UserProfile.feature:35:5
});

When('the user clicks on Logout from dropdown', async ({}) => {
  // Step: When the user clicks on Logout from dropdown
  // From: features\UserProfile.feature:38:5
});

Then('the user should be logged out and navigated to login page.', async ({}) => {
  // Step: Then the user should be logged out and navigated to login page.
  // From: features\UserProfile.feature:39:5
});

Given('User is on Userprofile tab of User profile page', async ({}) => {
  // Step: Given User is on Userprofile tab of User profile page
  // From: features\UserProfile.feature:43:5
});

When('User clicks the save button without entering Last Name field', async ({}) => {
  // Step: When User clicks the save button without entering Last Name field
  // From: features\UserProfile.feature:44:5
});

Then('User should see the error message {string}', async ({}, arg) => {
  // Step: Then User should see the error message "Missing required field: Last Name"
  // From: features\UserProfile.feature:45:5
});

When('User clicks on choose file button and selects a photo to upload', async ({}) => {
  // Step: When User clicks on choose file button and selects a photo to upload
  // From: features\UserProfile.feature:49:5
});

Then('User should see the uploaded photo in User profile page', async ({}) => {
  // Step: Then User should see the uploaded photo in User profile page
  // From: features\UserProfile.feature:50:5
});

When('User clicks settings button', async ({}) => {
  // Step: When User clicks settings button
  // From: features\UserProfile.feature:54:5
});

Then('settings popup will display with all fileds', async ({}) => {
  // Step: Then settings popup will display with all fileds
  // From: features\UserProfile.feature:55:5
});

When('User adds an email address by clicking the plus \\(+) button and saves the profile', async ({}) => {
  // Step: When User adds an email address by clicking the plus (+) button and saves the profile
  // From: features\UserProfile.feature:59:5
});

Then('User should see the email address added in the profile', async ({}) => {
  // Step: Then User should see the email address added in the profile
  // From: features\UserProfile.feature:60:5
});