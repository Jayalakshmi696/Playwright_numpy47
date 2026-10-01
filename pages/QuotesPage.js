import {expect} from '@playwright/test';
import quoteDetails from '../test-data/createQuoteData.json' with { type: 'json'};
import inputFileDetails from '../test-data/importVcard.json' with {type: 'json'};
import { logger } from "../utils/logger.js";

export class QuotesPage {
  constructor(page) {
        this.page = page;
        this.quotesMenu = page.locator('scrm-base-navbar a.top-nav-link.dropdown-toggle').filter({ hasText: /^Quotes$/ });
        //this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });

        //Drop Down List
        this.createQuote = page.getByRole('link', { name: 'Create Quote' });
        this.viewQuote = page.getByRole('link', { name: 'View Quotes' });
        this.importQuotes = page.getByRole('link', { name: 'Import', exact: true });
        this.importLineItem = page.getByRole('link', { name: 'Import Line Items' });

        //CreateQuote
        this.createQuotePageTitle1 = page.locator('iframe').contentFrame().getByText('Quotes');
        this.createQuotePageTitle2 = page.locator('iframe').contentFrame().getByText('CREATE', { exact: true });
        this.quoteSaveButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Save' });
        this.quoteCancelButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Cancel' });
        this.QuoteOverview = page.locator('iframe').contentFrame().getByText('Overview');
        this.QuoteAddrInformation = page.locator('iframe').contentFrame().getByText('Address Information');
        this.LineItemsTab = page.locator('iframe').contentFrame().getByText('Line Items', { exact: true });

        this.quoteTitle = page.locator('iframe').contentFrame().locator('#name');
        this.quoteApprovalIssues = page.locator('iframe').contentFrame().locator('#approval_issue');
        this.quoteDetailedViewTitle = page.locator('h2.module-title-text');
        //this.quoteDetailedViewTitle = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Test Quote' });
        this.quoteFieldErrMsg = page.locator('iframe').contentFrame().getByText('Missing required field: Title');
        this.quoteCancelPopup = page.getByText('×You are about to leave this');

        //View Quotes
        this.viewQuotePgTitle = page.getByText('QUOTES', { exact: true });
        this.quoteFilterBtn = page.getByRole('button', { name: 'Filter' });
        this.quoteRecords =page.locator('scrm-table-body');
        //this.quoteRecords = page.locator('scrm-table-body table');
        //this.quoteRecords = page.getByRole('paragraph');
        this.quoteHdrSelectDropDown = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.quoteHdrBulkDropDown = page.locator('scrm-table-header').getByText('Bulk Action Delete Export');
        this.quoteHdrNxtPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
        this.quoteHdrPrePgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
        this.quoteHdrLastPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
        this.quoteHdrBeginPgBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
        this.quoteHdrCurrentPgNo = page.locator('scrm-table-header span.pagination-count');
        //this.quoteHdrCurrentPgNo = page.locator('scrm-table-header').getByText('(0 - 0 of 0)');
        this.quoteHdrColumnBtn = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
        this.quoteFtrSelectDropDown = page.locator('scrm-table-footer').getByLabel('Select Action Menu');
        this.quoteFtrBulkDropDown = page.locator('scrm-table-footer').getByLabel('Select Action Menu');
        this.quoteFtrNxtPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Next page' });
        this.quoteFtrPrePgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Previous page' });
        this.quoteFtrLastPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to last page' });
        this.quoteFtrBeginPgBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Navigate to first page' });
        this.quoteFtrCurrentPgNo = page.locator('scrm-table-footer span.pagination-count');
        //this.quoteFtrCurrentPgNo = page.locator('scrm-table-footer').getByText('(0 - 0 of 0)');
        this.quoteFtrColumnBtn = page.locator('scrm-table-footer').getByRole('button', { name: 'Columns' });

        //Import Line Item
        this.importLineItemPgTitle1 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
        this.LineItemChooseFileBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
        this.ImptLineItemNxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.LineItemLabel = page.locator('iframe').contentFrame().getByText('Select a file on your');
        this.importLineItemHypLink = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
        this.importLineItemRadBtn1 = page.locator('iframe').contentFrame().getByRole('cell', { name: 'Create new records only  Information', exact: true });
        this.importLineItemRadBtn2 = page.locator('iframe').contentFrame().getByRole('cell', { name: 'Create new records and update existing records  Information', exact: true });
        
        this.importLineItempgTitle2 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
        this.importLineItempgTitle3 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 3: Confirm Field Mappings' });
        this.importLineItempgTitle4 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 4: Check for Possible' });
        this.importLineItempgTitle5 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 5: View Import Results' });
        this.importLineItemDashbdTitle = page.locator('.custom-col-4');                                                      //https://suite8demo.suiteondemand.com/#/products-quotes/index
        this.importLineItemStp2NxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importLineItemStp3NxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importLineItemStp4ImpNwBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import Now' })
        this.importLineItemCnfrmLbl = page.locator('iframe').contentFrame().getByText('records were created');
        this.importLineItemExtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Exit' });

        this.LineItemFieldErrMsg = page.locator('iframe').contentFrame().getByText('Missing required fields:');
        this.LineItemAlertPopup = page.locator('iframe').contentFrame().locator('#importMsgWindow_c');
        this.LineItemAlertPopupTxt = page.locator('iframe').contentFrame().getByText('The selected file does not');
        
        //Import Quotes
        this.importQuotePageTitle1 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
        this.importQuoteChooseFileBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
        this.importQuoteNxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importQuoteLabel = page.locator('iframe').contentFrame().getByText('Select a file on your');
        this.importQuoteHypLink = page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
        this.importQuoteRadBtn1 = page.locator('iframe').contentFrame().getByRole('cell', { name: 'Create new records only  Information', exact: true });
        this.importQuoteRadBtn2 = page.locator('iframe').contentFrame().getByRole('cell', { name: 'Create new records and update existing records  Information', exact: true });
        this.importQuoteFieldErrMsg = page.locator('iframe').contentFrame().getByText('Missing required fields:');
        this.importQuoteAlertPopup = page.locator('iframe').contentFrame().locator('#importMsgWindow_c');
        this.importQuoteAlertPopupTxt = page.locator('iframe').contentFrame().getByText('The selected file does not');
        this.importQuotePageTitle2 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
        this.importQuotePageTitle3 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 3: Confirm Field Mappings' });
        this.importQuotePageTitle4 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 4: Check for Possible' });
        this.importQuotePageTitle5 = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 5: View Import Results' });
        this.importQuoteStp2NxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importQuoteStp3NxtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.importQuoteStp4ImpNwBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import Now' });
        //this.importQuoteCnfrmLbl = page.locator('iframe').contentFrame().getByText('records were created');
        this.importQuoteCnfrmLbl = page.locator('iframe').contentFrame().locator('div.db > span');
        this.importQuoteExtBtn = page.locator('iframe').contentFrame().getByRole('button', { name: 'Exit' });


        //Recently Viewed
        //this.topQuoteRecord = page.getByRole('link', { name: 'New Sales 3' });
        this.topQuoteRecord = page.locator('td.cdk-column-name a.field-link');
        //this.QuoteRecentViewMenu = page.locator('a').filter({ hasText: 'Recently Viewed' });
        this.QuoteRecentViewMenu = page.locator('scrm-sub-menu-recently-viewed').locator('a.sub-nav-link.dropdown-toggle').first();
        //this.recentlyViewedQuoteSubMenu = page.getByRole('navigation').getByRole('link', { name: 'New Sales' });
        this.recentlyViewedQuoteSubMenu = page.locator('scrm-sub-menu-recently-viewed ul.dropdown-menu.submenu a.submenu-nav-link[href^="#/quotes/record/"]').first();
    }

    async openTopQuoteRecord()
    {
        const topQuoteNameCell = this.topQuoteRecord.first();
        await expect(topQuoteNameCell).toBeVisible({timeout: 10000});
        const firstQuoteName = (await topQuoteNameCell.innerText()).trim();
        logger.info(`Top Quote Name "${firstQuoteName}"`);
        await topQuoteNameCell.click();
        await this.page.waitForURL(url => url.toString().includes('/#/quotes/record'), { timeout: 30000 });
        logger.info(`Opened the top Quote Record from the Quotes dash board`);
        logger.info(` The URL is ${this.page.url()}`); 
    }

    async checkRecentViewInQuote()
    {
        await expect(this.QuoteRecentViewMenu).toBeVisible({timeout: 10000}); 
      }

    async openRecentViewSubmenuInQuote()
    {    
        await this.QuoteRecentViewMenu.hover();
    }

    async checkRecentViewQuotesSubMenu()
    {
        await expect(this.recentlyViewedQuoteSubMenu).toBeVisible({timeout: 10000});
    }

    async openRecentViewedQuote()
    {
        await this.recentlyViewedQuoteSubMenu.click();
    }

    async checkOpeningRecentViewedQuoterecord()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/quotes/record'), { timeout: 30000 });
        logger.info(`Opened recently viewed Quote Record via Recently Viewed option`);
        logger.info(`The URL is ${this.page.url()}`); 
    }

    async openQuotesDropDown()
    {
        await expect(this.quotesMenu).toBeVisible({timeout: 10000});
        await this.quotesMenu.hover();
    }  

    async verifyQuotesDropDownList()
    {
        await expect(this.createQuote).toBeVisible();
        await expect(this.viewQuote).toBeVisible();
        await expect(this.importQuotes).toBeVisible();
        await expect(this.importLineItem).toBeVisible();
    }

    async clickCreateQuote()
    {
        await expect(this.createQuote).toBeVisible();
        await this.createQuote.click();
        await this.page.waitForURL(url => url.toString().includes('/#/quotes/edit'));
    }
    
    async fillCreateQuotePage(dataKey)
    {
        logger.info(`Opened Create Quote page`);
        logger.info(`The URL is ${this.page.url()}`);   
        const qDetail = quoteDetails[dataKey];
    
        if (!quoteDetails) 
          throw new Error(`Lead data not found for key: ${dataKey}`);
        
        await this.quoteTitle.fill(qDetail.quoteRecordTitle);
        await this.quoteApprovalIssues.fill(qDetail.quoteApprovalIssues);
    }
     
    async confirmQuoteCreate(action) {
        switch (action) {
          case 'QuoteSave':
            await this.quoteSaveButton.click();
            break;
          case 'QuoteCancel':
            await this.quoteCancelButton.click();
            break;
          default:
            throw new Error(`Unknown action: ${action}`);
        }
    }
    
    async verifyCreateAllQuotesResult(result) {
        switch (result) {
          case 'Detailed view page of Created new Quote':{
            //await expect(this.quoteDetailedViewTitle).toBeVisible();
            //console.log (await this.quoteDetailedViewTitle.textContent());
            await this.page.waitForURL(url => url.toString().includes('/#/quotes/record'));
            logger.info(`New Quote is Created`);
          }
            break;
          case 'Required field error messages for Create Quote':{
            await expect(this.quoteFieldErrMsg.first()).toBeVisible();
            //console.log (await this.quoteFieldErrMsg.textContent());
            logger.info (`Field error message appeared when trying to click save button without entering the required details - Create Quotes`);
            logger.info(`The message is "${await this.quoteFieldErrMsg.textContent()}"`);
          }
            break;
          case 'Confirmation dialog appears for Create Quote':{
            //await expect(this.quoteCancelPopup).toBeVisible();
            //console.log (await this.quoteCancelPopup.textContent());
            await this.page.waitForURL(url => url.toString().includes('/#/quotes/list'));
            logger.info (`Create Quote cancelled and moved to Quotes dashboard `);
          }
            break;
              
          case 'Quote Dashboard page': {
            //await expect(this.importQuoteCnfrmLbl).toBeVisible();
            //console.log (await this.importQuoteCnfrmLbl.textContent());
            await this.importQuoteExtBtn.click();
            await this.page.waitForURL(url => url.toString().includes('/#/quotes/index'));
            logger.info (`Succesful Import Quotes`);
          }
            break; 
            
          case 'Import Quote Error Popup alert appears': {
            await expect(this.importQuoteAlertPopup).toBeVisible();
            await expect(this.importQuoteAlertPopup).toContainText('The selected file does not');
            //console.log (await this.importQuoteAlertPopupTxt.textContent());
            logger.info (`Import Quote Alert Popup message`);
            logger.info (`The message is "${await this.importQuoteAlertPopupTxt.textContent()}"`);
          } 
            break;
          case'Required field error messages for Import Quotes': {
            await expect(this.importQuoteFieldErrMsg.first()).toBeVisible();
            //console.log (await this.importQuoteFieldErrMsg.textContent());
            logger.info (`Field error message appeared when trying to click next button without uploading any File - Import Quotes`);
            logger.info (`The message is "${await this.importQuoteFieldErrMsg.textContent()}"`);
          }
            break;
            
          case 'Line Items dashboard page': {
            await expect(this.importLineItemCnfrmLbl).toBeVisible();
            //console.log (await this.importLineItemCnfrmLbl.textContent());
            await this.importLineItemExtBtn.click();
            await this.page.waitForURL(url => url.toString().includes('/#/products-quotes/index'));
            logger.info (`Succesful import Line Item`);
          }
            break; 
            
          case 'Import Line Items Error Popup alert appears': {
            await expect(this.LineItemAlertPopup).toBeVisible();
            await expect(this.LineItemAlertPopup).toContainText('The selected file does not');
            //console.log (await this.LineItemAlertPopupTxt.textContent());      
            logger.info (`Import Line Item Alert Popup message`);
            logger.info (`The message is "${await this.LineItemAlertPopupTxt.textContent()}"`);
          } 
            break;
          case'Required field error messages for Line Items': {
            await expect(this.LineItemFieldErrMsg.first()).toBeVisible();
            //console.log (await this.LineItemFieldErrMsg.textContent());
            logger.info (`Field error message appeared when trying to click next button without uploading any File - Line Items `);
            logger.info (`The message is "${await this.LineItemFieldErrMsg.textContent()}"`);
          }
            break;

          default:
            throw new Error(`Unknown expected result: ${result}`);
        }
    }

    async clickViewQuote()
    {
      await expect(this.viewQuote).toBeVisible({timeout: 10000});
      await this.viewQuote.click();
      await this.page.waitForURL(url => url.toString().includes('/#/quotes/index'));
    }

    async clickImportLineItems()
    {
        await expect(this.importLineItem).toBeVisible();
        await this.importLineItem.click();
        await this.page.waitForURL(url => url.toString().includes('/#/import/step1'),{ timeout: 30000 });  
        logger.info(`Importing Line Items`);
        logger.info(`Step 1 URL: ${this.page.url()}`);        
    }

       async clickCreateQuoteFromImport()
    {
        await expect(this.importQuotes).toBeVisible();
        await this.importQuotes.click();
        await this.page.waitForURL(url => url.toString().includes('/#/import/step1'),{ timeout: 30000 });
        //console.log('Step 1 URL:', this.page.url());
    }

    //All page Components
    async verifyQuotesPageComponents(componentsList) {
        for (const row of componentsList) {
          const componentType = row.Component;
          const expectedItems = row.ExpectedValues.split(',').map(item => item.trim());
          switch (componentType) {
            case 'PageTitle': {
              const pageTitleMap = {
                'QuoteCreate':this.createQuotePageTitle1,
                'ViewQuotes':this.viewQuotePgTitle,
                'UploadImportLineItemsFile':this.importLineItemPgTitle1,
                'UploadImportQuotesFile': this.importQuotePageTitle1
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
                'QuoteSave': this.quoteSaveButton,                            
                'QuoteCancel': this.quoteCancelButton,                        
                'QuoteFilter': this.quoteFilterBtn,                       
                'LineItemsChooseFile': this.LineItemChooseFileBtn,              
                'LineItemsNext': this.ImptLineItemNxtBtn,
                'QuoteChooseFile': this.importQuoteChooseFileBtn,      
                'QuoteNext': this.importQuoteNxtBtn                      
              };
              for (const item of expectedItems) {
                const element = buttonMap[item];
                if (element) {
                  await expect(element).toBeVisible({timeout: 10000});
                  //console.log(`${item}:`,(await element.textContent()).trim());
                  //logger.info (`Button name is "${(await element.textContent()).trim()}"`);
                }
              }
              break;
            }
            case 'Label': {
              const labelMap = {
                'InformationTextImportLineItems': this.LineItemLabel,                           
                'InformationTextImportQuotes': this.importQuoteLabel                    
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
              const linkMap = {'DownloadImportFileTemplateQuotes': this.importQuoteHypLink,
                               'DownloadImportFileTemplateLineItems':this.importLineItemHypLink
              };
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
                                  'RadioButtonLineItems1':this.importLineItemRadBtn1,
                                  'RadioButtonLineItems2':this.importLineItemRadBtn2,
                                  'RadioButtonQuotes1':this.importQuoteRadBtn1,
                                  'RadioButtonQuotes2':this.importQuoteRadBtn2
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
              'QuoteRecords': this.quoteRecords
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
                'SelectDropDown': this.quoteHdrSelectDropDown,
                'BulkActionsDropDown': this.quoteHdrBulkDropDown,
                'ColumnButton': this.quoteHdrColumnBtn,
                'NextPageButton': this.quoteHdrNxtPgBtn,
                'PreviousPageButton': this.quoteHdrPrePgBtn,
                'EndPageButton': this.quoteHdrLastPgBtn,
                'BeginingPageButton': this.quoteHdrBeginPgBtn,
                'PageNumber': this.quoteHdrCurrentPgNo
              };
              for (const text of expectedItems) {
                let element = headerMap[text];
                if (element) {
                  await expect(element).toBeVisible();
                  //console.log (`Header ${text} is visible`);
                  logger.info (`Quotes Header ${text} is visible`);
                }
              }
              break;
            }
    
            case 'Footer Contents': {
              const footerMap = {
                'SelectDropDown': this.quoteFtrSelectDropDown,
                'BulkActionsDropDown': this.quoteFtrBulkDropDown,
                'columnButton': this.quoteFtrColumnBtn,
                'NextPageButton': this.quoteFtrNxtPgBtn,
                'PreviousPageButton': this.quoteFtrPrePgBtn,
                'EndPageButton': this.quoteFtrLastPgBtn,          
                'BeginingPageButton': this.quoteFtrBeginPgBtn,
                'PageNumber': this.quoteFtrCurrentPgNo
              };
              for (const text of expectedItems) {
                let element = footerMap[text];
                if (element){
                  await expect(element).toBeVisible();
                  //console.log (`Footer ${text} is visible`);
                  logger.info (`Quotes Footer ${text} is visible`);
                }
              }
              break;
            }
            case 'Tabs':{
                const tabMap = {
                'QuoteOverview': this.QuoteOverview,
                'QuoteAddrInformation': this.QuoteAddrInformation,
                'LineItems': this.LineItemsTab
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

    async uploadAndImportAllQuoteFiles(fileType, importType) {
      logger.info(`Step 1 URL: ${this.page.url()}`);  
      const lFileDetail = inputFileDetails[fileType];
        if (!lFileDetail) {
          throw new Error(`File data not found for key: ${fileType}`);
        }
        const importLeadfilePath = lFileDetail.filePath;
        const fileInput = importType === 'importQuote' ? this.importQuoteChooseFileBtn : this.LineItemChooseFileBtn;
        if (fileType !== 'NoFile' && importLeadfilePath) {
          await fileInput.setInputFiles(importLeadfilePath);
        }
        if (importType === 'importQuote') {
            await this.importQuoteNxtBtn.click();
            if (fileType === 'ValidQuoteFile') {
                await expect(this.importQuotePageTitle2).toBeVisible({timeout: 10000});
                //console.log('Step 2 URL:', this.page.url());
                logger.info(`Step 2 URL: ${this.page.url()}`);        
                await this.importQuoteStp2NxtBtn.click();
                await expect(this.importQuotePageTitle3).toBeVisible({timeout: 10000});
                //console.log('Step 3 URL:', this.page.url());
                logger.info(`Step 3 URL: ${this.page.url()}`); 
                await this.importQuoteStp3NxtBtn.click();
                await this.page.waitForTimeout(1000);
                await this.page.mouse.wheel(0, -2500);
                await expect(this.importQuotePageTitle4).toBeVisible({timeout: 10000});
                //console.log('Step 4 URL:', this.page.url());
                logger.info(`Step 4 URL: ${this.page.url()}`); 
                await this.importQuoteStp4ImpNwBtn.click();
                await expect(this.importQuotePageTitle5).toBeVisible({timeout: 10000});
                //console.log('Step 5 URL:', this.page.url());
                logger.info(`Step 5 URL: ${this.page.url()}`); 
            }
            return;
        }
        await this.ImptLineItemNxtBtn.click();
        if (fileType === 'ValidLineItemFile') {
          await expect(this.importLineItempgTitle2).toBeVisible({timeout: 10000});
          //console.log('Step 2 URL:', this.page.url());
          logger.info(`Step 2 URL: ${this.page.url()}`);
          await this.importLineItemStp2NxtBtn.click();
          await expect(this.importLineItempgTitle3).toBeVisible({timeout: 10000});
          //console.log('Step 3 URL:', this.page.url());
          logger.info(`Step 3 URL: ${this.page.url()}`);
          await this.importLineItemStp3NxtBtn.click();
          await this.page.waitForTimeout(1000);
          await this.page.mouse.wheel(0, -2500);
          await expect(this.importLineItempgTitle4).toBeVisible({timeout: 10000});
          //console.log('Step 4 URL:', this.page.url());
          logger.info(`Step 4 URL: ${this.page.url()}`);
          await this.importLineItemStp4ImpNwBtn.click();
          await expect(this.importLineItempgTitle5).toBeVisible({timeout: 10000});
          //console.log('Step 5 URL:', this.page.url());
          logger.info(`Step 5 URL: ${this.page.url()}`);
        }
    }
    
    
    





};

