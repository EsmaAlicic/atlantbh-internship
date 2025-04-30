import { Builder } from "selenium-webdriver";
import LoginPage from '../../pageobjects/LoginPage.js';
import CheckoutPage from '../../pageobjects/CheckoutPage.js';
import AddToCartPage from "../../pageobjects/AddToCartPage.js";

const loginPage = new LoginPage(driver);
const addToCartPage = new AddToCartPage(driver);
const checkoutPage = new CheckoutPage(driver);

describe("E-commerce Checkout Flow", () => {
    let driver;
    let addToCartPage;
    let loginPage;
    let checkoutPage;

    fit(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        console.log('Driver check!' + driver);
    });
    
    afterAll(async () => {
        await driver.quit();
    });

    it('Should sign in successfully', async () => {
        await loginPage.open();
        await loginPage.clickSignInLink();

        await loginPage.enterEmail('first.test@gmail.com');
        await loginPage.enterPassword('fIrstTEst#');
        await loginPage.clickSignIn();
        console.log('Signed in successfully!');
    });

    it("Should successfully add a product to the cart", async () => {
        await addToCartPage.open();
        await addToCartPage.navigateToProduct();
        await addToCartPage.selectOptions();
        await addToCartPage.addToCart();
        await addToCartPage.isProductAdded();
        console.log("The product has been successfully added to the cart.");
    });

    it("Should complete the checkout process", async () => {
        await checkoutPage.goToCart();
        await checkoutPage.proceedToCheckout();

        await checkoutPage.selectShippingMethod();
        await checkoutPage.clickNext();
        await checkoutPage.placeOrder();

        await driver.wait(async () => {
            return (await driver.getCurrentUrl()).includes("checkout/onepage/success");
        }, 10000);

        await checkoutPage.continueShopping();

        console.log("Checkout process completed successfully!");
    });
});
