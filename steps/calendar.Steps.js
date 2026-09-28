import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { CalendarPage } from '../pages/CalendarPage.js';
import { test} from '../fixtures/suite8Fixtures.js';
import calendarData from '../test-data/calendarData.json' with { type: 'json' };

const { Given, When, Then } = createBdd();


// --- Background ---

let currentFormType;// 


Given('the user is logged into the SuitCRM', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/home');
});

Given('the user navigates to the {string} module in the menu', async ({ page }, moduleName) => {
  //await page.getByRole('link', { name: 'More' }).click();
  const calendarPage = new CalendarPage(page);
  await calendarPage.getTopNavLink(moduleName).click();
  await expect(page).toHaveURL(new RegExp(moduleName, 'i'));
  //await expect(calendarPage.calendarLink).toBeVisible();

});

// --- Scenario: Verify the Calendar top navigation menu is displayed ---

//Given('the user is on the Calendar page', async ({ page }) => {
  //await expect(page).toHaveURL(/.*Calendar/);
//});

//When('the user views the top navigation bar', async ({}) => {
  // No action needed - the Then step checks visibility directly.
//});

//Then('the menu items {string}, {string}, {string}, {string}, {string}, {string}, {string} and {string} are displayed',
 // async ({ page }, item1, item2, item3, item4, item5, item6, item7, item8) => {
  //  const calendarPage = new CalendarPage(page);
  //  for (const item of [item1, item2, item3, item4, item5, item6, item7, item8]) {
   //   await expect(calendarPage.getTopNavLink(item)).toBeVisible();
   // }
  //});

// --- Scenario: Verify the "calendar" icon ---

When('the user hovers over the {string} icon in the top navigation bar', async ({ page }, iconName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.hoverCalendarIcon();
});

Then('user should see the {string}, {string}, {string} and {string} options in the dropdown menu',
  async ({ page }, opt1, opt2, opt3, opt4) => {
    const calendarPage = new CalendarPage(page);
    for (const opt of [opt1, opt2, opt3, opt4]) {
      await expect(calendarPage.getDropdownOption(opt)).toBeVisible();
    }
  });

// --- Scenario: Verify the calendar items ---

When('the user clicks the {string} icon', async ({ page }, iconName) => {
   const calendarPage = new CalendarPage(page);
    await calendarPage.clickCalendarIcon();
});

Then('the user should be navigated to {string} Dashboard page and should see the buttons.',
  async ({ page }, dashboardName, dataTable) => {
    const calendarPage = new CalendarPage(page);
    const buttonNames = dataTable.raw().map(row => row[0].trim());
    for (const name of buttonNames) {
      await expect(calendarPage.getItem(name)).toBeVisible();
    }
  });

// --- Scenarios: Verify selecting Schedule Meeting / Schedule Call / Create Task opens the form ---

Given('the user has opened the {string} dropdown menu', async ({ page }, menuName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.openCalendarDropdown();
});

When('the user clicks {string}', async ({ page }, optionName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.clickDropdownOption(optionName);
});

async function verifyFormComponents(page, formName, dataTable) {
  const calendarPage = new CalendarPage(page);
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
          let locator;
            if (formName === 'Create Task') {
                locator = calendarPage.getTaskFormButton(buttonName);
                } else {
                locator = calendarPage.getFormButton(buttonName);
                     }
               await expect(locator).toBeVisible();
}

    }
  }
}

Then('User should see the {string} component.', async ({ page }, formName, dataTable) => {
  await verifyFormComponents(page, formName, dataTable);
});

Then('the {string} form is displayed with components', async ({ page }, formName, dataTable) => {
  await verifyFormComponents(page, formName, dataTable);
});

Then('a new {string} form is displayed with components', async ({ page }, formName, dataTable) => {
  await verifyFormComponents(page, formName, dataTable);
});


// --- Negative: mandatory field left blank (shared across Meeting/Call/Task) ---

Given('the user is on the {string} page', async ({ page }, pageName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.openCalendarDropdown();
  await calendarPage.clickDropdownOption(pageName);

  await expect(page).toHaveURL(/edit/);

  if (pageName === 'Schedule Meeting') currentFormType = 'meeting';
  else if (pageName === 'Schedule Call') currentFormType = 'call';
  else if (pageName === 'Create Task') currentFormType = 'task';

   if (currentFormType === 'meeting' || currentFormType === 'call') {
    await expect(page.locator('iframe')).toHaveCount(1);
    await expect(calendarPage.pageTitleCreate).toBeVisible();
  }
  })


When('the user leaves the {string} field blank and clicks {string}', async ({ page }, fieldName, buttonName) => {
  const calendarPage = new CalendarPage(page);

  if (currentFormType === 'meeting') {
    await calendarPage.clearField(fieldName);
    await calendarPage.clickSave();

  } else if (currentFormType === 'call') {
    await calendarPage.clearCallField(fieldName);
    await calendarPage.clickSave();

  } else if (currentFormType === 'task') {
    // Priority is a <select> with no default selection - nothing to clear,
    // and .clear() would throw  .
    if (fieldName !== 'Priority') {
      await calendarPage.clearTaskField(fieldName);
    }
    await calendarPage.clickTaskSave();
  }
});

Then('a validation message is displayed {string}', async ({ page }, message) => {
  const calendarPage = new CalendarPage(page);
  
    if (currentFormType === 'meeting') {
    await expect(calendarPage.getValidationMessage(message)).toBeVisible({ timeout: 15000 });

  } else if (currentFormType === 'call') {
    await expect(calendarPage.getValidationMessage(message)).toBeVisible({ timeout: 15000 });
  } else if (currentFormType === 'task') {
    await expect(calendarPage.getTaskValidationMessage(message)).toBeVisible({ timeout: 15000 });
  }
});

Then('the meeting is not saved', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  // Form stays open with the validation message shown, rather than being
  // redirected away to a saved record.
  if (currentFormType === 'task') {
    await expect(calendarPage.taskSaveBotton).toBeVisible();
  } else {
    await expect(calendarPage.saveButton).toBeVisible();
  }
});

// --- Scenario: Verify Today page open and buttons are visible ---

When('the user opens the {string} dropdown menu and clicks {string}', async ({ page }, menuName, optionName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.openCalendarDropdown();
  await calendarPage.clickDropdownOption(optionName);
});

Then('the calendar refreshes to display the  current date activities with buttons {string}, {string}, {string}, {string}, {string}, {string} and {string} are displayed',
  async ({ page }, name1, name2, name3, name4, name5, name6, name7) => {
    const calendarPage = new CalendarPage(page);
    for (const name of [name1, name2, name3, name4, name5, name6, name7]) {
      await expect(calendarPage.getItem(name)).toBeVisible();
    }
  });

// --- Scenario: Verify the assigned user name is displayed above the calendar grid ---

Given('the calendar is loaded in {string} view', async ({ page }, viewName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.openCalendarDropdown();
  await calendarPage.clickDropdownOption(viewName);
  await expect(page).toHaveURL(/agendaDay/);
});

When('the user views the row directly above the day column headers', async ({}) => {
  // No action needed - the Then step checks visibility directly.
});

Then('the assigned user\'s name is displayed', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.verifyAssignedUserNameVisible();
});



// --- Scenario: checking CREATE ACTIVITY popup window shows ---

When('the user click the cell corresponding to a specific time slot in the calendar grid', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.clickCalendarTimeSlot();
});

Then('a popup window appears with options to create a new activity, including fields for {string}, {string}, {string}',
  async ({ page }, field1, field2, field3) => {
    const calendarPage = new CalendarPage(page);
    await expect(calendarPage.createActivityPopupTitle).toBeVisible();
    for (const field of [field1, field2, field3]) {
      await expect(calendarPage.getField(field)).toBeVisible();
    }
  });
// --- Scenario: Saved activity appears on the calendar grid in its time slot ---

const savedActivitySubject = `${calendarData.savedActivity.Subject} ${Date.now()}`;

When('the user enters a valid value in the {string}, {string}, {string}', async ({ page }, field1, field2, field3) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.fillSubject(savedActivitySubject);
  // Start Date / End Date are pre-filled by SuiteCRM based on the clicked time slot.
});

When('the user clicks the {string} button', async ({ page }, buttonName) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.clickPopupSave();
});

Then('the popup closes', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await calendarPage.verifyPopupClosed();
});

Then('the activity appears in the calendar cell at the corresponding time slot', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await expect(calendarPage.getSavedActivityEvent(savedActivitySubject)).toBeVisible();
});

Then('the cell displays the start time and the assigned user\'s name', async ({ page }) => {
  const calendarPage = new CalendarPage(page);
  await expect(calendarPage.getSavedActivityStartTime(savedActivitySubject)).toBeVisible();
  await calendarPage.verifyAssignedUserNameVisible();
});

