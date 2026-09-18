@loginPageFunctionality
Feature: Login functionality of suite8demo application

 As a user I want to verify the login functionality of 
 suite8demo application with different sets of data

  Background:
    Given User is on suite8demo login page

@Login1
Scenario Outline:Login scenario with different sets of data
    When user enters "<loginTestData>"
    Then User should see the expected login result
    Examples:
        |loginTestData|
        |emptyUsername|
        |emptyPassword|
        |emptyUsernameAndPassword|
        |invalidUsername|
        |invalidPassword|
        |invalidUsernameAndPassword|
        |validUsernameAndPassword|

@PasswordHidden
Scenario: Verify password is hidden when user enters password
  When User enters a password
  Then User should see the password displayed as hidden characters







   
