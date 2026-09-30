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
        this.editSave=page.locator('iframe:visible').contentFrame().getByRole('button', { name: 'Save' });
        this.lastNameInput=page.locator('iframe:visible').contentFrame().locator('input[name="last_name"]');
        this.errorMessageLocator=page.locator('iframe:visible').contentFrame().getByText('Missing required field: Last Name', { exact: true });
        this.photoUpload=page.locator('iframe').contentFrame().getByRole('button', { name: 'Choose File' }); 
        this.photoFile = page.locator('iframe:visible').contentFrame().locator('#photo_file');
        this.settingsButton=page.locator('iframe:visible').contentFrame().getByRole('button', { name: 'Settings' });
        this.settingsPopup=page.locator('iframe:visible').contentFrame().getByRole('heading', { name: 'Preferences' });
        this.addEmailButton=page.locator('iframe').contentFrame().getByTitle('Add Email Address ');
        this.emailInput=page.locator('iframe').contentFrame().locator('#Users0emailAddress3');
    }

         async userProfileIcon()
         {
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
              await expect(this.lastNameInput).toBeVisible();
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
            const newPagePromise = this.page.context().waitForEvent('page');
            await this.communityForum.click();
            const newPage = await newPagePromise;
            await newPage.waitForLoadState();
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
