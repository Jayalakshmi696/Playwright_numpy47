
import { expect } from '@playwright/test';

export class CalendarPage {
  constructor(page) {
    this.page = page;

/*Scenario: Verify the Calendar top navigation menu is displayed*/

    this.accountsLink = this.page.locator('a').filter({ hasText: /^Accounts$/ });
    this.contactsLink = this.page.locator('a').filter({ hasText: /^Contacts$/ });
    this.opportunitiesLink = this.page.locator('a').filter({ hasText: /^Opportunities$/ });
    this.leadsLink = this.page.locator('a').filter({ hasText: /^Leads$/ });
    this.quotesLink = this.page.locator('a').filter({ hasText: /^Quotes$/ });

    this.documentsLink = this.page.locator('a').filter({ hasText: /^Documents$/ });
    this.moreLink = this.page.locator('a').filter({ hasText: /^More$/ });
   // Scenario: Verify the "calendar" icon
   //calendar dropdown
    this.calendarLink = this.page.locator('a').filter({ hasText: /^Calendar$/ });
    this.scheduleMeetingOption = this.page.getByRole('link', { name: 'Schedule Meeting' });
    this.scheduleCallOption = this.page.getByRole('link', { name: 'Schedule Call' });
    this.createTaskOption = this.page.getByRole('link', { name: 'Create Task' });
    this.todayOption = this.page.getByRole('link', { name: 'Today' });


  // Iframe (calendar content)
  this.frame = this.page.locator('iframe').contentFrame();

  // Meeting / Call form titles
    this.pageTitleMeetings = this.frame.getByText('Meetings');
    this.pageTitleCall = this.frame.getByText('Calls', { exact: true });
    this.pageTitleCreate = this.frame.getByText('CREATE', { exact: true });


   // Scenario: Veryfy the calendar  items.
  this.dayButton = this.frame.getByRole('button', { name: 'Day' });
  this.weekButton = this.frame.getByRole('button', { name: 'Week', exact: true });
  this.monthButton = this.frame.getByRole('button', { name: 'Month', exact: true });
  this.sharedMonthButton = this.frame.getByRole('button', { name: 'Shared Month' });
  this.sharedWeekButton = this.frame.getByRole('button', { name: 'Shared Week' });
  this.calendarIconButton = this.frame.locator('#goto_date_trigger');
  this.settingsButton = this.frame.getByRole('button', { name: 'Settings' });

  // Maps the names in the feature table to the locators above
    this.calendarItems = {
      'Day': this.dayButton,
      'Week': this.weekButton,
      'Month': this.monthButton,
      'Shared Month': this.sharedMonthButton,
      'Shared Week': this.sharedWeekButton,
      'Settings': this.settingsButton,
      'Calendaricon': this.calendarIconButton,}


  // Form buttons (shared by both Meeting and Call forms)
  this.saveButton = this.frame.getByRole('button', { name: 'Save', description: 'Save [Ctrl+Opt+a]' });
  this.cancelButton = this.frame.getByRole('button', { name: 'Cancel' });
  this.saveAndSendButton = this.frame.getByRole('button', { name: 'Save & Send Invites' });
  this.closeAndCreateNewButton = this.frame.getByRole('button', { name: 'Close and Create New' });
  this.searchButton = this.frame.getByRole('button', { name: 'Search' });

  this.meetingButtons = {
    'Save': this.saveButton,
    'Cancel': this.cancelButton,
    'Save & Send Invites': this.saveAndSendButton,
    'Close and Create New': this.closeAndCreateNewButton,
    'Search': this.searchButton,
  };
  //Scenario: Verify selecting Create Task components
    this.taskSaveBotton=this.page.getByRole('button', { name: 'Save' })
    this.taskCancelButton=this.page.getByRole('button', { name: 'Cancel' })
    this.taskButtons = {
    'Save': this.taskSaveBotton,
    'Cancel': this.taskCancelButton,
};

//Scenario Outline: Validate error on saving Schedule Meeting Page with a mandatory field left blank

  this.subjectField = this.frame.locator('#name');
  this.startDateField = this.frame.locator('#date_start_date');
  this.endDateField = this.frame.locator('#date_end_date');

  this.meetingFields = {
    'Subject': this.subjectField,
    'Start Date': this.startDateField,
    'End Date': this.endDateField,
  };

//Scenario Outline: Validate error on saving Schedule Call Page with a mandatory field left blank

  this.startDateTimeField = this.frame.locator('#date_start_date');
  this.callDurationField = this.frame.locator('#duration_hours');
  this.directionField = this.frame.locator('#direction');

  this.callFields = {
    'Subject': this.subjectField,
    'Start Date & Time': this.startDateTimeField,
    'Duration': this.callDurationField,
    'Direction': this.directionField,
  };
//Scenario Outline: Validate error on saving Creat Task Page with a mandatory field left blank

  this.taskSubjectFeild=this.page.getByRole('tabpanel', { name: 'TASK OVERVIEW' }).locator('input[type="text"]')
  this.taskPriorityFeild=this.page.locator('scrm-dropdownenum-edit').filter({ hasText: 'High Medium Low' }).getByRole('combobox')

this.taskFields = {
  'Subject': this.taskSubjectFeild,
  'priority': this.taskPriorityFeild,
};

  // Task page title (page-level, no iframe)
  this.taskPageTitle = this.page.getByRole('heading', { name: 'Create', exact: true });

   //Scenario: Verify the assigned user name is displayed above the calendar grid
  this.assignedUserName=this.frame.getByRole('heading', { name: 'Will Westin' })
//  Scenario: checking CREATE ACTIVITY popup window shows.
  this.createActivityPopupTitle = this.frame.getByRole('heading', { name: 'Create Activity' });
  this.calendarTimeSlotCell = this.frame.locator('tr:nth-child(11) > td:nth-child(2)');
  //Scenario: Saved activity appears on the calendar grid in its time slot

  locator('iframe').contentFrame().getByRole('button', { name: 'Save', exact: true })
  locator('iframe').contentFrame().locator('a').filter({ hasText: ':30 - 10:00meg' })



  }

 // Scenario: Verify the Calendar top navigation menu is displayed

 async clickAccountsModule() {
  await this.accountsLink.click();
  await expect(this.page).toHaveURL(/.*Accounts/);

}
  async clickContactsModule() {
  await this.contactsLink.click();
  await expect(this.page).toHaveURL(/.*Contacts/);
}
async clickOpportunitiesModule() {
  await this.opportunitiesLink.click();
  await expect(this.page).toHaveURL(/.*Opportunities/);
}
async clickLeadsModule() {
  await this.leadsLink.click();
  await expect(this.page).toHaveURL(/.*Leads/);
}
async clickQuotesModule() {
  await this.quotesLink.click();
  await expect(this.page).toHaveURL(/.*Quotes/);
}
async clickDocumentsModule() {
  await this.documentsLink.click();
  await expect(this.page).toHaveURL(/.*Documents/);
}
async clickDocumentsMore() {
  await this.documentsLink.click();
  await expect(this.page).toHaveURL(/.*More/);
}

// Scenario: Verify the "calendar" icon
async hoverCalendarIcon() {
  await this.calendarLink.hover();
}
 // Scenario: Veryfy the calendar  items.
async clickCalendarIcon() {
  await this.calendarLink.click();
}
getItem(name) {
  return this.calendarItems[name];
}

//Scenario: Verify selecting Schedule Meeting/call/creat task opens the meeting creation form

async openCalendarDropdown(){
  await this.calendarLink.hover();
}
async clickDropdownOption(name){
  await this.page.getByRole('link', { name }).click();

}
getFormButton(name){
  return this.meetingButtons[name];
}
getTaskFormButton(name){
  return this.taskButtons[name];
}

//page tittle

async verifyPageTitleVisible() {
  await expect(this.pageTitleMeetings).toBeVisible();
  await expect(this.pageTitleCreate).toBeVisible();
}

//Scenario Outline: Validate error on saving Schedule Meeting Page with a mandatory field left blank
getField(name) {
  return this.meetingFields[name];
}async clearField(name) {
  await this.getField(name).clear();
}
getCallField(name) {
  return this.callFields[name];
}
async clearCallField(name) {
  await this.getCallField(name).clear();
}
async clickSave() {
  await this.saveButton.click();
}
async clickTaskSave() {
  await this.taskSaveBotton.click();
}
getValidationMessage(text) {
  return this.frame.getByText(text);
}
getTaskValidationMessage(text) {
  return this.page.getByText(text);
}
getTaskField(name) {
  return this.taskFields[name];
}
async clearTaskField(name) {
  await this.getTaskField(name).clear();
}
async verifyTaskPageTitleVisible() {
  await expect(this.taskPageTitle).toBeVisible();
}
async verifyPageTitleVisible() {
  await expect(this.pageTitleMeetings).toBeVisible();
  await expect(this.pageTitleCreate).toBeVisible();
}
async verifyTaskPageTitleVisible() {
  await expect(this.taskPageTitle).toBeVisible();
}
// Scenario: Verify the assigned user name is displayed above the calendar grid
async verifyAssignedUserNameVisible() {
  await expect(this.assignedUserName).toBeVisible();

}
async clickCalendarTimeSlot() {
  await this.calendarTimeSlotCell.click();
}
getSavedActivityEvent(subjectText) {
  return this.frame.locator('.fc-event').filter({ hasText: subjectText });
}
getSavedActivityStartTime(subjectText) {
  return this.getSavedActivityEvent(subjectText).locator('.fc-time');
}
async verifyPopupClosed() {
  await expect(this.createActivityPopupTitle).not.toBeVisible();
}

}