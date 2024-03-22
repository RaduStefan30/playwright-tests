import { test, expect } from '@playwright/test';
import CartPage from '../../pages/cartPage';
import { emptyCart } from '../../fixtures/messageConstants';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test.describe('Cart Functionality Tests', () => {
    test('Remove an item from the cart', async ({ page }) => {
        const cartPage = new CartPage(page);

        // Navigate to a product category
        await cartPage.clickCategoriesLink();
        await cartPage.clickComponentsLink();

        // Add an item to the cart
        await cartPage.hoverOverProduct();
        const title = await cartPage.getItemTitle();
        await cartPage.addItemToCart();

        // Check that the item was added to the cart
        await cartPage.openCartFromPopUp();
        await cartPage.checkItemIsPresentInCart(title);
        const initialCartQuantity = await cartPage.getItemQuantityByIndex();
        expect(initialCartQuantity).toBe(1);

        // Remove the item from the cart
        await cartPage.removeItemFromCart();

        // Check that the item was removed by validating the empty cart message
        expect(cartPage.emptyCartMessage).toHaveText(emptyCart)
    });
});