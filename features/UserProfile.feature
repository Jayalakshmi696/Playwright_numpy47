@ProfileModule
Feature: User Profile functionality of suite8demo application

  As a user I want to verify the User Profile functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application


  Scenario: User can view the User Profile dropdown options
    When the user clicks the User Profile icon
    Then the User Profile dropdown should contain following options 
         |Logged-in user name |
         |Edit Profile|
         |Employees|
         |Community Forum|
         |About|
         |Logout|

    Scenario:Verify Edit Profile page navigation
    When the user clicks on Edit Profile from dropdown
    Then the user should be navigated to Edit Profile page

    Scenario: Verify Employees page navigation
    When the user clicks on Employees from dropdown
    Then the user should be navigated to Employees page.

    Scenario: Verify Community Forum page navigation
    When the user clicks on Community Forum from dropdown
    Then the user should be navigated to Community Forum page.
    
    Scenario:Verify About page navigation
    When the user clicks on About from dropdown
    Then the user should be navigated to About page.

    Scenario: Verify Logout functionality
    When the user clicks on Logout from dropdown
    Then the user should be logged out and navigated to login page.


    Scenario: Verify Userprofile Last name field is validation
    Given User is on Userprofile tab of User profile page
    When User clicks the save button without entering Last Name field
    Then User should see the error message "Missing required field: Last Name"
    
    Scenario:Verify Upload photo functionality in User profile page
    Given User is on Userprofile tab of User profile page
    When User clicks on choose file button and selects a photo to upload
    Then User should see the uploaded photo in User profile page

    Scenario: Verifying settings popup is displayed
    Given User is on Userprofile tab of User profile page
    When User clicks settings button
    Then settings popup will display with all fileds

    Scenario: Verify the user is able to add email address
    Given User is on Userprofile tab of User profile page
    When User adds an email address by clicking the plus (+) button and saves the profile 
    Then User should see the email address added in the profile
  
   


