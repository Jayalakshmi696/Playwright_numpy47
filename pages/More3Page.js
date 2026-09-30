import {expect} from '@playwright/test';

export class More3Page {
  constructor(page) {
        this.page = page;
        //this.moreMenu = page.locator('scrm-base-navbar a.top-nav-link.dropdown-toggle').filter({ hasText: /^More$/ });
        this.moreMenu=page.locator('a').filter({ hasText: 'More' })

        //More3 DropDownlist
        this.targetsList = page.getByRole('link', { name: 'Targets - Lists' });
        this.projects = page.getByRole('link', { name: 'Projects', exact: true });
        this.projectTemplates = page.getByRole('link', { name: 'Projects - Templ...' });
        this.events = page.getByRole('link', { name: 'Events' });
        this.locations = page.getByRole('link', { name: 'Locations' });
        this.products = page.getByRole('link', { name: 'Products', exact: true });

        this.targetsListTitle = page.getByText('TARGETS - LISTS', { exact: true });
        this.projectTitle = page.getByText('PROJECTS', { exact: true });
        this.projectTemplatesTitle = page.getByRole('link', { name: 'Projects - Templ...' });
        this.eventsTitle = page.getByText('EVENTS', { exact: true });
        this.locationsTitle = page.getByText('LOCATIONS', { exact: true });
        this.productsTitle = page.getByText('PRODUCTS', { exact: true });
    }

    async openMore3DropDown()
    {
        await expect(this.moreMenu).toBeVisible({timeout: 10000});
        await this.moreMenu.hover();
    }  

    async verifyMore3DropDownList()
    {
        await expect(this.targetsList).toBeVisible();
        await expect(this.projects).toBeVisible();
        await expect(this.projectTemplates).toBeVisible();
        await expect(this.events).toBeVisible();
        await expect(this.locations).toBeVisible();
        await expect(this.products).toBeVisible();
    }

    async clickTargetsList()
    {
        await expect(this.targetsList).toBeVisible();
        await this.targetsList.click();
    }

    async verifyTargetListPageOpen()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/prospect-lists'));
    }

    async clickProjects()
    {
        await expect(this.projects).toBeVisible();
        await this.projects.click();

    }

    async verifyProjectsPageOpen()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/project'));
    }

    async clickProjectTemplates()
    {
        await expect(this.projectTemplates).toBeVisible();
        await this.projectTemplates.click();

    }

    async verifyProjectTemplatesPageOpen()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/project-templates'));
    }

    async clickEvents()
    {
        await expect(this.events).toBeVisible();
        await this.events.click();

    }

    async verifyEventsPageOpen()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/events'));
    }

    async clickLocations()
    {
        await expect(this.locations).toBeVisible();
        await this.locations.click();

    }

    async verifyLocationsPageOpen()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/event-locations'));
    }

    async clickProducts()
    {
        await expect(this.products).toBeVisible();
        await this.products.click();

    }

    async verifyProductsPageOpen()
    {
        await this.page.waitForURL(url => url.toString().includes('/#/products'));
    }
  
};