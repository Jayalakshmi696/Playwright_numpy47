// Generated from: features/calendar/sharedWeek.feature
import { test } from "playwright-bdd";

test.describe('Calendar shared week View', () => {

  test.beforeEach('Background', async ({ Given, And }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged into the SuitCRM'); 
    await And('the user navigates to the "Calendar" module in the menu'); 
  });
  
  test('Navigate to shared week view from calendar', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The user is on the calendar page'); 
    await When('The user clicks the "shared week" view button'); 
    await Then('the header displays the current week\'s date range "2026 September 13 - 2026 September 19"'); 
  });

  test('Verify the view toggle buttons are displayed', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('the user views the row below the page title Calender'); 
    await Then('the buttons "Day", "Month", "Shared Month" ,"Shared Week" ,"Calender icon" and  "Calender Settings"are displayed'); 
  });

  test('Verify the calendar header shows the correct week date range', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('the user views the grey header bar above the day columns'); 
    await Then('the header displays current weeks ,start date and end date'); 
  });

  test('Verify all seven days of the week are displayed as columns', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('the user views the calendar grid'); 
    await Then('seven day columns are displayed labeled "Sunday  throght Saturday along with date"'); 
  });

  test('Verify the assigned user name is displayed above the calendar grid', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('the user views the row directly above the day column headers'); 
    await Then('the assigned user\'s name is displayed'); 
  });

  test('Create  new Activity Popup - Schedule Meeting / Log Call', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "shared week" view'); 
    await When('user click the cell'); 
    await Then('the "Create Activity" popup renders fully within 2 to 5 seconds'); 
  });

  test('Hover existing calender item', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('user Hovering on the existing cell calender item'); 
    await Then('assigned task will show'); 
  });

  test('open the  User list buttons from shared week page', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in "shared " view'); 
    await When('user click on the user list button'); 
    await Then('user list window pop up'); 
  });

  test('Verify the calendar grid loads within an acceptable time (Performance)', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the user navigates to the Calendar module'); 
    await When('the calendar page is requested'); 
    await Then('the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds'); 
  });

  test('Verify the current-day highlight is visually distinguishable (Usability)', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the calendar is loaded in " share Week" view'); 
    await When('the user views the day column'); 
    await Then('the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/calendar/sharedWeek.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given The user is on the calendar page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When The user clicks the \"shared week\" view button","stepMatchArguments":[{"group":{"start":20,"value":"\"shared week\"","children":[{"start":21,"value":"shared week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the header displays the current week's date range \"2026 September 13 - 2026 September 19\"","stepMatchArguments":[{"group":{"start":50,"value":"\"2026 September 13 - 2026 September 19\"","children":[{"start":51,"value":"2026 September 13 - 2026 September 19","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user views the row below the page title Calender","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the buttons \"Day\", \"Month\", \"Shared Month\" ,\"Shared Week\" ,\"Calender icon\" and  \"Calender Settings\"are displayed","stepMatchArguments":[{"group":{"start":12,"value":"\"Day\"","children":[{"start":13,"value":"Day","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Month\"","children":[{"start":20,"value":"Month","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"Shared Month\"","children":[{"start":29,"value":"Shared Month","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"Shared Week\"","children":[{"start":45,"value":"Shared Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"Calender icon\"","children":[{"start":60,"value":"Calender icon","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user views the grey header bar above the day columns","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the header displays current weeks ,start date and end date","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":25,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When the user views the calendar grid","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then seven day columns are displayed labeled \"Sunday  throght Saturday along with date\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Sunday  throght Saturday along with date\"","children":[{"start":41,"value":"Sunday  throght Saturday along with date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When the user views the row directly above the day column headers","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the assigned user's name is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":36,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"shared week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\"shared week\"","children":[{"start":27,"value":"shared week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When user click the cell","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the \"Create Activity\" popup renders fully within 2 to 5 seconds","stepMatchArguments":[{"group":{"start":4,"value":"\"Create Activity\"","children":[{"start":5,"value":"Create Activity","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"2"},"parameterTypeName":"int"},{"group":{"start":54,"value":"5"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":43,"pickleLine":42,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When user Hovering on the existing cell calender item","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then assigned task will show","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":47,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \"shared \" view","stepMatchArguments":[{"group":{"start":26,"value":"\"shared \"","children":[{"start":27,"value":"shared ","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When user click on the user list button","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then user list window pop up","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":54,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given the user navigates to the Calendar module","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When the calendar page is requested","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then the full week grid, including all day columns and hourly rows, renders within 2 to 5 seconds","stepMatchArguments":[{"group":{"start":78,"value":"2"},"parameterTypeName":"int"},{"group":{"start":83,"value":"5"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":60,"pickleLine":60,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given the calendar is loaded in \" share Week\" view","stepMatchArguments":[{"group":{"start":26,"value":"\" share Week\"","children":[{"start":27,"value":" share Week","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When the user views the day column","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then the current day column uses a color with sufficient contrast against adjacent columns to be identifiable at a glance","stepMatchArguments":[]}]},
]; // bdd-data-end