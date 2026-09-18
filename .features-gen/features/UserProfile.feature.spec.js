// Generated from: features\UserProfile.feature
import { test } from "playwright-bdd";

test.describe('User Profile functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application'); 
  });
  
  test('User can view the User Profile dropdown options', { tag: ['@ProfileModule'] }, async ({ When, Then }) => { 
    await When('the user clicks the User Profile icon'); 
    await Then('the User Profile dropdown should contain following options', {"dataTable":{"rows":[{"cells":[{"value":"Logged-in user name"}]},{"cells":[{"value":"Edit Profile"}]},{"cells":[{"value":"Employees"}]},{"cells":[{"value":"Community Forum"}]},{"cells":[{"value":"About"}]},{"cells":[{"value":"Logout"}]}]}}); 
  });

  test('Verify Edit Profile page navigation', { tag: ['@ProfileModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on Edit Profile from dropdown'); 
    await Then('the user should be navigated to Edit Profile page'); 
  });

  test('Verify Employees page navigation', { tag: ['@ProfileModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on Employees from dropdown'); 
    await Then('the user should be navigated to Employees page.'); 
  });

  test('Verify Community Forum page navigation', { tag: ['@ProfileModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on Community Forum from dropdown'); 
    await Then('the user should be navigated to Community Forum page.'); 
  });

  test('Verify About page navigation', { tag: ['@ProfileModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on About from dropdown'); 
    await Then('the user should be navigated to About page.'); 
  });

  test('Verify Logout functionality', { tag: ['@ProfileModule'] }, async ({ When, Then }) => { 
    await When('the user clicks on Logout from dropdown'); 
    await Then('the user should be logged out and navigated to login page.'); 
  });

  test('Verify Userprofile Last name field is validation', { tag: ['@ProfileModule'] }, async ({ Given, When, Then }) => { 
    await Given('User is on Userprofile tab of User profile page'); 
    await When('User clicks the save button without entering Last Name field'); 
    await Then('User should see the error message "Missing required field: Last Name"'); 
  });

  test('Verify Upload photo functionality in User profile page', { tag: ['@ProfileModule'] }, async ({ Given, When, Then }) => { 
    await Given('User is on Userprofile tab of User profile page'); 
    await When('User clicks on choose file button and selects a photo to upload'); 
    await Then('User should see the uploaded photo in User profile page'); 
  });

  test('Verifying settings popup is displayed', { tag: ['@ProfileModule'] }, async ({ Given, When, Then }) => { 
    await Given('User is on Userprofile tab of User profile page'); 
    await When('User clicks settings button'); 
    await Then('settings popup will display with all fileds'); 
  });

  test('Verify the user is able to add email address', { tag: ['@ProfileModule'] }, async ({ Given, When, Then }) => { 
    await Given('User is on Userprofile tab of User profile page'); 
    await When('User adds an email address by clicking the plus (+) button and saves the profile'); 
    await Then('User should see the email address added in the profile'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\UserProfile.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":11,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the User Profile icon","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the User Profile dropdown should contain following options","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":21,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on Edit Profile from dropdown","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Edit Profile page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":25,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When the user clicks on Employees from dropdown","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Employees page.","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":29,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user clicks on Community Forum from dropdown","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Community Forum page.","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":33,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When the user clicks on About from dropdown","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to About page.","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":37,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user clicks on Logout from dropdown","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged out and navigated to login page.","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":42,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When User clicks the save button without entering Last Name field","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message \"Missing required field: Last Name\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Missing required field: Last Name\"","children":[{"start":35,"value":"Missing required field: Last Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":47,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When User clicks on choose file button and selects a photo to upload","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see the uploaded photo in User profile page","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":52,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When User clicks settings button","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then settings popup will display with all fileds","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":57,"tags":["@ProfileModule"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When User adds an email address by clicking the plus (+) button and saves the profile","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then User should see the email address added in the profile","stepMatchArguments":[]}]},
]; // bdd-data-end