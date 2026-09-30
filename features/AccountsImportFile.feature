@AccountsImportFile

Feature:Accounts module import file functionality of suite8demo application

  As a user I want to verify the Accounts module import file functionality of 
  suite8demo application 

  Background:
    Given User successfully logged into the suite8demo application

@CreateAccountByImportFile
    Scenario:verify import file of CreateAccount
    Given User is on the Import Accounts page
    When User clicks the Choose File button and uploads the account file
    Then User should see the uploaded file name

@ImportnowofAccountsfile
Scenario:User imports account file data using Import Now
Given User uploads the file on the Import Accounts page
When User selects creates new records and clicks import now by fallowing steps
Then user should view the imported results

@CreateNewrecordsandUpdateexisting
Scenario:Verify newrecords and import existing records functionality
Given User uploads the file in the Import file page
When User selects createnew records,update existing records and clicks next
Then User should get a dialog box with a message

@UndoImportofAccountsImport
Scenario:Verify undoimport functionality of importedaccounts
Given User is in View Import Results Page
When User clicks undoImport button
Then User can navigate to the UndoImport page with message

