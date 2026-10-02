import { expect } from '@playwright/test';

export class UserProfilePage {
    constructor(page) {
        this.page = page;
        this.profileMenu=page.locator('.dropdown-toggle.nav-link.primary-global-link');
        this.profileText=page.getByText('Will Westin');
        this.editProfileLink=page.getByRole('link', { name: 'Edit Profile' });
        this.employees=page.getByRole('link', { name: 'Employees' });
        this.communityForum=page.getByRole('link', { name: 'Community Forum' });
        this.about=page.getByRole('link', { name: 'About' });
        this.logout=page.getByText('Logout');
        this.editProfileText=page.getByText('EMPLOYEES', { exact: true });
       //this.editProfileText = page.locator('div.dropdown-menu.global-links-dropdown.border.shadow-sm-2.dropdown-menu-right.ng-tns-c2316037842-2.show').locator('a').nth(0);
        this.profileFrame = page.frameLocator('iframe').first();
        this.editSave=this.profileFrame.getByRole('button', { name: 'Save' });
        this.lastNameInput = this.profileFrame.locator('input[name="last_name"]');
        //this.lastNameInput=page.locator('iframe:visible').contentFrame().locator('input[name="last_name"]');
        this.errorMessageLocator=this.profileFrame.getByText('Missing required field: Last Name', { exact: true });
        this.photoUpload=this.profileFrame.getByRole('button', { name: 'Choose File' }); 
        this.photoFile = this.profileFrame.locator('#photo_file');
        this.settingsButton=this.profileFrame.getByRole('button', { name: 'Settings' });
        this.settingsPopup=this.profileFrame.getByRole('heading', { name: 'Preferences' });
        this.addEmailButton=this.profileFrame.getByTitle('Add Email Address ');
        this.emailInput=this.profileFrame.locator('#Users0emailAddress3');
    }

         async userProfileIcon()
         {
                await expect(this.page.locator('app-full-page-spinner .app-overlay'))
                     .toBeHidden({ timeout: 30000 });
                await expect(this.profileMenu).toBeVisible({ timeout: 15000 });
            await this.profileMenu.click();
         }
          async verifySettingsPopup()
         {
              await expect(this.settingsPopup).toBeVisible();
         }

         async addEmailAddress(email) 
         {
             await this.addEmailButton.click();
             await this.emailInput.fill(email);
        }

        async saveProfile() {
         await this.editSave.click();
        }

        emailAddress(email) {
         return this.page.getByText(email, { exact: true });
        }
        
         async editProfileSettings()
         {
              await this.settingsButton.click();
         }
         async photoUpload()
         {
            await this.photoUpload.click();
         }

         async uploadPhoto(photoPath) {
               await this.photoFile.setInputFiles(photoPath);
         }
         async errorMessage()
         {
                await expect(this.errorMessageLocator).toBeVisible();
         }
         async userEditSave()
         {
                await this.lastNameInput.clear();
            await this.editSave.click();
         }
         async editProfile()
         {
             await Promise.all([
                 this.page.waitForURL(/#\/users\/edit\//),
                 this.editProfileLink.click()
             ]);

         }
         async editprofilePage()
         {
                await expect(this.lastNameInput).toBeVisible({ timeout: 15000 });
         }

         async employees()
         {
            await this.employees.click();
           
         }

         async userAbout()
         {
            await this.about.click();
         }
         
         async communityNavigation()
         {
           const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.communityForum.click()
          ]);

        await newPage.waitForLoadState('domcontentloaded');

             return newPage;
        }

        async userLogout()
        {
            await this.logout.click();
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
        this.editProfileLink.click()
    ]);
      }

  }
