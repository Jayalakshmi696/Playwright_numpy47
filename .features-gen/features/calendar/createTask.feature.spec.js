// Generated from: features\calendar\createTask.feature
import { test } from "playwright-bdd";

test.describe('Create Task page', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('The user is on Create Task Page'); 
  });
  
  test('Error message is displayed when a mandatory field is not selected', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then, And }) => { 
    await Given('The user is on  "Create Task Page" of Calender'); 
    await When('the user forgot to fill the "Subject" field  and user click the "save "button'); 
    await Then('An error message"Missing required field: Subject" Displyed'); 
    await And('the user forgot to select the mandatory field "Priority" and user click "save "button'); 
    await And('An error message"Missing required field: Priority" Displyed'); 
  });

  test('Verify document is saved successfully when all mandatory fields are filled', { tag: ['@calendar', '@functional'] }, async ({ When, Then, And }) => { 
    await When('user filled "*mandatry field " and click save'); 
    await Then('window refresh and saved page will reload  with edit  buttons "Edit", and"Action"'); 
    await And('user click "cancel" button without any action'); 
    await And('Page will navigate to "Task Menu" button in the top navigation Menu and related page open'); 
  });

  test('Verify task detail page is displayed after creating a task', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The user is on the page with "Edit" and "Actions" buttons'); 
    await When('we click "edit "button'); 
    await Then('window refresh and saved page will reload  with  buttons "Save", and"Cancel" button'); 
  });

  test('verify action and edit button is displayed in edit task page', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('click "Action" button'); 
    await Then('The drop down contain"Duplicate", and Delete"option will show'); 
  });

  test('Verify duplicate page is created and listed in the task page', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('click "Action" Botton and selected"Duplicate"'); 
    await Then('Duplicate page created and listed in "Task"page will display'); 
  });

  test('Verify multiple duplicates can be created', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('user click "duplicate" page multiple time'); 
    await Then('Each duplicated page sholud be created  and listed in  "Creat Task page"'); 
  });

  test('Verify created page can be deleted', { tag: ['@calendar', '@functional'] }, async ({ When, Then, And }) => { 
    await When('user click "action" and selected "delete" option'); 
    await Then('pop up will show with message"Are you sure want to delete this record?" with "cancel",and "Proceed" button.'); 
    await And('user click "Proceed" button'); 
    await And('created task will delete and message will come"record delet succesfully"'); 
  });

  test('Verify basic filter popup opens on clicking the search/dropdown arrow', { tag: ['@calendar', '@functional'] }, async ({ Given, When, Then }) => { 
    await Given('The user is on "Other" View tab from "Calender Creat Task Page"'); 
    await When('user click on "pointer" search   near "Assighned to feild"'); 
    await Then('default userlist  with "Basic Filter" section collapsed page pop up  And popus should list with"Name","UserName","job title","Department"."Email,"Phone"columns'); 
  });

  test('Verify popup closes and selected user is set in Assigned To field', { tag: ['@calendar', '@functional'] }, async ({ When, Then }) => { 
    await When('user click "user\'s" name'); 
    await Then('pop up window close the selected user\'s name should be displayed in the "Assigned To" field'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\calendar\\createTask.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given The user is on  \"Create Task Page\" of Calender","stepMatchArguments":[{"group":{"start":16,"value":"\"Create Task Page\"","children":[{"start":17,"value":"Create Task Page","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user forgot to fill the \"Subject\" field  and user click the \"save \"button","stepMatchArguments":[{"group":{"start":28,"value":"\"Subject\"","children":[{"start":29,"value":"Subject","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then An error message\"Missing required field: Subject\" Displyed","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the user forgot to select the mandatory field \"Priority\" and user click \"save \"button","stepMatchArguments":[{"group":{"start":46,"value":"\"Priority\"","children":[{"start":47,"value":"Priority","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And An error message\"Missing required field: Priority\" Displyed","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When user filled \"*mandatry field \" and click save","stepMatchArguments":[{"group":{"start":12,"value":"\"*mandatry field \"","children":[{"start":13,"value":"*mandatry field ","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then window refresh and saved page will reload  with edit  buttons \"Edit\", and\"Action\"","stepMatchArguments":[{"group":{"start":62,"value":"\"Edit\"","children":[{"start":63,"value":"Edit","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And user click \"cancel\" button without any action","stepMatchArguments":[{"group":{"start":11,"value":"\"cancel\"","children":[{"start":12,"value":"cancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And Page will navigate to \"Task Menu\" button in the top navigation Menu and related page open","stepMatchArguments":[{"group":{"start":22,"value":"\"Task Menu\"","children":[{"start":23,"value":"Task Menu","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":23,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given The user is on the page with \"Edit\" and \"Actions\" buttons","stepMatchArguments":[{"group":{"start":29,"value":"\"Edit\"","children":[{"start":30,"value":"Edit","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Actions\"","children":[{"start":41,"value":"Actions","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When we click \"edit \"button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then window refresh and saved page will reload  with  buttons \"Save\", and\"Cancel\" button","stepMatchArguments":[{"group":{"start":57,"value":"\"Save\"","children":[{"start":58,"value":"Save","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":29,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When click \"Action\" button","stepMatchArguments":[{"group":{"start":6,"value":"\"Action\"","children":[{"start":7,"value":"Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then The drop down contain\"Duplicate\", and Delete\"option will show","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":34,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When click \"Action\" Botton and selected\"Duplicate\"","stepMatchArguments":[{"group":{"start":6,"value":"\"Action\"","children":[{"start":7,"value":"Action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Duplicate page created and listed in \"Task\"page will display","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":39,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When user click \"duplicate\" page multiple time","stepMatchArguments":[{"group":{"start":11,"value":"\"duplicate\"","children":[{"start":12,"value":"duplicate","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Each duplicated page sholud be created  and listed in  \"Creat Task page\"","stepMatchArguments":[{"group":{"start":55,"value":"\"Creat Task page\"","children":[{"start":56,"value":"Creat Task page","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":44,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When user click \"action\" and selected \"delete\" option","stepMatchArguments":[{"group":{"start":11,"value":"\"action\"","children":[{"start":12,"value":"action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"delete\"","children":[{"start":34,"value":"delete","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then pop up will show with message\"Are you sure want to delete this record?\" with \"cancel\",and \"Proceed\" button.","stepMatchArguments":[{"group":{"start":77,"value":"\"cancel\"","children":[{"start":78,"value":"cancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":90,"value":"\"Proceed\"","children":[{"start":91,"value":"Proceed","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And user click \"Proceed\" button","stepMatchArguments":[{"group":{"start":11,"value":"\"Proceed\"","children":[{"start":12,"value":"Proceed","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And created task will delete and message will come\"record delet succesfully\"","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":51,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given The user is on \"Other\" View tab from \"Calender Creat Task Page\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Other\"","children":[{"start":16,"value":"Other","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"Calender Creat Task Page\"","children":[{"start":38,"value":"Calender Creat Task Page","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When user click on \"pointer\" search   near \"Assighned to feild\"","stepMatchArguments":[{"group":{"start":14,"value":"\"pointer\"","children":[{"start":15,"value":"pointer","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"Assighned to feild\"","children":[{"start":39,"value":"Assighned to feild","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then default userlist  with \"Basic Filter\" section collapsed page pop up  And popus should list with\"Name\",\"UserName\",\"job title\",\"Department\".\"Email,\"Phone\"columns","stepMatchArguments":[{"group":{"start":23,"value":"\"Basic Filter\"","children":[{"start":24,"value":"Basic Filter","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":102,"value":"\"UserName\"","children":[{"start":103,"value":"UserName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":113,"value":"\"job title\"","children":[{"start":114,"value":"job title","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":125,"value":"\"Department\"","children":[{"start":126,"value":"Department","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":57,"tags":["@calendar","@functional"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given The user is on Create Task Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When user click \"user's\" name","stepMatchArguments":[{"group":{"start":11,"value":"\"user's\"","children":[{"start":12,"value":"user's","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then pop up window close the selected user's name should be displayed in the \"Assigned To\" field","stepMatchArguments":[{"group":{"start":72,"value":"\"Assigned To\"","children":[{"start":73,"value":"Assigned To","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end