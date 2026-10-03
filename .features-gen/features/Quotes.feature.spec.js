// Generated from: features\Quotes.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('Quotes module functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify that Quotes Menu drop down list contents', { tag: ['@QuotesModule', '@QuotesDropDownList'] }, async ({ When, Then, quotesPage }) => { 
    await When('User hovers over the Quotes Menu', null, { quotesPage }); 
    await Then('Quotes menu drop down list is displayed', null, { quotesPage }); 
  });

  test('Verify components on the Create Quote page', { tag: ['@QuotesModule', '@CreateQuotePage'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('Quotes menu drop-down list is displayed', null, { quotesPage }); 
    await When('User clicks on the Create Quote option in the Quotes Menu', null, { quotesPage }); 
    await Then('User should see the correct components on the Create Quote page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"QuoteCreate"}]},{"cells":[{"value":"Buttons"},{"value":"QuoteSave, QuoteCancel"}]},{"cells":[{"value":"Tabs"},{"value":"QuoteOverview, QuoteAddrInformation, LineItems"}]}]}}, { quotesPage }); 
  });

  test.describe('Verify creating Quotes when user clicks <Action> with <Data>', () => {

    test('Verify creating Quotes when user clicks QuoteSave with quoteData1', { tag: ['@QuotesModule', '@CreateQuoteFunctionality'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on the Create Quote page', null, { quotesPage }); 
      await When('User enters Quotes "quoteData1" and clicks the "QuoteSave" button', null, { quotesPage }); 
      await Then('User should see create Quotes "Detailed view page of Created new Quote"', null, { quotesPage }); 
    });

    test('Verify creating Quotes when user clicks QuoteSave with noData', { tag: ['@QuotesModule', '@CreateQuoteFunctionality'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on the Create Quote page', null, { quotesPage }); 
      await When('User enters Quotes "noData" and clicks the "QuoteSave" button', null, { quotesPage }); 
      await Then('User should see create Quotes "Required field error messages for Create Quote"', null, { quotesPage }); 
    });

    test('Verify creating Quotes when user clicks QuoteCancel with quoteData2', { tag: ['@QuotesModule', '@CreateQuoteFunctionality'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on the Create Quote page', null, { quotesPage }); 
      await When('User enters Quotes "quoteData2" and clicks the "QuoteCancel" button', null, { quotesPage }); 
      await Then('User should see create Quotes "Confirmation dialog appears for Create Quote"', null, { quotesPage }); 
    });

  });

  test('Verify components on the View Quotes page', { tag: ['@QuotesModule', '@ViewQuotesPage'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('Quotes menu drop-down list is displayed', null, { quotesPage }); 
    await When('User clicks on the View Quotes option in the Quotes Menu', null, { quotesPage }); 
    await Then('User should see the correct components on the Quotes dashboard page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"ViewQuotes"}]},{"cells":[{"value":"Buttons"},{"value":"QuoteFilter"}]},{"cells":[{"value":"Sections"},{"value":"QuoteRecords"}]},{"cells":[{"value":"Header Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]},{"cells":[{"value":"Footer Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]}]}}, { quotesPage }); 
  });

  test('Verify that user is on the Import Quotes page', { tag: ['@QuotesModule', '@ImportQuotesPageComponents'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('Quotes menu drop-down list is displayed', null, { quotesPage }); 
    await When('User clicks on Import option in Quotes Menu', null, { quotesPage }); 
    await Then('User should see the import Quotes page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImportQuotesFile"}]},{"cells":[{"value":"Buttons"},{"value":"QuoteChooseFile, QuoteNext"}]},{"cells":[{"value":"Label"},{"value":"InformationTextImportQuotes"}]},{"cells":[{"value":"HyperLink"},{"value":"DownloadImportFileTemplateQuotes"}]},{"cells":[{"value":"Radiobuttons"},{"value":"RadioButtonQuotes1, RadioButtonQuotes2"}]}]}}, { quotesPage }); 
  });

  test.describe('Verify importing Quotes using <InputFile>', () => {

    test('Verify importing Quotes using ValidQuoteFile', { tag: ['@QuotesModule', '@sequential', '@ImportAndCreateQuotes'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on Upload Import File page', null, { quotesPage }); 
      await When('User uploads Quotes "ValidQuoteFile" and clicks Next button', null, { quotesPage }); 
      await Then('User should see Import Quotes "Quote Dashboard page"', null, { quotesPage }); 
    });

    test('Verify importing Quotes using NoFile', { tag: ['@QuotesModule', '@sequential', '@ImportAndCreateQuotes'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on Upload Import File page', null, { quotesPage }); 
      await When('User uploads Quotes "NoFile" and clicks Next button', null, { quotesPage }); 
      await Then('User should see Import Quotes "Required field error messages for Import Quotes"', null, { quotesPage }); 
    });

    test('Verify importing Quotes using InValidFile', { tag: ['@QuotesModule', '@sequential', '@ImportAndCreateQuotes'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on Upload Import File page', null, { quotesPage }); 
      await When('User uploads Quotes "InValidFile" and clicks Next button', null, { quotesPage }); 
      await Then('User should see Import Quotes "Import Quote Error Popup alert appears"', null, { quotesPage }); 
    });

  });

  test('Verify Import Line Items Page', { tag: ['@QuotesModule', '@ImportLineItemsPage'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('Quotes menu drop-down list is displayed', null, { quotesPage }); 
    await When('User clicks on Import Line Items option in Quotes Menu', null, { quotesPage }); 
    await Then('User should see the import Line Items page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"ExpectedValues"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImportLineItemsFile"}]},{"cells":[{"value":"Buttons"},{"value":"LineItemsChooseFile, LineItemsNext"}]},{"cells":[{"value":"Label"},{"value":"InformationTextImportLineItems"}]},{"cells":[{"value":"HyperLink"},{"value":"DownloadImportFileTemplateLineItems"}]},{"cells":[{"value":"Radiobuttons"},{"value":"RadioButtonLineItems1, RadioButtonLineItems2"}]}]}}, { quotesPage }); 
  });

  test.describe('Verify importing Line Items using <InputFile>', () => {

    test('Example #1', { tag: ['@QuotesModule', '@ImportandCreateLineItems'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on Import Line Items page', null, { quotesPage }); 
      await When('User uploads Line Items "ValidLineItemFile" and clicks Next button', null, { quotesPage }); 
      await Then('User should see Import Line Items "Line Items dashboard page"', null, { quotesPage }); 
    });

    test('Example #2', { tag: ['@QuotesModule', '@ImportandCreateLineItems'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on Import Line Items page', null, { quotesPage }); 
      await When('User uploads Line Items "NoFile" and clicks Next button', null, { quotesPage }); 
      await Then('User should see Import Line Items "Required field error messages for Line Items"', null, { quotesPage }); 
    });

    test('Example #3', { tag: ['@QuotesModule', '@ImportandCreateLineItems'] }, async ({ Given, When, Then, quotesPage }) => { 
      await Given('User is on Import Line Items page', null, { quotesPage }); 
      await When('User uploads Line Items "InValidFile" and clicks Next button', null, { quotesPage }); 
      await Then('User should see Import Line Items "Import Line Items Error Popup alert appears"', null, { quotesPage }); 
    });

  });

  test('Verify the availability recently viewed item in Quotes menu', { tag: ['@QuotesModule', '@sequential'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('User created a quote', null, { quotesPage }); 
    await When('User hovers over the Quotes menu', null, { quotesPage }); 
    await Then('User should see the option Recently viewed in the Quotes menu', null, { quotesPage }); 
  });

  test('Verify the availability recently viewed Quotes record', { tag: ['@QuotesModule', '@sequential'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('User created a quote', null, { quotesPage }); 
    await When('User hovers over the Recently viewed option in the quotes menu', null, { quotesPage }); 
    await Then('User should see the name of the recently viewed Quote record in its drop down', null, { quotesPage }); 
  });

  test('Verify opening recently viewed Quotes record', { tag: ['@QuotesModule', '@sequential'] }, async ({ Given, When, Then, quotesPage }) => { 
    await Given('User created a quote', null, { quotesPage }); 
    await When('User clicks and opens the recently viewed Quotes record from the Quotes menu', null, { quotesPage }); 
    await Then('User should see detailed view page of the recently viewed Quotes record', null, { quotesPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@QuotesModule","@QuotesDropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User hovers over the Quotes Menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Quotes menu drop down list is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@QuotesModule","@CreateQuotePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given Quotes menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Quote option in the Quotes Menu","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Create Quote page","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":33,"tags":["@QuotesModule","@CreateQuoteFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is on the Create Quote page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User enters Quotes \"quoteData1\" and clicks the \"QuoteSave\" button","stepMatchArguments":[{"group":{"start":19,"value":"\"quoteData1\"","children":[{"start":20,"value":"quoteData1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"QuoteSave\"","children":[{"start":48,"value":"QuoteSave","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see create Quotes \"Detailed view page of Created new Quote\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Detailed view page of Created new Quote\"","children":[{"start":31,"value":"Detailed view page of Created new Quote","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":34,"tags":["@QuotesModule","@CreateQuoteFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is on the Create Quote page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User enters Quotes \"noData\" and clicks the \"QuoteSave\" button","stepMatchArguments":[{"group":{"start":19,"value":"\"noData\"","children":[{"start":20,"value":"noData","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"QuoteSave\"","children":[{"start":44,"value":"QuoteSave","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see create Quotes \"Required field error messages for Create Quote\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Required field error messages for Create Quote\"","children":[{"start":31,"value":"Required field error messages for Create Quote","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":35,"tags":["@QuotesModule","@CreateQuoteFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is on the Create Quote page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User enters Quotes \"quoteData2\" and clicks the \"QuoteCancel\" button","stepMatchArguments":[{"group":{"start":19,"value":"\"quoteData2\"","children":[{"start":20,"value":"quoteData2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"QuoteCancel\"","children":[{"start":48,"value":"QuoteCancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see create Quotes \"Confirmation dialog appears for Create Quote\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Confirmation dialog appears for Create Quote\"","children":[{"start":31,"value":"Confirmation dialog appears for Create Quote","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":38,"tags":["@QuotesModule","@ViewQuotesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given Quotes menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When User clicks on the View Quotes option in the Quotes Menu","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Quotes dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":50,"tags":["@QuotesModule","@ImportQuotesPageComponents"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given Quotes menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User clicks on Import option in Quotes Menu","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Quotes page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":68,"tags":["@QuotesModule","@sequential","@ImportAndCreateQuotes"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User uploads Quotes \"ValidQuoteFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":20,"value":"\"ValidQuoteFile\"","children":[{"start":21,"value":"ValidQuoteFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Quotes \"Quote Dashboard page\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Quote Dashboard page\"","children":[{"start":31,"value":"Quote Dashboard page","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":69,"tags":["@QuotesModule","@sequential","@ImportAndCreateQuotes"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User uploads Quotes \"NoFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":20,"value":"\"NoFile\"","children":[{"start":21,"value":"NoFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Quotes \"Required field error messages for Import Quotes\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Required field error messages for Import Quotes\"","children":[{"start":31,"value":"Required field error messages for Import Quotes","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":69,"pickleLine":70,"tags":["@QuotesModule","@sequential","@ImportAndCreateQuotes"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User uploads Quotes \"InValidFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":20,"value":"\"InValidFile\"","children":[{"start":21,"value":"InValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Quotes \"Import Quote Error Popup alert appears\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Import Quote Error Popup alert appears\"","children":[{"start":31,"value":"Import Quote Error Popup alert appears","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":73,"tags":["@QuotesModule","@ImportLineItemsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given Quotes menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User clicks on Import Line Items option in Quotes Menu","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Line Items page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":91,"tags":["@QuotesModule","@ImportandCreateLineItems"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":86,"keywordType":"Context","textWithKeyword":"Given User is on Import Line Items page","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When User uploads Line Items \"ValidLineItemFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":24,"value":"\"ValidLineItemFile\"","children":[{"start":25,"value":"ValidLineItemFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":88,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Line Items \"Line Items dashboard page\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Line Items dashboard page\"","children":[{"start":35,"value":"Line Items dashboard page","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":91,"pickleLine":92,"tags":["@QuotesModule","@ImportandCreateLineItems"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":86,"keywordType":"Context","textWithKeyword":"Given User is on Import Line Items page","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When User uploads Line Items \"NoFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":24,"value":"\"NoFile\"","children":[{"start":25,"value":"NoFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":94,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Line Items \"Required field error messages for Line Items\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Required field error messages for Line Items\"","children":[{"start":35,"value":"Required field error messages for Line Items","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":97,"pickleLine":93,"tags":["@QuotesModule","@ImportandCreateLineItems"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":86,"keywordType":"Context","textWithKeyword":"Given User is on Import Line Items page","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When User uploads Line Items \"InValidFile\" and clicks Next button","stepMatchArguments":[{"group":{"start":24,"value":"\"InValidFile\"","children":[{"start":25,"value":"InValidFile","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Line Items \"Import Line Items Error Popup alert appears\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Import Line Items Error Popup alert appears\"","children":[{"start":35,"value":"Import Line Items Error Popup alert appears","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":105,"pickleLine":96,"tags":["@QuotesModule","@sequential"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"Given User created a quote","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"When User hovers over the Quotes menu","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then User should see the option Recently viewed in the Quotes menu","stepMatchArguments":[]}]},
  {"pwTestLine":111,"pickleLine":102,"tags":["@QuotesModule","@sequential"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":103,"keywordType":"Context","textWithKeyword":"Given User created a quote","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"When User hovers over the Recently viewed option in the quotes menu","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then User should see the name of the recently viewed Quote record in its drop down","stepMatchArguments":[]}]},
  {"pwTestLine":117,"pickleLine":108,"tags":["@QuotesModule","@sequential"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":109,"keywordType":"Context","textWithKeyword":"Given User created a quote","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks and opens the recently viewed Quotes record from the Quotes menu","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see detailed view page of the recently viewed Quotes record","stepMatchArguments":[]}]},
]; // bdd-data-end