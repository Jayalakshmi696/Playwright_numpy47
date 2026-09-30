
@ContactsModule
Feature:Contacts module functionality of suite8demo application

  As a user I want to verify the Contacts module functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application

   @ContactsMenu

   Scenario: Verify that Contacts Menu is present in the Menu bar
    Then User should see Contacts menu in the Menu bar 

    @ContactsDropDownList
    Scenario: Verify that Contacts Menu drop down list contents
      
      When User hovers over the Contacts Menu
      Then Contacts menu drop down list is displayed

      @CreateContactPage
      Scenario: Verify components on the Create Contact page
        Given Contacts menu drop-down list is displayed
        When User clicks on the Create Contact option in the Contacts Menu
        Then User should see the correct components on the Create Contact page
        | Component | Expected Values                   |
        | PageTitle | create                            |
        | Buttons   | Save, Cancel                      |
        | Tabs      | Overview, MoreInformation, other  |

        @CreateContactFunctionality
          Scenario: Verify that user is able to create new Contacts
           Given User successfully logged in to the application
            When User enters Contacts Valid Data and clicks the Save button
            Then User should see Create Contacts Detailed view page of new Contacts
      @ViewContactsPage
      Scenario: Verify components on the View Contacts page
        Given Contacts menu drop-down list is displayed
        When User clicks on the View Contacts option in the Contacts Menu
        Then User should see the correct components on the Contacts dashboard page
        | Component       | Expected Values                                                                                                         |
        | PageTitle       | Contacts                                                                                                                  |
        | Buttons         | Filter                                                                                                       |
        | Sections        | Records                                                                                                   |
        | Header Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |
        | Footer Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |

      @VCardpage
      Scenario: Verify that user is on the vCard page
        Given Contacts menu drop-down list is displayed
        When User clicks on Create Contact From vCard option
        Then User should see the import vCard page with correct components
        | Component       | Expected Values           |
        | PageTitle       | Import VCard              |
        | Buttons         | Choose File, Import VCard |
        | Label           | No File Chosen            | 

        @CreateContactFromVCard
        Scenario Outline: Verify the functionality of creating Contact from vCard
          Given User is on import vCard page
          When User uploads "<InputFile>" and clicks Import Vcard button
          Then User should see the Import vCard "<Result>"
          Examples:
          | InputFile   |  Result                            |
          | ValidFile   |  Detailed view page of new Contact    |
          | NoFile      |  Select a Vcard file Alert appears |
          | InValidFile |  Required field error messages     |
      
      @ImportContactsPage 
      Scenario: Verify that user is on Import Contacts Page
        Given Contacts menu is visible
        When User clicks on Import Contacts option in Contacts Menu
        Then User should see the import Contacts   page with correct components
          | Component       | Expected Values                                                        |
          | PageTitle       | UploadImport File                                                       |
          | Buttons         | Choose File, Next                                                       |
          | Label           | No File Chosen                                                          | 
          |HyperLink        | Download Import File Template                                           |
          |Radio buttons    | Create New Records only, Create New Records and Update Existing Records |

        @ImportContacts
        Scenario Outline: Verify the functionality of importing Contacts
          Given User is on Import Contacts page 
          When User uploads Contacts "<InputFile>" and clicks Next button
          Then User should see Import Contacts "<Result>"
          Examples:
          | InputFile   |  Result                                 |
          | ValidFile   |  Contacts dashboard page                   |
          | NoFile      |  Required field error messages          |
          | InValidFile |  Invalid Import File name message       |  
       