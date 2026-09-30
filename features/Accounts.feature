@AccountsModule

Feature:Accounts module functionality of suite8demo application

  As a user I want to verify the Accounts module functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application
    
@Accounts1
  Scenario: Verify Accounts module navigation
    When the user clicks on Accounts module from left navigation
    Then the user should be navigated to Accounts Dashboard page and should see the list in dropdown
         |Create Account|
         |Import Accounts|
         |View Accounts|
              
@Accounts2 
  Scenario: Verify Create Account page navigation
    When the user opens Accounts module and clicks Create Account
    Then the user should be navigated to Create Account page
    
@CreateAccount
   Scenario: Verify Create Account page validation
    Given User is on Create Account page
    When User clicks the save button without entering mandatory fields
    Then User should see the createName error message "Missing required field: Name"
    
@validDataCreateAccount
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

    @RecentlyViewedofexisitingAccount
    Scenario:verify existing Account appears in Recently viewed
    Given User opens the exisiting aacount
    When User clicks the Recently viewed
    Then existing account should be displayed in recently viewed

    @CreateAccountCancelbuttonValidation
    Scenario:Verify cancel button validation in createAccount page with data
    Given User in Create Page of Account
    When User clicks cancel button inside accountpage having data
    Then User will get popup with message

    @CreateCancelbutton
    Scenario:verify create page cancel button 
    Given User is in create account page
    When User clicks cancel button without entering data
    Then User is navigating back to the Accounts Dashboard

    





