import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

Before(async function () {

    // Launch browser
    this.browser = await chromium.launch({
        headless: false
    });

    // Create browser context
    this.context = await this.browser.newContext();

    // Create page
    this.page = await this.context.newPage();
});

After(async function () {

    // Close context
    await this.context.close();

    // Close browser
    await this.browser.close();
});