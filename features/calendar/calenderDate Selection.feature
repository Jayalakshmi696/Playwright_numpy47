@calendar
Feature: Calender date Selection icon View

  Background:
    Given the user is logged into the SuitCRM
    And the user navigates to the "Calendar" module in the menu

  @functional
  Scenario: veryfying the select Date popup on clicking the calendar selection icon
    Given the user is on the Calendar page
    When user click on the calender date selection icon
    Then popup Window is displayed as an overlay on top of the calendar page  
   
  @functional
  Scenario: User checking the "Today "button
    When user clicks the "today "button
    Then pop up window will  closes and todays calender in selected view

  @functional
  Scenario: User checking the "navigation "button
    When user clicks prevs- next navigation
    Then window changes  corresoponding" month", "year" 
       
  @functional
  Scenario: Closing the tab does not affect the page state
    When user click "close" button without any action
    Then the page session remains active without changes

  @nonFunctional
  Scenario: Verify the calendar calender date view are displayed correctley
    Given the user navigates to the Dat e selection icon page
    When user open the Calender Date Selection icon  page
    Then The calender Icon open within acceptable time


  @nonFunctional
  Scenario: The calender Icon display consistently across browser
    Given user navigate to the calender settings
    When Page view on chrome,firfox, and safari
    Then calender setting should render across all browsers
