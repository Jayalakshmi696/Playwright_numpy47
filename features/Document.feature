@document
Feature: Documents Module - View, Navigate and  Activities

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Documents" module in the menu

  @functional @documentsMenu
  Scenario: Verify the "Documents"  Button.
    When the user hovers over the "Documents" button in the top navigation bar
    Then user should see the "Create Document" and "View Documents" options in the dropdown menu

  @functional @documentItems
  Scenario: Veryfy the Document  items.
    When the user clicks the "Documents" menu item
    Then the user should be navigated to " Document" Dashboard page and should see the components.
      | Component  | Expected Values |
      | Page Title | Documents       |
      | Buttons    | Filter          |

  @functional @createDocument
  Scenario: Verify "Creat Document" page opens
    Given the user has opened the"Documents" dropdown menu
    When the user selects "Create Document" from the Documents dropdown
    Then the "Create Document" page is displayed with the components
      | component  | expected value  |
      | Page Title | Create          |
      | Buttons    | Save, Cancel    |
      | Tabs       | Overview, Other |

  @negative @createDocumentNegative
  Scenario Outline: Validate error on saving Create Document Page with a mandatory field left blank
    Given the user is on the "Create Document" form
    When the user leaves the document "<Field>" field blank and clicks Save
    Then a document validation message is displayed "<ErrorMessage>"

    Examples:
      | Field         | ErrorMessage                          |
      | File          | Missing required field: File          |
      | Document Name | Missing required field: Document Name |
      | Publish Date  | Missing required field: Publish Date  |
      | Revision      | Missing required field: Revision      |

  @functional @createAndVerifyDocument
  Scenario: Create a document and verify it on the detail page and in the View Documents list
    Given the user is on the "Create Document" form
    When the user uploads a file and enters a document name
    And the user saves the document
    Then the document detail page is displayed
    And the page shows an "Edit" and "Action" button.
    When the user navigates to the "View Documents" page
    Then the new document appears as a row in the grid
    And the row shows the correct document name, file and assigned user

  @functional @viewDocuments
  Scenario: Verify "View Document" page opens
    Given the user has opened the"Documents" dropdown menu
    When the user selects "View Documents" from the Documents dropdown
    Then the View Documents list is displayed with the components
      | Component   | Expected Value                                                                         |
      | Page Title  | DOCUMENTS                                                                              |
      | Buttons     | Filter                                                                                 |
      | Bulk Action | Bulk Action dropdown is displayed                                                      |
      | Columns     | Document Name, File, Category, Sub Category, Revision Date, Expiration Date, User      |
      | Pagination  | First page, Previous page, page count (e.g. 1 - 2 of 2), Next page, Last page controls |
