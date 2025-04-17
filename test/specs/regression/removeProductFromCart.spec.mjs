import { Builder, By, until } from 'selenium-webdriver';
import RemoveProductPage from '../../pageobjects/RemoveProductPage.js';

describe("Remove product from cart test", () => {
    let driver;
    let removeProductPage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().setTimeouts({ implicit: 5000 });
        removeProductPage = new RemoveProductPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    it("Should successfully remove product from the cart", async () => {
        await removeProductPage.open();

        await removeProductPage.selectCategory("Jackets");
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toContain("jackets");

        await removeProductPage.selectProduct("Olivia 1/4 Zip Light Jacket");
        const currentUrl2 = await driver.getCurrentUrl();
        expect(currentUrl2).toContain("olivia-1-4-zip-light-jacket");


        await removeProductPage.addToCart("S", "Black");

        await removeProductPage.openCart();
        const currentUrl3 = await driver.getCurrentUrl();
        expect(currentUrl3).toContain("checkout/cart");

        await removeProductPage.removeProductFromCart();

        const removeElements = await driver.findElements(By.css('a.action.action-delete[title="Remove item"]'));
        expect(removeElements.length).toBe(0);
    });
});
