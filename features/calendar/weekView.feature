@calendar
Feature: Calendar Week View

  Background:
    Given the user is logged into the SuiteCRM
    And the user navigates to the "Calendar" module in the menu


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
  Scenario: Verify navigating to the previous Day using the back arrow
    Given the calendar is loaded in "Week" view
    When the user clicks the left navigation arrow "<" in the header bar
    Then the calendar updates to display the preceding Week

  @functional
  Scenario: Verify navigating to the next Day using the forward arrow
    Given the calendar is displaying the chosen week
    When the user clicks the right navigation arrow ">" in the header bar
    Then the calendar updates to display the preceding week

  @functional
  Scenario: Create  new Activity Popup - Schedule Meeting / Log Call
    Given the calendar is loaded in "Week" view
    When user click the cell
    Then the "Create Activity" popup renders fully within 2 to 5 seconds

  @functional
  Scenario: Existing calender item
    Given the calendar is loaded in "Week" view
    When user click the existing calender item
    Then existing calender item will show

  @functional
  Scenario: Hover existing calender item
    Given the calendar is loaded in "Week" view
    When user Hovering on the existing cell calender item
    Then task will show

  @nonFunctional
  Scenario: Verify the calendar grid loads within an acceptable time (Performance)
    Given the user navigates to the "week view "module
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
