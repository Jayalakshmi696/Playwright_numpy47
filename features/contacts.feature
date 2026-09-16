@contacts

Feature: Contacts 

Scenario: Verify Contacts dropdown menu options
When I touch on the Contacts dropdown menu
Then the Contacts dropdown menu should be displayed
And the "Create Contact" option should be displayed
And the "Create Contact from vCard" option should be displayed
And the "Import Contacts" option should be displayed
And the "View Contacts" option should be displayed

Scenario: Open Create Contact page from dropdown
When I touch on the Contacts dropdown menu
And I click on "Create Contact"
Then the Create Contact page should be displayed  

Scenario: Create a contact with information
When I touch on the Contacts dropdown menu
And I click on "Create Contact"
And I enter a valid first name
And I enter a valid last name
And I enter a valid email address
And I click the Save button
Then the new contact should be created successfully

Scenario: Cancel Create Contact
When I touch on the Contacts dropdown menu
And I click on "Create Contact"
And I enter contact information
And I click the Cancel button
Then the contact should not be created
And I should be returned to the Contacts page