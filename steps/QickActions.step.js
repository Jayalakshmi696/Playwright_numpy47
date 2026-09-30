import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();


When('the user clicks plus icon on right side of application', async ({quickActionsPage}) => {
  // Step: When the user clicks plus icon on right side of application
  // From: features\QuickActions.feature:11:13
await quickActionsPage.clickQuickActions();

});

Then('the user should see the list of items in dropdown of quickActions', async ({quickActionsPage}) => {
  // Step: Then the user should see the list of items in dropdown of quickActions
  // From: features\QuickActions.feature:12:13

   await quickActionsPage.verifyQuickActionsItems();
});

When('User clicks Create Account item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Create Account item from Quick Actions
  // From: features\QuickActions.feature:15:10
  await quickActionsPage.clickCreateAccount();
});

Then('User is navigating to the Create Account page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Create Account page
  // From: features\QuickActions.feature:16:10
 await expect(quickActionsPage.page).toHaveURL(
    /#\/accounts\/edit\?return_module=Accounts&return_action=DetailView/
  );
});

When('User clicks Create Contact item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Create Contact item from Quick Actions
  // From: features\QuickActions.feature:19:10
  await quickActionsPage.clickCreateContact();
});

Then('User is navigating to the Create Contact page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Create Contact page
  // From: features\QuickActions.feature:20:10
  await expect(quickActionsPage.page).toHaveURL(
    /#\/contacts\/edit\?return_module=Contacts&return_action=DetailView/
  );
});

When('User clicks Create Opportunity item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Create Opportunity item from Quick Actions
  // From: features\QuickActions.feature:23:10

  await quickActionsPage.clickCreateOpportunity();
});

Then('User is navigating to the Create Opportunity page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Create Opportunity page
  // From: features\QuickActions.feature:24:10
   await expect(quickActionsPage.page).toHaveURL(
    /#\/opportunities\/edit\?return_module=Opportunities&return_action=DetailView/
  );
});

When('User clicks Create Lead item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Create Lead item from Quick Actions
  // From: features\QuickActions.feature:27:10
await quickActionsPage.clickCreateLead();
});

Then('User is navigating to the Create Lead page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Create Lead page
  // From: features\QuickActions.feature:28:10
  await expect(quickActionsPage.page).toHaveURL(
    /#\/leads\/edit\?return_module=Leads&return_action=DetailView/)
});

When('User clicks Create Quote item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Create Quote item from Quick Actions
  // From: features\QuickActions.feature:31:10
  await quickActionsPage.clickCreateQuote();
});


Then('User is navigating to the Create Quote page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Create Quote page
  // From: features\QuickActions.feature:32:10
   await expect(quickActionsPage.page).toHaveURL(
    /#\/quotes\/edit\?return_module=AOS_Quotes&return_action=DetailView/)
});

When('User clicks Schedule Meeting item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Schedule Meeting item from Quick Actions
  // From: features\QuickActions.feature:35:10
  await quickActionsPage.clickScheduleMeeting();
});

Then('User is navigating to the Schedule Meeting page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Schedule Meeting page
  // From: features\QuickActions.feature:36:10
  await expect(quickActionsPage.page).toHaveURL(
    /#\/meetings\/edit\?return_module=Meetings&return_action=DetailView/
  );
});

When('User clicks Schedule Call item from Quick Actions', async ({quickActionsPage}) => {
  // Step: When User clicks Schedule Call item from Quick Actions
  // From: features\QuickActions.feature:39:10
  await quickActionsPage.clickScheduleCall();
});

Then('User is navigating to the Schedule Call page', async ({quickActionsPage}) => {
  // Step: Then User is navigating to the Schedule Call page
  // From: features\QuickActions.feature:40:10
  await expect(quickActionsPage.page).toHaveURL(
    /#\/calls\/edit\?return_module=Calls&return_action=DetailView/
  );
});
