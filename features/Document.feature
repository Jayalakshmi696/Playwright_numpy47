@document
Feature: Documents Module - View, Navigate and  Activities

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Documents" module in the menu

@functional
  Scenario: Verify the "Documents"  Button.
    Given the user is logged into the SuitCRM
    When  the user hovers over the "Documents" button in the top navigation bar
    Then  user should see the  "Create Document" and "View Documents" options in the dropdown menu 
   
 Scenario: Veryfy the Document  items.
    When the user clicks the "Documents" icon
    Then the user should be navigated to " Document" Dashboard page and should see the components.
         
         |Component |Expected Values|
         |Page Title |Documents|
         |Buttons    |Filter|

@functional
  Scenario: Verify "Creat Document" page opens 
    Given the user has opened the"Documents" dropdown menu
    When the user clicks "Create Document"
    Then User should see the"Create Document" component .

    |component  |  expected value|
    |Page Title |  Create |
    |Buttons    |   Save, Cancel|
    |Tabs       |   Overview, Other|
    
    
  @functional
Scenario Outline: Validate error on saving Create Document Page with a mandatory field left blank
  Given the user is on the "Create Document" page
  When the user leaves the "<Field>" field blank and clicks "Save"
  Then a validation message is displayed "Missing required field: <Field>"
  And the meeting is not saved

      Examples:
    | Field       | ErrorMessage                          |
    | FILE         | Missing required field: File          |
    | DOCUMENT NAME | Missing required field: Document Name |
    | PUBLISHED DATE | Missing required field: Published Date |
    | REVISION    | Missing required field: Revision      |
    | FILE        | Missing required field: File          |


    @functional
Scenario: Create a document and verify it on the detail page and in the View Documents list
  Given the user is on the "Create Document" page
  When the user fills in all the mandatory fields
  And the user clicks the "Save" button
  Then the document detail page is displayed
  And the page shows an "Edit" button
  And the page shows an "Actions" button
 
  When the user navigates to the "View Documents" page
  Then the new document appears as a row in the grid
  And the row shows the correct "Document Name"
  And the row shows the uploaded "File"
  And the row shows the "User" the document is assigned to
 
@functional
  Scenario: Verify "View Document" page opens 
    Given the user has opened the"Documents" dropdown menu
    When the user clicks "View Documents"
    Then User should see the"View Documents"component .

        | Component     | Expected Value                                                                             |
    | Page Title    | DOCUMENTS                                                                                  |
    | Buttons       | Filter                                                                                     |
    | Bulk Action   | Bulk Action dropdown is displayed                                                          |
    | Columns       | Document Name, File, Category, Sub Category, Revision Date, Expiration Date, User          |
    | Pagination    | First page, Previous page, page count (e.g. 1 - 2 of 2), Next page, Last page controls     |
 

 








         























