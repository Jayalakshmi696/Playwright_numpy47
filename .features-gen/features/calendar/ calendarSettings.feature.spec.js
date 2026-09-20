// Generated from: features/calendar/ calendarSettings.feature
import { test } from "playwright-bdd";

test.describe('Calender Settings', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the "Settings" button, opening the Settings modal'); 
  });
  
  test('The user clicks the "Settings" button', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('The user is on the calendar main view'); 
    await When('The user clicks the "Settings" button'); 
    await Then('The "Settings" modal opens'); 
    await And('the modal displays the "Settings" section with display, timing, and visibility options'); 
    await And('the modal displays the "Colour Settings" section'); 
    await And('the modal displays "Cancel" and "Apply" buttons at the bottom'); 
  });

  test('Disable "Display time slots in Day and Week views"', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The Settings modal is open and "Display time slots in Day and Week views" is checked'); 
    await When('The user unchecks the checkbox and clicks Apply'); 
    await Then('The setting is saved, the modal closes, and the Day and Week calendar views no longer show hourly time slots'); 
  });

  test('Toggle "Shared Calendar Separate" option', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The Settings modal is open and "Shared Calendar Separate" is checked'); 
    await When('The user unchecks the checkbox and clicks Apply'); 
    await Then('The setting is saved and shared calendars are displayed together with the user\'s own calendar on the main calendar view'); 
  });

  test('Close the modal with the "X" icon', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The Settings modal is open with unsaved changes'); 
    await When('The user clicks the "X" icon in the top-right corner'); 
    await Then('The modal closes without saving any changes, identical to clicking Cancel'); 
  });

  test('Prevent End Time earlier than Start Time', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The Settings modal is open with Start time "08:00" and End time "19:00"'); 
    await When('The user sets End time to "07:00", which is earlier than the Start time, and clicks Apply'); 
    await Then('The system displays a validation message and does not save the settings until the End time is later than the Start time'); 
  });

  test('Save changes with the "Apply" button', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The user has changed one or more values in the Settings or Colour Settings sections'); 
    await When('The user clicks "Apply"'); 
    await Then('All changed settings are persisted, the modal closes, and the calendar view reflects the updated settings immediately'); 
  });

  test('Discard changes with the "Cancel" button', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The user has changed one or more values in the Settings or Colour Settings sections without clicking Apply'); 
    await When('The user clicks "Cancel"'); 
    await Then('The modal closes without saving any changes, and the calendar retains its previous settings'); 
  });

  test('Verify the calendar setting are displayed correctley', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the user navigates to the Setting page'); 
    await When('user open the setting page'); 
    await Then('The calender setting should open within acceptable time'); 
  });

  test('calender setting display consistently across browser', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('user navigate to the calender settings'); 
    await When('Page view on chrome,firfox, and safari'); 
    await Then('calender setting should render across all browsers'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/calendar/ calendarSettings.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given The user is on the calendar main view","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When The user clicks the \"Settings\" button","stepMatchArguments":[{"group":{"start":20,"value":"\"Settings\"","children":[{"start":21,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then The \"Settings\" modal opens","stepMatchArguments":[{"group":{"start":4,"value":"\"Settings\"","children":[{"start":5,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the modal displays the \"Settings\" section with display, timing, and visibility options","stepMatchArguments":[{"group":{"start":23,"value":"\"Settings\"","children":[{"start":24,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the modal displays the \"Colour Settings\" section","stepMatchArguments":[{"group":{"start":23,"value":"\"Colour Settings\"","children":[{"start":24,"value":"Colour Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the modal displays \"Cancel\" and \"Apply\" buttons at the bottom","stepMatchArguments":[{"group":{"start":19,"value":"\"Cancel\"","children":[{"start":20,"value":"Cancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"Apply\"","children":[{"start":33,"value":"Apply","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":18,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given The Settings modal is open and \"Display time slots in Day and Week views\" is checked","stepMatchArguments":[{"group":{"start":31,"value":"\"Display time slots in Day and Week views\"","children":[{"start":32,"value":"Display time slots in Day and Week views","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When The user unchecks the checkbox and clicks Apply","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then The setting is saved, the modal closes, and the Day and Week calendar views no longer show hourly time slots","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":24,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given The Settings modal is open and \"Shared Calendar Separate\" is checked","stepMatchArguments":[{"group":{"start":31,"value":"\"Shared Calendar Separate\"","children":[{"start":32,"value":"Shared Calendar Separate","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When The user unchecks the checkbox and clicks Apply","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then The setting is saved and shared calendars are displayed together with the user's own calendar on the main calendar view","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":30,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given The Settings modal is open with unsaved changes","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When The user clicks the \"X\" icon in the top-right corner","stepMatchArguments":[{"group":{"start":20,"value":"\"X\"","children":[{"start":21,"value":"X","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then The modal closes without saving any changes, identical to clicking Cancel","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":36,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given The Settings modal is open with Start time \"08:00\" and End time \"19:00\"","stepMatchArguments":[{"group":{"start":43,"value":"\"08:00\"","children":[{"start":44,"value":"08:00","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"19:00\"","children":[{"start":65,"value":"19:00","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When The user sets End time to \"07:00\", which is earlier than the Start time, and clicks Apply","stepMatchArguments":[{"group":{"start":26,"value":"\"07:00\"","children":[{"start":27,"value":"07:00","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then The system displays a validation message and does not save the settings until the End time is later than the Start time","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":42,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given The user has changed one or more values in the Settings or Colour Settings sections","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When The user clicks \"Apply\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Apply\"","children":[{"start":17,"value":"Apply","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then All changed settings are persisted, the modal closes, and the calendar view reflects the updated settings immediately","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":48,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given The user has changed one or more values in the Settings or Colour Settings sections without clicking Apply","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When The user clicks \"Cancel\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Cancel\"","children":[{"start":17,"value":"Cancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then The modal closes without saving any changes, and the calendar retains its previous settings","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":54,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given the user navigates to the Setting page","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When user open the setting page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then The calender setting should open within acceptable time","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":61,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the scheduling application And the user is on the calendar main view And the user clicks the \"Settings\" button, opening the Settings modal","isBg":true,"stepMatchArguments":[{"group":{"start":117,"value":"\"Settings\"","children":[{"start":118,"value":"Settings","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given user navigate to the calender settings","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When Page view on chrome,firfox, and safari","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then calender setting should render across all browsers","stepMatchArguments":[]}]},
]; // bdd-data-end