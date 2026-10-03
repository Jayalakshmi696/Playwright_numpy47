import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/suite8Fixtures.js';
import calendarData from '../test-data/calendarData.json' with { type: 'json' };
import { logger } from "../utils/logger.js";
import { LoginPage } from '../pages/LoginPage.js';
import loginData from '../test-data/loginData.json' with { type: 'json' };

const { Given, When, Then } = createBdd(test);

// --- Background ---

let currentFormType; // meeting / call / task, set in "the user is on the {string} page"

//Given('the user is logged into the SuitCRM', async ({ page }) => {
  //await page.goto('https://suite8demo.suiteondemand.com/#/home');
//});
Given('the user is logged into the SuitCRM', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/home');
  const usernameInput = page.getByRole('textbox', { name: 'Username' });
  const homeSearch = page.getByRole('textbox', { name: 'Search' });
  await expect.poll(async () => (await usernameInput.isVisible()) || (await homeSearch.isVisible()), { timeout: 15000 }).toBe(true);
  if (await usernameInput.isVisible()) {   // log in again only if the session ended
    const credentials = loginData.validUsernameAndPassword;
    await new LoginPage(page).login(credentials.username, credentials.password);
  }
});

Given('the user navigates to the {string} module in the menu', async ({ page, calendarPage }, moduleName) => {
  await page.waitForLoadState('load');
  
  await expect(async () => {
    await calendarPage.getTopNavLink(moduleName).click();
    await expect(page).toHaveURL(new RegExp(moduleName, 'i'), { timeout: 3000 });
  }).toPass({ timeout: 40000 });
});

// --- Scenario: Verify the "calendar" icon ---

When('the user hovers over the {string} icon in the top navigation bar', async ({ calendarPage }, iconName) => {
  await calendarPage.hoverCalendarIcon();
});

Then('user should see the {string}, {string}, {string} and {string} options in the dropdown menu',
  async ({ calendarPage }, opt1, opt2, opt3, opt4) => {
    for (const opt of [opt1, opt2, opt3, opt4]) {
      await expect(calendarPage.getDropdownOption(opt)).toBeVisible();
    }
  });

// --- Scenario: Verify the calendar items ---

When('the user clicks the {string} icon', async ({ calendarPage }, iconName) => {
  await calendarPage.clickCalendarIcon();
});

Then('the user should be navigated to {string} Dashboard page and should see the buttons.',
  async ({ calendarPage }, dashboardName, dataTable) => {
    const buttonNames = dataTable.raw().map(row => row[0].trim());
    for (const name of buttonNames) {
      await expect(calendarPage.getItem(name)).toBeVisible();
    }
  });

// --- Scenarios: Verify selecting Schedule Meeting / Schedule Call / Create Task opens the form ---

Given('the user has opened the {string} dropdown menu', async ({ calendarPage }, menuName) => {
  await calendarPage.openCalendarDropdown();
});

When('the user clicks {string}', async ({ calendarPage }, optionName) => {
  await calendarPage.clickDropdownOption(optionName);
});

// Shared by the 3 "form is displayed" steps below
async function verifyFormComponents(calendarPage, formName, dataTable) {
  const rows = dataTable.raw().slice(1); // drop header row

  for (const [component, expectedValue] of rows) {
    if (component.trim() === 'Page Title') {
      if (formName === 'Schedule Meeting') {
        await calendarPage.verifyPageTitleVisible();
      } else if (formName === 'Schedule Call') {
        await calendarPage.verifyCallPageTitleVisible();
      } else if (formName === 'Create Task') {
        await calendarPage.verifyTaskPageTitleVisible();
      }
    } else if (component.trim() === 'Buttons') {
      const buttonNames = expectedValue.split(',').map(b => b.trim());
      for (const buttonName of buttonNames) {
        const locator = formName === 'Create Task'
          ? calendarPage.getTaskFormButton(buttonName)
          : calendarPage.getFormButton(buttonName);
        await expect(locator).toBeVisible();
      }
    }
  }
}

Then('User should see the {string} component.', async ({ calendarPage }, formName, dataTable) => {
  await verifyFormComponents(calendarPage, formName, dataTable);
});

Then('the {string} form is displayed with components', async ({ calendarPage }, formName, dataTable) => {
  await verifyFormComponents(calendarPage, formName, dataTable);
});

Then('a new {string} form is displayed with components', async ({ calendarPage }, formName, dataTable) => {
  await verifyFormComponents(calendarPage, formName, dataTable);
});

// --- Negative: mandatory field left blank (shared across Meeting/Call/Task) ---

Given('the user is on the {string} page', async ({ page, calendarPage }, pageName) => {
  await calendarPage.openCalendarDropdown();
  await calendarPage.clickDropdownOption(pageName);

  await expect(page).toHaveURL(/edit/);

  if (pageName === 'Schedule Meeting') currentFormType = 'meeting';
  else if (pageName === 'Schedule Call') currentFormType = 'call';
  else if (pageName === 'Create Task') currentFormType = 'task';

  // Meeting and Call forms load in an iframe: wait until it is the form, not the old calendar
  if (currentFormType === 'meeting' || currentFormType === 'call') {
    await expect(page.locator('iframe')).toHaveCount(1);
    await expect(calendarPage.pageTitleCreate).toBeVisible();
  }
});

When('the user leaves the {string} field blank and clicks {string}', async ({ calendarPage }, fieldName, buttonName) => {
  if (currentFormType === 'meeting') {
    await calendarPage.clearField(fieldName);
    await calendarPage.clickSave();
  } else if (currentFormType === 'call') {
    await calendarPage.clearCallField(fieldName);
    await calendarPage.clickSave();
  } else if (currentFormType === 'task') {
    // Priority is a <select> with no default selection - nothing to clear, and .clear() would throw
    if (fieldName !== 'Priority') {
      await calendarPage.clearTaskField(fieldName);
    }
    await calendarPage.clickTaskSave();
  }
});

Then('a validation message is displayed {string}', async ({ calendarPage }, message) => {
  if (currentFormType === 'task') {
    await expect(calendarPage.getTaskValidationMessage(message)).toBeVisible({ timeout: 15000 });
  } else {
    await expect(calendarPage.getValidationMessage(message)).toBeVisible({ timeout: 15000 });
  }
});

Then('the meeting is not saved', async ({ calendarPage }) => {
  // Form stays open with the validation message shown, rather than being redirected to a saved record
  if (currentFormType === 'task') {
    await expect(calendarPage.taskSaveBotton).toBeVisible();
  } else {
    await expect(calendarPage.saveButton).toBeVisible();
  }
});

// --- Scenario: Verify Today page open and buttons are visible ---

When('the user opens the {string} dropdown menu and clicks {string}', async ({ calendarPage }, menuName, optionName) => {
  await calendarPage.openCalendarDropdown();
  await calendarPage.clickDropdownOption(optionName);
});

Then('the calendar refreshes to display the  current date activities with buttons {string}, {string}, {string}, {string}, {string}, {string} and {string} are displayed',
  async ({ calendarPage }, name1, name2, name3, name4, name5, name6, name7) => {
    for (const name of [name1, name2, name3, name4, name5, name6, name7]) {
      await expect(calendarPage.getItem(name)).toBeVisible();
    }
  });

// --- Scenario: Verify the assigned user name is displayed above the calendar grid ---

Given('the calendar is loaded in {string} view', async ({ page, calendarPage }, viewName) => {
  await calendarPage.openCalendarDropdown();
  await calendarPage.clickDropdownOption(viewName);
  await expect(page).toHaveURL(/agendaDay/);
});

When('the user views the row directly above the day column headers', async ({}) => {
  // No action needed - the Then step checks visibility directly.
});

Then('the assigned user\'s name is displayed', async ({ calendarPage }) => {
  await calendarPage.verifyAssignedUserNameVisible();
});





// --- Scenario: Create an activity from the calendar grid and see it in its time slot ---

When('the user click the cell corresponding to a specific time slot in the calendar grid', async ({ calendarPage }) => {
  await calendarPage.deleteLeftoverActivities(calendarData.savedActivity.Subject);   // "First Test"
  await calendarPage.clickCalendarTimeSlot();
});

Then('a popup window appears with options to create a new activity, including fields for {string}, {string}, {string}',
  async ({ calendarPage }, field1, field2, field3) => {
    await expect(calendarPage.createActivityPopupTitle).toBeVisible();
    for (const field of [field1, field2, field3]) {
      await expect(calendarPage.getField(field)).toBeVisible();
    }
  });

const savedActivitySubject = `${calendarData.savedActivity.Subject} ${Date.now()}`;

When('the user enters a valid value in the {string}, {string}, {string}', async ({ calendarPage }, field1, field2, field3) => {
  await calendarPage.fillSubject(savedActivitySubject);
  // Start Date / End Date are pre-filled by SuiteCRM based on the clicked time slot.
});

When('the user clicks the {string} button', async ({ calendarPage }, buttonName) => {
  await calendarPage.clickPopupSave();
});

Then('the popup closes', async ({ calendarPage }) => {
  await calendarPage.verifyPopupClosed();
});

Then('the activity appears in the calendar cell at the corresponding time slot', async ({ calendarPage }) => {
  await expect(calendarPage.getSavedActivityEvent(savedActivitySubject)).toBeVisible();
});

Then('the cell displays the start time and the assigned user\'s name', async ({ calendarPage }) => {
  await expect(calendarPage.getSavedActivityStartTime(savedActivitySubject)).toBeVisible();
  await calendarPage.verifyAssignedUserNameVisible();
});

Then('the user deletes the saved activity', async ({calendarPage}) => {
  // Step: And the user deletes the saved activity
  // From: features/Calendar.feature:133:3
  await calendarPage.deleteSavedActivity(savedActivitySubject);
});