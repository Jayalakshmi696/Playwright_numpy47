import {expect} from '@playwright/test';
import leadDetails from '../test-data/createLeadData.json' with { type: 'json'};
import inputFileDetails from '../test-data/importVcard.json' with {type: 'json'};
import { logger } from "../utils/logger.js";

export class LeadsPage {
  constructor(page) {
    this.page = page;

    //this.leadsMenu = page.locator('a').filter({ hasText: /^Leads$/ });
    //this.leadsMenu = page.locator('scrm-base-navbar scrm-menu-item-link a').filter({ hasText: 'Leads' });
    //this.leadsMenu = page.getByRole('link', {name: 'Leads'});
    this.leadsMenu = page.locator('scrm-base-navbar a.top-nav-link.dropdown-toggle').filter({ hasText: /^Leads$/ });
    //this.leadsMenu = page.locator("scrm-base-menu-item-link a:has-text('Leads')");

    this.createLead = page.getByRole('link', { name: 'Create Lead', exact: true });
    this.createLeadFromVcard = page.getByRole('link', { name: 'Create Lead From vCard', exact: true });
    this.viewLead = page.getByRole('link', { name: 'View Leads', exact: true });
    this.importLeads = page.getByRole('link', { name: 'Import Leads', exact: true });

    this.createLeadPageTitle = page.getByText('Create', { exact: true });
    this.leadSaveButton = page.getByRole('button', { name: 'Save' });
    this.leadCancelButton = page.getByRole('button', { name: 'Cancel' });
    this.overViewTab = page.getByRole('tab', { name: 'OVERVIEW' });
    this.moreInformationTab = page.getByRole('tab', { name: 'MORE INFORMATION' });
    this.otherTab = page.getByRole('tab', { name: 'OTHER' });

      this.leadFirstNameInput = page.getByRole('textbox').nth(1);
      this.leadLastNameInput = page.getByRole('textbox').nth(2);
      this.leadDetailedViewTitle = page.locator('scrm-dynamic-label.record-view-name-label');
      this.leadCancelPopup = page.getByText('×You are about to leave this');
      this.leadCancelPopupOk = page.getByRole('button', { name: 'Ok' });
      this.leadFieldErrMsg = page.getByText('Missing required field: Last');
    
    this.viewLeadPgTitle = page.getByText('LEADS', { exact: true });
    this.leadFilterBtn = page.getByRole('button', { name: 'Filter' });
    this.leadInsightsBtn = page.getByRole('button', { name: 'Insights' });
    this.leadRecords = page.locator('scrm-table');
    this.leadQuickCharts = page.locator('chart-sidebar-widget');
    this.leadHdrSelectDropDown = page.locator('scrm-table-header').getByLabel('Select Action Menu');
    this.leadHdrBulkDropDown = page. locator('scrm-table-header').getByRole('button',{name: 'Bulk Action'});
    this.leadHdrNxtPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
    this.leadHdrPrePgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
    this.leadHdrLastPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
    this.leadHdrBeginPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
    //this.leadHdrCurrentPgNo = page.locator('scrm-table-header').getByText('(1 - 20 of 200)');
    this.leadHdrCurrentPgNo = page.locator('scrm-table-header span.pagination-count');
    this.leadHdrColumnBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' })
    this.leadFtrSelectDropDown = page.locator('scrm-table-footer').getByLabel('Select Action Menu');
    this.leadFtrBulkDropDown = page. locator('scrm-table-footer').getByRole('button',{name: 'Bulk Action'});
    this.leadFtrNxtPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Next page' });
    this.leadFtrPrePgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Previous page' });
    this.leadFtrLastPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to last page' });
    this.leadFtrBeginPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to first page' });
    //this.leadFtrCurrentPgNo = page.locator('scrm-table-footer').getByText('(1 - 20 of 200)');
    this.leadFtrCurrentPgNo = page.locator('scrm-table-footer span.pagination-count');
    this.leadFtrColumnBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Columns' });

    this.leadVcardPgTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Import vCard' });
    this.leadChooseFileBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Choose File' });
    this.leadImptVcardBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
    this.leadInfoTxt = page.locator('iframe').contentFrame().getByText('Automatically create a new');
        
      this.vCardFieldErrMsg = page.locator('iframe').contentFrame().getByText('vCard does not have all the')
      this.vCardAlertPopup = page.locator('iframe').contentFrame().locator('#sugarMsgWindow_c');
        this.vCardAlertPopupTxt = page.locator('iframe').contentFrame().getByText('Please select a vCard file');
        this.vCardAlertPopupCloseBtn = page.locator('iframe').contentFrame().getByRole('link', { name: 'Close' });

    this.importLeadPageTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
      this.importLeadChooseFileBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
      this.importLeadNxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
      this.importLeadLabel = page.locator('iframe').contentFrame().getByText('Select a file on your');
      this.importLeadHypLink = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
      this.importLeadRadBtn1 = page.locator('iframe').contentFrame().getByRole('cell', { name: 'Create new records only  Information', exact: true });
      this.importLeadRadBtn2 = page.locator('iframe').contentFrame().getByRole('cell', { name: 'Create new records and update existing records  Information', exact: true });
        this.importLeadFieldErrMsg = page.locator('iframe').contentFrame().getByText('Missing required fields:');
        this.importLeadAlertPopup = page.locator('iframe').contentFrame().locator('#importMsgWindow_c');
        this.importLeadAlertPopupTxt = page.locator('iframe').contentFrame().locator('#importMsgWindow div').filter({ hasText: 'The selected file does not' });
        this.importLeadPageTitle2 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
        this.importLeadPageTitle3 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 3: Confirm Field Mappings' });
        this.importLeadPageTitle4 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 4: Check for Possible Duplicates' });
        this.importLeadPageTitle5 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 5: View Import Results' });
        this.importLeadStp2NxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importLeadStp3NxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importLeadStp4ImpNwBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import Now' });
        this.importLeadCnfrmLbl = page.locator('iframe').contentFrame().getByText('records were created');
        this.importLeadExtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Exit' });

    

    this.topLeadRecord = page.locator('td.cdk-column-name a.field-link');
    //this.leadRecentViewMenu = this. page.locator('scrm-sub-menu-recently-viewed'); 
    //this.leadRecentViewMenu = page.locator('scrm-menu-item-link').filter({has: this.page.locator('a.top-nav-link.dropdown-toggle').filter({hasText: /^Leads$/})}).locator('scrm-label[labelkey="LBL_LAST_VIEWED"]');
    this.leadRecentViewMenu = page.locator('scrm-sub-menu-recently-viewed').locator('a.sub-nav-link.dropdown-toggle').first();
    //this.leadRecentViewMenu = this.leadsMenu.locator('xpath=ancestor::li[1]').getByRole('link', {name: 'Recently Viewed',exact: true});
      //this.recentlyViewedLeadsSubMenu = page.locator('ul.dropdown-menu.submenu:visible').filter({has: this.page.locator('a.submenu-nav-link[href*="#/leads/record/"]')});
      this.recentlyViewedLeadSubMenu = page.locator('scrm-sub-menu-recently-viewed ul.dropdown-menu.submenu a.submenu-nav-link[href*="#/leads/record/"]').first();
      //this.recentlyViewedLeadsSubMenu = this.page.locator('xpath=ancestor::li[1]').locator('ul.dropdown-menu.submenu');
      //this.recentViewLead = (leadName) => page.getByRole('link', {name: leadName, exact: true });    
  }

  async openTopLeadRecord()
  {
    const topLeadNameCell = this.topLeadRecord.first();
    await expect(topLeadNameCell).toBeVisible({timeout: 10000});
    const firstLeadName = (await topLeadNameCell.innerText()).trim();
    //console.log('Top Lead Name:', firstLeadName);
    logger.info(`Top Lead Name "${firstLeadName}"`);
    await topLeadNameCell.click();
    await this.page.waitForURL(url => url.toString().includes('/#/leads/record/'), { timeout: 30000 });
    logger.info(`Opened the top Lead Record from the Leads dash board`);
    logger.info(` The URL is ${this.page.url()}`); 
  }

  async checkRecentViewInLeads()
  {
   await expect(this.leadRecentViewMenu).toBeVisible({timeout: 10000}); 
  }

  async openRecentViewLeadsSubMenuInLeads()
  {
    await this.leadRecentViewMenu.hover();
  }

  async checkRecentViewLeadsSubMenu()
  {
    await expect(this.recentlyViewedLeadSubMenu).toBeVisible({timeout: 10000});
  }

  async openRecentViewedLead()
  {
    await this.recentlyViewedLeadSubMenu.click();
  }

  async checkOpeningRecentViewedLeadRecord()
  {
    await this.page.waitForURL(url => url.toString().includes('/#/leads/record/'), { timeout: 30000 });
    logger.info(`Opened recently viewed Lead Record via Recently viewed option`);
    logger.info(`The URL is ${this.page.url()}`); 
  }

  async openLeadsDropDown()
  {
    await expect(this.leadsMenu).toBeVisible({timeout: 10000});
    await this.leadsMenu.hover();
  }  

  async verifyLeadsDropDownList()
  {
    await expect(this.createLead).toBeVisible();
    await expect(this.createLeadFromVcard).toBeVisible();
    await expect(this.viewLead).toBeVisible();
    await expect(this.importLeads).toBeVisible();
  }

  async clickCreateLead()
  {
    await expect(this.createLead).toBeVisible();
    await this.createLead.click();
    await this.page.waitForURL(url => url.toString().includes('/#/leads/edit'));
    logger.info(`Opened Create Lead page`);
    logger.info(`The URL is ${this.page.url()}`); 
  }

  async fillCreateLeadPage(dataKey)
  {
    logger.info(`Opened Create Leads page`);
    logger.info(`The URL is ${this.page.url()}`); 
    const lDetail = leadDetails[dataKey];

    if (!leadDetails) 
      throw new Error(`Lead data not found for key: ${dataKey}`);
    
    await this.leadFirstNameInput.fill(lDetail.leadFirstName);
    await this.leadLastNameInput.fill(lDetail.leadLastName);
  }
  
   async confirmLeadCreate(action) {
    switch (action) {
      case 'LeadSave':
        await this.leadSaveButton.click();
        break;
      case 'LeadCancel':
        await this.leadCancelButton.click();
        break;
      default:
        throw new Error(`Unknown action: ${action}`);
    }
  }

    async clickViewLead()
    {
      await expect(this.viewLead).toBeVisible();
      await this.viewLead.click();
      await this.page.waitForURL(url => url.toString().includes('/#/leads/index'));
    }
    
  async clickCreateLeadFromVcard()
  {
    await expect(this.createLeadFromVcard).toBeVisible();
    await this.createLeadFromVcard.click();
    await this.page.waitForURL(url => url.toString().includes('/#/leads/importvcard'));
    logger.info(`Importing Vcard`);
    logger.info(`URL is ${this.page.url()}`); 
  }

   async clickCreateLeadFromImport()
  {
    await expect(this.importLeads).toBeVisible();
    await this.importLeads.click();
    await this.page.waitForURL(url => url.toString().includes('/#/import/step1'),{ timeout: 30000 });
  }

 //All page Components
  async verifyLeadsPageComponents(componentsList) {
    for (const row of componentsList) {
      const componentType = row.Component;
      const expectedItems = row.ExpectedValues.split(',').map(item => item.trim());
      switch (componentType) {
        case 'PageTitle': {
          const pageTitleMap = {
            'LeadCreate':this.createLeadPageTitle,
            'ViewLeads':this.viewLeadPgTitle,
            'ImportVCard':this.leadVcardPgTitle,
            'UploadImportFile': this.importLeadPageTitle
          };
          for (const item of expectedItems) {
            const element = pageTitleMap[item];
            if (element) {
              await expect(element).toBeVisible({timeout: 10000});
              //console.log('Page Title:',(await element.innerText()).trim());
              logger.info (`Page Title is "${(await element.innerText()).trim()}"`);
            }
          }
          break;
        }
        case 'Buttons': {
          const buttonMap = {
            'LeadSave': this.leadSaveButton,                            
            'LeadCancel': this.leadCancelButton,                        
            'LeadFilter': this.leadFilterBtn,                       
            'LeadInsights': this.leadInsightsBtn,                   
            'VcardChooseFile': this.leadChooseFileBtn,              
            'ImportVCard': this.leadImptVcardBtn,
            'ImportChooseFile': this.importLeadChooseFileBtn,      
            'LeadNext': this.importLeadNxtBtn                      
          };
          for (const item of expectedItems) {
            const element = buttonMap[item];
            if (element) {
              await expect(element).toBeVisible({timeout: 10000});
              //console.log(`${item}:`,(await element.textContent()).trim());
              logger.info (`Button name is "${(await element.textContent()).trim()}"`);
            }
          }
          break;
        }
        case 'Label': {
          const labelMap = {
            'InformationTextVcard': this.leadInfoTxt,                           //Update in feature file
            'InformationTextImportLead': this.importLeadLabel                    //Update in feature file
          };
          for (const item of expectedItems) {
            const element = labelMap[item];
            if (element) {
              await expect(element).toBeVisible({timeout: 10000});
              //console.log(`${item}:`,(await element.innerText()).trim());
              logger.info (`Info label in the page is "${(await element.innerText()).trim()}"`);
            }
          }
          break;
        }
        case 'HyperLink': {
          const linkMap = {'DownloadImportFileTemplate': this.importLeadHypLink};
          for (const item of expectedItems) {
            const element = linkMap[item];
            if (element) {
              await expect(element).toBeVisible({timeout: 10000});
              //console.log(`${item}:`,(await element.innerText()).trim());
              logger.info (`Hyper link available in the page is "${(await element.innerText()).trim()}"`);
            }
          }
          break;
        }
        case 'Radiobuttons': {
          const radioMap = {
                              'RadioButton1':this.importLeadRadBtn1,
                              'RadioButton2':this.importLeadRadBtn2
                            };
          for (const item of expectedItems) {
            const element = radioMap[item];
            if (element) {
              await expect(element).toBeVisible({timeout: 10000});
              //console.log(`${item}:`,(await element.innerText()).trim());
              logger.info (`Radio button name is "${(await element.innerText()).trim()}"`);
            }
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
            if (element) {
              await expect(element).toBeVisible();
              logger.info (`The page has the section ${text}`);
            }
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
            if (element) {
              await expect(element).toBeVisible();
              //console.log (`Header ${text} is visible`);
              logger.info (`Leads Header ${text} is visible`);
            }
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
            if (element){
              await expect(element).toBeVisible();
              //console.log (`Footer ${text} is visible`);
              logger.info (`Leads Footer ${text} is visible`);
            }
          }
          break;
        }
        case 'Tabs':{
            const tabMap = {
            'LeadOverview': this.overViewTab,
            'LeadMoreInformation': this.moreInformationTab,
            'LeadOther': this.otherTab
            };
            for (const tabText of expectedItems) {
              const tabElement = tabMap[tabText]; 
              if (tabElement) 
              {
                await expect(tabElement).toBeVisible();
                //console.log (await tabElement.textContent());
                logger.info (`The page has the tab "${await tabElement.textContent()}"`);  
              }
            }
          break;
        }
      }
    }
  }

  async uploadAndImportAllLeadFiles(fileType, importType) {
    logger.info(`Step 1 URL: ${this.page.url()}`); 
    const lFileDetail = inputFileDetails[fileType];
    if (!lFileDetail) {
      throw new Error(`File data not found for key: ${fileType}`);
    }
    const importLeadfilePath = lFileDetail.filePath;
    const fileInput = importType === 'importVcard' ? this.leadChooseFileBtn : this.importLeadChooseFileBtn;
    if (fileType !== 'NoFile' && importLeadfilePath) {
      await fileInput.setInputFiles(importLeadfilePath);
    }
    if (importType === 'importVcard') {
        await this.leadImptVcardBtn.click();
        return;
    }
    await this.importLeadNxtBtn.click();
    if (fileType === 'ValidLeadFile') {
      await expect(this.importLeadPageTitle2).toBeVisible({timeout: 10000});
      //console.log('Step 2 URL:', this.page.url());
      logger.info(`Step 2 URL: ${this.page.url()}`); 
      await this.importLeadStp2NxtBtn.click();
      await expect(this.importLeadPageTitle3).toBeVisible({timeout: 10000});
      //console.log('Step 3 URL:', this.page.url());
      logger.info(`Step 3 URL: ${this.page.url()}`); 
      await this.importLeadStp3NxtBtn.click();
      await this.page.waitForTimeout(1000);
      await this.page.mouse.wheel(0, -2500);
      await expect(this.importLeadPageTitle4).toBeVisible({timeout: 10000});
      //console.log('Step 4 URL:', this.page.url());
      logger.info(`Step 4 URL: ${this.page.url()}`); 
      await this.importLeadStp4ImpNwBtn.click();
      await expect(this.importLeadPageTitle5).toBeVisible({timeout: 10000});
      //console.log('Step 5 URL:', this.page.url());
      logger.info(`Step 5 URL: ${this.page.url()}`); 
    }
  }

  async verifyAllLeadResults(result) {
    switch (result) {
      case 'Detailed view page of creating Leads':{
        //await expect(this.leadDetailedViewTitle).toBeVisible();
        //console.log (await this.leadDetailedViewTitle.textContent());
        await this.page.waitForURL(url => url.toString().includes('/#/leads/record/'));
        logger.info(`New Lead is Created`);
      }
        break;
      case 'Create Lead Required field error messages':{
        await expect(this.leadFieldErrMsg.first()).toBeVisible();
        //console.log (await this.leadFieldErrMsg.textContent());
          logger.info (`Field error message appeared when trying to click save button without entering the required details - Create Leads`);
          logger.info(`The message is "${await this.leadFieldErrMsg.textContent()}"`);
      }
        break;
      case 'Create Lead Confirmation dialog appears':{
        await expect(this.leadCancelPopup).toBeVisible();
        //console.log (await this.leadCancelPopup.textContent());
        logger.info (`Canceled create lead`);
      }
        break;
      case 'Detailed view page after importing Leads': {
        //await expect(this.importLeadCnfrmLbl).toBeVisible();
        //console.log (await this.importLeadCnfrmLbl.textContent());
        await this.importLeadExtBtn.click();
        await this.page.waitForURL(url => url.toString().includes('/#/leads/index'));
        logger.info (`Succesful Import Leads`);
      } 
        break;
      case 'Import Lead Error Popup alert appears': {
        await expect(this.importLeadAlertPopup).toBeVisible();
        await expect(this.importLeadAlertPopupTxt).toContainText('The selected file does not');
        //console.log (await this.importLeadAlertPopupTxt.textContent());
        logger.info (`Import Lead Alert Popup message`);
        logger.info (`The message is "${await this.importLeadAlertPopupTxt.textContent()}"`);      
      } 
        break;
      case 'Import Lead Required field error messages': {
        await expect(this.importLeadFieldErrMsg.first()).toBeVisible();
        //console.log (await this.importLeadFieldErrMsg.textContent());
        logger.info (`Field error message appeared when trying to click next button without uploading any File - Import Leads`);
        logger.info (`The message is "${await this.importLeadFieldErrMsg.textContent()}"`);
      }
        break;
      case 'Detailed view page of new Lead via Vcard': {
        await this.page.waitForURL(url => url.toString().includes('/#/leads/importvcard'), { timeout: 30000 });
        await expect(this.leadDetailedViewTitle).toBeVisible();
        //console.log (await this.leadDetailedViewTitle.textContent());
        logger.info (`Succesful import Vcard`);
      } 
        break;
      case 'Select a Vcard file Alert appears': {
        await expect(this.vCardAlertPopup).toBeVisible();
        await expect(this.vCardAlertPopupTxt).toContainText('Please select a vCard file');
        //console.log (await this.vCardAlertPopupTxt.textContent());   
        logger.info (`Alert popup with a message appeared when trying to import Vcard without uploading any File`);
        logger.info (`The message is "${await this.vCardAlertPopupTxt.textContent()}"`);   
      } 
        break;
      case 'Vcard Required field error messages': {
        await expect(this.vCardFieldErrMsg.first()).toBeVisible();
        //console.log (await this.vCardFieldErrMsg.textContent());
        logger.info (`Field error message appeared when trying to import a invalid Vcard`);
        logger.info (`The message is "${await this.vCardFieldErrMsg.textContent()}"`);
      }
        break;
    default:
      throw new Error(`Unknown expected result: ${result}`);
    }
  }
};

/*

  async verifyLeadResult(expectedResult) {
    if (expectedResult === 'Detailed view page of new Lead') {
      await expect(this.importLeadCnfrmLbl).toBeVisible();
      console.log (await this.importLeadCnfrmLbl.textContent());
      await this.importLeadExtBtn.click();
      await this.page.waitForURL(url => url.toString().includes('/#/leads/index'));
    } 
    else if (expectedResult === 'Import Lead Error Popup alert appears ') {
      await expect(this.importLeadAlertPopup).toBeVisible();
      await expect(this.importLeadAlertPopupTxt).toContainText('The selected file does not');
      console.log (await this.importLeadAlertPopupTxt.textContent());      
    } 
    else if (expectedResult === 'Required field error messages') {
      await expect(this.importLeadFieldErrMsg.first()).toBeVisible();
      console.log (await this.importLeadFieldErrMsg.textContent());
    }
  }

    async verifyVCardResult(expectedResult) {
    if (expectedResult === 'Detailed view page of new Lead') {
      await this.page.waitForURL(url => url.toString().includes('/#/leads/importvcard'), { timeout: 30000 });
      await expect(this.leadDetailedViewTitle).toBeVisible();
      console.log (await this.leadDetailedViewTitle.textContent());
    } 
    else if (expectedResult === 'Select a Vcard file Alert appears') {
      await expect(this.vCardAlertPopup).toBeVisible();
      await expect(this.vCardAlertPopupTxt).toContainText('Please select a vCard file');
      console.log (await this.vCardAlertPopupTxt.textContent());      
    } 
    else if (expectedResult === 'Required field error messages') {
      await expect(this.vCardFieldErrMsg.first()).toBeVisible();
      console.log (await this.vCardFieldErrMsg.textContent());
    }
  }

    async verifyCreateLeadResult(result) {
    switch (result) {
      case 'Detailed view page of new Lead':{
        await expect(this.leadDetailedViewTitle).toBeVisible();
        console.log (await this.leadDetailedViewTitle.textContent());
      }
        break;
      case 'Required field error messages':{
        await expect(this.leadFieldErrMsg.first()).toBeVisible();
        console.log (await this.leadFieldErrMsg.textContent());
      }
        break;
      case 'Confirmation dialog appears':{
        await expect(this.leadCancelPopup).toBeVisible();
        console.log (await this.leadCancelPopup.textContent());
      }
        break;
      default:
        throw new Error(`Unknown expected result: ${result}`);
    }
  }
  
*/





