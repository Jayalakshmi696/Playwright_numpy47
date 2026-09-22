
@LeadsModule
Feature:Testing Leads module in SuiteCRM application
Background:
Given User launches the application

  @LeadsMenu 
  Scenario: Verify that Leads Menu is present in the Menu bar
    Given User successfully logged in to the application
    When User is on the Home dashboard page
    Then User should see Leads menu in the Menu bar 

    @LeadsDropDownList
    Scenario: Verify that Leads Menu drop down list contents
      Given User is on the Home dashboard page
      When User hovers over the Leads Menu
      Then Leads menu drop down list is displayed

      @CreateLeadPage
      Scenario: Verify components on the Create Lead page
        Given Leads menu drop-down list is displayed
        When User clicks on the Create Lead option in the Leads Menu
        Then User should see the correct components on the Create Lead page
        | Component | Expected Values                   |
        | PageTitle | create                            |
        | Buttons   | Save, Cancel                      |
        | Tabs      | Overview, MoreInformation, other  |

        @CreateLeadFunctionality
        Scenario Outline: Verify that user is able to create a new Lead
          Given User is on the Create Lead page
          When User enters Leads <Data> and clicks the <Action> button
          Then User should see Create Leads <Result>
          Examples:
          | Data           | Action | Result                                 |
          | Valid Data1   | Save   | Detailed view page of new Lead         |
          | No Data       | Save   | Required field error messages          |
          | Valid Data2   | Cancel | Confirmation dialog appears            |

      @ViewLeadsPage
      Scenario: Verify components on the View Leads page
        Given Leads menu drop-down list is displayed
        When User clicks on the View Leads option in the Leads Menu
        Then User should see the correct components on the Leads dashboard page
        | Component       | Expected Values                                                                                                                       |
        | PageTitle       | Leads                                                                                                                                 |
        | Buttons         | Filter, Insights                                                                                                                      |
        | Sections        | Records, QuickCharts                                                                                                                  |
        | Header Contents | SelectDropDown, BulkActionsDropDown, ColumnButton, NextPageButton, PreviousPageButton, EndPageButton, BeginingPageButton, PageNumber  |
        | Footer Contents | SelectDropDown, BulkActionsDropDown, columnButton, NextPageButton, PreviousPageButton, EndPageButton, BeginingPageButton, PageNumber  |

      @VCardpage
      Scenario: Verify that user is on the vCard page
        Given Leads menu drop-down list is displayed
        When User clicks on Create Lead from vCard option
        Then User should see the import vCard page with correct components
        | Component       | Expected Values           |
        | PageTitle       | Import VCard              |
        | Buttons         | Choose File, Import VCard |
        | Label           | Information text          | 

        @CreateLeadFromVCard
        Scenario Outline: Verify the functionality of creating Lead from vCard
          Given User is on import vCard page
          When User uploads <Input File> and clicks Import Vcard button
          Then User should see the Import vCard <Result>
          Examples:
          | Input File   |  Result                            |
          | Valid File   |  Detailed view page of new Lead    |
          | No File      |  Select a Vcard file Alert appears |
          | InValid File |  Required field error messages     |
      
      @ImportLeadsPage 
      Scenario: Verify that user is on Import Leads Page
        Given Leads menu is visible
        When User clicks on Import Leads option in Leads Menu
        Then User should see the import Leads page with correct components
          | Component       | Expected Values                                                         |
          | PageTitle       | UploadImport File                                                       |
          | Buttons         | Choose File, Next                                                       |
          | Label           | No File Chosen                                                          | 
          |HyperLink        | Download Import File Template                                           |
          |Radio buttons    | Create New Records only, Create New Records and Update Existing Records |

        @ImportLeads
        Scenario Outline: Verify the functionality of importing Leads
          Given User is on Import Leads page 
          When User uploads Leads <Input File> and clicks Next button
          Then User should see Import Leads <Result>
          Examples:
          | Input File   |  Result                                 |
          | Valid File   |  Leads dashboard page                   |
          | No File      |  Required field error messages          |
          | InValid File |  Invalid Import File name message       |


