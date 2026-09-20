const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { Given, When, Then, Before } = createBdd();

Given('the user is logged into the SuitCRM', async ({}) => {
  // Step: Given the user is logged into the SuitCRM
  // From: features/calendar/ dropdownMenuNavigation.feature:5:5
});

Given('the user navigates to the {string} module in the menu', async ({}, arg) => {
  // Step: And the user navigates to the "Calendar" module in the menu
  // From: features/calendar/ dropdownMenuNavigation.feature:6:5
});

Given('the calendar loads in {string} view', async ({}, arg) => {
  // Step: And the calendar loads in "Week" view
  // From: features/calendar/ dropdownMenuNavigation.feature:7:5
});

Given('the user is on the Calendar page', async ({}) => {
  // Step: Given the user is on the Calendar page
  // From: features/calendar/ dropdownMenuNavigation.feature:11:5
});

When('the user views the top navigation bar', async ({}) => {
  // Step: When the user views the top navigation bar
  // From: features/calendar/ dropdownMenuNavigation.feature:12:5
});

Then('the menu items {string}, {string}, {string}, {string}, {string}, {string}, {string} and {string} are displayed', async ({}, arg, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
  // Step: Then the menu items "Calendar", "Accounts", "Contacts", "Opportunities", "Leads", "Quotes", "Documents" and "More" are displayed
  // From: features/calendar/ dropdownMenuNavigation.feature:13:5
});

When('the user clicks the {string} dropdown in the top navigation bar', async ({}, arg) => {
  // Step: When the user clicks the "Calendar" dropdown in the top navigation bar
  // From: features/calendar/ dropdownMenuNavigation.feature:18:5
});

Then('a dropdown appears with options {string}, {string}, {string} and {string}', async ({}, arg, arg1, arg2, arg3) => {
  // Step: Then a dropdown appears with options "Schedule Meeting", "Schedule Call", "Create Task" and "Today"
  // From: features/calendar/ dropdownMenuNavigation.feature:19:5
});

Given('the user has opened the {string} dropdown menu', async ({}, arg) => {
  // Step: Given the user has opened the "Calendar" dropdown menu
  // From: features/calendar/ dropdownMenuNavigation.feature:23:5
});

When('the user clicks {string}', async ({}, arg) => {
  // Step: When the user clicks "Schedule Meeting"
  // From: features/calendar/ dropdownMenuNavigation.feature:24:5
});Then('a new {string} form is displayed for the user to fill in', async ({}, arg) => {
  // Step: Then a new "Schedule Meeting" form is displayed for the user to fill in
  // From: features/calendar/ dropdownMenuNavigation.feature:25:5
});

When('the user opens the {string} dropdown menu and clicks {string}', async ({}, arg, arg1) => {
  // Step: When the user opens the "Calendar" dropdown menu and clicks "Today"
  // From: features/calendar/ dropdownMenuNavigation.feature:42:5
});

Then('the calendar refreshes to display the  current date activities', async ({}) => {
  // Step: Then the calendar refreshes to display the  current date activities
  // From: features/calendar/ dropdownMenuNavigation.feature:43:5
});

When('the user views the row below the page title Calender', async ({}) => {
  // Step: When the user views the row below the page title Calender
  // From: features/calendar/ dropdownMenuNavigation.feature:48:5
});

Then('the buttons {string}, {string}, {string} ,{string} ,{string} and  "Calender Settings"are displayed', async ({}, arg, arg1, arg2, arg3, arg4) => {
  // Step: Then the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed
  // From: features/calendar/ dropdownMenuNavigation.feature:49:5
});

Given('the calendar is loaded in {string} view', async ({}, arg) => {
  // Step: Given the calendar is loaded in "Week" view
  // From: features/calendar/ dropdownMenuNavigation.feature:53:5
});

When('the user views the grey header bar above the day columns', async ({}) => {
  // Step: When the user views the grey header bar above the day columns
  // From: features/calendar/ dropdownMenuNavigation.feature:54:5
});

Then('the header displays current weeks ,start date and end date', async ({}) => {
  // Step: Then the header displays current weeks ,start date and end date
  // From: features/calendar/ dropdownMenuNavigation.feature:55:5
});

When('the user views the calendar grid', async ({}) => {
  // Step: When the user views the calendar grid
  // From: features/calendar/ dropdownMenuNavigation.feature:60:5
});

Then('seven day columns are displayed labeled {string}', async ({}, arg) => {
  // Step: Then seven day columns are displayed labeled "Sunday  throght Saturday along with date"
  // From: features/calendar/ dropdownMenuNavigation.feature:61:5
});When('the user views the row directly above the day column headers', async ({}) => {
  // Step: When the user views the row directly above the day column headers
  // From: features/calendar/ dropdownMenuNavigation.feature:66:5
});

Then('the assigned user\'s name is displayed', async ({}) => {
  // Step: Then the assigned user's name is displayed
  // From: features/calendar/ dropdownMenuNavigation.feature:67:5
});

Given('the calendar is loaded in {string} view and today\'s date falls within the displayed week', async ({}, arg) => {
  // Step: Given the calendar is loaded in "Week" view and today's date falls within the displayed week
  // From: features/calendar/ dropdownMenuNavigation.feature:71:5
});

When('the user views the day columns', async ({}) => {
  // Step: When the user views the day columns
  // From: features/calendar/ dropdownMenuNavigation.feature:72:5
});

Then('the column for {string} is highlighted with a distinct background color .', async ({}, arg) => {
  // Step: Then the column for "Currnet day" is highlighted with a distinct background color .
  // From: features/calendar/ dropdownMenuNavigation.feature:73:5
});

When('the user views the left-hand time axis and the grid rows', async ({}) => {
  // Step: When the user views the left-hand time axis and the grid rows
  // From: features/calendar/ dropdownMenuNavigation.feature:78:5
});

Then('hourly rows from {string} are displayed and aligned across all seven day columns', async ({}, arg) => {
  // Step: Then hourly rows from "start tim eto end time" are displayed and aligned across all seven day columns
  // From: features/calendar/ dropdownMenuNavigation.feature:79:5
});

Given('the calendar is displaying the chosen week', async ({}) => {
  // Step: Given the calendar is displaying the chosen week
  // From: features/calendar/ dropdownMenuNavigation.feature:83:5
});

When('the user clicks the left navigation arrow \\({string}) in the header bar', async ({}, arg) => {
  // Step: When the user clicks the left navigation arrow ("<") in the header bar
  // From: features/calendar/ dropdownMenuNavigation.feature:84:5
});

Then('the calendar updates to display the preceding week.', async ({}) => {
  // Step: Then the calendar updates to display the preceding week.
  // From: features/calendar/ dropdownMenuNavigation.feature:85:5
});


When('the user clicks the right navigation arrow \\({string}) in the header bar', async ({}, arg) => {
  // Step: When the user clicks the right navigation arrow (">") in the header bar
  // From: features/calendar/ dropdownMenuNavigation.feature:90:5
});

Then('the calendar updates to display the next week.', async ({}) => {
  // Step: Then the calendar updates to display the next week.
  // From: features/calendar/ dropdownMenuNavigation.feature:91:5
});

When('the user clicks the {string} button in the top-right corner', async ({}, arg) => {
  // Step: When the user clicks the "SETTINGS" button in the top-right corner
  // From: features/calendar/ dropdownMenuNavigation.feature:96:5
});

Then('the calendar settings panel or page is displayed', async ({}) => {
  // Step: Then the calendar settings panel or page is displayed
  // From: features/calendar/ dropdownMenuNavigation.feature:97:5
});

When('user Hovering on the existing cell calender item', async ({}) => {
  // Step: When user Hovering on the existing cell calender item
  // From: features/calendar/ dropdownMenuNavigation.feature:102:5
});

Then('task will show', async ({}) => {
  // Step: Then task will show
  // From: features/calendar/ dropdownMenuNavigation.feature:103:5
});

Given('the user navigates to the Calendar module', async ({}) => {
  // Step: Given the user navigates to the Calendar module
  // From: features/calendar/ dropdownMenuNavigation.feature:107:5
});

When('the calendar page is requested', async ({}) => {
  // Step: When the calendar page is requested
  // From: features/calendar/ dropdownMenuNavigation.feature:108:5
});

Then('the full week grid, including all day columns and hourly rows, renders within {int} to {int} seconds', async ({}, arg, arg1) => {
  // Step: Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds
  // From: features/calendar/ dropdownMenuNavigation.feature:109:5
});

When('the user views the day column headers', async ({}) => {
  // Step: When the user views the day column headers
  // From: features/calendar/ dropdownMenuNavigation.feature:114:5
});
Then('the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance', async ({}) => {
  // Step: Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance
  // From: features/calendar/ dropdownMenuNavigation.feature:115:5
});

When('the browser window is resized between desktop, tablet and mobile breakpoints', async ({}) => {
  // Step: When the browser window is resized between desktop, tablet and mobile breakpoints
  // From: features/calendar/ dropdownMenuNavigation.feature:120:5
});

Then('the day columns, time axis and header remain legible and correctly aligned without horizontal content loss', async ({}) => {
  // Step: Then the day columns, time axis and header remain legible and correctly aligned without horizontal content loss
  // From: features/calendar/ dropdownMenuNavigation.feature:121:5
});
When('the user clicks the left navigation arrow {string} in the header bar', async ({}, arg) => {
  // Step: When the user clicks the left navigation arrow "<" in the header bar
  // From: features/calendar/calendarTopNavigation.feature:84:5
});

When('the user clicks the right navigation arrow {string} in the header bar', async ({}, arg) => {
  // Step: When the user clicks the right navigation arrow ">" in the header bar
  // From: features/calendar/calendarTopNavigation.feature:90:5
});

// ============================================
// Feature: createActivityPopup.feature
// ============================================

Given('the user is logged into the CRM', async ({}) => {
  // Step: Given the user is logged into the CRM
  // From: features/calendar/createActivityPopup.feature:5:5
});

Given('the user is on the Calendar page in {string} view', async ({}, arg) => {
  // Step: And the user is on the Calendar page in "Week" view
  // From: features/calendar/createActivityPopup.feature:6:5
});

Given('the user clicks on empty cell in the calendar grid', async ({}) => {
  // Step: And the user clicks on empty cell in the calendar grid
  // From: features/calendar/createActivityPopup.feature:7:5
});

Given('the {string} popup is displayed', async ({}, arg) => {
  // Step: And the "Create Activity" popup is displayed
  // From: features/calendar/createActivityPopup.feature:8:5
});

When('the user clicks an available hour cell in the calendar grid', async ({}) => {
  // Step: When the user clicks an available hour cell in the calendar grid
  // From: features/calendar/createActivityPopup.feature:13:5
});

Then('the {string} radio option is selected by default and the {string} option is unselected', async ({}, arg, arg1) => {
  // Step: Then the "Schedule Meeting" radio option is selected by default and the "Log Call" option is unselected
  // From: features/calendar/createActivityPopup.feature:14:5
});

Given('the {string} popup is open with {string} selected', async ({}, arg, arg1) => {
  // Step: Given the "Create Activity" popup is open with "Schedule Meeting" selected
  // From: features/calendar/createActivityPopup.feature:18:5
});

When('the user clicks an available hour cell in the calendar grid &When the user selects the {string} radio option', async ({}, arg) => {
  // Step: When the user clicks an available hour cell in the calendar grid &When the user selects the "Log Call" radio option
  // From: features/calendar/createActivityPopup.feature:19:5
});

Then('the form fields update to reflect the {string} activity type', async ({}, arg) => {
  // Step: Then the form fields update to reflect the "Log Call" activity type
  // From: features/calendar/createActivityPopup.feature:20:5
});

When('the user clicks the cell for {string} in the calendar grid', async ({}, arg) => {
  // Step: When the user clicks the cell for "current day" in the calendar grid
  // From: features/calendar/createActivityPopup.feature:25:5
});Then('the {string} field is pre-populated with based on selected date.', async ({}, arg) => {
  // Step: Then the "START DATE" field is pre-populated with based on selected date.
  // From: features/calendar/createActivityPopup.feature:26:5
});

When('the user leaves the {string} field empty and clicks {string}', async ({}, arg, arg1) => {
  // Step: When the user leaves the "Start date" field empty and clicks "Save"
  // From: features/calendar/createActivityPopup.feature:30:5
});

Then('a validation error is displayed {string}', async ({}, arg) => {
  // Step: Then a validation error is displayed "Missing required field: Subject"
  // From: features/calendar/createActivityPopup.feature:31:5
});

Then('a validation error is displayed indicating {string} is required and the activity is not saved', async ({}, arg) => {
  // Step: Then a validation error is displayed indicating "Subject" is required and the activity is not saved
  // From: features/calendar/createActivityPopup.feature:37:5
});

When('the user clicks the red {string} icon next to the {string} action only', async ({}, arg, arg1) => {
  // Step: When the user clicks the red "X" icon next to the "Popup" action only
  // From: features/calendar/createActivityPopup.feature:49:5
});

Then('the {string} reminder action is removed from the list', async ({}, arg) => {
  // Step: Then the "Popup" reminder action is removed from the list
  // From: features/calendar/createActivityPopup.feature:50:5
});

Then('the validation error displayed"Then the {string} reminder action is removed from the list"', async ({}, arg) => {
  // Step: Then the validation error displayed"Then the "Popup" reminder action is removed from the list"
  // From: features/calendar/createActivityPopup.feature:55:5
});

When('the user clicks the red {string} icon both', async ({}, arg) => {
  // Step: When the user clicks the red "X" icon both
  // From: features/calendar/createActivityPopup.feature:59:5
});

Then('Remainder is not set for either a pop up or email', async ({}) => {
  // Step: Then Remainder is not set for either a pop up or email
  // From: features/calendar/createActivityPopup.feature:60:5
});

Given('the {string} popup is open', async ({}, arg) => {
  // Step: Given the "Create Activity" popup is open
  // From: features/calendar/createActivityPopup.feature:64:5
});

When('the user clicks the {string} button', async ({}, arg) => {
  // Step: When the user clicks the "+ Add reminder" button
  // From: features/calendar/createActivityPopup.feature:65:5
});

Then('a new blank reminder action row is added to the {string} section', async ({}, arg) => {
  // Step: Then a new blank reminder action row is added to the "REMINDERS" section
  // From: features/calendar/createActivityPopup.feature:66:5
});

Then('excisting eminder action row isremove from the {string} section', async ({}, arg) => {
  // Step: Then excisting eminder action row isremove from the "REMINDERS" section
  // From: features/calendar/createActivityPopup.feature:71:5
});

Given('the user has entered required fields and added at least one invitee', async ({}) => {
  // Step: Given the user has entered required fields and added at least one invitee
  // From: features/calendar/createActivityPopup.feature:77:5
});

When('the user enters  any of the invalid  {string}, {string} or {string} field under {string} and clicks {string}', async ({}, arg, arg1, arg2, arg3, arg4) => {
  // Step: When the user enters  any of the invalid  "First Name", "Last Name" or "Email" field under "Add Invitees" and clicks "Search"
  // From: features/calendar/createActivityPopup.feature:78:5
});

Then('validation error message display"Sorry, no results were found. Please create an invitee below."', async ({}) => {
  // Step: Then validation error message display"Sorry, no results were found. Please create an invitee below."
  // From: features/calendar/createActivityPopup.feature:79:5
});

Given('the user has entered data into the {string} popup', async ({}, arg) => {
  // Step: Given the user has entered data into the "Create Activity" popup
  // From: features/calendar/createActivityPopup.feature:83:5
});

When('the user clicks {string} under {string}', async ({}, arg, arg1) => {
  // Step: When the user clicks "As Contact" under "Create an invitee"
  // From: features/calendar/createActivityPopup.feature:84:5
});

Then('a new contact creation form is displayed for the user to add as an invitee', async ({}) => {
  // Step: Then a new contact creation form is displayed for the user to add as an invitee
  // From: features/calendar/createActivityPopup.feature:85:5
});

Given('the user is creating a brand new activity that has not yet been saved', async ({}) => {
  // Step: Given the user is creating a brand new activity that has not yet been saved
  // From: features/calendar/createActivityPopup.feature:90:5
});
Then('the activity is created, the popup closes, and the new activity appears on the calendar grid', async ({}) => {
  // Step: Then the activity is created, the popup closes, and the new activity appears on the calendar grid
  // From: features/calendar/createActivityPopup.feature:92:5
});

Then('the activity is saved and an email invitation is sent to each added invitee', async ({}) => {
  // Step: Then the activity is saved and an email invitation is sent to each added invitee
  // From: features/calendar/createActivityPopup.feature:98:5
});

Then('the popup closes and no activity is created', async ({}) => {
  // Step: Then the popup closes and no activity is created
  // From: features/calendar/createActivityPopup.feature:104:5
});

When('the user clicks the {string} icon in the top-right corner of the popup', async ({}, arg) => {
  // Step: When the user clicks the "X" icon in the top-right corner of the popup
  // From: features/calendar/createActivityPopup.feature:109:5
});

Then('the popup closes without saving any data', async ({}) => {
  // Step: Then the popup closes without saving any data
  // From: features/calendar/createActivityPopup.feature:110:5
});

When('the user sets an {string} earlier than the {string} and clicks {string}', async ({}, arg, arg1, arg2) => {
  // Step: When the user sets an "END DATE" earlier than the "START DATE" and clicks "Save"
  // From: features/calendar/createActivityPopup.feature:117:5
});

Then('a validation error is displayed and the activity is not saved', async ({}) => {
  // Step: Then a validation error is displayed and the activity is not saved
  // From: features/calendar/createActivityPopup.feature:118:5
});

When('the user clicks an hour cell in the calendar grid', async ({}) => {
  // Step: When the user clicks an hour cell in the calendar grid
  // From: features/calendar/createActivityPopup.feature:123:5
});

Then('the {string} popup renders fully within {int} to {int} seconds', async ({}, arg, arg1, arg2) => {
  // Step: Then the "Create Activity" popup renders fully within 2 to 5 seconds
  // From: features/calendar/createActivityPopup.feature:124:5
});

When('the user views the {string}, {string} and {string} labels', async ({}, arg, arg1, arg2) => {
  // Step: When the user views the "SUBJECT", "START DATE" and "END DATE" labels
  // From: features/calendar/createActivityPopup.feature:129:5
});
Then('each mandatory field label is marked with a red asterisk {string} to distinguish it from optional fields', async({}, arg) => {
  // Step: Then each mandatory field label is marked with a red asterisk "*" to distinguish it from optional fields
  // From: features/calendar/createActivityPopup.feature:130:5
});

// ============================================
// Feature: dayView.feature
// ============================================
Given('The user is on the calendar view', async ({}) => {
  // Step: Given The user is on the calendar view
  // From: features/calendar/dayView.feature:11:5
});

When('The user clicks the {string} view button', async ({}, arg) => {
  // Step: When The user clicks the "Day" view button
  // From: features/calendar/dayView.feature:12:5
});

Then('The system displays the Day view page \\(e.g. {string})', async ({}, arg) => {
  // Step: Then The system displays the Day view page (e.g. "Friday 2026 September 11")
  // From: features/calendar/dayView.feature:13:5
});

Given('the calendar is displaying the chosen day', async ({}) => {
  // Step: Given the calendar is displaying the chosen day
  // From: features/calendar/dayView.feature:41:5
});

Then('the calendar updates to display the preceding day.', async ({}) => {
  // Step: Then the calendar updates to display the preceding day.
  // From: features/calendar/dayView.feature:43:5
});

When('user click the cell', async ({}) => {
  // Step: When user click the cell
  // From: features/calendar/dayView.feature:60:5
});

When('user click the existing calender item', async ({}) => {
  // Step: When user click the existing calender item
  // From: features/calendar/dayView.feature:66:5
});

Then('existing calender item will show', async ({}) => {
  // Step: Then existing calender item will show
  // From: features/calendar/dayView.feature:67:5
});

Then('the {string} popup renders fully within {int}  to {int} seconds', async ({}, arg, arg1, arg2) => {
  // Step: Then the "Create Activity" popup renders fully within 2  to 5 seconds
  // From: features/calendar/dayView.feature:73:5
});
// ============================================
// Feature: weekView.feature
// ============================================
Given('the user is logged into the SuiteCRM', async ({}) => {
  // Step: Given the user is logged into the SuiteCRM
  // From: features/calendar/weekView.feature:5:5
});

Given('The user \'s calendar view', async ({}) => {
  // Step: Given The user 's calendar view
  // From: features/calendar/weekView.feature:10:5
});

Then('The system displays the week view page for the selected date, with the header showing the day name, year and full date \\(e.g. {string})', async ({}, arg) => {
  // Step: Then The system displays the week view page for the selected date, with the header showing the day name,year and full date (e.g. "Friday 2026 September 11")
  // From: features/calendar/weekView.feature:12:5
});

Then('the calendar updates to display the preceding Week', async ({}) => {
  // Step: Then the calendar updates to display the preceding Week
  // From: features/calendar/weekView.feature:42:5
});

Then('the calendar updates to display the preceding week', async ({}) => {
  // Step: Then the calendar updates to display the preceding week
  // From: features/calendar/weekView.feature:48:5
});

Given('the user navigates to the "week view "module', async ({}) => {
  // Step: Given the user navigates to the "week view "module
  // From: features/calendar/weekView.feature:70:5
});
// ============================================
// Feature: monthView.feature
// ============================================
Then('The system displays the Day view page for the selected date, with the header showing the day name, year and full date \\(e.g. {string})', async ({}, arg) => {
  // Step: Then The system displays the Day view page for the selected date, with the header showing the day name, year and full date (e.g. "Friday 2026 September 11")
  // From: features/calendar/dayView.feature:13:5
});

Given('the user navigates to the {string} module and click clander module in the menu', async ({}, arg) => {
  // Step: And the user navigates to the "Calendar" module and click clander module in the menu
  // From: features/calendar/monthView.feature:6:5
});

Then('the {string} page is displayed .', async ({}, arg) => {
  // Step: Then the "Calendar" page is displayed .
  // From: features/calendar/monthView.feature:7:5
});

Given('The user is on the calender view', async ({}) => {
  // Step: Given The user is on the calender view
  // From: features/calendar/monthView.feature:10:5
});

Then('the {string} page is displayed', async ({}, arg) => {
  // Step: Then the "Month" page is displayed
  // From: features/calendar/monthView.feature:12:5
});

Then('the header displays current month with year\\(eg:{int} september)', async ({}, arg) => {
  // Step: Then the header displays current month with year(eg:-2026 september)
  // From: features/calendar/monthView.feature:24:5
});

Then('the calendar updates to display the preceding Month', async ({}) => {
  // Step: Then the calendar updates to display the preceding Month
  // From: features/calendar/monthView.feature:36:5
});

When('The user clicks the {string} in the calender', async ({}, arg) => {
  // Step: When The user clicks the "cell" in the calender
  // From: features/calendar/monthView.feature:47:5
});

Then('calender items will pop up with corresponding given selected setting.', async ({}) => {
  // Step: Then calender items will pop up with corresponding given selected setting.
  // From: features/calendar/monthView.feature:48:5
});

Given('the user navigates to {string} module', async ({}, arg) => {
  // Step: Given the user navigates to "Month View" module
  // From: features/calendar/monthView.feature:58:5
});Then('Page should load with in within {int} to {int} second', async ({}, arg, arg1) => {
  // Step: Then Page should load with in within 2 to 5 second
  // From: features/calendar/monthView.feature:60:5
});

Given('The Settings modal is opened in the latest versions of Chrome, Firefox, Edge and Safari', async ({}) => {
  // Step: Given The Settings modal is opened in the latest versions of Chrome, Firefox, Edge and Safari
  // From: features/calendar/monthView.feature:76:5
});

When('the modal is displayed in each browser', async ({}) => {
  // Step: When the modal is displayed in each browser
  // From: features/calendar/monthView.feature:77:5
});

Then('The layout, dropdowns, checkboxes and colour swatches render consistently with no visual defects in any browser', async({}) => {
  // Step: Then The layout, dropdowns, checkboxes and colour swatches render consistently with no visual defects in any browser
  // From: features/calendar/monthView.feature:78:5
});

// ============================================
// Feature: sharedMonthView.feature
// ============================================
Then('assigned task will show', async ({}) => {
  // Step: Then assigned task will show
  // From: features/calendar/sharedMonthView.feature:32:5
});

When('user click on the user list button', async ({}) => {
  // Step: When user click on the user list button
  // From: features/calendar/sharedMonthView.feature:37:5
});

Then('user list window pop up', async ({}) => {
  // Step: Then user list window pop up
  // From: features/calendar/sharedMonthView.feature:38:5
});

When('when user select" users" from drop down window and Apply button', async ({}) => {
  // Step: When when user select" users" from drop down window and Apply button
  // From: features/calendar/sharedMonthView.feature:43:5
});

Then('window closes and corresponding user name shows in the shared month page', async ({}) => {
  // Step: Then window closes and corresponding user name shows in the shared month page
  // From: features/calendar/sharedMonthView.feature:44:5
});

Then('the  shared month page shoul open within {int} to {int} seconds', async ({}, arg, arg1) => {
  // Step: Then the  shared month page shoul open within 2 to 5 seconds
  // From: features/calendar/sharedMonthView.feature:50:5
});

When('the user views the day column', async ({}) => {
  // Step: When the user views the day column
  // From: features/calendar/sharedMonthView.feature:55:5
});
// ============================================
// Feature: sharedWeekView.feature
// ============================================
Given('The user is on the calendar page', async ({}) => {
  // Step: Given The user is on the calendar page
  // From: features/calendar/sharedWeek.feature:10:5
});

Then('the header displays the current week\'s date range {string}', async ({}, arg) => {
  // Step: Then the header displays the current week's date range "2026 September 13 - 2026 September 19"
  // From: features/calendar/sharedWeek.feature:12:5
});
// ============================================
// Feature: sharedWeekView.feature
// ============================================
Given('the user navigates to the Dat e selection icon page', async ({}) => {
  // Step: Given the user navigates to the Dat e selection icon page
  // From: features/calendar/calenderDate Selection.feature:31:5
});

When('user open the Calender Date Selection icon  page', async ({}) => {
  // Step: When user open the Calender Date Selection icon  page
  // From: features/calendar/calenderDate Selection.feature:32:5
});
When('user click on the calender date selection icon', async ({}) => {
  // Step: When user click on the calender date selection icon
  // From: features/calendar/calenderDate Selection.feature:11:5
});

Then('popup Window is displayed as an overlay on top of the calendar page', async ({}) => {
  // Step: Then popup Window is displayed as an overlay on top of the calendar page
  // From: features/calendar/calenderDate Selection.feature:12:5
});

When('user clicks the "today "button', async ({}) => {
  // Step: When user clicks the "today "button
  // From: features/calendar/calenderDate Selection.feature:16:5
});

Then('pop up window will  closes and todays calender in selected view', async ({}) => {
  // Step: Then pop up window will  closes and todays calender in selected view
  // From: features/calendar/calenderDate Selection.feature:17:5
});

When('user clicks prevs- next navigation', async ({}) => {
  // Step: When user clicks prevs- next navigation
  // From: features/calendar/calenderDate Selection.feature:21:5
});

Then('window changes  corresoponding" month", {string}', async ({}, arg) => {
  // Step: Then window changes  corresoponding" month", "year"
  // From: features/calendar/calenderDate Selection.feature:22:5
});

When('user click {string} button without any action', async ({}, arg) => {
  // Step: When user click "close" button without any action
  // From: features/calendar/calenderDate Selection.feature:26:5
});

Then('the page session remains active without changes', async ({}) => {
  // Step: Then the page session remains active without changes
  // From: features/calendar/calenderDate Selection.feature:27:5
});

Then('The calender Icon open within acceptable time', async ({}) => {
  // Step: Then The calender Icon open within acceptable time
  // From: features/calendar/calenderDate Selection.feature:33:5
});

Given('user navigate to the calender settings', async ({}) => {
  // Step: Given user navigate to the calender settings
  // From: features/calendar/calenderDate Selection.feature:38:5
});When('Page view on chrome,firfox, and safari', async ({}) => {
  // Step: When Page view on chrome,firfox, and safari
  // From: features/calendar/calenderDate Selection.feature:39:5
});

Then('calender setting should render across all browsers', async ({}) => {
  // Step: Then calender setting should render across all browsers
  // From: features/calendar/calenderDate Selection.feature:40:5
});

// ============================================
// Feature: calender settings.feature
// ============================================

Given('The Settings modal is open and {string} is checked', async ({}, arg) => {
  // Step: Given The Settings modal is open and "Display time slots in Day and Week views" is checked
  // From: features/calendar/ calendarSettings.feature:19:5
});

When('The user unchecks the checkbox and clicks Apply', async ({}) => {
  // Step: When The user unchecks the checkbox and clicks Apply
  // From: features/calendar/ calendarSettings.feature:20:5
});

Then('The setting is saved, the modal closes, and the Day and Week calendar views no longer show hourly time slots', async ({})=> {
  // Step: Then The setting is saved, the modal closes, and the Day and Week calendar views no longer show hourly time slots
  // From: features/calendar/ calendarSettings.feature:21:5
});Given('the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the {string} button, opening the Settings modal', async ({}, arg) => {
  // Step: Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the "Settings" button, opening the Settings modal
  // From: features/calendar/ calendarSettings.feature:5:5
});

Given('The user is on the calendar main view', async ({}) => {
  // Step: Given The user is on the calendar main view
  // From: features/calendar/ calendarSettings.feature:9:5
});

When('The user clicks the {string} button', async ({}, arg) => {
  // Step: When The user clicks the "Settings" button
  // From: features/calendar/ calendarSettings.feature:10:5
});

Then('The {string} modal opens', async ({}, arg) => {
  // Step: Then The "Settings" modal opens
  // From: features/calendar/ calendarSettings.feature:11:5
});

Then('the modal displays the {string} section with display, timing, and visibility options', async ({}, arg) => {
  // Step: And the modal displays the "Settings" section with display, timing, and visibility options
  // From: features/calendar/ calendarSettings.feature:12:5
});

Then('the modal displays the {string} section', async ({}, arg) => {
  // Step: And the modal displays the "Colour Settings" section
  // From: features/calendar/ calendarSettings.feature:13:5
});

Then('the modal displays {string} and {string} buttons at the bottom', async ({}, arg, arg1) => {
  // Step: And the modal displays "Cancel" and "Apply" buttons at the bottom
  // From: features/calendar/ calendarSettings.feature:14:5
});

Then('The setting is saved and shared calendars are displayed together with the user\'s own calendar on the main calendar view', async ({}) => {
  // Step: Then The setting is saved and shared calendars are displayed together with the user's own calendar on the main calendar view
  // From: features/calendar/ calendarSettings.feature:27:5
});

Given('The Settings modal is open with unsaved changes', async ({}) => {
  // Step: Given The Settings modal is open with unsaved changes
  // From: features/calendar/ calendarSettings.feature:31:5
});

When('The user clicks the {string} icon in the top-right corner', async ({}, arg) => {
  // Step: When The user clicks the "X" icon in the top-right corner
  // From: features/calendar/ calendarSettings.feature:32:5
});
Then('The modal closes without saving any changes, identical to clicking Cancel', async ({}) => {
  // Step: Then The modal closes without saving any changes, identical to clicking Cancel
  // From: features/calendar/ calendarSettings.feature:33:5
});

Given('The Settings modal is open with Start time {string} and End time {string}', async ({}, arg, arg1) => {
  // Step: Given The Settings modal is open with Start time "08:00" and End time "19:00"
  // From: features/calendar/ calendarSettings.feature:37:5
});

When('The user sets End time to {string}, which is earlier than the Start time, and clicks Apply', async ({}, arg) => {
  // Step: When The user sets End time to "07:00", which is earlier than the Start time, and clicks Apply
  // From: features/calendar/ calendarSettings.feature:38:5
});

Then('The system displays a validation message and does not save the settings until the End time is later than the Start time',async ({}) => {
  // Step: Then The system displays a validation message and does not save the settings until the End time is later than the Start time
  // From: features/calendar/ calendarSettings.feature:39:5
});

Given('The user has changed one or more values in the Settings or Colour Settings sections', async ({}) => {
  // Step: Given The user has changed one or more values in the Settings or Colour Settings sections
  // From: features/calendar/ calendarSettings.feature:43:5
});

When('The user clicks {string}', async ({}, arg) => {
  // Step: When The user clicks "Apply"
  // From: features/calendar/ calendarSettings.feature:44:5
});

Then('All changed settings are persisted, the modal closes, and the calendar view reflects the updated settings immediately', async ({}) => {
  // Step: Then All changed settings are persisted, the modal closes, and the calendar view reflects the updated settings immediately
  // From: features/calendar/ calendarSettings.feature:45:5
});

Given('The user has changed one or more values in the Settings or Colour Settings sections without clicking Apply', async ({}) => {
  // Step: Given The user has changed one or more values in the Settings or Colour Settings sections without clicking Apply
  // From: features/calendar/ calendarSettings.feature:49:5
});

Then('The modal closes without saving any changes, and the calendar retains its previous settings', async ({}) => {
  // Step: Then The modal closes without saving any changes, and the calendar retains its previous settings
  // From: features/calendar/ calendarSettings.feature:51:5
});

Given('the user navigates to the Setting page', async ({}) => {
  // Step: Given the user navigates to the Setting page
  // From: features/calendar/ calendarSettings.feature:55:5
});
When('user open the setting page', async ({}) => {
  // Step: When user open the setting page
  // From: features/calendar/ calendarSettings.feature:56:5
});

Then('The calender setting should open within acceptable time', async ({}) => {
  // Step: Then The calender setting should open within acceptable time
  // From: features/calendar/ calendarSettings.feature:57:5
});

// ============================================
// Feature: createTask.feature
// ============================================




Given('The user is on Create Task Page', async ({}) => {
  // Step: Given The user is on Create Task Page
  // From: features/calendar/createTask.feature:5:5
});

Given('The user is on  {string} of Calender', async ({}, arg) => {
  // Step: Given The user is on  "Create Task Page" of Calender
  // From: features/calendar/createTask.feature:9:5
});

When('the user forgot to fill the {string} field  and user click the "save "button', async ({}, arg) => {
  // Step: When the user forgot to fill the "Subject" field  and user click the "save "button
  // From: features/calendar/createTask.feature:10:5
});

Then('An error message"Missing required field: Subject" Displyed', async ({}) => {
  // Step: Then An error message"Missing required field: Subject" Displyed
  // From: features/calendar/createTask.feature:11:5
});

Then('the user forgot to select the mandatory field {string} and user click "save "button', async ({}, arg) => {
  // Step: And the user forgot to select the mandatory field "Priority" and user click "save "button
  // From: features/calendar/createTask.feature:12:5
});

Then('An error message"Missing required field: Priority" Displyed', async ({}) => {
  // Step: And An error message"Missing required field: Priority" Displyed
  // From: features/calendar/createTask.feature:13:5
});

When('user filled {string} and click save', async ({}, arg) => {
  // Step: When user filled "*mandatry field " and click save
  // From: features/calendar/createTask.feature:17:5
});

Then('window refresh and saved page will reload  with edit  buttons {string}, and"Action"', async ({}, arg) => {
  // Step: Then window refresh and saved page will reload  with edit  buttons "Edit", and"Action"
  // From: features/calendar/createTask.feature:18:5
});

Then('Page will navigate to {string} button in the top navigation Menu and related page open', async ({}, arg) => {
  // Step: And Page will navigate to "Task Menu" button in the top navigation Menu and related page open
  // From: features/calendar/createTask.feature:20:5
});

Given('The user is on the page with {string} and {string} buttons', async ({}, arg, arg1) => {
  // Step: Given The user is on the page with "Edit" and "Actions" buttons
  // From: features/calendar/createTask.feature:24:5
});
When('we click "edit "button', async ({}) => {
  // Step: When we click "edit "button
  // From: features/calendar/createTask.feature:25:5
});

Then('window refresh and saved page will reload  with  buttons {string}, and"Cancel" button', async ({}, arg) => {
  // Step: Then window refresh and saved page will reload  with  buttons "Save", and"Cancel" button
  // From: features/calendar/createTask.feature:26:5
});

When('click {string} button', async ({}, arg) => {
  // Step: When click "Action" button
  // From: features/calendar/createTask.feature:30:5
});

Then('The drop down contain"Duplicate", and Delete"option will show', async ({}) => {
  // Step: Then The drop down contain"Duplicate", and Delete"option will show
  // From: features/calendar/createTask.feature:31:5
});

When('click {string} Botton and selected"Duplicate"', async ({}, arg) => {
  // Step: When click "Action" Botton and selected"Duplicate"
  // From: features/calendar/createTask.feature:35:5
});

Then('Duplicate page created and listed in "Task"page will display', async ({}) => {
  // Step: Then Duplicate page created and listed in "Task"page will display
  // From: features/calendar/createTask.feature:36:5
});

When('user click {string} page multiple time', async ({}, arg) => {
  // Step: When user click "duplicate" page multiple time
  // From: features/calendar/createTask.feature:40:5
});

Then('Each duplicated page sholud be created  and listed in  {string}', async ({}, arg) => {
  // Step: Then Each duplicated page sholud be created  and listed in  "Creat Task page"
  // From: features/calendar/createTask.feature:41:5
});

When('user click {string} and selected {string} option', async ({}, arg, arg1) => {
  // Step: When user click "action" and selected "delete" option
  // From: features/calendar/createTask.feature:45:5
});

Then('pop up will show with message"Are you sure want to delete this record?" with {string},and {string} button.', async ({}, arg, arg1) => {
  // Step: Then pop up will show with message"Are you sure want to delete this record?" with "cancel",and "Proceed" button.
  // From: features/calendar/createTask.feature:46:5
});
Then('user click {string} button', async ({}, arg) => {
  // Step: And user click "Proceed" button
  // From: features/calendar/createTask.feature:47:5
});

Then('created task will delete and message will come"record delet succesfully"', async ({}) => {
  // Step: And created task will delete and message will come"record delet succesfully"
  // From: features/calendar/createTask.feature:48:5
});

Given('The user is on {string} View tab from {string}', async ({}, arg, arg1) => {
  // Step: Given The user is on "Other" View tab from "Calender Creat Task Page"
  // From: features/calendar/createTask.feature:52:5
});

When('user click on {string} search   near {string}', async ({}, arg, arg1) => {
  // Step: When user click on "pointer" search   near "Assighned to feild"
  // From: features/calendar/createTask.feature:53:5
});

Then('default userlist  with {string} section collapsed page pop up  And popus should list with"Name",{string},{string},{string}."Email,"Phone"columns', async ({}, arg, arg1, arg2, arg3) => {
  // Step: Then default userlist  with "Basic Filter" section collapsed page pop up  And popus should list with"Name","UserName","job title","Department"."Email,"Phone"columns
  // From: features/calendar/createTask.feature:54:5
});

When('user click {string} name', async ({}, arg) => {
  // Step: When user click "user's" name
  // From: features/calendar/createTask.feature:58:5
});

Then('pop up window close the selected user\'s name should be displayed in the {string} field', async ({}, arg) => {
  // Step: Then pop up window close the selected user's name should be displayed in the "Assigned To" field
  // From: features/calendar/createTask.feature:59:5
});