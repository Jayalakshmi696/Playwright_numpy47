@More4module

Feature: more Module - View, Navigate and  Activities

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "more" module in the menu


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




