@calendar
Feature: Create Task page

  Background:
    Given The user is on Create Task Page

  @functional
  Scenario: Error message is displayed when a mandatory field is not selected
    Given The user is on  "Create Task Page" of Calender
    When the user forgot to fill the "Subject" field  and user click the "save "button
    Then An error message"Missing required field: Subject" Displyed
    And the user forgot to select the mandatory field "Priority" and user click "save "button
    And An error message"Missing required field: Priority" Displyed

  @functional
  Scenario: Verify document is saved successfully when all mandatory fields are filled
    When user filled "*mandatry field " and click save
    Then window refresh and saved page will reload  with edit  buttons "Edit", and"Action"
    And user click "cancel" button without any action
    And Page will navigate to "Task Menu" button in the top navigation Menu and related page open

  @functional
  Scenario: Verify task detail page is displayed after creating a task
    Given The user is on the page with "Edit" and "Actions" buttons
    When we click "edit "button
    Then window refresh and saved page will reload  with  buttons "Save", and"Cancel" button

  @functional
  Scenario: verify action and edit button is displayed in edit task page
    When click "Action" button
    Then The drop down contain"Duplicate", and Delete"option will show

  @functional
  Scenario: Verify duplicate page is created and listed in the task page
    When click "Action" Botton and selected"Duplicate"
    Then Duplicate page created and listed in "Task"page will display

  @functional
  Scenario: Verify multiple duplicates can be created
    When user click "duplicate" page multiple time
    Then Each duplicated page sholud be created  and listed in  "Creat Task page"

  @functional
  Scenario: Verify created page can be deleted
    When user click "action" and selected "delete" option
    Then pop up will show with message"Are you sure want to delete this record?" with "cancel",and "Proceed" button.
    And user click "Proceed" button
    And created task will delete and message will come"record delet succesfully"

  @functional
  Scenario: Verify basic filter popup opens on clicking the search/dropdown arrow
    Given The user is on "Other" View tab from "Calender Creat Task Page"
    When user click on "pointer" search   near "Assighned to feild"
    Then default userlist  with "Basic Filter" section collapsed page pop up  And popus should list with"Name","UserName","job title","Department"."Email,"Phone"columns

  @functional
  Scenario: Verify popup closes and selected user is set in Assigned To field
    When user click "user's" name
    Then pop up window close the selected user's name should be displayed in the "Assigned To" field
