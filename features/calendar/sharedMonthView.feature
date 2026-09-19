@calendar
Feature: Calendar shared Month View

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module in the menu
    Then the calendar loads in "shared Month" view

 
  @functional
  Scenario: Verify the view toggle buttons are displayed
    Given the user is on the Calendar page
    When the user views the row below the page title Calender
    Then the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed


  @functional
  Scenario: Verify the assigned user name is displayed above the calendar grid
    Given the calendar is loaded in " shared month" view
    When the user views the row directly above the day column headers
    Then the assigned user's name is displayed

  Scenario: verify the calender items "task","call","meeting" and event
    Given the calendar is loaded in " shared month" view
    When The user clicks the "cell" in the calender
    Then calender items will pop up with corresponding given selected setting.

  @functional
  Scenario: Hover existing calender item
    Given the calendar is loaded in " shared month" view
    When user Hovering on the existing cell calender item
    Then assigned task will show

  @functional
  Scenario: Open the User list buttons from shared moth view
    Given the calendar is loaded in "shared Month" view
    When user click on the user list button
    Then user list window pop up

     @functional
  Scenario: Open the User list buttons from shared moth view
    Given the calendar is loaded in "shared Month" view
    When when user select" users" from drop down window and Apply button 
    Then window closes and corresponding user name shows in the shared month page

  @nonFunctional
  Scenario: Verify the calendar grid loads within an acceptable time (Performance)
    Given the user navigates to the Calendar module
    When the calendar page is requested
    Then the  shared month page shoul open within 2 to 5 seconds

  @nonFunctional
  Scenario: Verify the current-day highlight is visually distinguishable (Usability)
    Given the calendar is loaded in "shared Month" view
    When the user views the day column
    Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance

  @nonFunctional
  Scenario: Verify the calendar layout adapts to different screen resolutions (Responsiveness)
    Given the calendar is loaded in "shared Month" view
    When the browser window is resized between desktop, tablet and mobile breakpoints
    Then the day columns, time axis and header remain legible and correctly aligned without horizontal content loss

  @nonFunctional
  Scenario: Cross-browser rendering of the Settings modal
    Given The Settings modal is opened in the latest versions of Chrome, Firefox, Edge and Safari
    When the modal is displayed in each browser
    Then The layout, dropdowns, checkboxes and colour swatches render consistently with no visual defects in any browser
