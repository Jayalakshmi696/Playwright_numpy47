// Generated from: features\documents\documentListing.feature
import { test } from "playwright-bdd";

test.describe('Document listing', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('the user is on the Documents page and the list is empty'); 
  });
  
  test('View Documents page when no documents exist', { tag: ['@document', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('no documents have been uploaded or match the current filter'); 
    await When('the Documents page finishes loading'); 
    await Then('the grid should display the message "No results found." and the record count should show "(0 - 0 of 0)"'); 
  });

  test('Bulk Action control is disabled when no records exist', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Documents page and the list is empty'); 
    await And('the Documents grid shows "No results found."'); 
    await When('the user click at the "Bulk Action" dropdown'); 
    await Then('the "Bulk Action" dropdown and the row-selection checkbox should be disabled'); 
  });

  test('Open the Filter panel', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Documents page'); 
    await And('the user is on the Documents page'); 
    await When('the user clicks the "Filter" button'); 
    await Then('a filter panel should open allowing the user to search Documents by criteria such as Document Name, Category, Sub Category,status, Revision Date, Expiration Date, Document type,Assigned to,my favorites,or User'); 
  });

  test('Filter documents with no matching results', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user has opened the Filter panel'); 
    await And('the user enters filter criteria that match no existing document'); 
    await When('the user applies the filter'); 
    await Then('the grid should display "No results found." and the pagination count should reset to "(0 - 0 of 0)"'); 
  });

  test('Filter documents with matching results', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user has opened the Filter panel and documents exist matching the criteria'); 
    await And('the user enters valid filter criteria that match one or more documents'); 
    await When('the user applies the filter'); 
    await Then('only the documents matching the criteria should be displayed in the grid'); 
  });

  test('Sort documents by Document Name', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Documents grid contains one or more records'); 
    await And('documents are listed in the grid'); 
    await When('the user clicks the sort arrow on the "Document Name" column header'); 
    await Then('the documents should be reordered alphabetically by Document Name, toggling between ascending and descending on repeated clicks'); 
  });

  test('Sort documents by Category', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Documents grid contains one or more records'); 
    await And('documents are listed in the grid'); 
    await When('the user clicks the sort arrow on the "Category" column header'); 
    await Then('the documents should be reordered alphabetically by Category, toggling between ascending and descending on repeated clicks'); 
  });

  test('Sort documents by Sub Category', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Documents grid contains one or more records'); 
    await And('documents are listed in the grid'); 
    await When('the user clicks the sort arrow on the "Sub Category" column header'); 
    await Then('the documents should be reordered alphabetically by Sub Category, toggling between ascending and descending on repeated clicks'); 
  });

  test('Sort documents by Expiration Date', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Documents grid contains one or more records'); 
    await And('documents are listed in the grid'); 
    await When('the user clicks the sort arrow on the "Expiration Date" column header'); 
    await Then('the documents should be reordered chronologically by Expiration Date, toggling between ascending and descending on repeated clicks'); 
  });

  test('Sort documents by User', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Documents grid contains one or more records'); 
    await And('documents are listed in the grid'); 
    await When('the user clicks the sort arrow on the "User" column header'); 
    await Then('the documents should be reordered alphabetically by User, toggling between ascending and descending on repeated clicks'); 
  });

  test('Apply a Bulk Action to selected documents', { tag: ['@document', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('one or more documents are selected in the grid'); 
    await And('at least one document row is selected'); 
    await When('the user chooses an option from the "Bulk Action" dropdown'); 
    await Then('the selected action should be applied to all selected documents and a confirmation should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\documents\\documentListing.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given no documents have been uploaded or match the current filter","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the Documents page finishes loading","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the grid should display the message \"No results found.\" and the record count should show \"(0 - 0 of 0)\"","stepMatchArguments":[{"group":{"start":36,"value":"\"No results found.\"","children":[{"start":37,"value":"No results found.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":89,"value":"\"(0 - 0 of 0)\"","children":[{"start":90,"value":"(0 - 0 of 0)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And the Documents grid shows \"No results found.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"No results found.\"","children":[{"start":26,"value":"No results found.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user click at the \"Bulk Action\" dropdown","stepMatchArguments":[{"group":{"start":22,"value":"\"Bulk Action\"","children":[{"start":23,"value":"Bulk Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the \"Bulk Action\" dropdown and the row-selection checkbox should be disabled","stepMatchArguments":[{"group":{"start":4,"value":"\"Bulk Action\"","children":[{"start":5,"value":"Bulk Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":21,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"And the user is on the Documents page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user clicks the \"Filter\" button","stepMatchArguments":[{"group":{"start":20,"value":"\"Filter\"","children":[{"start":21,"value":"Filter","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then a filter panel should open allowing the user to search Documents by criteria such as Document Name, Category, Sub Category,status, Revision Date, Expiration Date, Document type,Assigned to,my favorites,or User","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":28,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given the user has opened the Filter panel","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"And the user enters filter criteria that match no existing document","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When the user applies the filter","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the grid should display \"No results found.\" and the pagination count should reset to \"(0 - 0 of 0)\"","stepMatchArguments":[{"group":{"start":24,"value":"\"No results found.\"","children":[{"start":25,"value":"No results found.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":85,"value":"\"(0 - 0 of 0)\"","children":[{"start":86,"value":"(0 - 0 of 0)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":35,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given the user has opened the Filter panel and documents exist matching the criteria","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"And the user enters valid filter criteria that match one or more documents","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user applies the filter","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then only the documents matching the criteria should be displayed in the grid","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":42,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given the Documents grid contains one or more records","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And documents are listed in the grid","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When the user clicks the sort arrow on the \"Document Name\" column header","stepMatchArguments":[{"group":{"start":38,"value":"\"Document Name\"","children":[{"start":39,"value":"Document Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then the documents should be reordered alphabetically by Document Name, toggling between ascending and descending on repeated clicks","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":49,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given the Documents grid contains one or more records","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"And documents are listed in the grid","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When the user clicks the sort arrow on the \"Category\" column header","stepMatchArguments":[{"group":{"start":38,"value":"\"Category\"","children":[{"start":39,"value":"Category","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the documents should be reordered alphabetically by Category, toggling between ascending and descending on repeated clicks","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":56,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given the Documents grid contains one or more records","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"And documents are listed in the grid","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When the user clicks the sort arrow on the \"Sub Category\" column header","stepMatchArguments":[{"group":{"start":38,"value":"\"Sub Category\"","children":[{"start":39,"value":"Sub Category","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then the documents should be reordered alphabetically by Sub Category, toggling between ascending and descending on repeated clicks","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":63,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given the Documents grid contains one or more records","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"And documents are listed in the grid","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user clicks the sort arrow on the \"Expiration Date\" column header","stepMatchArguments":[{"group":{"start":38,"value":"\"Expiration Date\"","children":[{"start":39,"value":"Expiration Date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then the documents should be reordered chronologically by Expiration Date, toggling between ascending and descending on repeated clicks","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":70,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given the Documents grid contains one or more records","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"And documents are listed in the grid","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When the user clicks the sort arrow on the \"User\" column header","stepMatchArguments":[{"group":{"start":38,"value":"\"User\"","children":[{"start":39,"value":"User","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then the documents should be reordered alphabetically by User, toggling between ascending and descending on repeated clicks","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":77,"tags":["@document","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the Documents page and the list is empty","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given one or more documents are selected in the grid","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"And at least one document row is selected","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When the user chooses an option from the \"Bulk Action\" dropdown","stepMatchArguments":[{"group":{"start":36,"value":"\"Bulk Action\"","children":[{"start":37,"value":"Bulk Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":83,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then the selected action should be applied to all selected documents and a confirmation should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end