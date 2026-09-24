@MoreModuleSection2
Feature:Testing 2nd section of modules listed on More menu in suite8demo application
Background:  
Given User successfully logged into the suite8demo application



    @MoreMenu 
    Scenario: Verify that More Menu is present in the Menu bar
        
        
        Then User should see More menu in the menu bar
        
        @ViewLTargetListPage
        Scenario: Verify that View Tasks page
            Given More menu drop down list is displayed
            When User clicks on View Tasks option in More Menu
            Then User should be navigated to Tasks dashboard page

        @ViewNotesPage
        Scenario: Verify that View Notes page
            Given More menu drop down list is displayed
            When User clicks on View Notes option in More Menu
            Then User should be navigated to Notes dashboard page

        @ViewInvoicesPage
        Scenario: Verify that View Invoices page
            Given More menu drop down list is displayed
            When User clicks on View Invoices option in More Menu
            Then User should be navigated to Invoices dashboard page

        @ViewContractsPage
        Scenario: Verify that View Contracts page
            Given More menu drop down list is displayed
            When User clicks on View Contracts option in More Menu
            Then User should be navigated to Contracts dashboard page

        @ViewCasesPage
        Scenario: Verify that View Cases page
            Given More menu drop down list is displayed
            When User clicks on View Cases option in More Menu
            Then User should be navigated to Cases dashboard page

        @ViewTargetsPage
        Scenario: Verify that View Targets page
            Given More menu drop down list is displayed
            When User clicks on View Targets option in More Menu
            Then User should be navigated to Targets dashboard page