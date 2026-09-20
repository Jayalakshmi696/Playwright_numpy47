@document
Feature: Document  Menu  Navigation

  Background:
    Given the user is on any page where the top navigation bar is visible.
    And the navigation bar contains the "Documents" menu

  @functional
  Scenario: Display dropdown options  "Document " menu
    Given the user is viewing the top navigation bar
    When the user hovers on the "Documents" menu
    Then drop down menu show up with following option:
        |Create Document|
        |View Document|
        |Recentley viewed|
        

  @functional
  Scenario: Navigate to the Documents page
    Given the user is on the application dashboard
    When the user clicks the "Documents" button
    Then the Documents page should open displaying the columns Document Name, File, Category, Sub Category, Revision Date, Expiration Date, and User
