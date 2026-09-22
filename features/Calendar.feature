@calendar
Feature: Calendar Module - View, Navigate and  Activities

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module in the menu


  @functional
  Scenario: Verify the Calendar top navigation menu is displayed
    Given the user is on the Calendar page
    When the user views the top navigation bar
    Then the menu items "Calendar", "Accounts", "Contacts", "Opportunities", "Leads", "Quotes", "Documents" and "More" are displayed


    @functional
  Scenario: Verify the "calendar" icon.
    Given the user is logged into the SuitCRM
    When  the user hovers over the "calendar" icon in the top navigation bar
    Then  user should see the "Schedule Meeting", "Schedule Call", "Create Task" and "Today" options in the dropdown menu 
   
   Scenario: Veryfy the calendar  items.
    When the user clicks the "calendar" icon
    Then the user should be navigated to "Calendar" Dashboard page and should see the buttons.
         
         |Day |
         |Week |
         |Month|
         |Shared Month|
         |Shared Week|
         |Settings|
         |Calendar icon|



  @functional
  Scenario: Verify selecting Schedule Meeting opens the meeting creation form
    Given the user has opened the "Calendar" dropdown menu
    When the user clicks "Schedule Meeting"
    Then User should see the "Schedule Meeting"  component .

    |component  |   expected value|

    |Page Title |   MEETING CREATE|

    |Buttons    |   Save, Cancel,Save & Send Invites, Close And Create New,Search|
    
    
  @functional
Scenario Outline: Validate error on saving Shedule Meeting Page with a mandatory field left blank
  Given the user is on the "Schedule Meeting" page
  When the user leaves the "<Field>" field blank and clicks "Save"
  Then a validation message is displayed "Missing required field: <Field>"
  And the survey is not saved

    Examples:
    | Field       | ErrorMessage                          |
    | Subject     | Missing required field: Subject       |
    | Start Date  | Missing required field: Start Date    |
    | End Date    | Missing required field: End Date      |


@functional
  Scenario: Verify selecting Schedule Call opens the call creation form
    Given the user has opened the "Calendar" dropdown menu
    When the user clicks "Schedule Call"
    Then the "Schedule Call" form is displayed with components

    |component  |   expected value|

    |Page Title |   CALL CREATE|

    |Buttons    |   Save, Cancel,Save & Send Invites, Close And Create New,Search|

    @functional
Scenario Outline: Validate error on saving Shedule Call Page with a mandatory field left blank
  Given the user is on the "Schedule Call" page
  When the user leaves the "<Field>" field blank and clicks "Save"
  Then a validation message is displayed "Missing required field: <Field>"
  And the survey is not saved

    Examples:
    | Field       | ErrorMessage                          |
    | Subject     | Missing required field: Subject       |
    | Start Date  | Missing required field: Start Date    |
    | End Date    | Missing required field: End Date      |


 @functional
  Scenario: Verify selecting Create Task opens the task creation form
    Given the user has opened the "Calendar" dropdown menu
    When the user clicks "Create Task"
    Then a new "Create Task" form is displayed with components
    
    |component  |   expected value|

    |Page Title |   TASK CREATE|

    |Buttons    |   Save, Cancel,Save & Send Invites, Close And Create New,Search|



    @functional
Scenario Outline: Validate error on saving Create Task Page with a mandatory field left blank
  Given the user is on the "Create Task" page
  When the user leaves the "<Field>" field blank and clicks "Save"
  Then a validation message is displayed "Missing required field: <Field>"
  And the survey is not saved

    Examples:
    | Field       | ErrorMessage                          |
    | Subject     | Missing required field: Subject       |
    | Start Date  | Missing required field: Start Date    |
    | End Date    | Missing required field: End Date      |


@functional
  Scenario: Verify  "Today" page open.
    Given the user has opened the "Calendar" dropdown menu
    When the user opens the "Calendar" dropdown menu and clicks "Today"
    Then the calendar refreshes to display the  current date activities with buttons "Day", "Week", "Month", "Shared Month", "Shared Week", "Settings" and "Calendar icon" are displayed

 @functional
  Scenario: Verify the assigned user name is displayed above the calendar grid
    Given the calendar is loaded in "Today" view
    When the user views the row directly above the day column headers
    Then the assigned user's name is displayed

@functional
  Scenario: checking CREATE ACTIVITY popup window shows.
    Given the calendar is loaded in "Today" view
    When the user clicks the cell corresponding to a specific time slot in the calendar grid
    Then a popup window appears with options to create a new activity, including fields for "Subject", "Start Date", "End Date"

@functional
Scenario: Saved activity appears on the calendar grid in its time slot
  Given the calendar is loaded in "Today" view
  When the user clicks the cell corresponding to a specific time slot in the calendar grid
  And the user enters a valid value in the "Subject" field
  And the user clicks the "Save" button
  Then the popup closes
  And the activity appears in the calendar cell at the corresponding time slot
  And the cell displays the start time and the assigned user's name
 
@nonFunctional
  Scenario: Verify the calendar grid loads within an acceptable time (Performance)
    Given the user navigates to the Calendar module
    When the calendar page is requested
    Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds

