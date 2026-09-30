import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();

When('the user clicks on More module from left navigation', async ({more1Page}) => {
  // Step: When the user clicks on More module from left navigation
  // From: features\More.feature:12:9
 await  more1Page.clickMoreModule();
  
});

Then('the user should see the list of fallowing items in dropdown', async ({more1Page}, dataTable) => {
  // Step: Then the user should see the list of fallowing items in dropdown
  // From: features\More1.feature:11:5

   const items = dataTable.raw().flat();

  for (const item of items) {
    await expect(
      more1Page.page.getByRole('link', { name: item, exact: true })
    ).toBeVisible();
  }
});

When('User clicks Home item from More', async ({more1Page}) => {
  // Step: When User clicks Home item from More
  // From: features\More.feature:16:6
  await more1Page.clickHome();
});

Then('User is navigating to the HomePage', async ({more1Page}) => {
  // Step: Then User is navigating to the HomePage
  // From: features\More.feature:17:6
  await expect(more1Page.page).toHaveURL(/#\/home/);

});

When('User clicks Email item from More', async ({more1Page}) => {
  // Step: When User clicks Email item from More
  // From: features\More.feature:20:6
  await more1Page.clickEmails();
});

Then('User is navigating to the Email page', async ({more1Page}) => {
  // Step: Then User is navigating to the Email page
  // From: features\More.feature:21:6
  await expect(more1Page.page).toHaveURL(/#\/emails/);
});

When('User clicks Campaigns item from More', async ({more1Page}) => {
  // Step: When User clicks Campaigns item from More
  // From: features\More.feature:24:6
await more1Page.clickCampaigns();

});

Then('User is navigating to the Campaigns page', async ({more1Page}) => {
  // Step: Then User is navigating to the Campaigns page
  // From: features\More.feature:25:6
  await expect(more1Page.page).toHaveURL(/#\/campaigns/);
});

When('User clicks Calls item from More', async ({more1Page}) => {
  // Step: When User clicks Calls item from More
  // From: features\More.feature:28:6
  await more1Page.clickCalls();
});

Then('User is navigating to the Calls page', async ({more1Page}) => {
  // Step: Then User is navigating to the Calls page
  // From: features\More.feature:29:6
  await expect(more1Page.page).toHaveURL(/#\/calls/);
});


When('User clicks Meetings item from More', async ({more1Page}) => {
  // Step: When User clicks Meetings item from More
  // From: features\More.feature:32:6
  await more1Page.clickMeetings();
});

Then('User is navigating to the Meetings page', async ({more1Page}) => {
  // Step: Then User is navigating to the Meetings page
  // From: features\More.feature:33:6
  await expect(more1Page.page).toHaveURL(/#\/meetings/);
});

