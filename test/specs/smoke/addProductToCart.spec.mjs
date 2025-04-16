import { Builder } from "selenium-webdriver";
import AddToCartPage from "../../pageobjects/AddToCartPage.js";

describe("Add to Cart Test", () => {
    let driver;
    let addToCartPage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        addToCartPage = new AddToCartPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    it("Should successfully add a product to the cart", async () => {
        await addToCartPage.open();
        await addToCartPage.navigateToProduct();
        await addToCartPage.selectOptions();
        await addToCartPage.addToCart();
        await addToCartPage.isProductAdded();
        console.log("The product has been successfully added to the cart.");
    });
});