@document
Feature: "View Documents" Page Checking

  Background:
    Given Use is on "View Documents" Page

  @functional
  Scenario: Open the "View Document" page from the "Documents" dropdown
    Given The user has hovered over the "Calendar" menu
    When the user click the "View Document" from the "calender"
    Then the page open with "Filter" button

  @functional
  Scenario: View Documents page when no documents exist
    Given the user is on the Documents page and the list is empty
    And no documents have been uploaded or match the current filter
    When the Documents page finishes loading
    Then the grid should display the message "No results found." and the record count should show "(0 - 0 of 0)"

  @functional
  Scenario: Bulk Action control is disabled when no records exist
    Given the user is on the Documents page and the list is empty
    And the Documents grid shows "No results found."
    When the user click at the "Bulk Action" dropdown
    Then the "Bulk Action" dropdown and the row-selection checkbox should be disabled

  @functional
  Scenario: Searching the Created Documents
    Given the user is on the Documents  filter page and the list is empty
    And the Documents grid shows "No results found."
    When user click the "filter" button
    Then the Documents page should open displaying the "basic filter" section with "clear" and "search" button.

  @functional
  Scenario: Searching the Created Documents
    Given the user is on the Documents with filled serch criteria
    And the user fill the search criteria columns "Document Name", "File", "Category", "Sub Category", "Revision Date", "Expiration Date",
    When click the "Search "Button
    Then filterd result will show 


