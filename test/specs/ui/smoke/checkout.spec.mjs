import LoginPage from '../../../pageobjects/LoginPage.js';
import CheckoutPage from '../../../pageobjects/CheckoutPage.js';
import AddToCartPage from '../../../pageobjects/AddToCartPage.js';

describe("E-commerce Checkout Flow", () => {
    let addToCartPage;
    let loginPage;
    let checkoutPage;

    beforeAll(() => {
        addToCartPage = new AddToCartPage();
        loginPage = new LoginPage();
        checkoutPage = new CheckoutPage();
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

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes("checkout/onepage/success");
        }, { timeout: 10000, timeoutMsg: 'Checkout success page not reached' });

        await checkoutPage.continueShopping();

        console.log("Checkout process completed successfully!");
    });
});
