import {expect} from '@playwright/test';

export class LeadsPage {
  constructor(page) {
    this.page = page;

    this.leadsMenu = page.locator('a').filter({ hasText: /^Leads$/ });

    this.createLead = page.getByRole('link', { name: 'Create Lead', exact: true });
    this.createLeadFromVcard = page.getByRole('link', { name: 'Create Lead From vCard' });
    this.viewLead = page.getByRole('link', { name: 'View Leads' });
    this.importLeads = page.getByRole('link', { name: 'Import Leads' });

    this.createLeadPageTitle = page.getByText('Create', { exact: true });
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.overViewTab = page.getByRole('tab', { name: 'OVERVIEW' });
    this.moreInformationTab = page.getByRole('tab', { name: 'MORE INFORMATION' });
    this.otherTab = page.getByRole('tab', { name: 'OTHER' });

      this.firstNameInput = page.getByRole('textbox').nth(1);
      this.lastNameInput = page.getByRole('textbox').nth(2);
      this.leadDetailedViewTitle = page.locator('scrm-dynamic-label.record-view-name-label');
      //this.leadDetailedViewTitle = page.locator('scrm-dynamic-label').getByText(leadName, { exact: true });
      this.leadCancelPopup = page.getByText('×You are about to leave this');
      this.leadCancelPopupOk = page.getByRole('button', { name: 'Ok' });
      this.leadFieldErrMsg = page.getByText('Missing required field: Last');
    
    this.viewLeadPgTitle = page.getByText('LEADS', { exact: true });
    this.leadFilterBtn = page.getByRole('button', { name: 'Filter' });
    this.leadInsightsBtn = page.getByRole('button', { name: 'Insights' });
    this.leadRecords = page.locator('scrm-table');
    this.leadQuickCharts = page.locator('chart-sidebar-widget');
    this.leadHdrSelectDropDown = page.locator('scrm-table-header').getByLabel('Select Action Menu');
    this.leadHdrBulkDropDown = page.
    this.leadHdrNxtPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
    this.leadHdrPrePgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
    this.leadHdrLastPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
    this.leadHdrBeginPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
    this.leadHdrCurrentPgNo = page.locator('scrm-table-header').getByText('(1 - 20 of 200)');
    this.leadHdrColumnBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' })
    this.leadFtrSelectDropDown = page.locator('scrm-table-footer').getByLabel('Select Action Menu');
    this.leadFtrBulkDropDown = page. locator('scrm-table-footer').getByRole('button',{name: 'Bulk Action'});
    this.leadFtrNxtPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Next page' });
    this.leadFtrPrePgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Previous page' });
    this.leadFtrLastPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to last page' });
    this.leadFtrBeginPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to first page' });
    this.leadFtrCurrentPgNo = page.locator('scrm-table-footer').getByText('(1 - 20 of 200)');
    this.leadFtrColumnBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Columns' });


    this.leadVcardPgTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Import vCard' });
    this.leadChooseFileBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Choose File' });
    this.leadImptVcardBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
    this.leadInfoTxt = page.locator('iframe').contentFrame().getByText('Automatically create a new');
    
      this.vCardFieldErrMsg = page.locator('iframe').contentFrame().getByText('vCard does not have all the')
      this.vCardAlertPopup = page.locator('iframe').contentFrame().locator('#sugarMsgWindow_c');
        this.vCardAlertPopupTxt = page.locator('iframe').contentFrame().getByText('Please select a vCard file');
        this.vCardAlertPopupCloseBtn = page.locator('iframe').contentFrame().getByRole('link', { name: 'Close' });
    
  }

  async openLeadsDropDown()
  {
    await this.leadsMenu.hover();
  }  

  async verifyLeadsDropDownList()
  {
    await expect(this.createLead).toBeVisible();
    await expect(this.createLeadFromVcard).toBeVisible();
    await expect(this.ViewLead).toBeVisible();
    await expect(this.importLeads).toBeVisible();
  }


  /*import { expect } from '@playwright/test';

  export class CreateLeadsPage {
  constructor(page) {
  this.page = page;*/
  async clickCreateLead()
  {
    await this.createLead.click();
    await this.page.waitForURL('**/Leads/edit**');
  }

  async verifyCreatePageComponents(componentsList) {
    for (const row of componentsList) {
      const componentType = row.Component;
      const expectedItems = row.ExpectedValues.split(',').map(item => item.trim());

      switch (componentType) {
        case 'PageTitle':
          //await expect(this.pageTitle).typeaheadOrContainText(expectedItems[0], { ignoreCase: true });
          await expect(this.createLeadPageTitle).toBeVisible();
        break;

        case 'Buttons':
          {
            const buttonMap = {
            'Save': this.saveButton,
            'Cancel': this.cancelButton 
            };
            for (const buttonText of expectedItems) {
              const buttonElement = buttonMap[buttonText]; 
              if (buttonElement) 
              await expect(buttonElement).toBeVisible();
            }
          }
        break;

        case 'Tabs':
          {
            const tabMap = {
            'OverViewTab': this.overViewTab,
            'MoreInformation': this.moreInformationTab,
            'other': this.otherTab
            };
            for (const tabText of expectedItems) {
              const tabElement = tabMap[tabText]; 
              if (tabElement) 
              await expect(tabElement).toBeVisible();
            }
          }
        break;

        default:
        throw new Error(`❌ Unknown Component type specified in Gherkin DataTable: ${componentType}`);
      }
    }
  }

  async fillCreateLeadPage(fName,lName)
  {
    await this.firstNameInput.fill(fName);
    await this.lastNameInput.fill(lName);
  }
  
  async saveCreateLead()
  {
    await this.saveButton.click();
    await expect(this.leadDetailedViewTitle).toBeVisible();
  }

  async cancelCreateLead()
  {
    await this.cancelButton.click();
  }




  /*  import { expect } from '@playwright/test';
  export class ViewLeadsPage {
  constructor(page) {
    this.page = page;
    */
  async verifyViewLeadsComponents(componentsList) {
    for (const row of componentsList) {
      const componentType = row.Component;
      const expectedItems = row.ExpectedValues.split(',').map(item => item.trim());

     switch (componentType) {
      case 'PageTitle':
        await expect(this.viewLeadPgTitle).toBeVisible();
        break;

      case 'Buttons': {
        const buttonMap = {
         'Filter': this.leadFilterBtn,
         'Insights': this.leadInsightsBtn
        };
        for (const text of expectedItems) {
          let element = buttonMap[text];
          if (element) await expect(element).toBeVisible();
        }
        break;
      }

      case 'Sections': {
        const sectionMap = {
         'Records': this.leadRecords,
         'QuickCharts': this.leadQuickCharts
        };
        for (const text of expectedItems) {
          let element = sectionMap[text];
          if (element) await expect(element).toBeVisible();
        }
        break;
      }

      case 'Header Contents': {
        const headerMap = {
          'SelectDropDown': this.leadHdrSelectDropDown,
          'BulkActionsDropDown': this.leadHdrBulkDropDown,
          'ColumnButton': this.leadHdrColumnBtn,
          'NextPageButton': this.leadHdrNxtPgBtn,
          'PreviousPageButton': this.leadHdrPrePgBtn,
          'EndPageButton': this.leadHdrLastPgBtn,
          'BeginingPageButton': this.leadHdrBeginPgBtn,
          'PageNumber': this.leadHdrCurrentPgNo
        };
        for (const text of expectedItems) {
          let element = headerMap[text];
          if (element) await expect(element).toBeVisible();
        }
        break;
      }

      case 'Footer Contents': {
        const footerMap = {
          'SelectDropDown': this.leadFtrSelectDropDown,
          'BulkActionsDropDown': this.leadFtrBulkDropDown,
          'columnButton': this.leadFtrColumnBtn,
          'NextPageButton': this.leadFtrNxtPgBtn,
          'PreviousPageButton': this.leadFtrPrePgBtn,
          'EndPageButton': this.leadFtrLastPgBtn,          
          'BeginingPageButton': this.leadFtrBeginPgBtn,
          'PageNumber': this.leadFtrCurrentPgNo
        };
        for (const text of expectedItems) {
          let element = footerMap[text];
          if (element) await expect(element).toBeVisible();
        }
        break;
      }

      default:
        throw new Error(`❌ Unhandled component group in code configuration: ${componentType}`);
      }
    }
  }

 /*const { expect } = require('@playwright/test');

 class ImportVCardPage {
  constructor(page) {
    this.page = page;
 */
  async uploadAndImport(fileType) {
    let filePath = '';
    
    if (fileType === 'Valid File') {
      filePath = 'tests/fixtures/valid_lead.vcf';
    } else if (fileType === 'InValid File') {
      filePath = 'tests/fixtures/invalid_lead.vcf';
    }

    if (fileType !== 'No File' && filePath) {
      await this.leadChooseFileBtn.setInputFiles(filePath);
    }
    await this.leadImptVcardBtn.click(); 
    }

    async verifyResult(expectedResult) {
      if (expectedResult === 'Detailed view page of new Lead') {
        await expect(this.leadDetailedViewTitle).toBeVisible();
      
      } else if (expectedResult === 'Select a Vcard file Alert appears') {
        await expect(this.vCardAlertPopup).toBeVisible();
        await expect(this.vCardAlertPopupTxt).toContainText('Select a Vcard file');
      
      } else if (expectedResult === 'Required field error messages') {
        await expect(this.vCardFieldErrMsg.first()).toBeVisible();
     }
    }
  }

//module.exports = { ImportVCardPage };


