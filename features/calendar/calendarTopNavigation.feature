@calendar
Feature: Calendar Module - View, Navigate and Create Activities

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module in the menu
    And the calendar loads in "Week" view

  @functional
  Scenario: Verify the Calendar top navigation menu is displayed
    Given the user is on the Calendar page
    When the user views the top navigation bar
    Then the menu items "Calendar", "Accounts", "Contacts", "Opportunities", "Leads", "Quotes", "Documents" and "More" are displayed

  @functional
  Scenario: Verify the Calendar dropdown menu options are displayed
    Given the user is on the Calendar page
    When the user clicks the "Calendar" dropdown in the top navigation bar
    Then a dropdown appears with options "Schedule Meeting", "Schedule Call", "Create Task" and "Today"

  @functional
  Scenario: Verify selecting Schedule Meeting opens the meeting creation form
    Given the user has opened the "Calendar" dropdown menu
    When the user clicks "Schedule Meeting"
    Then a new "Schedule Meeting" form is displayed for the user to fill in

  @functional
  Scenario: Verify selecting Schedule Call opens the call creation form
    Given the user has opened the "Calendar" dropdown menu
    When the user clicks "Schedule Call"
    Then a new "Schedule Call" form is displayed for the user to fill in

  @functional
  Scenario: Verify selecting Create Task opens the task creation form
    Given the user has opened the "Calendar" dropdown menu
    When the user clicks "Create Task"
    Then a new "Create Task" form is displayed for the user to fill in

  @functional
  Scenario: Verify selecting Today returns the calendar to the current date
    Given the user has opened the "Calendar" dropdown menu
    When the user opens the "Calendar" dropdown menu and clicks "Today"
    Then the calendar refreshes to display the  current date activities

  @functional
  Scenario: Verify the view toggle buttons are displayed
    Given the user is on the Calendar page
    When the user views the row below the page title Calender
    Then the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed

  @functional
  Scenario: Verify the calendar header shows the correct week date range
    Given the calendar is loaded in "Week" view
    When the user views the grey header bar above the day columns
    Then the header displays current weeks ,start date and end date

  @functional
  Scenario: Verify all seven days of the week are displayed as columns
    Given the calendar is loaded in "Week" view
    When the user views the calendar grid
    Then seven day columns are displayed labeled "Sunday  throght Saturday along with date"

  @functional
  Scenario: Verify the assigned user name is displayed above the calendar grid
    Given the calendar is loaded in "Week" view
    When the user views the row directly above the day column headers
    Then the assigned user's name is displayed

  @functional
  Scenario: Verify the current day column is highlighted
    Given the calendar is loaded in "Week" view and today's date falls within the displayed week
    When the user views the day columns
    Then the column for "Currnet day" is highlighted with a distinct background color .

  @functional
  Scenario: Verify hourly time slots are displayed for each day
    Given the calendar is loaded in "Week" view
    When the user views the left-hand time axis and the grid rows
    Then hourly rows from "start tim eto end time" are displayed and aligned across all seven day columns

  @functional
  Scenario: Verify navigating to the previous week using the back arrow
    Given the calendar is displaying the chosen week
    When the user clicks the left navigation arrow "<" in the header bar
    Then the calendar updates to display the preceding week.

  @functional
  Scenario: Verify navigating to the next week using the forward arrow
    Given the calendar is displaying the chosen week
    When the user clicks the right navigation arrow ">" in the header bar
    Then the calendar updates to display the next week.

  @functional
  Scenario: Verify the Settings button is accessible from the Calendar page
    Given the user is on the Calendar page
    When the user clicks the "SETTINGS" button in the top-right corner
    Then the calendar settings panel or page is displayed

  @functional
  Scenario: Hover existing calender item
    Given the user is on the Calendar page
    When user Hovering on the existing cell calender item
    Then task will show

  @nonFunctional
  Scenario: Verify the calendar grid loads within an acceptable time (Performance)
    Given the user navigates to the Calendar module
    When the calendar page is requested
    Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds

  @nonFunctional
  Scenario: Verify the current-day highlight is visually distinguishable (Usability)
    Given the calendar is loaded in "Week" view
    When the user views the day column headers
    Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance

  @nonFunctional
  Scenario: Verify the calendar layout adapts to different screen resolutions (Responsiveness)
    Given the calendar is loaded in "Week" view
    When the browser window is resized between desktop, tablet and mobile breakpoints
    Then the day columns, time axis and header remain legible and correctly aligned without horizontal content loss
