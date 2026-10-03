
@LeadsModule
Feature: Leads module functionality of suite8demo application

  As a user I want to verify the Leads module functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application
  
    @LeadsDropDownList
    Scenario: Verify that Leads Menu drop down list contents
      
      When User hovers over the Leads Menu
      Then Leads menu drop down list is displayed

      @CreateLeadPage
      Scenario: Verify components on the Create Lead page
        Given Leads menu drop-down list is displayed
        When User clicks on the Create Lead option in the Leads Menu
        Then User should see the correct components on the Create Lead page
        | Component | ExpectedValues                                |
        | PageTitle | LeadCreate                                    |
        | Buttons   | LeadSave, LeadCancel                          |
        | Tabs      | LeadOverview, LeadMoreInformation, LeadOther  |

        @CreateLeadFunctionality
        Scenario Outline: Verify creating a lead when user clicks <Action> with <Data>
          Given User is on the Create Lead page
          When User enters Leads "<Data>" and clicks the "<Action>" button
          Then User should see Create Leads "<Result>"
          Examples:
          | Data        | Action     | Result                                       |
          | leadData1   | LeadSave   | Detailed view page of creating Leads         |
          | noData      | LeadSave   | Create Lead Required field error messages    |
          | leadData2   | LeadCancel | Create Lead Confirmation dialog appears      |

      @ViewLeadsPage
      Scenario: Verify components on the View Leads page
        Given Leads menu drop-down list is displayed
        When User clicks on the View Leads option in the Leads Menu
        Then User should see the correct components on the Leads dashboard page
        | Component       | ExpectedValues                                                                                                                        |
        | PageTitle       | ViewLeads                                                                                                                             |
        | Buttons         | LeadFilter, LeadInsights                                                                                                              |
        | Sections        | Records, QuickCharts                                                                                                                  |
        | Header Contents | SelectDropDown, BulkActionsDropDown, ColumnButton, NextPageButton, PreviousPageButton, EndPageButton, BeginingPageButton, PageNumber  |
        | Footer Contents | SelectDropDown, BulkActionsDropDown, columnButton, NextPageButton, PreviousPageButton, EndPageButton, BeginingPageButton, PageNumber  |

      @LeadsVCardpageComponents
      Scenario: Verify that user is on the vCard page
        Given Leads menu drop-down list is displayed
        When User clicks on Create Lead from vCard option
        Then User should see the import vCard page with correct components for Leads module
        | Component       | ExpectedValues                |
        | PageTitle       | ImportVCard                   |
        | Buttons         | VcardChooseFile, ImportVCard  |
        | Label           | InformationTextVcard          | 

        @CreateLeadFromVCard
        Scenario Outline: Verify importing a lead via vCard using <InputFile>
          Given User is on import vCard page for Leads module
          When User uploads "<InputFile>" and clicks Import Vcard button for Leads module
          Then User should see the Import vCard "<Result>" for Leads module
          Examples:
          | InputFile        |  Result                                    |
          | ValidVcardFile   |  Detailed view page of new Lead via Vcard  |
          | NoFile           |  Select a Vcard file Alert appears         |
          | InValidFile      |  Vcard Required field error messages       |
      
      @ImportLeadsPageComponents 
      Scenario: Verify that user is on Import Leads Page
        Given Leads menu drop-down list is displayed
        When User clicks on Import Leads option in Leads Menu
        Then User should see the import Leads page with correct components
        | Component       | ExpectedValues               |
        | PageTitle       | UploadImportFile             |
        | Buttons         | ImportChooseFile, LeadNext   |
        | Label           | InformationTextImportLead    | 
        |HyperLink        | DownloadImportFileTemplate   |
        |Radiobuttons     | RadioButton1, RadioButton2   |

        @ImportAndCreateLeads
        Scenario Outline: Verify importing Leads using <InputFile>
          Given User is on Import Leads page 
          When User uploads Leads "<InputFile>" and clicks Next button
          Then User should see Import Leads "<Result>"
          Examples:
          | InputFile     |  Result                                     |
          | ValidLeadFile |  Detailed view page after importing Leads   |
          | NoFile        |  Import Lead Required field error messages  |
          | InValidFile   |  Import Lead Error Popup alert appears      |

      @RecentlyViewedMenuInLeads
      Scenario: Verify the availability recently viewed item in Leads menu
        Given User opened and viewed a lead record
        When User hovers over the Leads menu
        Then User should see the option Recently viewed in the Leads menu

        @RecentlyViewedRecordInLeads
        Scenario: Verify the availability recently viewed Lead record 
          Given User opened and viewed a lead record
          When User hovers over the Recently viewed option
          Then User should see the name of the recently viewed Lead record in its drop down

          @OpenRecentlyViewedRecordInLeads
          Scenario: Verify opening recently viewed Lead record 
            Given User opened and viewed a lead record
            When User clicks and opens the recently viewed Lead record from the Leads menu
            Then User should see detailed view page of the recently viewed Lead record

    


