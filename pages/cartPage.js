export default class CartPage {
    constructor(page) {
        this.page = page;
        this.categoriesLink = page.locator('#main-navigation .shop-by-category a');
        this.componentsLink = page.locator('a.nav-link >> text=Components');
        this.viewCartButton = page.locator('#notification-box-top .btn-primary');
        this.itemQuantity = page.locator('.table input.form-control');
        this.productCard = page.locator('.product-thumb-top').first();;
        this.itemTitle = page.locator('.product-thumb .title a').first();
        this.addToCartButton = page.locator('.product-thumb-top .btn.btn-cart').first();
        this.removeFromCartButton = page.locator('.btn.btn-danger');
        this.emptyCartMessage = page.locator('#content p');
    }

    async clickCategoriesLink() {
        await this.categoriesLink.click();
    }

    async clickComponentsLink() {
        await this.componentsLink.click();
    }

    async hoverOverProduct() {
        await this.productCard.hover();
    }

    async addItemToCart() {
        // temp workaround for the animation
        await this.page.waitForTimeout(1000);
        await this.addToCartButton.click();
    }

    async getItemTitle() {
        const title = await this.itemTitle.textContent();
        return title;
    }

    async openCartFromPopUp() {
        await this.viewCartButton.click();
    }

    async checkItemIsPresentInCart(title) {
        await this.page.getByTitle(title);
    }

    async getItemQuantityByIndex(index = 0) {
        const itemQuantity = +await this.itemQuantity.nth(index).inputValue();
        return itemQuantity;
    }

    async removeItemFromCart() {
        await this.removeFromCartButton.click();
        await this.removeFromCartButton.waitFor({ state: 'detached' });
    }
}
