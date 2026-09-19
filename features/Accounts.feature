@AccountsModule

Feature:Accounts module functionality of suite8demo application

  As a user I want to verify the Accounts module functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application
    
@Accounts
  Scenario: Verify Accounts module navigation
    When the user clicks on Accounts module from left navigation
    Then the user should be navigated to Accounts Dashboard page and should see the list in dropdown
         |Create Account|
         |Import Accounts|
         |View Accounts|
         |Recently Viewed|

  Scenario: Verify Create Account page navigation
    When the user clicks on Create Account from dropdown
    Then the user should be navigated to Create Account page

   Scenario: Verify Create Account page validation
    Given User is on Create Account page
    When User clicks the save button without entering mandatory fields
    Then User should see the error message "Missing required field: Name"

    Scenario: Verify Create Account page with valid data
    Given User is on Create Account page
    When User enters valid data in all mandatory fields and clicks save button
    Then User should be navigating to newly created account page

    @ImportAccounts
    Scenario: Verify Import Accounts page navigation
    When the user clicks on Import Accounts from dropdown
    Then the user should be navigated to Import Accounts page

   @viewAccounts
    Scenario: Verify View Accounts page navigation
    When the user clicks on View Accounts from dropdown
    Then the user should be navigated to View Accounts page

   @RecentlyViewed
    Scenario: Verify Recently Viewed page navigation
    When the user clicks on Recently Viewed from dropdown
    Then the user should be navigated to Recently Viewed page




