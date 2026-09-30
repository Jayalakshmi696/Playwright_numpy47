@QuotesModule
Feature: Quotes module functionality of suite8demo application

  As a user I want to verify the Quotes module functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application
  
    @QuotesDropDownList
    Scenario: Verify that Quotes Menu drop down list contents
      
      When User hovers over the Quotes Menu
      Then Quotes menu drop down list is displayed

      @CreateQuotePage
      Scenario: Verify components on the Create Quote page
        Given Quotes menu drop-down list is displayed
        When User clicks on the Create Quote option in the Quotes Menu
        Then User should see the correct components on the Create Quote page
        | Component | ExpectedValues                                     |
        | PageTitle | QuoteCreate                                         |
        | Buttons   | QuoteSave, QuoteCancel                              |
        | Tabs      | QuoteOverview, QuoteAddrInformation, LineItems      |

        @CreateQuoteFunctionality
        Scenario Outline: Verify creating Quotes when user clicks <Action> with <Data>
          Given User is on the Create Quote page
          When User enters Quotes "<Data>" and clicks the "<Action>" button
          Then User should see create Quotes "<Result>"
          Examples:
          | Data         | Action      | Result                                         |
          | quoteData1   | QuoteSave   | Detailed view page of Created new Quote        |
          | noData       | QuoteSave   | Required field error messages for Create Quote |
          | quoteData2   | QuoteCancel | Confirmation dialog appears for Create Quote   |

      @ViewQuotesPage
      Scenario: Verify components on the View Quotes page
        Given Quotes menu drop-down list is displayed
        When User clicks on the View Quotes option in the Quotes Menu
        Then User should see the correct components on the Quotes dashboard page
        | Component       | ExpectedValues                                                                                                         |
        | PageTitle       | ViewQuotes                                                                                                              |
        | Buttons         | QuoteFilter                                                                                                             |
        | Sections        | QuoteRecords                                                                                          |
        | Header Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |
        | Footer Contents | SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber  |

      @ImportQuotesPageComponents
      Scenario: Verify that user is on the Import Quotes page
        Given Quotes menu drop-down list is displayed
        When User clicks on Import option in Quotes Menu
        Then User should see the import Quotes page with correct components
        | Component       | ExpectedValues                                 |
        | PageTitle       | UploadImportQuotesFile                         |
        | Buttons         | QuoteChooseFile, QuoteNext                     |
        | Label           | InformationTextImportQuotes                    | 
        |HyperLink        | DownloadImportFileTemplateQuotes               |
        |Radiobuttons     | RadioButtonQuotes1, RadioButtonQuotes2         |

        @ImportAndCreateQuotes
        Scenario Outline: Verify importing Quotes using <InputFile>
          Given User is on Upload Import File page
          When User uploads Quotes "<InputFile>" and clicks Next button
          Then User should see Import Quotes "<Result>"
          Examples:
          | InputFile       |  Result                                                     |
          | ValidQuoteFile  |  Quote Dashboard page                                       |
          | NoFile          |  Required field error messages for Import Quotes            |
          | InValidFile     |  Import Quote Error Popup alert appears                     |
      
      @ImportLineItemsPage 
      Scenario: Verify Import Line Items Page
        Given Quotes menu drop-down list is displayed
        When User clicks on Import Line Items option in Quotes Menu
        Then User should see the import Line Items page with correct components
        | Component       | ExpectedValues                                 |
        | PageTitle       | UploadImportLineItemsFile                      |
        | Buttons         | LineItemsChooseFile, LineItemsNext             |
        | Label           | InformationTextImportLineItems                 | 
        |HyperLink        | DownloadImportFileTemplateLineItems            |
        |Radiobuttons     | RadioButtonLineItems1, RadioButtonLineItems2   |

        @ImportandCreateLineItems
        Scenario Outline: Verify importing Line Items using <InputFile>
          Given User is on Import Line Items page 
          When User uploads Line Items "<Input File>" and clicks Next button
          Then User should see Import Line Items "<Result>"
          Examples:
          | Input File          |  Result                                        |
          | ValidLineItemFile   |  Line Items dashboard page                     |
          | NoFile              |  Required field error messages for Line Items  |
          | InValidFile         |  Import Line Items Error Popup alert appears   |

        @RecentlyViewedMenuInQuotes
        Scenario: Verify the availability recently viewed item in Quotes menu
          Given User created a quote
          When User hovers over the Quotes menu
          Then User should see the option Recently viewed in the Quotes menu

          @RecentlyViewedRecordInQuotes
          Scenario: Verify the availability recently viewed Quotes record 
            Given User created a quote
            When User hovers over the Recently viewed option in the quotes menu
            Then User should see the name of the recently viewed Quote record in its drop down 

            @OpenRecentlyViewedRecordInQuotes
            Scenario: Verify opening recently viewed Quotes record 
              Given User created a quote
              When User clicks and opens the recently viewed Quotes record from the Quotes menu
              Then User should see detailed view page of the recently viewed Quotes record


