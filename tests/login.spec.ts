import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('CP01 - Login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.submit();

  await expect(loginPage.productsBanner).toContainText('Products');
});

test('CP02 - Login con clave incorrecta', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('wrong_password');
  await loginPage.submit();

  await expect(loginPage.loginError).toContainText(
    'Username and password do not match',
  );
});