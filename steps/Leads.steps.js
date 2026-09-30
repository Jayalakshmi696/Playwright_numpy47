import { createBdd } from 'playwright-bdd';

import { test} from '../fixtures/suite8Fixtures.js';

import { expect } from '@playwright/test';

//import { expect } from '@playwright/test';

import { LeadsPage } from '../pages/LeadsPage.js';
const { Given, When, Then } = createBdd(test);

/*Given('User is on the Home dashboard page', async ({}) => {
  // Step: Given User is on the Home dashboard page
  // From: features\Leads.feature:13:7
});*/

When('User hovers over the Leads Menu', async ({leadsPage}) => {
  // Step: When User hovers over the Leads Menu
  // From: features\Leads.feature:14:7
  await leadsPage.openLeadsDropDown();
});

Then('Leads menu drop down list is displayed', async ({leadsPage}) => {
  // Step: Then Leads menu drop down list is displayed
  // From: features\Leads.feature:15:7
  await leadsPage.verifyLeadsDropDownList();
});

Given('Leads menu drop-down list is displayed', async ({leadsPage}) => {
  // Step: Given Leads menu drop-down list is displayed
  // From: features\Leads.feature:19:9
  await leadsPage.openLeadsDropDown();
});

When('User clicks on the Create Lead option in the Leads Menu', async ({leadsPage}) => {
  // Step: When User clicks on the Create Lead option in the Leads Menu
  // From: features\Leads.feature:20:9
  await leadsPage.clickCreateLead();
});

Then('User should see the correct components on the Create Lead page', async ({leadsPage}, dataTable) => {
  // Step: Then User should see the correct components on the Create Lead page
  // From: features\Leads.feature:21:9
  const componentsList = dataTable.hashes();
  //await leadsPage.verifyCreateLeadPageComponents(componentsList);
  await leadsPage.verifyLeadsPageComponents(componentsList);
});

Given('User is on the Create Lead page', async ({leadsPage}) => {
  // Step: Given User is on the Create Lead page
  // From: features\Leads.feature:29:11
  await leadsPage.openLeadsDropDown();
  await leadsPage.clickCreateLead();
});

When('User enters Leads {string} and clicks the {string} button', async ({leadsPage}, Data, Action) => {
  // Step: When User enters Leads Valid Data1 and clicks the Save button
  // From: features\Leads.feature:30:11
  await leadsPage.fillCreateLeadPage(Data);
  await leadsPage.confirmLeadCreate(Action);
});

Then('User should see Create Leads {string}', async ({leadsPage}, Result) => {
  // Step: Then User should see Create Leads Detailed view page of new Lead
  // From: features\Leads.feature:31:11
  await leadsPage.verifyCreateLeadResult(Result);
});

When('User clicks on the View Leads option in the Leads Menu', async ({leadsPage}) => {
  // Step: When User clicks on the View Leads option in the Leads Menu
  // From: features\Leads.feature:41:9
  await leadsPage.clickViewLead();
});

Then('User should see the correct components on the Leads dashboard page', async ({leadsPage}, dataTable) => {
  // Step: Then User should see the correct components on the Leads dashboard page
  // From: features\Leads.feature:42:9
  const componentsList = dataTable.hashes();
  //await leadsPage.verifyViewLeadsComponents(componentsList);
  await leadsPage.verifyLeadsPageComponents(componentsList);
});

When('User clicks on Create Lead from vCard option', async ({leadsPage}) => {
  // Step: When User clicks on Create Lead from vCard option
  // From: features\Leads.feature:53:9
  await leadsPage.clickCreateLeadFromVcard();
});

Then('User should see the import vCard page with correct components', async ({leadsPage}, dataTable)=> {
  // Step: Then User should see the import vCard page with correct components
  // From: features\Leads.feature:54:9
  const componentsList = dataTable.hashes();
  //await leadsPage.verifyImportVCardComponents(componentsList);
  await leadsPage.verifyLeadsPageComponents(componentsList);
});

Given('User is on import vCard page', async ({leadsPage}) => {
  // Step: Given User is on import vCard page
  // From: features\Leads.feature:62:11
  await leadsPage.openLeadsDropDown();
  await leadsPage.clickCreateLeadFromVcard();
});

When('User uploads {string} and clicks Import Vcard button', async ({leadsPage}, InputFile) => {
  // Step: When User uploads "<Input File>" and clicks Import Vcard button
  // From: features\Leads.feature:63:11
  //await leadsPage.uploadAndImportVCardFiles(InputFile);
  await leadsPage.uploadAndImportAllLeadFiles(InputFile,'importVcard');
});

Then('User should see the Import vCard {string}', async ({leadsPage}, Result) => {
  // Step: Then User should see the Import vCard "Detailed view page of new Lead"
  // From: features\Leads.feature:64:11
  await leadsPage.verifyVCardResult(Result);
});

When('User clicks on Import Leads option in Leads Menu', async ({leadsPage}) => {
  // Step: When User clicks on Import Leads option in Leads Menu
  // From: features\Leads.feature:74:9
  await leadsPage.openLeadsDropDown();
  await leadsPage.clickCreateLeadFromImport();
});

Then('User should see the import Leads page with correct components', async ({leadsPage}, dataTable)=> {
  // Step: Then User should see the import Leads page with correct components
  // From: features\Leads.feature:75:9
    const componentsList = dataTable.hashes();
    //await leadsPage.verifyImportLeadsComponents(componentsList);
    await leadsPage.verifyLeadsPageComponents(componentsList);
});

Given('User is on Import Leads page', async ({leadsPage}) => {
  // Step: Given User is on Import Leads page
  // From: features\Leads.feature:85:11
    await leadsPage.openLeadsDropDown();
    await leadsPage.clickCreateLeadFromImport();

});

When('User uploads Leads {string} and clicks Next button', async ({leadsPage}, InputFile) => {
  // Step: When User uploads Leads "ValidLeadFile" and clicks Next button
  // From: features\Leads.feature:86:11
  //await leadsPage.uploadAndImportLeadFiles(InputFile);
  await leadsPage.uploadAndImportAllLeadFiles(InputFile,'importLead');
});

Then('User should see Import Leads {string}', async ({leadsPage}, Result) => {
  // Step: Then User should see Import Leads "Leads dashboard page"
  // From: features\Leads.feature:87:11
  await leadsPage.verifyLeadResult(Result);
});

/*When('User uploads Leads No File and clicks Next button', async ({}) => {
  // Step: When User uploads Leads No File and clicks Next button
  // From: features\Leads.feature:86:11
});

Then('User should see Import Leads Required field error messages', async ({}) => {
  // Step: Then User should see Import Leads Required field error messages
  // From: features\Leads.feature:87:11
});

When('User uploads Leads InValid File and clicks Next button', async ({}) => {
  // Step: When User uploads Leads InValid File and clicks Next button
  // From: features\Leads.feature:86:11
});

Then('User should see Import Leads Invalid Import File name message', async ({}) => {
  // Step: Then User should see Import Leads Invalid Import File name message
  // From: features\Leads.feature:87:11
});*/

Given('User opened and viewed a lead record', async ({leadsPage}) => {
  // Step: Given User opened and viewed a lead record
  // From: features\Leads.feature:96:9
  await leadsPage.openLeadsDropDown();
  await leadsPage.clickViewLead();
  await leadsPage.openTopLeadRecord();
});

When('User hovers over the Leads menu', async ({leadsPage}) => {
  // Step: When User hovers over the Leads menu
  // From: features\Leads.feature:97:9
  await leadsPage.openLeadsDropDown();
});

Then('User should see the option Recently viewed in the Leads menu', async ({leadsPage}) => {
  // Step: Then User should see the option Recently viewed in the Leads menu
  // From: features\Leads.feature:98:9
  await leadsPage.checkRecentViewInLeads();
});

When('User hovers over the Recently viewed option', async ({leadsPage}) => {
  // Step: When User hovers over the Recently viewed option
  // From: features\Leads.feature:103:11
  await leadsPage.openLeadsDropDown();
  await leadsPage.checkRecentViewInLeads();

});

Then('User should see the name of the recently viewed Lead record in its drop down', async ({leadsPage}) => {
  // Step: Then User should see the name of the recently viewed Lead record in its drop down  // From: features\Leads.feature:104:11
  await leadsPage.checkRecentViewLeadsSubMenu();
});

When('User clicks and opens the recently viewed Lead record from the Leads menu', async ({leadsPage}) => {
  // Step: When User clicks and opens the recently viewed Lead record from the Leads menu
  // From: features\Leads.feature:107:13
  await leadsPage.openLeadsDropDown();
  await leadsPage.checkRecentViewInLeads();
  await leadsPage.checkRecentViewLeadsSubMenu();

});

Then('User should see detailed view page of the recently viewed Lead record', async ({leadsPage}) => {
  // Step: Then User should see detailed view page of the recently viewed Lead record
  // From: features\Leads.feature:108:13
  await leadsPage.openRecentViewedLead();
});