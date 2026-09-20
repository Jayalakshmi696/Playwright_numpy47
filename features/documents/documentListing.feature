@document
Feature: Document listing

  Background:
    Given the user is on the Documents page and the list is empty

  @functional
  Scenario: View Documents page when no documents exist
    Given no documents have been uploaded or match the current filter
    When the Documents page finishes loading
    Then the grid should display the message "No results found." and the record count should show "(0 - 0 of 0)"

  @functional
  Scenario: Bulk Action control is disabled when no records exist
    Given the user is on the Documents page and the list is empty
    And the Documents grid shows "No results found."
    When the user click at the "Bulk Action" dropdown
    Then the "Bulk Action" dropdown and the row-selection checkbox should be disabled

  @functional
  Scenario: Open the Filter panel
    Given the user is on the Documents page
    And the user is on the Documents page
    When the user clicks the "Filter" button
    Then a filter panel should open allowing the user to search Documents by criteria such as Document Name, Category, Sub Category,status, Revision Date, Expiration Date, Document type,Assigned to,my favorites,or User

  @functional
  Scenario: Filter documents with no matching results
    Given the user has opened the Filter panel
    And the user enters filter criteria that match no existing document
    When the user applies the filter
    Then the grid should display "No results found." and the pagination count should reset to "(0 - 0 of 0)"

  @functional
  Scenario: Filter documents with matching results
    Given the user has opened the Filter panel and documents exist matching the criteria
    And the user enters valid filter criteria that match one or more documents
    When the user applies the filter
    Then only the documents matching the criteria should be displayed in the grid

  @functional
  Scenario: Sort documents by Document Name
    Given the Documents grid contains one or more records
    And documents are listed in the grid
    When the user clicks the sort arrow on the "Document Name" column header
    Then the documents should be reordered alphabetically by Document Name, toggling between ascending and descending on repeated clicks

  @functional
  Scenario: Sort documents by Category
    Given the Documents grid contains one or more records
    And documents are listed in the grid
    When the user clicks the sort arrow on the "Category" column header
    Then the documents should be reordered alphabetically by Category, toggling between ascending and descending on repeated clicks

  @functional
  Scenario: Sort documents by Sub Category
    Given the Documents grid contains one or more records
    And documents are listed in the grid
    When the user clicks the sort arrow on the "Sub Category" column header
    Then the documents should be reordered alphabetically by Sub Category, toggling between ascending and descending on repeated clicks

  @functional
  Scenario: Sort documents by Expiration Date
    Given the Documents grid contains one or more records
    And documents are listed in the grid
    When the user clicks the sort arrow on the "Expiration Date" column header
    Then the documents should be reordered chronologically by Expiration Date, toggling between ascending and descending on repeated clicks

  @functional
  Scenario: Sort documents by User
    Given the Documents grid contains one or more records
    And documents are listed in the grid
    When the user clicks the sort arrow on the "User" column header
    Then the documents should be reordered alphabetically by User, toggling between ascending and descending on repeated clicks

@functional
  Scenario: Apply a Bulk Action to selected documents
    Given one or more documents are selected in the grid
    And at least one document row is selected
    When the user chooses an option from the "Bulk Action" dropdown
    Then the selected action should be applied to all selected documents and a confirmation should be displayed
