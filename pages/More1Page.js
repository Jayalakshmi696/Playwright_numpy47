import { expect } from '@playwright/test';

export class MorePage {
    constructor(page) {
        this.page = page;
        this.moreMenu = page.locator('a').filter({ hasText: 'More' });
        this.home = page.getByRole('link', { name: 'Home' });
        this.Emails= page.getByRole('link', { name: 'Emails' });
        this.campaigns= page.getByRole('link', { name: 'Campaigns' });
        this.calls=page.getByRole('link', { name: 'Calls' });
        this.meetings=page.getByRole('link', { name: 'Meetings' });
        this.tasks=page.getByRole('link', { name: 'Tasks' });

    }

    async clickMoreModule() {
        await this.moreMenu.click();
        await expect(this.home).toBeVisible();
    }
    async clickEmails() {
        await this.Emails.click();
        await expect(this.page.getByText('EMAILS', { exact: true })).toBeVisible();
    }
    async clickCampaigns() {
        await this.campaigns.click();
        await expect(this.page.getByText('CAMPAIGNS', { exact: true })).toBeVisible();
    }
    async clickCalls() {
        await this.calls.click();
        await expect(this.page.getByText('CALLS', { exact: true })).toBeVisible();
    }
    async clickMeetings() {
        await this.meetings.click();
        await expect(this.page.getByText('MEETINGS', { exact: true })).toBeVisible();
    }
    async clickTasks() {
        await this.tasks.click();
        await expect(this.page.getByText('TASKS', { exact: true })).toBeVisible();
    }
}