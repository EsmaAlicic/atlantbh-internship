export default class CheckoutPage {
    get radioButton() { 
        return $('//input[@type="radio" and @value="tablerate_bestway"]'); 
    }

    get nextButton() { 
        return $('//button[@data-role="opc-continue" and span[text()="Next"]]'); 
    }

    get placeOrderButton() { 
        return $('//button[@class="action primary checkout"]'); 
    }

    get continueShoppingLink() { 
        return $('//a[@class="action primary continue" and contains(@href, "magento.softwaretestingboard.com")]/span[text()="Continue Shopping"]'); 
    }

    get myCartLink() { 
        return $('//a[contains(@class, "showcart")]'); 
    }

    get checkoutButton() { 
        return $('//button[@id="top-cart-btn-checkout" and @class="action primary checkout"]'); 
    }

    // Methods for actions

    // Select the shipping method
    async selectShippingMethod() {
        await this.radioButton.click();
    }

    // Click the 'Next' button
    async clickNext() {
        await this.nextButton.click();
    }

    // Place the order
    async placeOrder() {
        await this.placeOrderButton.click();
    }

    // Continue shopping after order confirmation
    async continueShopping() {
        await this.continueShoppingLink.click();
    }

    // Go to the cart page
    async goToCart() {
        await this.myCartLink.click();
    }

    // Proceed to checkout from the cart
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}