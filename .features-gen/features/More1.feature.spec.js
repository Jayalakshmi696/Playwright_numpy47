// Generated from: features\More1.feature
import { test } from "../../fixtures/suite8Fixtures.js";

test.describe('More module dropdown list functionality of suite8demo application', () => {

  test.beforeEach('Background', async ({ Given, page, userProfilePage }, testInfo) => { if (testInfo.error) return;
    await Given('User successfully logged into the suite8demo application', null, { page, userProfilePage }); 
  });
  
  test('Verify More module dropdown list', { tag: ['@MoreModule1', '@Moredropdown'] }, async ({ When, Then, more1Page }) => { 
    await When('the user clicks on More module from left navigation', null, { more1Page }); 
    await Then('the user should see the list of fallowing items in dropdown', {"dataTable":{"rows":[{"cells":[{"value":"Home"}]},{"cells":[{"value":"Emails"}]},{"cells":[{"value":"Campaigns"}]},{"cells":[{"value":"Calls"}]},{"cells":[{"value":"Meetings"}]}]}}, { more1Page }); 
  });

  test('HomePage Navigation', { tag: ['@MoreModule1', '@MoreHome'] }, async ({ When, Then, more1Page }) => { 
    await When('User clicks Home item from More', null, { more1Page }); 
    await Then('User is navigating to the HomePage', null, { more1Page }); 
  });

  test('Verify Email page navigation', { tag: ['@MoreModule1', '@MoreEmail'] }, async ({ When, Then, more1Page }) => { 
    await When('User clicks Email item from More', null, { more1Page }); 
    await Then('User is navigating to the Email page', null, { more1Page }); 
  });

  test('Verify Campaigns page navigation', { tag: ['@MoreModule1', '@MoreCampaigns'] }, async ({ When, Then, more1Page }) => { 
    await When('User clicks Campaigns item from More', null, { more1Page }); 
    await Then('User is navigating to the Campaigns page', null, { more1Page }); 
  });

  test('Verify Calls page navigation', { tag: ['@MoreModule1', '@MoreCalls'] }, async ({ When, Then, more1Page }) => { 
    await When('User clicks Calls item from More', null, { more1Page }); 
    await Then('User is navigating to the Calls page', null, { more1Page }); 
  });

  test('Verify Meetings page navigation', { tag: ['@MoreModule1', '@MoreMeetings'] }, async ({ When, Then, more1Page }) => { 
    await When('User clicks Meetings item from More', null, { more1Page }); 
    await Then('User is navigating to the Meetings page', null, { more1Page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More1.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@MoreModule1","@Moredropdown"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user clicks on More module from left navigation","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the user should see the list of fallowing items in dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":20,"tags":["@MoreModule1","@MoreHome"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User clicks Home item from More","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the HomePage","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":24,"tags":["@MoreModule1","@MoreEmail"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User clicks Email item from More","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Email page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":28,"tags":["@MoreModule1","@MoreCampaigns"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User clicks Campaigns item from More","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Campaigns page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":32,"tags":["@MoreModule1","@MoreCalls"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks Calls item from More","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Calls page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":36,"tags":["@MoreModule1","@MoreMeetings"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User successfully logged into the suite8demo application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When User clicks Meetings item from More","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User is navigating to the Meetings page","stepMatchArguments":[]}]},
]; // bdd-data-end