@calendar
Feature: Calendar Month View

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module and click clander module in the menu
    Then the "Calendar" page is displayed .
  @functional
  Scenario: Navigate to Month view from calendar
    Given The user is on the calender view
    When The user clicks the "Month" view button
    Then the "Month" page is displayed

  @functional
  Scenario: Verify the view toggle buttons are displayed
    Given the user is on the Calendar page
    When the user views the row below the page title Calender
    Then the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed

 @functional
  Scenario: Verify the assigned user name is displayed above the calendar grid
    Given the calendar is loaded in "month" view
    When the user views the row directly above the day column headers
    Then the assigned user's name is displayed

  @functional
  Scenario: Verify navigating to the previous Day using the back arrow
    Given the calendar is loaded in "Week" view
    When the user clicks the left navigation arrow "<" in the header bar
    Then the calendar updates to display the preceding Month

  @functional
  Scenario: Verify navigating to the next Day using the forward arrow
    Given the calendar is displaying the chosen day
    When the user clicks the right navigation arrow ">" in the header bar
    Then the calendar updates to display the preceding Month

  @functional
  Scenario: verify the calender items "task","call","meeting" and event
    Given the calendar is loaded in "month" view
    When The user clicks the "cell" in the calender
    Then calender items will pop up with corresponding given selected setting.

  @functional
  Scenario: Hover existing calender item
    Given the calendar is loaded in "Month" view
    When user Hovering on the existing cell calender item
    Then task will show

  @nonFunctional
  Scenario: Verify the calendar grid loads within an acceptable time (Performance)
    Given the user navigates to "Month View" module
    When the calendar page is requested
    Then Page should load with in within 2 to 5 second

  @nonFunctional
  Scenario: Verify the current-day highlight is visually distinguishable (Usability)
    Given the user navigates to "Month View" module
    When the user views the day column headers
    Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance

  @nonFunctional
  Scenario: Verify the calendar layout adapts to different screen resolutions (Responsiveness)
    Given the user navigates to "Month View" module
    When the browser window is resized between desktop, tablet and mobile breakpoints
    Then the day columns, time axis and header remain legible and correctly aligned without horizontal content loss

  @nonFunctional
  Scenario: Cross-browser rendering of the Settings modal
    Given The Settings modal is opened in the latest versions of Chrome, Firefox, Edge and Safari
    When the modal is displayed in each browser
    Then The layout, dropdowns, checkboxes and colour swatches render consistently with no visual defects in any browser
