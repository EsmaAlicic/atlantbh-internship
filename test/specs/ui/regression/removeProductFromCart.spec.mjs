import RemoveProductPage from '../../pageobjects/RemoveProductPage.js';

describe("Remove product from cart test", () => {

    it("Should successfully remove product from the cart", async () => {
        await RemoveProductPage.open();

        await RemoveProductPage.selectCategory();
        let currentUrl = await browser.getUrl();
        expect(currentUrl).toContain(RemoveProductPage.expectedCategoryUrl);

        await RemoveProductPage.selectProduct();
        let currentUrl2 = await browser.getUrl();
        expect(currentUrl2).toContain(RemoveProductPage.expectedProductUrl);

        await RemoveProductPage.addToCart("S", "Black");

        await RemoveProductPage.openCart();
        let currentUrl3 = await browser.getUrl();
        expect(currentUrl3).toContain("checkout/cart");
    });

    it("Should successfully remove product from the cart", async () => {
        await RemoveProductPage.removeProductFromCart();

        const removeElements = await RemoveProductPage.removeButtons;
        expect(removeElements.length).toBe(0);
    });
});
