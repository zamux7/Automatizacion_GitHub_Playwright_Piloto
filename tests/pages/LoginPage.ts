import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com');
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.getByPlaceholder('Username').fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.getByPlaceholder('Password').fill(password);
  }

  async submit(): Promise<void> {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  get productsBanner() {
    return this.page.getByRole('banner');
  }

  get loginError() {
    return this.page.getByRole('alert');
  }
}