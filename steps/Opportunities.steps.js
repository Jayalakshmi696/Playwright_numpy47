import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/suite8Fixtures.js';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();
import { OpportunitiesPage } from '../pages/OpportunitiesPage.js';
import opportunitiesData from '../test-data/opportunitiesData.json'
  with { type: 'json' };
  import { logger } from "../utils/logger.js";clear

Then('User should see Opportunities menu in the menu bar', async ({opportunitiesPage}) => {
  // Step: Then User should see Opportunities menu in the menu bar
  // From: features\opportunities.feature:10:5

 
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.assertMenuVisible();
});


When('User hovers over the Opportunities Menu', async ({opportunitiesPage}) => {
  // Step: When User hovers over the Opportunities Menu
  // From: features\opportunities.feature:15:7

 
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunitiesMenu();
});


Then('Opportunities menu drop down list is displayed', async ({opportunitiesPage}) => {
  // Step: Then Opportunities menu drop down list is displayed
  // From: features\opportunities.feature:16:7
  // const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.assertDropdownVisible();
});

Given('Opportunities menu drop-down list is displayed', async ({opportunitiesPage}) => {
  // Step: Given Opportunities menu drop-down list is displayed
  // From: features\opportunities.feature:20:9
 // const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunitiesMenu();
  await opportunitiesPage.assertDropdownVisible();
});

When('User clicks on the Create Opportunities option in the Opportunities Menu', async ({opportunitiesPage}) => {
  // Step: When User clicks on the Create Opportunities option in the Opportunities Menu
  // From: features\opportunities.feature:21:9
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickCreateOpportunities();

});

Then('User should see the correct components on the Create Opportunities page', async ({opportunitiesPage}, dataTable) => {
  // Step: Then User should see the correct components on the Create Opportunities page
  // From: features\opportunities.feature:22:9
   //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.assertCreatePageComponents(dataTable);

 
});

Given('User is on the Create Opportunities page', async ({opportunitiesPage}) => {
  // Step: Given User is on the Create Opportunities page
  // From: features\opportunities.feature:30:11
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunitiesMenu();
  await opportunitiesPage.clickCreateOpportunities();

  });

When('User enters Opportunities Valid Data and clicks the Save button', async ({opportunitiesPage}) => {
  // Step: When User enters Opportunities Valid Data and clicks the Save button
  // From: features\opportunities.feature:31:11
  //const opportunitiesPage = new OpportunitiesPage(page);
   //const contactsPage = new ContactsPage(page);
  await opportunitiesPage.fillOpportunityForm('Valid Data');
  await opportunitiesPage.clickFormAction('Save');
});

Then('User should see create Opportunities Detailed view page of new Opportunity', async ({opportunitiesPage}) => {
  // Step: Then User should see create Opportunities Detailed view page of new Opportunity
  // From: features\opportunities.feature:32:11
  //const opportunitiesPage = new OpportunitiesPage(page);

   await opportunitiesPage.assertDetailViewVisible();
});

When('User enters Opportunities No Data and clicks the Save button', async ({opportunitiesPage}) => {
  // Step: When User enters Opportunities No Data and clicks the Save button
  // From: features\opportunities.feature:31:11

  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.fillOpportunityForm('No Data');
  await opportunitiesPage.clickFormAction('Save');
});

Then('User should see create Opportunities Required field error messages', async ({opportunitiesPage}) => {
  // Step: Then User should see create Opportunities Required field error messages
  // From: features\opportunities.feature:32:11
  //const opportunitiesPage = new OpportunitiesPage(page)

  await opportunitiesPage.assertRequiredFieldErrorsVisible();
});
When('User enters Opportunities Valid Data and clicks the Cancel button', async ({opportunitiesPage}) => {
  // Step: When User enters Opportunities Valid Data and clicks the Cancel button
  // From: features\opportunities.feature:31:11
  //const opportunitiesPage = new OpportunitiesPage(page);

  await opportunitiesPage.fillOpportunityForm('Valid Data');
  await opportunitiesPage.clickFormAction('Cancel');
  
});

Then('User should see create Opportunities Confirmation dialog appears', async ({opportunitiesPage}) => {
  // Step: Then User should see create Opportunities Confirmation dialog appears
  // From: features\opportunities.feature:32:11
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.assertConfirmationDialogVisible();
});

When('User clicks on the {string} option in the Opportunities Menu', async ({opportunitiesPage}, datatable) => {
  //const opportunitiesPage = new OpportunitiesPage(page);
  //await opportunitiesPage.clickOpportunitiesMenuOption(arg);
   /*async ({ opportunities }, dataTable) => {
    await opportunities.assertDashboardComponents(dataTable);
  }*/

    async ({ opportunitiesPage }, optionName) => {
    await opportunitiesPage.clickMenuOption(optionName);
  }
});
 // await opportunitiesPage.assertDashboardComponents(datatable);
  // Step: When User clicks on the "View Opportunities" option in the Opportunities Menu
  // From: features\opportunities.feature:42:9
//});

Then('User should see the correct components on the Opportunities dashboard page', async ({opportunitiesPage}, dataTable) => {
  // Step: Then User should see the correct components on the Opportunities dashboard page
  // From: features\opportunities.feature:43:9
  //const opportunitiesPage = new OpportunitiesPage(page);

   async ({ opportunitiesPage }, dataTable) => {
    await opportunitiesPage.assertDashboardComponents(dataTable);
  }
  //await opportunitiesPage.assertDashboardComponents(dataTable);
});

Given('User has opened Opportunities menu', async ({opportunitiesPage}) => {
  // Step: Given User has opened Opportunities menu
  // From: features\opportunities.feature:53:9
  //const opportunitiesPage = new OpportunitiesPage(page);
   await opportunitiesPage.hoverOpportunitiesMenu();
});

When('User clicks the Import Opportunities option', async ({opportunitiesPage}) => {
  // Step: When User clicks the Import Opportunities option
  // From: features\opportunities.feature:54:9
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunitiesMenu();
  await opportunitiesPage.clickImportOpportunities();
});

Then('User should see the import Opportunities page with correct components', async ({opportunitiesPage}, dataTable) => {
  // Step: Then User should see the import Opportunities page with correct components
  // From: features\opportunities.feature:55:9
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.assertImportPageComponents(dataTable);
  
});

//Testing the import functionality for Opportunities


When(
  'User uploads Opportunities {word} {word} and clicks Next button',
  async ({ opportunitiesPage }, firstWord, secondWord) => {
    const inputFileType = `${firstWord} ${secondWord}`;

    await opportunitiesPage.hoverOpportunitiesMenu();
    await opportunitiesPage.clickImportOpportunities();

    await opportunitiesPage.uploadOpportunitiesFile(inputFileType);
  }
);






/*
When('User uploads Opportunities Valid File and clicks Next button', async ({opportunitiesPage}) => {
  // Step: When User uploads Opportunities Valid File and clicks Next button
  // From: features\opportunities.feature:73:11
   await opportunitiesPage.hoverOpportunitiesMenu();
  await opportunitiesPage.clickImportOpportunities();
  await opportunitiesPage.clickImportchoosefileButton();
  await opportunitiesPage.uploadFile(OpportunitiesCSVFile);
   //const opportunitiesPage = new OpportunitiesPage(page);
  //await opportunitiesPage.clickNext();
 // await opportunitiesPage.uploadFile(fileType);
});

*/
Then('User should see Import Opportunities Detailed view page of new Opportunity', async ({opportunitiesPage}) => {
  // Step: Then User should see Import Opportunities Detailed view page of new Opportunity
  // From: features\opportunities.feature:67:11
  //const opportunitiesPage = new OpportunitiesPage(page);
 await opportunitiesPage.assertConfirmImportOpportunityButtonVisible();
});
/*
When('User uploads Opportunities No File and clicks Next button', async ({opportunitiesPage}) => {
  // Step: When User uploads Opportunities No File and clicks Next button
  // From: features\opportunities.feature:73:11
  //const opportunitiesPage = new OpportunitiesPage(page);
   await opportunitiesPage.hoverOpportunitiesMenu();
  await opportunitiesPage.clickImportOpportunities();
   await opportunitiesPage.NoFile();
});

 */

Then('User should see Import Opportunities Select a Vcard file Alert appears', async ({opportunitiesPage}) => {
  // Step: Then User should see Import Opportunities Select a Vcard file Alert appears
  // From: features\opportunities.feature:67:11
  //const opportunitiesPage = new OpportunitiesPage(page);
 
  await opportunitiesPage.verifyNoFileValidation();
});
/*
 When('User uploads Opportunities InValid File and clicks Next button', async ({opportunitiesPage}) => {
  // Step: When User uploads Opportunities InValid File and clicks Next button
  // From: features\opportunities.feature:73:11
  //const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunitiesMenu();
  await opportunitiesPage.clickImportOpportunities();
  await opportunitiesPage.clickImportchoosefileButton();
  await opportunitiesPage.uploadFileInvalid();
});
 

*/
Then('User should see Import Opportunities Required field error messages', async ({opportunitiesPage}) => { 
  // Step: Then User should see Import Opportunities Required field error messages
  // From: features\opportunities.feature:67:11
  await opportunitiesPage.verifyInvalidFileNameError();
});




