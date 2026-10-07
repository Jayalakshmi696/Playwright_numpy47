@MoreModuleSection3
Feature:Testing 3rd section of modules listed on More menu in suite8demo application

  As a user I want to verify the 3rd set of modules listed in More menu of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application

        @More3DropDownList
        Scenario: Verify the more Menu drop down list contents
      
        When User hovers over the More Menu
        Then User should see the displayed More menu drop down list
                      
            @ViewLTargetListPage
            Scenario: Verify that View Target List page
                Given More menu drop down list is displayed
                When User clicks on View Target List option in More Menu
                Then User should be navigated to Target List dashboard page

            @ViewProjectsPage
            Scenario: Verify that View Projects page
                Given More menu drop down list is displayed
                When User clicks on View Projects option in More Menu
                Then User should be navigated to Projects dashboard page

            @ViewProjectsTemplatesPage
            Scenario: Verify that View Projects Templates page
                Given More menu drop down list is displayed
                When User clicks on View Projects Templates option in More Menu
                Then User should be navigated to Projects Templates dashboard page

            @ViewEventsPage
            Scenario: Verify that View Events page
                Given More menu drop down list is displayed
                When User clicks on View Events option in More Menu
                Then User should be navigated to Events dashboard page

            @ViewLocationsPage
            Scenario: Verify that View Locations page
                Given More menu drop down list is displayed
                When User clicks on View Locations option in More Menu
                Then User should be navigated to Locations dashboard page

            @ViewProductsPage
            Scenario: Verify that View Products page
                Given More menu drop down list is displayed
                When User clicks on View Products option in More Menu
                Then User should be navigated to Products dashboard page