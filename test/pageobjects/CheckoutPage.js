export default class CheckoutPage {
    get radioButton() {
        return $('input[type="radio"][value="tablerate_bestway"]');
    }

    get nextButton() { 
        return $('button[data-role="opc-continue"]')
    }

    get placeOrderButton() { 
        return $('button.action.primary.checkout[title="Place Order"]');

    }
        
    get continueShoppingLink() { 
        return $('a.action.primary.continue');
    }

    get myCartLink() { 
        return $('a.showcart');
    }

    get checkoutButton() { 
        return $('button#top-cart-btn-checkout.action.primary.checkout');
    }

    async selectShippingMethod() {
        await this.radioButton.click();
    }

    async clickNext() {
        await this.nextButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async continueShopping() {
        await this.continueShoppingLink.click();
    }

    async goToCart() {
        await this.myCartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
