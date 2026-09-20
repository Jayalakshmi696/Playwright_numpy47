@calendar
Feature: Create New  Activity Popup - Schedule Meeting / Log Call

  Background:
    Given the user is logged into the CRM
    And the user is on the Calendar page in "Week" view
    And the user clicks on empty cell in the calendar grid
    And the "Create Activity" popup is displayed

  @functional
  Scenario: Verify the Create Activity popup opens with Schedule Meeting selected by default
    Given the calendar is loaded in "Week" view
    When the user clicks an available hour cell in the calendar grid
    Then the "Schedule Meeting" radio option is selected by default and the "Log Call" option is unselected

  @functional
  Scenario: Verify switching to Log Call updates the form
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user clicks an available hour cell in the calendar grid &When the user selects the "Log Call" radio option
    Then the form fields update to reflect the "Log Call" activity type

  @functional
  Scenario: Verify the Start Date defaults to the date/time of the clicked calendar cell
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user clicks the cell for "current day" in the calendar grid
    Then the "START DATE" field is pre-populated with based on selected date.

  Scenario: Verify Start Date is a mandatory field
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user leaves the "Start date" field empty and clicks "Save"
    Then a validation error is displayed "Missing required field: Subject"

  @functional
  Scenario: Verify Subject is a mandatory field
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user leaves the "SUBJECT" field empty and clicks "Save"
    Then a validation error is displayed indicating "Subject" is required and the activity is not saved

  
  Scenario: Verify End date is a mandatory field
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user leaves the "End date" field empty and clicks "Save"
    Then a validation error is displayed "Missing required field: End Date"


  @functional
  Scenario: Verify reminder action
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user clicks the red "X" icon next to the "Popup" action only
    Then the "Popup" reminder action is removed from the list

  Scenario: Verify reminder action
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user clicks the red "X" icon next to the "Email invitees" action only
    Then the validation error displayed"Then the "Popup" reminder action is removed from the list"

  Scenario: Verify reminder action
    Given the "Create Activity" popup is open with "Schedule Meeting" selected
    When the user clicks the red "X" icon both
    Then Remainder is not set for either a pop up or email

  @functional
  Scenario: Verify Add reminder button scenario
    Given the "Create Activity" popup is open
    When the user clicks the "+ Add reminder" button
    Then a new blank reminder action row is added to the "REMINDERS" section

  Scenario: Verify remove reminder button scenario
    Given the "Create Activity" popup is open
    When the user clicks the "- Add reminder" button
    Then excisting eminder action row isremove from the "REMINDERS" section

  
  
  @functional
  Scenario: Verify add invitees using search
    Given the user has entered required fields and added at least one invitee
    When the user enters  any of the invalid  "First Name", "Last Name" or "Email" field under "Add Invitees" and clicks "Search"
    Then validation error message display"Sorry, no results were found. Please create an invitee below."

  @functional
  Scenario: Verify creating a new invitee as a Contact
    Given the user has entered data into the "Create Activity" popup
    When the user clicks "As Contact" under "Create an invitee"
    Then a new contact creation form is displayed for the user to add as an invitee

 
  @functional
  Scenario: Verify Save button creates the activity
    Given the user is creating a brand new activity that has not yet been saved
    When the user clicks "Save"
    Then the activity is created, the popup closes, and the new activity appears on the calendar grid

  @functional
  Scenario: Verify Save & Send Invites sends email notifications
    Given the "Create Activity" popup is open
    When the user clicks "Save & Send Invites"
    Then the activity is saved and an email invitation is sent to each added invitee

  @functional
  Scenario: Verify Cancel button discards changes
    Given the "Create Activity" popup is open
    When the user clicks "Cancel"
    Then the popup closes and no activity is created

  @functional
  Scenario: Verify the close "X" icon discards the popup
    Given the "Create Activity" popup is open
    When the user clicks the "X" icon in the top-right corner of the popup
    Then the popup closes without saving any data

 
  
  @nonFunctional
  Scenario: Verify End Date cannot be earlier than Start Date
    Given the "Create Activity" popup is open
    When the user sets an "END DATE" earlier than the "START DATE" and clicks "Save"
    Then a validation error is displayed and the activity is not saved

  @nonFunctional
  Scenario: Verify the popup loads within an acceptable time (Performance)
    Given the user is on the Calendar page
    When the user clicks an hour cell in the calendar grid
    Then the "Create Activity" popup renders fully within 2 to 5 seconds

  @nonFunctional
  Scenario: Verify mandatory fields are visually distinguishable (Usability)
    Given the user is on the Calendar page
    When the user views the "SUBJECT", "START DATE" and "END DATE" labels
    Then each mandatory field label is marked with a red asterisk "*" to distinguish it from optional fields

  