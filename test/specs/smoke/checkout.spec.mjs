import LoginPage from '../../pageobjects/LoginPage';
import ProductPage from '../../pageobjects/ProductPage';
import CartPage from '../../pageobjects/CartPage';
import CheckoutPage from '../../pageobjects/CheckoutPage';
import ConfirmationPage from '../../pageobjects/ConfirmationPage';

describe('Checkout Process', () => {
    it('should complete the checkout process', async () => {
        await LoginPage.open();
        await LoginPage.login('test.prvi@prvitest.ba', 'prViTest#');

        // Izbor proizvoda i dodavanje u korpu
        await browser.url('https://magento.softwaretestingboard.com/whats-new.html');
        await ProductPage.selectSize();
        await ProductPage.selectColor();
        await ProductPage.addToCart();
        await ProductPage.waitForSuccessMessage();

        // Provjera korpe i checkout
        await CartPage.goToCart();
        await CartPage.proceedToCheckout();

        // Checkout i potvrda narudžbe
        await CheckoutPage.selectShippingMethod();
        await CheckoutPage.clickNext();
        await CheckoutPage.placeOrder();

        // Potvrda narudžbe
        await browser.waitUntil(async () => {
            return await browser.getUrl().includes('checkout/onepage/success');
        }, 20000);

        await ConfirmationPage.continueShopping();

        console.log("Test has been successfully completed!");
    });
});
