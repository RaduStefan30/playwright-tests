class LoginPage {
    constructor(page) {
        this.page = page;
        this.myAccountButton = page.locator('.nav-item.dropdown:last-child');
        this.loginButton = page.locator('a[href*="login"]');
        this.usernameInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.submitButton = page.locator('[value="Login"]');
        this.myAccountContainer = page.locator('#account-account.container');
        this.errorMessage = page.locator('.alert-danger');
    }

    async hoverMyAccount() {
        await this.myAccountButton.hover();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async enterCredentials(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async submitLogin() {
        await this.submitButton.click();
    }

    async performLogin(email, password) {
        await this.hoverMyAccount();
        await this.clickLoginButton();
        await this.enterCredentials(email, password);
        await this.submitLogin();
    }
}

module.exports = { LoginPage };
