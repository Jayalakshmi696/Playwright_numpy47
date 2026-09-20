// Generated from: features\Quotes.feature
import { test } from "../../fixtures/loginFixture.js";

test.describe('Testing Quotes module in SuiteCRM application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User launches the application'); 
  });
  
  test('Verify that Quotes Menu is present in the Menu bar', { tag: ['@QuotesModule', '@QuotesMenu'] }, async ({ Given, When, Then }) => { 
    await Given('User successfully logged in to the application'); 
    await When('User is on the Home dashboard page'); 
    await Then('User should see Quotes menu in the menu bar'); 
  });

  test('Verify that Quotes Menu drop down list contents', { tag: ['@QuotesModule', '@QuotesDropDownList'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the Home dashboard page'); 
    await When('User hovers over the Quotes Menu'); 
    await Then('Quotes menu drop down list is displayed'); 
  });

  test('Verify components on the Create Quote page', { tag: ['@QuotesModule', '@CreateQuotePage'] }, async ({ Given, When, Then }) => { 
    await Given('Quotes menu drop-down list is displayed'); 
    await When('User clicks on the Create Quote option in the Quotes Menu'); 
    await Then('User should see the correct components on the Create Quote page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"create"}]},{"cells":[{"value":"Buttons"},{"value":"Save, Cancel"}]},{"cells":[{"value":"Tabs"},{"value":"Overview, MoreInformation, other"}]}]}}); 
  });

  test.describe('Verify that user is able to create a new Quote', () => {

    test('Example #1', { tag: ['@QuotesModule', '@CreateQuoteFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on the Create Quote page'); 
      await When('User enters Quotes Valid Data and clicks the Save button'); 
      await Then('User should see create Quotes Detailed view page of new Quote'); 
    });

    test('Example #2', { tag: ['@QuotesModule', '@CreateQuoteFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on the Create Quote page'); 
      await When('User enters Quotes No Data and clicks the Save button'); 
      await Then('User should see create Quotes Required field error messages'); 
    });

    test('Example #3', { tag: ['@QuotesModule', '@CreateQuoteFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on the Create Quote page'); 
      await When('User enters Quotes Valid Data and clicks the Cancel button'); 
      await Then('User should see create Quotes Confirmation dialog appears'); 
    });

  });

  test('Verify components on the View Quotes page', { tag: ['@QuotesModule', '@ViewQuotesPage'] }, async ({ Given, When, Then }) => { 
    await Given('Quotes menu drop-down list is displayed'); 
    await When('User clicks on the "View Quotes" option in the Quotes Menu'); 
    await Then('User should see the correct components on the Quotes dashboard page', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"Quotes"}]},{"cells":[{"value":"Buttons"},{"value":"Filter, Insights"}]},{"cells":[{"value":"Sections"},{"value":"Records, QuickCharts"}]},{"cells":[{"value":"Header Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]},{"cells":[{"value":"Footer Contents"},{"value":"SelectDropDown, BulkActionsDropDown, NextPageButton, PreviousPageButton, BeginingPageButton, EndPageButton, PageNumber"}]}]}}); 
  });

  test('Verify that user is on the Import page', { tag: ['@QuotesModule', '@ImportPage'] }, async ({ Given, When, Then }) => { 
    await Given('User has opened Quotes menu'); 
    await When('User clicks the Import option'); 
    await Then('User should see the import page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImport File"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Next"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]},{"cells":[{"value":"HyperLink"},{"value":"Download Import File Template"}]},{"cells":[{"value":"Radio buttons"},{"value":"Create New Records only, Create New Records and Update Existing Records"}]}]}}); 
  });

  test.describe('Verify the functionality of importing Quotes', () => {

    test('Example #1', { tag: ['@QuotesModule', '@ImportFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Upload Import File page'); 
      await When('User uploads QuotesValid File and clicks Next button'); 
      await Then('User should see Import Quotes Detailed view page of new Quote'); 
    });

    test('Example #2', { tag: ['@QuotesModule', '@ImportFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Upload Import File page'); 
      await When('User uploads QuotesNo File and clicks Next button'); 
      await Then('User should see Import Quotes Select a Vcard file Alert appears'); 
    });

    test('Example #3', { tag: ['@QuotesModule', '@ImportFunctionality'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Upload Import File page'); 
      await When('User uploads QuotesInValid File and clicks Next button'); 
      await Then('User should see Import Quotes Required field error messages'); 
    });

  });

  test('Verify Import Line Items Page', { tag: ['@QuotesModule', '@ImportLineItemsPage'] }, async ({ Given, When, Then }) => { 
    await Given('Quotes menu is visible'); 
    await When('User clicks on Import Line Items option in Quotes Menu'); 
    await Then('User should see the import Line Items page with correct components', {"dataTable":{"rows":[{"cells":[{"value":"Component"},{"value":"Expected Values"}]},{"cells":[{"value":"PageTitle"},{"value":"UploadImport File"}]},{"cells":[{"value":"Buttons"},{"value":"Choose File, Next"}]},{"cells":[{"value":"Label"},{"value":"No File Chosen"}]},{"cells":[{"value":"HyperLink"},{"value":"Download Import File Template"}]},{"cells":[{"value":"Radio buttons"},{"value":"Create New Records only, Create New Records and Update Existing Records"}]}]}}); 
  });

  test.describe('Verify the functionality of importing Line Items', () => {

    test('Example #1', { tag: ['@QuotesModule', '@ImportLineItems'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Import Line Items page'); 
      await When('User uploads Line ItemsValid File and clicks Next button'); 
      await Then('User should see Import Line Items Line Items dashboard page'); 
    });

    test('Example #2', { tag: ['@QuotesModule', '@ImportLineItems'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Import Line Items page'); 
      await When('User uploads Line ItemsNo File and clicks Next button'); 
      await Then('User should see Import Line Items Required field error messages'); 
    });

    test('Example #3', { tag: ['@QuotesModule', '@ImportLineItems'] }, async ({ Given, When, Then }) => { 
      await Given('User is on Import Line Items page'); 
      await When('User uploads Line ItemsInValid File and clicks Next button'); 
      await Then('User should see Import Line Items Invalid Import File name message'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@QuotesModule","@QuotesMenu"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged in to the application","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User is on the Home dashboard page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see Quotes menu in the menu bar","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@QuotesModule","@QuotesDropDownList"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is on the Home dashboard page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User hovers over the Quotes Menu","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Quotes menu drop down list is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":["@QuotesModule","@CreateQuotePage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given Quotes menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Quote option in the Quotes Menu","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Create Quote page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":35,"tags":["@QuotesModule","@CreateQuoteFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is on the Create Quote page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User enters Quotes Valid Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see create Quotes Detailed view page of new Quote","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":36,"tags":["@QuotesModule","@CreateQuoteFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is on the Create Quote page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User enters Quotes No Data and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see create Quotes Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":37,"tags":["@QuotesModule","@CreateQuoteFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is on the Create Quote page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User enters Quotes Valid Data and clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see create Quotes Confirmation dialog appears","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":40,"tags":["@QuotesModule","@ViewQuotesPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given Quotes menu drop-down list is displayed","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When User clicks on the \"View Quotes\" option in the Quotes Menu","stepMatchArguments":[{"group":{"start":19,"value":"\"View Quotes\"","children":[{"start":20,"value":"View Quotes","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User should see the correct components on the Quotes dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":52,"tags":["@QuotesModule","@ImportPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given User has opened Quotes menu","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When User clicks the Import option","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then User should see the import page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":70,"tags":["@QuotesModule","@ImportFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When User uploads QuotesValid File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Quotes Detailed view page of new Quote","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":71,"tags":["@QuotesModule","@ImportFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When User uploads QuotesNo File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Quotes Select a Vcard file Alert appears","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":72,"tags":["@QuotesModule","@ImportFunctionality"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given User is on Upload Import File page","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When User uploads QuotesInValid File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Quotes Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":75,"tags":["@QuotesModule","@ImportLineItemsPage"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":76,"keywordType":"Context","textWithKeyword":"Given Quotes menu is visible","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"When User clicks on Import Line Items option in Quotes Menu","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then User should see the import Line Items page with correct components","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":93,"tags":["@QuotesModule","@ImportLineItems"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given User is on Import Line Items page","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User uploads Line ItemsValid File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Line Items Line Items dashboard page","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":94,"tags":["@QuotesModule","@ImportLineItems"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given User is on Import Line Items page","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User uploads Line ItemsNo File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Line Items Required field error messages","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":95,"tags":["@QuotesModule","@ImportLineItems"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given User is on Import Line Items page","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User uploads Line ItemsInValid File and clicks Next button","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User should see Import Line Items Invalid Import File name message","stepMatchArguments":[]}]},
]; // bdd-data-end