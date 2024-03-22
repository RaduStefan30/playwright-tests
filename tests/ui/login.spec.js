import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import { loginError } from '../../fixtures/messageConstants';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test.describe('User Login Tests', () => {
  test('Log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin('radu@test.com', 'test');
    await expect(loginPage.myAccountContainer).toBeVisible();
  });

  test('Log in with wrong credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.performLogin('wrong@email.com', 'wrongPassword');
    await expect(loginPage.errorMessage).toHaveText(loginError);
  });
});
