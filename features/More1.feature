@MoreModule1
Feature: More module dropdown list functionality of suite8demo application
  As a user I want to verify the More module dropdown listfunctionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application

@Moredropdown
  Scenario: Verify More module dropdown list
    When the user clicks on More module from left navigation
    Then the user should see the list of fallowing items in dropdown
    | Home      |  
    | Emails    |
    | Campaigns |
    | Calls     |
    | Meetings  |

@MoreHome
  Scenario: HomePage Navigation
    When User clicks Home item from More
    Then User is navigating to the HomePage
@MoreEmail
  Scenario: Verify Email page navigation
    When User clicks Email item from More
    Then User is navigating to the Email page
@MoreCampaigns
  Scenario: Verify Campaigns page navigation
    When User clicks Campaigns item from More
    Then User is navigating to the Campaigns page
@MoreCalls
  Scenario: Verify Calls page navigation
    When User clicks Calls item from More
    Then User is navigating to the Calls page
@MoreMeetings
  Scenario: Verify Meetings page navigation
    When User clicks Meetings item from More
    Then User is navigating to the Meetings page


