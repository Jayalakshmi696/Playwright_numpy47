@contacts

Feature: Contacts 

Scenario: Verify Contacts Module is displayed
Given User sucessfully logged in to the application
When User in Home page
Then User should see the 'Contacts module' in the navigation bar

Scenario: Verify Contacts dropdown menu options
Given User is on Home page
When Hover over the Contacts  menu
Then User should see 'Contacts module' dropdown list with the following options:
|Create Contact|
|Create Contact from vCard|
|Import Contacts|
|View Contacts|

Scenario: Open Create Contact page from dropdown
When  Hover over the Contacts dropdown menu
And User click on "Create Contact"
Then the Create Contact page should be displayed  

Scenario: Verify Contacts page is displayed 
Given User is on Home page
When User click on the 'Contacts module'
 Then the Contacts page should be displayed
  And the Contacts list should be visible
   
Scenario: Verify Contacts page columns
Given User is on the Contacts page
    When User open the Contacts module 
    Then the Contacts list should contain the following columns: 
     | Name | | Account Name | 
     | Email || Office Phone |
      | User | | Date Created |

Scenario: Sort contacts
Given User is on the Contacts page
When I click on a Contacts column header
Then the Contacts list should be sorted according to the selected column

Scenario: Navigate through Contacts pages
Given User is on the Contacts page
When multiple contacts are available 
And User click the Next page button 
Then the next page of contacts should be displayed


Scenario: Verify User able to Create a new contact
Given User is on the Contacts page
When User enters the required details in the Create Contact form
Then User should be able to create a new contact successfully

Scenario: Verify validation when mandatory fields are missing 
Given User is on the Create Contact page
When User leave the mandatory fields empty
Then validation messages should be displayed And the contact should not be created

Scenario: Verify User able to Cancel the Create Contact
Given User enters the required details in the Create Contact form
When User clicks the Cancel button
Then User should be redirected to the Contacts page without creating a new contact

Scenario: Open Create Contact from vCard
When  Hover over the Contacts dropdown menu
And User click on "Create Contact from vCard"
Then the Create Contact from vCard page should be displayed

Scenario: Create contact using a vCard
Given User is on the Step 1: Upload Import File page
When User uploads a valid vCard file
Then the contact should be created successfully

