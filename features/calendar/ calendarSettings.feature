@calendar
Feature: Calender Settings

  Background:
    Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the "Settings" button, opening the Settings modal

  @functional
  Scenario: The user clicks the "Settings" button
    Given The user is on the calendar main view
    When The user clicks the "Settings" button
    Then The "Settings" modal opens
    And the modal displays the "Settings" section with display, timing, and visibility options
    And the modal displays the "Colour Settings" section
    And the modal displays "Cancel" and "Apply" buttons at the bottom


  @functional
  Scenario: Disable "Display time slots in Day and Week views"
    Given The Settings modal is open and "Display time slots in Day and Week views" is checked
    When The user unchecks the checkbox and clicks Apply
    Then The setting is saved, the modal closes, and the Day and Week calendar views no longer show hourly time slots

  @functional
  Scenario: Toggle "Shared Calendar Separate" option
    Given The Settings modal is open and "Shared Calendar Separate" is checked
    When The user unchecks the checkbox and clicks Apply
    Then The setting is saved and shared calendars are displayed together with the user's own calendar on the main calendar view

  @functional
  Scenario: Close the modal with the "X" icon
    Given The Settings modal is open with unsaved changes
    When The user clicks the "X" icon in the top-right corner
    Then The modal closes without saving any changes, identical to clicking Cancel
 
  @functional
  Scenario: Prevent End Time earlier than Start Time
    Given The Settings modal is open with Start time "08:00" and End time "19:00"
    When The user sets End time to "07:00", which is earlier than the Start time, and clicks Apply
    Then The system displays a validation message and does not save the settings until the End time is later than the Start time

  @functional
  Scenario: Save changes with the "Apply" button
    Given The user has changed one or more values in the Settings or Colour Settings sections
    When The user clicks "Apply"
    Then All changed settings are persisted, the modal closes, and the calendar view reflects the updated settings immediately

  @functional
  Scenario: Discard changes with the "Cancel" button
    Given The user has changed one or more values in the Settings or Colour Settings sections without clicking Apply
    When The user clicks "Cancel"
    Then The modal closes without saving any changes, and the calendar retains its previous settings

  @nonFunctional
  Scenario: Verify the calendar setting are displayed correctley
    Given the user navigates to the Setting page
    When user open the setting page
    Then The calender setting should open within acceptable time


  @nonFunctional
  Scenario: calender setting display consistently across browser
    Given user navigate to the calender settings
    When Page view on chrome,firfox, and safari
    Then calender setting should render across all browsers
