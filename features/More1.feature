@MoreModule
Feature: More module dropdown list functionality of suite8demo application
  As a user I want to verify the More module dropdown listfunctionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application

  Scenario: Verify More module dropdown list
    When the user clicks on More module from left navigation
    Then the user should see the list of items in dropdown

  Scenario: HomePage Navigation
    When User clicks Home item from More
    Then User is navigating to the HomePage

  Scenario: Verify Email page navigation
    When User clicks Email item from More
    Then User is navigating to the Email page

  Scenario: Verify Campaigns page navigation
    When User clicks Campaigns item from More
    Then User is navigating to the Campaigns page

  Scenario: Verify Calls page navigation
    When User clicks Calls item from More
    Then User is navigating to the Calls page

  Scenario: Verify Meetings page navigation
    When User clicks Meetings item from More
    Then User is navigating to the Meetings page
# PDF -Templates,Reports,Knowledge Base,KB-Catogories,Email-Templates,Surveys

  Scenario: Verify PDF - Templates page navigation
    When User clicks PDF - Templates item from More
    Then User is navigating to the PDF - Templates page

  Scenario: Verify Reports page navigation
    When User clicks Reports item from More
    Then User is navigating to the Reports page

  Scenario: Verify Knowledge Base page navigation
    When User clicks Knowledge Base item from More
    Then User is navigating to the Knowledge Base page

      Scenario:Verify KB-Categories page navigation
     When User clicks KB-Categories item from More
     Then User is navigating to the KB-Categories page

     Scenario:Verify Email-Templates page navigation
     When User clicks Email-Templates item from More
     Then User is navigating to the Email-Templates page

     Scenario:Verify Surveys page navigation
     When User clicks Surveys item from More
     Then User is navigating to the Surveys page




