export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.myAccountButton = page.locator('.nav-item.dropdown:last-child');
        this.loginButton = page.locator('a[href*="login"]');
        this.registerButton = page.locator('a[href*="register"]');
        this.usernameInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.submitButton = page.locator('[value="Login"]');
        this.myAccountContainer = page.locator('#account-account.container');
        this.errorMessage = page.locator('.alert-danger');
        this.firstNameInput = page.locator('#input-firstname');
        this.lastNameInput = page.locator('#input-lastname');
        this.emailInput = page.locator('#input-email');
        this.telephoneInput = page.locator('#input-telephone');
        this.passwordInput = page.locator('#input-password');
        this.passwordConfirmInput = page.locator('#input-confirm');
        this.agreeCheckbox = page.locator('.custom-checkbox');
        this.submitButton = page.locator('input[type="submit"]');
    }

    async hoverMyAccount() {
        await this.myAccountButton.hover();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async fillLoginForm(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async submitLogin() {
        await this.submitButton.click();
    }

    async performLogin(email, password) {
        await this.clickLoginButton();
        await this.fillLoginForm(email, password);
        await this.submitLogin();
    }
    async fillRegistrationForm(user) {
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.emailInput.fill(user.email);
        await this.telephoneInput.fill(user.telephone);
        await this.passwordInput.fill(user.password);
        await this.passwordConfirmInput.fill(user.password);
    }

    async agreeToTerms() {
        await this.agreeCheckbox.click();
    }

    async submitRegistrationForm() {
        await this.submitButton.click();
    }
}