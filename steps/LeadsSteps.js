import {test, expect} from '@playwright/test';

import {login} from './../pom/Login.js';

import {createBDD} from 'playwright-bdd';
const {Given, When, Then} = createBDD(test);

Given('User successfully Logged in to the application', async ({}) => {

});

When('User is on the Home page', async ({}) => {

});

Then('User should see Leads menu in the Menu', async ({}, arg) => {

});

Given('User is on the Home page', async ({}) => {

});

When('Hover over the Leads Menu', async ({}) => {

});

Then('User should see Leads module drop down list contents with the following options', async ({}, arg, dataTable) => {

});