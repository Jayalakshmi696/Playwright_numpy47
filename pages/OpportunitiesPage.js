import { expect } from '@playwright/test';
import { logger } from "../utils/logger.js";


const path = require('path');
const os = require('os');
const fs = require('fs');
const importConfig = require('../test-data/opportunitiesData.json');

export class OpportunitiesPage {
  constructor(page) {
    this.page = page;
    this.opportunitiesMenu = page.locator('a').filter({ hasText: /^Opportunities$/ });
    this.opportunitiesMenuDropdown = page.locator('a').filter({ hasText: /^Opportunities$/ });
    this.createOpportunitiesOption = page.getByRole('link', { name: 'Create Opportunity' });
    this.viewOpportunitiesOption = page.getByRole('link', { name: 'View Opportunities' });
    this.importOpportunitiesOption = page.getByRole('link', { name: 'Import Opportunities' });
    this.confirmmportopportunityButton = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });



     // ---------- Create Opportunities page ----------
    this.createPageTitle = page.getByText('Create', { exact: true });
    //this.createPageTitle = page.getByRole('heading', { name: 'Create' });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel'});
    this.basicTab = page.getByRole('tab', { name: 'BASIC' });
    this.otherTab = page.getByRole('tab', { name: 'OTHER' });
    this.requiredFieldErrors = page.getByText('Missing required field: Opportunity Name');
    this.confirmationDialog = page.locator('div').filter({ hasText: 'You are about to leave this' }).nth(5);
    //this.detailViewHeader = page.locator('[data-testid="opportunity-detail-header"]');
    this.opportunityName = `Test Opportunity `;
    this.detailViewHeader = page.locator('scrm-dynamic-label').getByText(this.opportunityName);
    //this.detailViewHeader = page.locator('scrm-dynamic-label')
    




    // Create Opportunities form fields
    this.opportunityNameField = page.getByRole('textbox').nth(1);
    this.closeDateField = page.getByRole('textbox', { name: 'yyyy-mm-dd' });
    this.stageField = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Prospecting Qualification' }).getByRole('combobox');
    this.amountField = page.locator('scrm-currency-edit').getByRole('textbox');
    this.accountField = page.locator('#pn_id_1').getByRole('option', { name: 'JAB Funds Ltd.' });
    this.accountFieldTextbox = page.locator('#pn_id_1').getByRole('textbox'); 
    this.accountFieldDropdown = page.locator('#pn_id_1').getByRole('button', { name: 'dropdown trigger' });
    this.accountFieldSearch = page.locator('.p-element > .sicon > #Layer_1');

    //this.accountField = page.locator('#pn_id_1').getByText('Select an item');
    this.demolabel=page.locator('scrm-dynamic-label').getByText('John');
    this.requiredFieldError = page.getByText('Missing required field: Opportunity Name');
    // ---------- View Opportunities (dashboard) page ----------
    //this.dashboardPageTitle = page.getByText('OPPORTUNITIES', { exact: true });
    this.dashboardPageTitle = this.page.getByText('Opportunities', { exact: false }).first();
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.insightsButton = page.getByRole('button', { name: 'Insights' });
   // this.recordsSection = page.locator('[data-testid="records-section"]');
    this.quickChartsSection = page.getByText('Quick Charts');
 
    this.headerSelectDropDown = page.locator('scrm-table-header').getByLabel('Select Action Menu');
    this.headerBulkActionsDropDown = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' });
    this.headerNextPageButton = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
    this.headerPreviousPageButton = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
    this.headerBeginningPageButton = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
    this.headerEndPageButton = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
    this.headerPageNumber = page.locator('scrm-table-header').getByText('(1 - 20 of 119)');
 
    this.footerSelectDropDown = page.locator('scrm-table-footer').getByLabel('Select Action Menu');
    this.footerBulkActionsDropDown = page.locator('scrm-table-footer').getByRole('button', { name: 'Bulk Action' });
    this.footerNextPageButton = page.locator('scrm-table-footer').getByRole('button', { name: 'Next page' });
    this.footerPreviousPageButton = page.locator('scrm-table-footer').getByRole('button', { name: 'Previous page' });
    this.footerBeginningPageButton = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to first page' });
    this.footerEndPageButton = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to last page' });
    this.footerPageNumber = page.locator('scrm-table-footer').getByText('(1 - 20 of 119)');


    
    // ---------- Import Opportunities page ----------
    this.importPageTitle = page.locator('iframe') .contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
    this.chooseFileButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
    this.nextButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
    this.noFileChosenLabel = page.locator('iframe').contentFrame().getByText('Missing required fields:');
    this.downloadTemplateLink = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
    this.createNewRecordsRadio = page.locator('iframe').contentFrame().locator('#import_create');
    this.createUpdateRecordsRadio = page.locator('iframe').contentFrame().locator('#import_update');

    this.importFrame = page.locator('iframe').last().contentFrame();
    this.fileInput = this.importFrame.locator('input[type="file"]');
    //this.fileInput = page.locator('input[type="file"]');
    this.uploadAlert = page.getByRole('alert');
    this.missingFileError = page.locator('iframe').contentFrame().getByText('Missing required fields:');
    this.invalidFileNameError = page.locator('iframe').contentFrame().getByText('Invalid import file name');
  }
 
  
  
     async assertMenuVisible() {
    await expect(this.opportunitiesMenu).toBeVisible();
  }
  async hoverOpportunitiesMenu() {
        await this.opportunitiesMenu.hover();
    }

     async assertDropdownVisible() {
    await expect(this.opportunitiesMenuDropdown).toBeVisible();
  }
 
  async clickMenuOption(optionName) {
    await this.page.getByRole('menuitem', { name: optionName }).click();
  }

   async clickCreateOpportunities() {
    await this.createOpportunitiesOption.click();
  }
 
  async assertCreatePageComponents(dataTable) {
    const rows = dataTable.hashes(); // [{ Component, Expected Values }]
    for (const row of rows) {
      const component = row.Component.trim();
      const expected = row['Expected Values'].split(',').map((v) => v.trim());
 
      if (component === 'PageTitle') {
        await expect(this.createPageTitle).toContainText(expected[0], { ignoreCase: true });
      }
      if (component === 'Buttons') {
        for (const label of expected) {
          await expect(this.page.getByRole('button', { name: label })).toBeVisible();
        }
      }
      if (component === 'Tabs') {
        for (const label of expected) {
          await expect(this.page.getByRole('tab', { name: label })).toBeVisible();
        }
      }
    }
  }
 // ----- Create Contact actions -----
  
  
  
  
  
  
  
  
  async fillOpportunityForm(dataType) {
    if (dataType === 'Valid Data') {
      await this.opportunityNameField.fill(this.opportunityName);
      await this.closeDateField.fill('2026-12-31');
      await this.stageField.selectOption({ label: 'Prospecting' });
      await this.amountField.fill('10000');
      await this.accountFieldDropdown.click();
      await this.accountFieldTextbox.fill('JAB Funds Ltd.');
      await this.accountFieldTextbox.press('Enter');
      await this.accountField.click();

    }
    // 'No Data' -> intentionally leave required fields blank
  }
 
  async clickFormAction(action) {
    if (action === 'Save') {
      await this.saveButton.click();
    } else if (action === 'Cancel') {
      await this.cancelButton.click();
    } else {
      throw new Error(`Unknown form action: ${action}`);
    }
  }
 
  async assertDetailViewVisible() {
    await expect(this.detailViewHeader).toBeVisible();
  }
 
  async assertRequiredFieldErrorsVisible() {
    await expect(this.requiredFieldErrors.first()).toBeVisible();
  }
 
  async assertConfirmationDialogVisible() {
    await expect(this.confirmationDialog).toBeVisible();
  }
 

  // ================= View Opportunities (dashboard) =================


  
  
    async assertDashboardComponents(dataTable) {
    const rows = dataTable.hashes(); // [{ Component, Expected Values }]
    for (const row of rows) {
      const component = row.Component.trim();
      const expected = row['Expected Values'].split(',').map((v) => v.trim());
 
      switch (component) {
        case 'PageTitle':
          await expect(this.dashboardPageTitle).toContainText(expected[0], { ignoreCase: true });
          break;
        case 'Buttons':
          for (const label of expected) {
             
           await expect(this.page.getByRole('button', { name: label })).toBeVisible();
          }
          break;
        case 'Sections':
          if (expected.includes('Records')) await expect(this.recordsSection).toBeVisible();
          if (expected.includes('QuickCharts')) await expect(this.quickChartsSection).toBeVisible();
          break;
        case 'Header Contents':
          await this.assertPaginationBar('header', expected);
          break;
        case 'Footer Contents':
          await this.assertPaginationBar('footer', expected);
          break;
      }
    }
  }
 
  async assertPaginationBar(region, expected) {
    const map = {
      SelectDropDown: this[`${region}SelectDropDown`],
      BulkActionsDropDown: this[`${region}BulkActionsDropDown`],
      NextPageButton: this[`${region}NextPageButton`],
      PreviousPageButton: this[`${region}PreviousPageButton`],
      BeginingPageButton: this[`${region}BeginningPageButton`],
      EndPageButton: this[`${region}EndPageButton`],
      PageNumber: this[`${region}PageNumber`],
    };
    for (const item of expected) {
      const locator = map[item];
      if (!locator) throw new Error(`Unknown ${region} pagination item: ${item}`);
      await expect(locator).toBeVisible();
    }
  }
  
  async clickImportOpportunities() {
    await this.importOpportunitiesOption.click();
    await expect(this.chooseFileButton).toBeVisible({ timeout: 1500000 });
  }

  async clickImportchoosefileButton() {
    await this.chooseFileButton.click();
    //await expect(this.chooseFileButton).toBeVisible({ timeout: 1500000 });
  }



  async assertImportPageComponents(dataTable) {
    const buttons = { 'Choose File': this.chooseFileButton, Next: this.nextButton };
    const radios = {
      'Create New Records only': this.createNewRecordsRadio,
      'Create New Records and Update Existing Records': this.createUpdateRecordsRadio,
    };

    for (const row of dataTable.hashes()) {
      const component = row.Component.trim();
      const expected = row['Expected Values'].split(',').map((v) => v.trim());

      switch (component) {
        case 'PageTitle': {
          // Ignores spacing differences such as "UploadImport File" vs "Upload Import File"
          //const pattern = expected[0].split(/\s+/).map(escapeRegExp).join('\\s*');
          await expect(this.importPageTitle).toBeVisible();
          break;
        }
        case 'Buttons':
          for (const label of expected) {
            if (!buttons[label]) throw new Error(`Unknown import button: "${label}"`);
            await expect(buttons[label]).toBeVisible();
          }
          break;
        case 'Label':
          // "No file chosen" is the browser's own text, not in the DOM, so check the input is empty
          expect(await this.fileInput.evaluate((el) => el.files.length)).toBe(0);
          break;
        case 'HyperLink':
          await expect(this.importFrame.getByRole('link', { name: expected[0] })).toBeVisible();
          break;
        case 'Radio buttons':
          for (const label of expected) {
            if (!radios[label]) throw new Error(`Unknown import radio: "${label}"`);
            await expect(radios[label]).toBeVisible();
          }
          break;
        default:
          throw new Error(`Unknown component in data table: "${component}"`);
      }
    }
  }


  // ---------- Upload ----------
 resolveImportFile(fileType) {
  const fileTypeMap = {
    'Valid File': 'validFile',
    'InValid File': 'invalidFile',
    'Invalid File': 'invalidFile'
  };

  const configKey = fileTypeMap[fileType] || fileType;
  const fileName = importConfig.files[configKey];

  if (!fileName) {
    throw new Error(
      `No file defined in opportunitiesData.json for "${configKey}"`
    );
  }

  const folder =
    importConfig.downloadsFolder ||
    path.join(os.homedir(), 'Downloads');

  const filePath = path.isAbsolute(fileName)
    ? fileName
    : path.join(folder, fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Import file not found: ${filePath}`);
  }

  return filePath;
}
  async uploadFile(fileType) {
    await this.chooseFileButton.setInputFiles("Playwright_numpy47/test-data/Opportunities.csv");
     console.log(`Uploading file`);
     await this.nextButton.click();

    

  }
  async assertConfirmImportOpportunityButtonVisible() {
    await expect(this.confirmmportopportunityButton).toBeVisible();
  }

  async NoFile(fileType) {
   
     await this.nextButton.click();

    

  }
  async verifyNoFileValidation() {
    await expect(this.missingFileError).toBeVisible();

  }

  async uploadFileInvalid(fileType) {
    await this.chooseFileButton.setInputFiles("Playwright_numpy47/test-data/invalid opportunities file.md");
     //console.log(`Uploading file`);
     await this.nextButton.click();

    

  }

  async verifyInvalidFileNameError() {
    await expect(this.invalidFileNameError).toBeVisible();
  }
}