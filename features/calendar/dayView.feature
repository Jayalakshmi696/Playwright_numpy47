@calendar
Feature: Calendar Day View

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module in the menu
    And the calendar loads in "Day" view

 
  @functional
  Scenario: Verify the view toggle buttons are displayed
    Given the user is on the Calendar page
    When the user views the row below the page title Calender
    Then the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed

  @functional
  Scenario: Verify the calendar header shows the correct week date range
    Given the calendar is loaded in "Day" view
    When the user views the grey header bar above the day columns
    Then the header displays current weeks ,start date and end date

  @functional
  Scenario: Verify all seven days of the week are displayed as columns
    Given the calendar is loaded in "Day" view
    When the user views the calendar grid
    Then seven day columns are displayed labeled "Sunday  throght Saturday along with date"

  @functional
  Scenario: Verify the assigned user name is displayed above the calendar grid
    Given the calendar is loaded in "Day" view
    When the user views the row directly above the day column headers
    Then the assigned user's name is displayed

  @functional
  Scenario: Verify navigating to the previous Day using the back arrow
    Given the calendar is displaying the chosen day
    When the user clicks the left navigation arrow "<" in the header bar
    Then the calendar updates to display the preceding day.

  @functional
  Scenario: Verify navigating to the next Day using the forward arrow
    Given the calendar is displaying the chosen day
    When the user clicks the right navigation arrow ">" in the header bar
    Then the calendar updates to display the preceding day.

  @functional
  Scenario: Verify the Settings button is accessible from the Calendar page
    Given the calendar is loaded in "Day" view
    When the user clicks the "SETTINGS" button in the top-right corner
    Then the calendar settings panel or page is displayed

  @functional
  Scenario: Create  new Activity Popup - Schedule Meeting / Log Call
    Given the calendar is loaded in "Day" view
    When user click the cell
    Then the "Create Activity" popup renders fully within 2 to 5 seconds

  @functional
  Scenario: Existing calender item
    Given the calendar is loaded in "Day" view
    When user click the existing calender item
    Then existing calender item will show

  @nonFunctional
  Scenario: Verify the popup loads within an acceptable time (Performance)
    Given the calendar is loaded in "Day" view
    When the user clicks an hour cell in the calendar grid
    Then the "Create Activity" popup renders fully within 2  to 5 seconds

 
  