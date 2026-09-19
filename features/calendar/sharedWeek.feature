@calendar
Feature: Calendar shared week View

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module in the menu

  @functional
  Scenario: Navigate to shared week view from calendar
    Given The user is on the calendar page
    When The user clicks the "shared week" view button
    Then  the header displays the current week's date range "2026 September 13 - 2026 September 19"

  @functional
  Scenario: Verify the view toggle buttons are displayed
    When the user views the row below the page title Calender
    Then the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed

  @functional
  Scenario: Verify the calendar header shows the correct week date range
    When the user views the grey header bar above the day columns
    Then the header displays current weeks ,start date and end date

  @functional
  Scenario: Verify all seven days of the week are displayed as columns
    When the user views the calendar grid
    Then seven day columns are displayed labeled "Sunday  throght Saturday along with date"

  @functional
  Scenario: Verify the assigned user name is displayed above the calendar grid
    When the user views the row directly above the day column headers
    Then the assigned user's name is displayed

 
  @functional
  Scenario: Create  new Activity Popup - Schedule Meeting / Log Call
    Given the calendar is loaded in "shared week" view
    When user click the cell
    Then the "Create Activity" popup renders fully within 2 to 5 seconds

  @functional
  Scenario: Hover existing calender item
    When user Hovering on the existing cell calender item
    Then assigned task will show

  @functional
  Scenario: open the  User list buttons from shared week page
    Given the calendar is loaded in "shared " view
    When user click on the user list button
    Then user list window pop up


  @nonFunctional
  Scenario: Verify the calendar grid loads within an acceptable time (Performance)
    Given the user navigates to the Calendar module
    When the calendar page is requested
    Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds

  @nonFunctional
  Scenario: Verify the current-day highlight is visually distinguishable (Usability)
    Given the calendar is loaded in " share Week" view
    When the user views the day column
    Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance
