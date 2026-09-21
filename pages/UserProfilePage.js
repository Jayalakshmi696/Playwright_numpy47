import { expect } from '@playwright/test';

export class UserProfilePage {
    constructor(page) {
        this.page = page;
        this.profileMewnu=page.locator('.dropdown-toggle.nav-link.primary-global-link');
        this.profileText=page.getByText('Will Westin');
        this.editProfile=page.getByRole('link', { name: 'Edit Profile' });
        this.employees=page.getByRole('link', { name: 'Employees' });
        this.communityForum=page.getByRole('link', { name: 'Community Forum' });
        this.about=page.getByRole('link', { name: 'About' });
        this.logout=page.getByText('Logout');
        this.editProfileText=page.getByText('EMPLOYEES', { exact: true });
         }

         async editProfile()
         {
             await this.editProfile.click();
             await expect(this.editProfileText).toBeVisible();

         }
         async communityNavigation()
         {
            const newPagePromise = this.page.context().waitForEvent('page');
            await this.communityForum.click();
            const newPage = await newPagePromise;
            await newPage.waitForLoadState();
            return newPage;
        }

        async aboutNaviagtion()
        {
            const newPagePromise = this.page.context().waitForEvent('page');
            await this.about.click();
            const aboutPage = await newPagePromise;
            await aboutPage.waitForLoadState();
            return aboutPage;
            
        }
        async logoutNavigation()
        {
            await this.logout.click();
            await this.page.waitForLoadState();  
        }
      async editProfileNavigation()
      {
        await Promise.all([
        this.page.waitForURL(/#\/users\/edit\//),
        this.editProfile.click()
    ]);
      }

  }
