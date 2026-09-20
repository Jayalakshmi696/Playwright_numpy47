// Generated from: features/documents/viewDocuments.feature
import { test } from "playwright-bdd";

test.describe('"View Documents" Page Checking', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('Use is on "View Documents" Page'); 
  });
  
  test('Open the "View Document" page from the "Documents" dropdown', { tag: ['@document', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The user has hovered over the "Calendar" menu'); 
    await When('the user click the "View Document" from the "calender"'); 
    await Then('the page open with "Filter" button'); 
  });

  test('View Documents page when no documents exist', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Documents page and the list is empty'); 
    await And('no documents have been uploaded or match the current filter'); 
    await When('the Documents page finishes loading'); 
    await Then('the grid should display the message "No results found." and the record count should show "(0 - 0 of 0)"'); 
  });

  test('Bulk Action control is disabled when no records exist', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Documents page and the list is empty'); 
    await And('the Documents grid shows "No results found."'); 
    await When('the user click at the "Bulk Action" dropdown'); 
    await Then('the "Bulk Action" dropdown and the row-selection checkbox should be disabled'); 
  });

  test('Searching the Created Documents', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Documents  filter page and the list is empty'); 
    await And('the Documents grid shows "No results found."'); 
    await When('user click the "filter" button'); 
    await Then('the Documents page should open displaying the "basic filter" section with "clear" and "search" button.'); 
  });

  test('Searching the Created Documents', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Documents with filled serch criteria'); 
    await And('the user fill the search criteria columns "Document Name", "File", "Category", "Sub Category", "Revision Date", "Expiration Date",'); 
    await When('click the "Search "Button'); 
    await Then('filterd result will show'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/documents/viewDocuments.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Use is on \"View Documents\" Page","isBg":true,"stepMatchArguments":[{"group":{"start":10,"value":"\"View Documents\"","children":[{"start":11,"value":"View Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given The user has hovered over the \"Calendar\" menu","stepMatchArguments":[{"group":{"start":30,"value":"\"Calendar\"","children":[{"start":31,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user click the \"View Document\" from the \"calender\"","stepMatchArguments":[{"group":{"start":19,"value":"\"View Document\"","children":[{"start":20,"value":"View Document","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"calender\"","children":[{"start":45,"value":"calender","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the page open with \"Filter\" button","stepMatchArguments":[{"group":{"start":19,"value":"\"Filter\"","children":[{"start":20,"value":"Filter","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Use is on \"View Documents\" Page","isBg":true,"stepMatchArguments":[{"group":{"start":10,"value":"\"View Documents\"","children":[{"start":11,"value":"View Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And no documents have been uploaded or match the current filter","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the Documents page finishes loading","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the grid should display the message \"No results found.\" and the record count should show \"(0 - 0 of 0)\"","stepMatchArguments":[{"group":{"start":36,"value":"\"No results found.\"","children":[{"start":37,"value":"No results found.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":89,"value":"\"(0 - 0 of 0)\"","children":[{"start":90,"value":"(0 - 0 of 0)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":21,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Use is on \"View Documents\" Page","isBg":true,"stepMatchArguments":[{"group":{"start":10,"value":"\"View Documents\"","children":[{"start":11,"value":"View Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"And the Documents grid shows \"No results found.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"No results found.\"","children":[{"start":26,"value":"No results found.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user click at the \"Bulk Action\" dropdown","stepMatchArguments":[{"group":{"start":22,"value":"\"Bulk Action\"","children":[{"start":23,"value":"Bulk Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the \"Bulk Action\" dropdown and the row-selection checkbox should be disabled","stepMatchArguments":[{"group":{"start":4,"value":"\"Bulk Action\"","children":[{"start":5,"value":"Bulk Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":28,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Use is on \"View Documents\" Page","isBg":true,"stepMatchArguments":[{"group":{"start":10,"value":"\"View Documents\"","children":[{"start":11,"value":"View Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents  filter page and the list is empty","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"And the Documents grid shows \"No results found.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"No results found.\"","children":[{"start":26,"value":"No results found.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When user click the \"filter\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"filter\"","children":[{"start":16,"value":"filter","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the Documents page should open displaying the \"basic filter\" section with \"clear\" and \"search\" button.","stepMatchArguments":[{"group":{"start":46,"value":"\"basic filter\"","children":[{"start":47,"value":"basic filter","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":74,"value":"\"clear\"","children":[{"start":75,"value":"clear","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":86,"value":"\"search\"","children":[{"start":87,"value":"search","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":35,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Use is on \"View Documents\" Page","isBg":true,"stepMatchArguments":[{"group":{"start":10,"value":"\"View Documents\"","children":[{"start":11,"value":"View Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents with filled serch criteria","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"And the user fill the search criteria columns \"Document Name\", \"File\", \"Category\", \"Sub Category\", \"Revision Date\", \"Expiration Date\",","stepMatchArguments":[{"group":{"start":42,"value":"\"Document Name\"","children":[{"start":43,"value":"Document Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"File\"","children":[{"start":60,"value":"File","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"Category\"","children":[{"start":68,"value":"Category","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":79,"value":"\"Sub Category\"","children":[{"start":80,"value":"Sub Category","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":95,"value":"\"Revision Date\"","children":[{"start":96,"value":"Revision Date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":112,"value":"\"Expiration Date\"","children":[{"start":113,"value":"Expiration Date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When click the \"Search \"Button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then filterd result will show","stepMatchArguments":[]}]},
]; // bdd-data-end