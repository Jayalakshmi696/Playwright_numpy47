
@LeadsMenu
Feature:Testing Leads module in SuiteCRM application

  @LeadsMenu @ragaTest
  Scenario: Verify that Leads Menu is present in the Menu bar
    Given User successfully Logged in to the application
    When User is on the Home page
    Then User should see 'Leads' menu in the Menu

@MainDropDownList @ragaTest
Scenario: Verify that Leads Menu drop down list contents
Given User is on the Home page
When Hover over the Leads Menu
Then User should see 'Leads Module' drop down list contents with the following options
  | Create Lead |
  | Create Lead  From vCard |
  | View Leads |
  | Import Lead |

@CreateLeadPage @ragaTest
Scenario: Verify that Create Lead page
Given Leads menu drop down list is displayed
When user clicks on Create Lead option in Leads Menu
Then User should be navigated to Create Lead page

@SuccessfulCreateLead @ragaTest
Scenario: Verify that user is able to create a new Lead
Given User is on the Create Lead page
When User enters the required details in the Create Lead form
Then User should be able to create a new Lead successfully

@CreateLeadErrorMessage1 @ragaTest
Scenario: Verify that user is not able to create a new Lead without entering the required details
Given User is on the Create Lead page
When User clicks on Save button without entering the required details in the Create Lead form
Then User should see the error message for the required fields

@CancelCreateLead @ragaTest
Scenario: Verify that user is able to cancel the Create Lead operation
Given User enters the required details in the Create Lead form
When User clicks on Cancel button in the Create Lead form
Then User should be navigated back to the Leads module page after confirming


