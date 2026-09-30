@QuotesModule
Feature:Testing Quotes module in SuiteCRM application
Background: 
Given User launches the application

  @QuotesMenu 
  Scenario: Verify that Quotes Menu is present in the Menu bar
    Given User successfully logged in to the application
    When User is on the Home dashboard page
    Then User should see Quotes menu in the menu bar

    @QuotesDropDownList
    Scenario: Verify that Quotes Menu drop down list contents
      Given User is on the Home dashboard page
      When User hovers over the Quotes Menu
      Then Quotes menu drop down list is displayed

      @CreateQuotePage
      Scenario: Verify components on the Create Quote page
        Given Quotes menu drop-down list is displayed
        When User clicks on the Create Quote option in the Quotes Menu
        Then User should see the correct components on the Create Quote page
        | Component | Expected Values                   |
        | PageTitle | create                            |
        | Buttons   | Save, Cancel                      |
        | Tabs      | Overview, MoreInformation, other  |

        @CreateQuoteFunctionality
        Scenario Outline: Verify that user is able to create a new Quote
          Given User is on the Create Quote page
          When User enters Quotes <Data> and clicks the <Action> button
          Then User should see create Quotes <Result>
          Examples:
          | Data         | Action | Result                                 |
          | Valid Data   | Save   | Detailed view page of new Quote        |
          | No Data      | Save   | Required field error messages          |
          | Valid Data   | Cancel | Confirmation dialog appears            |

      @ViewQuotesPage
      Scenario: Verify components on the View Quotes page
        Given Quotes menu drop-down list is displayed
        When User clicks on the "View Quotes" option in the Quotes Menu
        Then User should see the correct components on the Quotes dashboard page
        | Component       | Expected Values                                                                                                         |
        | PageTitle       | Quotes                                                                                                                  |
        | Buttons         | Filter, Insights                                                                                                        |
        | Sections        | Records, QuickCharts                                                                                                    |
        | Header Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |
        | Footer Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |

      @ImportPage
      Scenario: Verify that user is on the Import page
        Given User has opened Quotes menu
        When User clicks the Import option
        Then User should see the import page with correct components
        | Component       | Expected Values                                                         |
        | PageTitle       | UploadImport File                                                       |
        | Buttons         | Choose File, Next                                                       |
        | Label           | No File Chosen                                                          | 
        |HyperLink        | Download Import File Template                                           |
        |Radio buttons    | Create New Records only, Create New Records and Update Existing Records |

        @ImportFunctionality
        Scenario Outline: Verify the functionality of importing Quotes
          Given User is on Upload Import File page
          When User uploads Quotes<Input File> and clicks Next button
          Then User should see Import Quotes <Result>
          Examples:
          | Input File   |  Result                            |
          | Valid File   |  Detailed view page of new Quote   |
          | No File      |  Select a Vcard file Alert appears |
          | InValid File |  Required field error messages     |
      
      @ImportLineItemsPage 
      Scenario: Verify Import Line Items Page
        Given Quotes menu is visible
        When User clicks on Import Line Items option in Quotes Menu
        Then User should see the import Line Items page with correct components
        | Component       | Expected Values                                                         |
        | PageTitle       | UploadImport File                                                       |
        | Buttons         | Choose File, Next                                                       |
        | Label           | No File Chosen                                                          | 
        |HyperLink        | Download Import File Template                                           |
        |Radio buttons    | Create New Records only, Create New Records and Update Existing Records |

        @ImportLineItems
        Scenario Outline: Verify the functionality of importing Line Items
          Given User is on Import Line Items page 
          When User uploads Line Items<Input File> and clicks Next button
          Then User should see Import Line Items <Result>
          Examples:
          | Input File   |  Result                                 |
          | Valid File   |  Line Items dashboard page              |
          | No File      |  Required field error messages          |
          | InValid File |  Invalid Import File name message       |

