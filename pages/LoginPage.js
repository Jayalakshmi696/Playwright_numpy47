import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.applicationLogo =
            page.locator('form[name="login"] img');

    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Log In' })
  }

  async navigateToLoginPage(url = 'https://suite8demo.suiteondemand.com/#/Login') {
    await this.page.goto(url);
    await expect(this.page).toHaveURL(/.*#\/Login/);
  }

  async verifyLoginPageUI() {

    await expect(this.applicationLogo).toBeVisible();

    await expect(this.usernameInput).toBeVisible();

    await expect(this.passwordInput).toBeVisible();

    await expect(this.loginButton).toBeVisible();
  }

//     this.errorMessage = page.getByText(/Missing required field|failed login attempts|error/i);
//   }

async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  
  }

  








