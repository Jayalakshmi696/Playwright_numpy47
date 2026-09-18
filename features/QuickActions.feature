@QuickActionsModule

Feature: Quick Actions module functionality of suite8demo application

  As a user I want to verify  suite8demo application modules navigation from QuickActions

    Background:
        Given User successfully logged into the suite8demo application
    
        Scenario:Verify Quick Actions module dropdown list
            When the user clicks plus icon on right side of application
            Then the user should see the list of items in dropdown
    
        Scenario:Verify Create Account page navigation from Quick Actions
         When User clicks Create Account item from Quick Actions
         Then User is navigating to the Create Account page
    
         Scenario:Verify Create Contact page navigation from Quick Actions
         When User clicks Create Contact item from Quick Actions
         Then User is navigating to the Create Contact page
    
         Scenario:Verify Create Opportunity page navigation from Quick Actions
         When User clicks Create Opportunity item from Quick Actions
         Then User is navigating to the Create Opportunity page 

        Scenario:Verify Create Lead page navigation from Quick Actions
         When User clicks Create Lead item from Quick Actions
         Then User is navigating to the Create Lead page

        Scenario:Verify Create Quote page navigation from Quick Actions
         When User clicks Create Quote item from Quick Actions
         Then User is navigating to the Create Quote page

         Scenario:Verify Schedule Meeting page navigation from Quick Actions
         When User clicks Schedule Meeting item from Quick Actions
         Then User is navigating to the Schedule Meeting page 

         Scenario:Verify Schedule Call page navigation from Quick Actions
         When User clicks Schedule Call item from Quick Actions
         Then User is navigating to the Schedule Call page

         