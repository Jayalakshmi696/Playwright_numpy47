// Generated from: features\calendar\calenderDate Selection.feature
import { test } from "playwright-bdd";

test.describe('Calender date Selection icon View', () => {

  test.beforeEach('Background', async ({ Given, And }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged into the SuitCRM'); 
    await And('the user navigates to the "Calendar" module in the menu'); 
  });
  
  test('veryfying the select Date popup on clicking the calendar selection icon', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the Calendar page'); 
    await When('user click on the calender date selection icon'); 
    await Then('popup Window is displayed as an overlay on top of the calendar page'); 
  });

  test('User checking the "Today "button', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('user clicks the "today "button'); 
    await Then('pop up window will  closes and todays calender in selected view'); 
  });

  test('User checking the "navigation "button', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('user clicks prevs- next navigation'); 
    await Then('window changes  corresoponding" month", "year"'); 
  });

  test('Closing the tab does not affect the page state', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('user click "close" button without any action'); 
    await Then('the page session remains active without changes'); 
  });

  test('Verify the calendar calender date view are displayed correctley', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('the user navigates to the Dat e selection icon page'); 
    await When('user open the Calender Date Selection icon  page'); 
    await Then('The calender Icon open within acceptable time'); 
  });

  test('The calender Icon display consistently across browser', { tag: ['@calendar', '@nonFunctional'] }, async ({ Given, When, Then }) => { 
    await Given('user navigate to the calender settings'); 
    await When('Page view on chrome,firfox, and safari'); 
    await Then('calender setting should render across all browsers'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\calendar\\calenderDate Selection.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user is on the Calendar page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When user click on the calender date selection icon","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then popup Window is displayed as an overlay on top of the calendar page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user clicks the \"today \"button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then pop up window will  closes and todays calender in selected view","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user clicks prevs- next navigation","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then window changes  corresoponding\" month\", \"year\"","stepMatchArguments":[{"group":{"start":40,"value":"\"year\"","children":[{"start":41,"value":"year","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":25,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When user click \"close\" button without any action","stepMatchArguments":[{"group":{"start":11,"value":"\"close\"","children":[{"start":12,"value":"close","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the page session remains active without changes","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given the user navigates to the Dat e selection icon page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When user open the Calender Date Selection icon  page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then The calender Icon open within acceptable time","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":37,"tags":["@calendar","@nonFunctional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the SuitCRM","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user navigates to the \"Calendar\" module in the menu","isBg":true,"stepMatchArguments":[{"group":{"start":26,"value":"\"Calendar\"","children":[{"start":27,"value":"Calendar","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given user navigate to the calender settings","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Page view on chrome,firfox, and safari","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then calender setting should render across all browsers","stepMatchArguments":[]}]},
]; // bdd-data-end