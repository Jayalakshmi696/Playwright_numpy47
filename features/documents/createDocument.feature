@document
Feature: Create Document Page Checking

  Background:
    Given User is on "Create Document "Page

  @functional
  Scenario: Open the "Create Documents" page from the "Document" dropdown
    Given The user has hovered over the "Documents" menu
    When the user click the "Create Document" from the "Documents"
    Then "create Document "page will display with two tabs "overview"and "other".
    And "over view"  tab highlighted.

  @functional
  Scenario: Verify validation error when mandatory fields are left empty
    Given User is on "Create Document "Page
    And The user is on "Create Document" page's  "Over view" tab
    When user click "save " button without filling the"Document Name"
    Then validation eror should be displayed "Missing required field: Document Name " for the "Document Name" field

  @functional
  Scenario: Verify validation error when mandatory fields are left empty
    Given User is on "Create Document "Page
    And The user is on "Create Document" page's  "Over view" tab
    When user click "save " button without filling the"Published Date"
    Then validation eror should be displayed "Missing required field: Published Date " for the "Published Date" field

  @functional
  Scenario: Verify validation error when mandatory fields are left empty
    Given User is on "Create Document "Page
    And The user is on "Create Document" page's  "Over view" tab
    When user click "save " button without filling the"Revision"
    Then validation eror should be displayed "Missing required field: Revision " for the "Revision" field

  @functional
  Scenario: Verify validation error when mandatory fields are left empty
    Given User is on "Create Document "Page
    And The user is on "Create Document" page's  "Over view" tab
    When user click "save " button without filling the"File"
    Then validation eror should be displayed "Missing required field: File " for the "File" field

  @functional
  Scenario: Verify document is saved successfully when all mandatory fields are filled
    Given User is on "Create Document "Page
    And The user is on "Create Document" page's  "Over view" tab
    When user clicks "save" button with all mandatory field are completed
    Then saved page will reload with button n "Edit","Action".


  @functional
  Scenario: Verify "Edit Document" page is displayed after update the document
    Given The user is on the page with "Edit" and "Actions" buttons
    When we click "edit "button
    Then window refresh and saved page will reload with  buttons "Save", and"Cancel" button


  @functional
  Scenario: Verify "Edit Document" page is displayed after update the document
    Given the user has just saved a document and the Document Detail View is open with saved name with star
    And The user is on the page with "Edit" and "Actions" buttons
    When click "Action" button
    Then The drop down contain"Duplicate", and Delete"option will show

  @functional
  Scenario: Verify duplicate page is created and listed in the task page
    Given The user is on the page with "Edit" and "Actions" buttons
    When click "Action" Botton and selected"Duplicate"
    Then Duplicate page created and listed in "Creat Document"page will display

  @functional
  Scenario: Verify multiple duplicates can be created
    Given The user is on the page with "Edit" and "Actions" buttons
    When user click "duplicate "page multiple time
    Then Each duplicated page sholud be created  and listed in  "Task page"

  @functional
  Scenario: Verify created page can be deleted
    Given The user is on the page with "Edit" and "Actions" buttons
    When user click "action" and selected "delete" option
    Then pop up will show with message"Are you sure want to delete this record?" with "cancel",and "Proceed" button.
    And user click "Proceed" button
    And created task will delete and message will come" record delet succesfully"

  @functional
  Scenario: verify  saved Created Document is vissible
    Given The user is on "Create Document" page's  "Other" tab
    When user click "other" tab
    Then save page will reload with botton "Edit","Action".
