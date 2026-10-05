// Generated from: features/UserProfile.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('User Profile functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('User can view the User Profile dropdown options', { tag: ['@ProfileModule', '@Userprofile'] }, async ({ When, Then, userProfilePage }) => { 
    await When('the user clicks the User Profile icon', null, { userProfilePage }); 
    await Then('the User Profile dropdown should contain following options', {"dataTable":{"rows":[{"cells":[{"value":"Logged-in user name"}]},{"cells":[{"value":"Edit Profile"}]},{"cells":[{"value":"Employees"}]},{"cells":[{"value":"Community Forum"}]},{"cells":[{"value":"About"}]},{"cells":[{"value":"Logout"}]}]}}, { userProfilePage }); 
  });

  test('Verify Edit Profile page navigation', { tag: ['@ProfileModule', '@UserProfileEdit'] }, async ({ When, Then, userProfilePage }) => { 
    await When('the user clicks on Edit Profile from dropdown', null, { userProfilePage }); 
    await Then('the user should be navigated to Edit Profile page', null, { userProfilePage }); 
  });

  test('Verify Employees page navigation', { tag: ['@ProfileModule', '@UserEmployee'] }, async ({ When, Then, userProfilePage }) => { 
    await When('the user clicks on Employees from dropdown', null, { userProfilePage }); 
    await Then('the user should be navigated to Employees page.', null, { userProfilePage }); 
  });

  test('Verify Community Forum page navigation', { tag: ['@ProfileModule', '@UserCommunityForum'] }, async ({ When, Then, userProfilePage }) => { 
    await When('the user clicks on Community Forum from dropdown', null, { userProfilePage }); 
    await Then('the user should be navigated to Community Forum page.', null, { userProfilePage }); 
  });

  test('Verify About page navigation', { tag: ['@ProfileModule', '@UserAbout'] }, async ({ When, Then, userProfilePage }) => { 
    await When('the user clicks on About from dropdown', null, { userProfilePage }); 
    await Then('the user should be navigated to About page.', null, { userProfilePage }); 
  });

  test('Verify Logout functionality', { tag: ['@ProfileModule', '@UserLogout'] }, async ({ When, Then, userProfilePage }) => { 
    await When('the user clicks on Logout from dropdown', null, { userProfilePage }); 
    await Then('the user should be logged out and navigated to login page.', null, { userProfilePage }); 
  });

  test('Verify Userprofile Last name field is validation', { tag: ['@ProfileModule', '@UserEditprofileLastname'] }, async ({ Given, When, Then, userProfilePage }) => { 
    await Given('User is on Userprofile tab of User profile page', null, { userProfilePage }); 
    await When('User clicks the save button without entering Last Name field', null, { userProfilePage }); 
    await Then('User should see the error message "Missing required field: Last Name"', null, { userProfilePage }); 
  });

  test('Verify Upload photo functionality in User profile page', { tag: ['@ProfileModule', '@UserUploadPhoto'] }, async ({ Given, When, Then, userProfilePage }) => { 
    await Given('User is on Userprofile tab of User profile page', null, { userProfilePage }); 
    await When('User clicks on choose file button and selects a photo to upload', null, { userProfilePage }); 
    await Then('User should see the uploaded photo in User profile page', null, { userProfilePage }); 
  });

  test('Verifying settings popup is displayed', { tag: ['@ProfileModule', '@UserSettings'] }, async ({ Given, When, Then, userProfilePage }) => { 
    await Given('User is on Userprofile tab of User profile page', null, { userProfilePage }); 
    await When('User clicks settings button', null, { userProfilePage }); 
    await Then('settings popup will display with all fileds', null, { userProfilePage }); 
  });

  test('Verify the user is able to add email address', { tag: ['@ProfileModule', '@UserAddEmail'] }, async ({ Given, When, Then, userProfilePage }) => { 
    await Given('User is on Userprofile tab of User profile page', null, { userProfilePage }); 
    await When('User adds an email address by clicking the plus (+) button and saves the profile', {"dataTable":{"rows":[{"cells":[{"value":"email"},{"value":"testuser@example.com"}]}]}}, { userProfilePage }); 
    await Then('User should see the email address added in the profile', null, { userProfilePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/UserProfile.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@ProfileModule","@Userprofile"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks the User Profile icon","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the User Profile dropdown should contain following options","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":23,"tags":["@ProfileModule","@UserProfileEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user clicks on Edit Profile from dropdown","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Edit Profile page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":28,"tags":["@ProfileModule","@UserEmployee"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the user clicks on Employees from dropdown","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Employees page.","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":33,"tags":["@ProfileModule","@UserCommunityForum"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When the user clicks on Community Forum from dropdown","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to Community Forum page.","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":38,"tags":["@ProfileModule","@UserAbout"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When the user clicks on About from dropdown","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then the user should be navigated to About page.","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":43,"tags":["@ProfileModule","@UserLogout"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When the user clicks on Logout from dropdown","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged out and navigated to login page.","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":48,"tags":["@ProfileModule","@UserEditprofileLastname"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When User clicks the save button without entering Last Name field","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then User should see the error message \"Missing required field: Last Name\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Missing required field: Last Name\"","children":[{"start":35,"value":"Missing required field: Last Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":54,"tags":["@ProfileModule","@UserUploadPhoto"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When User clicks on choose file button and selects a photo to upload","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should see the uploaded photo in User profile page","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":60,"tags":["@ProfileModule","@UserSettings"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When User clicks settings button","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then settings popup will display with all fileds","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":66,"tags":["@ProfileModule","@UserAddEmail"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given User is on Userprofile tab of User profile page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When User adds an email address by clicking the plus (+) button and saves the profile","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then User should see the email address added in the profile","stepMatchArguments":[]}]},
]; // bdd-data-end