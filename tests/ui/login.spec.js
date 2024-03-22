import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import { loginError, accountCreated } from '../../fixtures/messageConstants';
import { generateRandomUser } from '../../utils/userUtils';

test.beforeEach(async ({ page }) => {
  await page.goto('');

  const loginPage = new LoginPage(page);
  await loginPage.hoverMyAccount();
});

test.describe('User Login Tests', () => {
  test('Register a user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const user = generateRandomUser();
    await loginPage.clickRegisterButton()
    await loginPage.fillRegistrationForm(user);
    await loginPage.agreeToTerms();
    await loginPage.submitRegistrationForm();
    await expect(page.getByText(accountCreated)).toBeVisible();
  });

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
