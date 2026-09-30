import { expect } from "@playwright/test";
import { logger } from "../utils/logger.js";

export class CalendarPage {
  constructor(page) {
    this.page = page;

    /*Scenario: Verify the Calendar top navigation menu is displayed*/
    this.calendarLink = this.page
      .locator("a.top-nav-link")
      .filter({ hasText: /^Calendar$/ });
    this.accountsLink = this.page
      .locator("a")
      .filter({ hasText: /^Accounts$/ });
    this.contactsLink = this.page
      .locator("a")
      .filter({ hasText: /^Contacts$/ });
    this.opportunitiesLink = this.page
      .locator("a")
      .filter({ hasText: /^Opportunities$/ });
    this.leadsLink = this.page.locator("a").filter({ hasText: /^Leads$/ });
    this.quotesLink = this.page.locator("a").filter({ hasText: /^Quotes$/ });
    this.documentsLink = this.page
      .locator("a.top-nav-link")
      .filter({ hasText: /^Documents$/ });
    this.moreLink = this.page.locator("a").filter({ hasText: /^More$/ });
    this.topNavLinks = {
      Calendar: this.calendarLink,
      Accounts: this.accountsLink,
      Contacts: this.contactsLink,
      Opportunities: this.opportunitiesLink,
      Leads: this.leadsLink,
      Quotes: this.quotesLink,
      Documents: this.documentsLink,
      More: this.moreLink,
    };

    // Scenario: Verify the "calendar" icon
    //calendar dropdown

    this.scheduleMeetingOption = this.page.getByRole("link", {
      name: "Schedule Meeting",
    });
    this.scheduleCallOption = this.page.getByRole("link", {
      name: "Schedule Call",
    });
    this.createTaskOption = this.page.getByRole("link", {
      name: "Create Task",
    });
    this.todayOption = this.page.getByRole("link", { name: "Today" });

    this.dropdownOptions = {
      "Schedule Meeting": this.scheduleMeetingOption,
      "Schedule Call": this.scheduleCallOption,
      "Create Task": this.createTaskOption,
      Today: this.todayOption,
    };

    // Iframe (calendar content)
    this.frame = this.page.locator("iframe").contentFrame();

    // Meeting / Call form titles
    this.pageTitleMeetings = this.frame.getByText("Meetings", { exact: true });
    this.pageTitleCall = this.frame.getByText("Calls", { exact: true });
    this.pageTitleCreate = this.frame.getByText("CREATE", { exact: true });

    // Scenario: Veryfy the calendar  items.
    this.dayButton = this.frame.getByRole("button", {
      name: "Day",
      exact: true,
    });
    this.weekButton = this.frame.getByRole("button", {
      name: "Week",
      exact: true,
    });
    this.monthButton = this.frame.getByRole("button", {
      name: "Month",
      exact: true,
    });
    this.sharedMonthButton = this.frame.getByRole("button", {
      name: "Shared Month",
    });
    this.sharedWeekButton = this.frame.getByRole("button", {
      name: "Shared Week",
    });
    this.calendarIconButton = this.frame.locator("#goto_date_trigger");
    this.settingsButton = this.frame.getByRole("button", { name: "Settings" });

    // Maps the names in the feature table to the locators above
    this.calendarItems = {
      Day: this.dayButton,
      Week: this.weekButton,
      Month: this.monthButton,
      "Shared Month": this.sharedMonthButton,
      "Shared Week": this.sharedWeekButton,
      Settings: this.settingsButton,
      "Calendar icon": this.calendarIconButton,
    };

    // Form buttons (shared by both Meeting and Call forms)
    this.saveButton = this.frame
      .getByRole("button", { name: "Save", exact: true })
      .first();
    this.cancelButton = this.frame.getByRole("button", { name: "Cancel" });
    this.saveAndSendButton = this.frame.getByRole("button", {
      name: "Save & Send Invites",
    });
    this.closeAndCreateNewButton = this.frame.getByRole("button", {
      name: "Close and Create New",
    });
    this.searchButton = this.frame.getByRole("button", { name: "Search" });

    this.meetingButtons = {
      Save: this.saveButton,
      Cancel: this.cancelButton,
      "Save & Send Invites": this.saveAndSendButton,
      "Close and Create New": this.closeAndCreateNewButton,
      Search: this.searchButton,
    };
    //Scenario: Verify selecting Create Task components
    this.taskSaveBotton = this.page.getByRole("button", { name: "Save" });
    this.taskCancelButton = this.page.getByRole("button", { name: "Cancel" });

    this.taskButtons = {
      Save: this.taskSaveBotton,
      Cancel: this.taskCancelButton,
    };

    //Scenario Outline: Validate error on saving Schedule Meeting Page with a mandatory field left blank

    this.subjectField = this.frame.locator("#name");
    this.startDateField = this.frame.locator("#date_start_date");
    this.endDateField = this.frame.locator("#date_end_date");

    this.meetingFields = {
      Subject: this.subjectField,
      "Start Date": this.startDateField,
      "End Date": this.endDateField,
    };

    //Scenario Outline: Validate error on saving Schedule Call Page with a mandatory field left blank

    this.validationMessage = (text) => this.frame.getByText(text);
    this.startDateTimeField = this.frame.locator("#date_start_date");
    this.callDurationField = this.frame.locator("#duration_hours");
    this.directionField = this.frame.locator("#direction");

    this.callFields = {
      Subject: this.subjectField,
      "Start Date & Time": this.startDateTimeField,
      Duration: this.callDurationField,
      Direction: this.directionField,
    };
    //Scenario Outline: Validate error on saving Creat Task Page with a mandatory field left blank

    this.taskSubjectFeild = this.page
      .getByRole("tabpanel", { name: "TASK OVERVIEW" })
      .locator('input[type="text"]');
    this.taskPriorityFeild = this.page
      .locator("scrm-dropdownenum-edit")
      .filter({ hasText: "High Medium Low" })
      .getByRole("combobox");
    this.taskStatusFeild = this.page
      .locator("scrm-dropdownenum-edit")
      .filter({ hasText: "Not Started In Progress" })
      .getByRole("combobox");
    this.taskFields = {
      Subject: this.taskSubjectFeild,
      Priority: this.taskPriorityFeild,
      Status: this.taskStatusFeild,
    };
    // Task page title (page-level, no iframe)
    this.taskPageTitle = this.page.getByText("Create", { exact: true });

    //Scenario: Verify the assigned user name is displayed above the calendar grid
    this.assignedUserName = this.frame.getByRole("heading", {
      name: "Will Westin",
    });

    //  Scenario: checking CREATE ACTIVITY popup window shows.
    this.popupDeleteButton = this.frame.getByRole('button', { name: 'Delete' });
    this.createActivityPopupTitle = this.frame.getByRole("heading", {
      name: "Create Activity",
    });
    this.calendarTimeSlotCell = this.frame
      .locator('.fc-slats tr[data-time="15:00:00"] td:nth-child(2)')
      .first();
    
  }

  // Scenario: Verify the Calendar top navigation menu is displayed

  getTopNavLink(name) {
    return this.topNavLinks[name];
  }

  // Scenario: Verify the "calendar" icon
  async hoverCalendarIcon() {
    logger.info('Hovering over Calendar in the top menu');
    await this.calendarLink.hover();
  }
  async clickCalendarIcon() {
     logger.info('Clicking Calendar in the top menu');
    await this.calendarLink.click();
  }
  getDropdownOption(name) {
    return this.dropdownOptions[name];
  }
  getItem(name) {
    return this.calendarItems[name];
  }

  //Scenario: Verify selecting Schedule Meeting/call/creat task opens the meeting creation form

  async openCalendarDropdown() {
     logger.info('Opening Calendar dropdown');
    await this.calendarLink.hover();
  }
  async clickDropdownOption(name) {
     logger.info(`Selecting "${name}" from the Calendar dropdown`); 
    await this.page.getByRole("link", { name }).click();
  } //common for scheduled meeting and scheduled call
  getFormButton(name) {
    return this.meetingButtons[name];
  }
  getTaskFormButton(name) {
    return this.taskButtons[name];
  }

  //page tittle

  async verifyPageTitleVisible() {
     logger.info('Checking Schedule Meeting page title');
    await expect(this.pageTitleMeetings).toBeVisible();
    await expect(this.pageTitleCreate).toBeVisible();
  }
  async verifyCallPageTitleVisible() {
     logger.info('Checking Schedule Call page title'); 
    await expect(this.pageTitleCall).toBeVisible();
    await expect(this.pageTitleCreate).toBeVisible();
  }

  //Scenario Outline: Validate error on saving Schedule Meeting Page with a mandatory field left blank
  getField(name) {
    return this.meetingFields[name];
  }
  async clearField(name) {
    logger.info(`Clearing "${name}" on the Meeting form`); 
    const field = this.getField(name);
    await field.click();
    await field.press("ControlOrMeta+a");
    await field.press("Backspace");
    await field.press("Tab");
    await expect(field).toHaveValue("");
  }
  getCallField(name) {
    
    return this.callFields[name];
  }
  async clearCallField(name) {
    logger.info(`Clearing "${name}" on the Call form`);
    const field = this.getCallField(name);
    await field.click();
    await field.press("ControlOrMeta+a");
    await field.press("Backspace");
    await field.press("Tab");
    await expect(field).toHaveValue("");
  }
  async clickSave() {
     logger.info('Clicking Save on the Meeting/Call form'); 
    await this.saveButton.click();
  }

  async clickPopupSave() {
    logger.info('Clicking Save on the Create Activity popup'); 
    await this.saveButton.dispatchEvent("click");
  }
  async clickTaskSave() {
      logger.info('Clicking Save on the Task form'); 
    await this.taskSaveBotton.click();
  }

  getValidationMessage(text) {
    return this.frame.getByText(text).first();
  }

  getTaskValidationMessage(text) {
    return this.page.getByText(text);
  }
  getTaskField(name) {
    return this.taskFields[name];
  }
  async clearTaskField(name) {
    logger.info(`Clearing "${name}" on the Task form`);
    await this.getTaskField(name).clear();
  }
  async verifyTaskPageTitleVisible() {
     logger.info('Checking Create Task page title');
    await expect(this.taskPageTitle).toBeVisible();
  }

  //Scenario: checking CREATE ACTIVITY popup window shows.

  // Scenario: Verify the assigned user name is displayed above the calendar grid
  async verifyAssignedUserNameVisible() {
    logger.info('Checking the assigned user name is shown');  
    await expect(this.assignedUserName).toBeVisible();
  }

  async clickCalendarTimeSlot() {
     logger.info('Clicking a time slot to open the Create Activity popup');
    const popup = this.frame.getByRole('dialog');

    
    await expect(async () => {
      if (!(await popup.isVisible())) {
        await this.calendarTimeSlotCell.click({ timeout: 2000 });
      }
      await expect(popup).toBeVisible({ timeout: 3000 });
    }).toPass({ timeout: 15000 });

    await expect(this.createActivityPopupTitle).toBeVisible({ timeout: 15000 });
  
  }

  async fillSubject(value) {
     logger.info(`Entering activity subject: ${value}`);
    await this.getField("Subject").fill(value);
  }

  getSavedActivityEvent(subjectText) {
    return this.frame.locator(".fc-event").filter({ hasText: subjectText });
  }
  async verifyPopupClosed() {
     logger.info('Checking the Create Activity popup closed'); 
    await expect(this.createActivityPopupTitle).not.toBeVisible();
  }

  getSavedActivityStartTime(subjectText) {
    return this.getSavedActivityEvent(subjectText).locator(".fc-time");
  }
  async deleteSavedActivity(subject) {
    logger.info(`Deleting test activity: ${subject}`);
     await this.getSavedActivityEvent(subject).dispatchEvent('click');              
    await expect(this.popupDeleteButton).toBeAttached();           

    // If SuiteCRM asks "Are you sure?" as a browser popup, accept it automatically
    this.page.once("dialog", (dialog) => dialog.accept());

    await this.popupDeleteButton.dispatchEvent("click");            
    await expect(this.getSavedActivityEvent(subject)).not.toBeVisible();   
  }
}
