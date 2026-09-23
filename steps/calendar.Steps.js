const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { Given, When, Then, Before } = createBdd();


Given('the user is logged into the SuitCRM', async ({}) => {
  // Step: Given the user is logged into the SuitCRM
  // From: features/Calendar.feature:5:5
});

Given('the user navigates to the {string} module in the menu', async ({}, arg) => {
  // Step: And the user navigates to the "Calendar" module in the menu
  // From: features/Calendar.feature:6:5
});

Given('the user is on the Calendar page', async ({}) => {
  // Step: Given the user is on the Calendar page
  // From: features/Calendar.feature:11:5
});

When('the user views the top navigation bar', async ({}) => {
  // Step: When the user views the top navigation bar
  // From: features/Calendar.feature:12:5
});

Then('the menu items {string}, {string}, {string}, {string}, {string}, {string}, {string} and {string} are displayed', async ({}, arg, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
  // Step: Then the menu items "Calendar", "Accounts", "Contacts", "Opportunities", "Leads", "Quotes", "Documents" and "More" are displayed
  // From: features/Calendar.feature:13:5
});

When('the user hovers over the {string} icon in the top navigation bar', async ({}, arg) => {
  // Step: When the user hovers over the "calendar" icon in the top navigation bar
  // From: features/Calendar.feature:19:5
});

Then('user should see the {string}, {string}, {string} and {string} options in the dropdown menu', async ({}, arg, arg1, arg2, arg3) => {
  // Step: Then user should see the "Schedule Meeting", "Schedule Call", "Create Task" and "Today" options in the dropdown menu
  // From: features/Calendar.feature:20:5
});

When('the user clicks the {string} icon', async ({}, arg) => {
  // Step: When the user clicks the "calendar" icon
  // From: features/Calendar.feature:23:5
});

Then('the user should be navigated to {string} Dashboard page and should see the buttons.', async ({}, arg, dataTable) => {
  // Step: Then the user should be navigated to "Calendar" Dashboard page and should see the buttons.
  // From: features/Calendar.feature:24:5
});

Given('the user has opened the {string} dropdown menu', async ({}, arg) => {
  // Step: Given the user has opened the "Calendar" dropdown menu
  // From: features/Calendar.feature:38:5
});
When('the user clicks {string}', async ({}, arg) => {
  // Step: When the user clicks "Schedule Meeting"
  // From: features/Calendar.feature:39:5
});

Then('User should see the {string} component.', async ({}, arg, dataTable) => {
  // Step: Then User should see the "Schedule Meeting"  component .
  // From: features/Calendar.feature:40:5
});

Given('the user is on the {string} page', async ({}, arg) => {
  // Step: Given the user is on the "Schedule Meeting" page
  // From: features/Calendar.feature:51:3
});

When('the user leaves the {string} field blank and clicks {string}', async ({}, arg, arg1) => {
  // Step: When the user leaves the "Subject" field blank and clicks "Save"
  // From: features/Calendar.feature:52:3
});

Then('a validation message is displayed {string}', async ({}, arg) => {
  // Step: Then a validation message is displayed "Missing required field: Subject"
  // From: features/Calendar.feature:53:3
});

Then('the meeting is not saved', async ({}) => {
  // Step: And the survey is not saved
  // From: features/Calendar.feature:54:3
});

Then('the {string} form is displayed with components', async ({}, arg, dataTable) => {
  // Step: Then the "Schedule Call" form is displayed with components
  // From: features/Calendar.feature:67:5
});

Then('a new {string} form is displayed with components', async ({}, arg, dataTable) => {
  // Step: Then a new "Create Task" form is displayed with components
  // From: features/Calendar.feature:93:5
});

When('the user opens the {string} dropdown menu and clicks {string}', async ({}, arg, arg1) => {
  // Step: When the user opens the "Calendar" dropdown menu and clicks "Today"
  // From: features/Calendar.feature:120:5
});

Then('the calendar refreshes to display the  current date activities with buttons {string}, {string}, {string}, {string}, {string}, {string} and {string} are displayed', async ({}, arg, arg1, arg2, arg3, arg4, arg5, arg6) => {
  // Step: Then the calendar refreshes to display the  current date activities with buttons "Day", "Week", "Month", "Shared Month", "Shared Week", "Settings" and "Calendar icon" are displayed
  // From: features/Calendar.feature:121:5
});
Given('the calendar is loaded in {string} view', async ({}, arg) => {
  // Step: Given the calendar is loaded in "Today" view
  // From: features/Calendar.feature:125:5
});

When('the user views the row directly above the day column headers', async ({}) => {
  // Step: When the user views the row directly above the day column headers
  // From: features/Calendar.feature:126:5
});

Then('the assigned user\'s name is displayed', async ({}) => {
  // Step: Then the assigned user's name is displayed
  // From: features/Calendar.feature:127:5
});

When('the user click the cell corresponding to a specific time slot in the calendar grid', async ({}) => {
  // Step: When the user clicks the cell corresponding to a specific time slot in the calendar grid
  // From: features/Calendar.feature:132:5
});

Then('a popup window appears with options to create a new activity, including fields for {string}, {string}, {string}',async ({}, arg, arg1, arg2) => {
  // Step: Then a popup window appears with options to create a new activity, including fields for "Subject", "Start Date", "End Date"
  // From: features/Calendar.feature:133:5
});

When('the user enters a valid value in the {string}, {string}, {string}',async ({}, arg, arg1, arg2) => {
  // Step: And the user enters a valid value in the "Subject" field
  // From: features/Calendar.feature:139:3
});

When('the user clicks the {string} button', async ({}, arg) => {
  // Step: And the user clicks the "Save" button
  // From: features/Calendar.feature:140:3
});

Then('the popup closes', async ({}) => {
  // Step: Then the popup closes
  // From: features/Calendar.feature:141:3
});

Then('the activity appears in the calendar cell at the corresponding time slot', async ({}) => {
  // Step: And the activity appears in the calendar cell at the corresponding time slot
  // From: features/Calendar.feature:142:3
});

Then('the cell displays the start time and the assigned user\'s name', async ({}) => {
  // Step: And the cell displays the start time and the assigned user's name
  // From: features/Calendar.feature:143:3
});

Given('the user navigates to the Calendar module', async ({}) => {
  // Step: Given the user navigates to the Calendar module
  // From: features/Calendar.feature:147:5
});

When('the calendar page is requested', async ({}) => {
  // Step: When the calendar page is requested
  // From: features/Calendar.feature:148:5
});

Then('the full week grid, including all day columns and hourly rows, renders within {int} to {int} seconds', async ({},arg, arg1) => {
  // Step: Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds
  // From: features/Calendar.feature:149:5
});
