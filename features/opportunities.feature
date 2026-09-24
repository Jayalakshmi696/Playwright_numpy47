@OpportunitiesModule

Feature: Opportunities module functionality of suite8demo application

  As a user I want to verify the Opportunities module functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application



    @OpportunitiesMenu
    Scenario: Verify that Opportunities Menu is present in the Menu bar
    
   
    Then User should see Opportunities menu in the menu bar

    @OpportunitiesDropDownList
    Scenario: Verify that Opportunities Menu drop down list contents
      
      When User hovers over the Opportunities Menu
      Then Opportunities menu drop down list is displayed

      @CreateOpportunitiesPage
      Scenario: Verify components on the Create Opportunities page
        Given Opportunities menu drop-down list is displayed
        When User clicks on the Create Opportunities option in the Opportunities Menu
        Then User should see the correct components on the Create Opportunities page
        | Component | Expected Values                   |
        | PageTitle | create                            |
        | Buttons   | Save, Cancel                      |
        | Tabs      | Basic , other  |

        @CreateOpportunitiesFunctionality
        Scenario Outline: Verify that user is able to create a new Opportunity
          Given User is on the Create Opportunities page
          When User enters Opportunities <Data> and clicks the <Action> button
          Then User should see create Opportunities <Result>
          Examples:
          | Data         | Action | Result                                 |
          | Valid Data   | Save   | Detailed view page of new Opportunity  |
          | No Data      | Save   | Required field error messages         | 
         | Valid Data   | Cancel | Confirmation dialog appears            |

      @ViewOpportunitiesPage
      Scenario: Verify components on the View Opportunities page
        Given Opportunities menu drop-down list is displayed
        When User clicks on the "View Opportunities" option in the Opportunities Menu
        Then User should see the correct components on the Opportunities dashboard page
        | Component       | Expected Values                                                                                                         |
        | PageTitle       | Opportunities                                                                                                                 |
        | Buttons         | Filter, Insights                                                                                                        |
        | Sections        | Records, QuickCharts                                                                                                    |
        | Header Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |
        | Footer Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |

      @ImportOpportunitiesPage
      Scenario: Verify that user is on the Import page
        Given User has opened Opportunities menu
        When User clicks the Import Opportunities option
        Then User should see the import Opportunities page with correct components
        | Component       | Expected Values                                                         |
        | PageTitle       | UploadImport File                                                       |
        | Buttons         | Choose File, Next                                                       |
        | Label           | No File Chosen                                                          | 
        |HyperLink        | Download Import File Template                                           |
        |Radio buttons    | Create New Records only, Create New Records and Update Existing Records |

        @ImportFunctionality
        Scenario Outline: Verify the functionality of importing Opportunities
          Given User is on Upload Import File page
          When User uploads Opportunities<Input File> and clicks Next button
          Then User should see Import Opportunities <Result>
          Examples:
          | Input File   |  Result                            |
          | Valid File   |  Detailed view page of new Opportunity   |
          | No File      |  Select a Vcard file Alert appears     |
          | InValid File |  Required field error messages     |
      
      
        