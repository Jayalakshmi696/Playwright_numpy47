// Generated from: features/calendar/weekView.feature
import { test } from "playwright-bdd";

test.describe('Calendar Week View', () => {

  test.beforeEach('Background', async ({ Given, And }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged into the SuiteCRM'); 
    await And('the user navigates to the "Calendar" module in the menu'); 
  });
  
  test('Verify the view toggle buttons are displayed', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the Calendar page'); 
    await When('the user views the row below the page title Calender'); 
    await Then('the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed'); 
  });

  test('Verify the calendar header shows the correct week date range', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('the user views the grey header bar above the day columns'); 
    await Then('the header displays current weeks ,start date and end date'); 
  });

  test('Verify all seven days of the week are displayed as columns', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('the user views the calendar grid'); 
    await Then('seven day columns are displayed labeled "Sunday  throght Saturday along with date"'); 
  });

  test('Verify the assigned user name is displayed above the calendar grid', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('the user views the row directly above the day column headers'); 
    await Then('the assigned user\'s name is displayed'); 
  });

  test('Verify navigating to the previous Day using the back arrow', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('the user clicks the left navigation arrow "<" in the header bar'); 
    await Then('the calendar updates to display the preceding Week'); 
  });

  test('Verify navigating to the next Day using the forward arrow', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is displaying the chosen week'); 
    await When('the user clicks the right navigation arrow ">" in the header bar'); 
    await Then('the calendar updates to display the preceding week'); 
  });

  test('Create  new Activity Popup - Schedule Meeting / Log Call', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('user click the cell'); 
    await Then('the "Create Activity" popup renders fully within 2 to 5 seconds'); 
  });

  test('Existing calender item', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('user click the existing calender item'); 
    await Then('existing calender item will show'); 
  });

  test('Hover existing calender item', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('user Hovering on the existing cell calender item'); 
    await Then('task will show'); 
  });

  test('Verify the calendar grid loads within an acceptable time (Performance)', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the user navigates to the "week view "module'); 
    await When('the calendar page is requested'); 
    await Then('the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds'); 
  });

  test('Verify the current-day highlight is visually distinguishable (Usability)', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('the user views the day column headers'); 
    await Then('the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance'); 
  });

  test('Verify the calendar layout adapts to different screen resolutions (Responsiveness)', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "Week" view'); 
    await When('the browser window is resized between desktop, tablet and mobile breakpoints'); 
    await Then('the day columns, time axis and header remain legible and correctly aligned without horizontal content loss'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/calendar/weekView.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user is on the Calendar page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user views the row below the page title Calender","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the buttons \"Day\", \"Month\", \"Shared Month\" ,\"Shared Week\" ,\"Calender icon\" and  \"Calender Settings\"are displayed","stepMatchArguments":[{"group":{"start":12,"value":"\"Day\"","children":[{"start":13,"value":"Day","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Month\"","children":[{"start":20,"value":"Month","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"Shared Month\"","children":[{"start":29,"value":"Shared Month","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"Shared Week\"","children":[{"start":45,"value":"Shared Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"Calender icon\"","children":[{"start":60,"value":"Calender icon","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":16,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user views the grey header bar above the day columns","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the header displays current weeks ,start date and end date","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":22,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user views the calendar grid","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then seven day columns are displayed labeled \"Sunday  throght Saturday along with date\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Sunday  throght Saturday along with date\"","children":[{"start":41,"value":"Sunday  throght Saturday along with date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":28,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user views the row directly above the day column headers","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the assigned user's name is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":34,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When the user clicks the left navigation arrow \"<\" in the header bar","stepMatchArguments":[{"group":{"start":42,"value":"\"<\"","children":[{"start":43,"value":"<","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the calendar updates to display the preceding Week","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":40,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given the calendar is displaying the chosen week","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user clicks the right navigation arrow \">\" in the header bar","stepMatchArguments":[{"group":{"start":43,"value":"\">\"","children":[{"start":44,"value":">","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the calendar updates to display the preceding week","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":46,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When user click the cell","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then the \"Create Activity\" popup renders fully within 2 to 5 seconds","stepMatchArguments":[{"group":{"start":4,"value":"\"Create Activity\"","children":[{"start":5,"value":"Create Activity","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"2"},"parameterTypeName":"int"},{"group":{"start":54,"value":"5"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":53,"pickleLine":52,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When user click the existing calender item","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then existing calender item will show","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":58,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When user Hovering on the existing cell calender item","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then task will show","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":64,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":66,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the user navigates to the \"week view \"module","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the calendar page is requested","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds","stepMatchArguments":[{"group":{"start":78,"value":"2"},"parameterTypeName":"int"},{"group":{"start":83,"value":"5"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":71,"pickleLine":70,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":73,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When the user views the day column headers","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance","stepMatchArguments":[]}]},
  {"pwTestLine":77,"pickleLine":76,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuiteCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":78,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"Week\"","children":[{"start":27,"value":"Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":79,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When the browser window is resized between desktop, tablet and mobile breakpoints","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then the day columns, time axis and header remain legible and correctly aligned without horizontal content loss","stepMatchArguments":[]}]},
]; // bdd-data-end