import { test as setup } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { LoginPage } from '../pages/LoginPage.js';
import testData from '../test-data/loginData.json' with { type: 'json' };

const sessionStoragePath = path.resolve('playwright/.auth/session-storage.json');

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://suite8demo.suiteondemand.com/#/Login');

    const user = testData.validUsernameAndPassword;

    await loginPage.login(user.username, user.password);

    await page.waitForURL(/#\/home/,{ timeout: 30000 });

    
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});

