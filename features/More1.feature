@MoreModule

Feature:More module dropdown list functionality of suite8demo application

  As a user I want to verify the More module dropdown listfunctionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application

    Scenario:Verify More module dropdown list
        When the user clicks on More module from left navigation
        Then the user should see the list of items in dropdown

    Scenario:HomePage Navigation
     When User clicks Home item from More
     Then User is navigating to the HomePage

     Scenario:Verify Email page navigation
     When User clicks Email item from More
     Then User is navigating to the Email page

     Scenario:Verify Campaigns page navigation
     When User clicks Campaigns item from More
     Then User is navigating to the Campaigns page  

     Scenario:Verify Calls page navigation
     When User clicks Calls item from More
     Then User is navigating to the Calls page

     Scenario:Verify Meetings page navigation
     When User clicks Meetings item from More
     Then User is navigating to the Meetings page

     

    



             

