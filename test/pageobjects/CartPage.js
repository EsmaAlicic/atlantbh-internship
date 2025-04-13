class CartPage {
    get myCartLink() { return $('//a[@class="action showcart"]'); }
    get checkoutButton() { return $('//button[@id="top-cart-btn-checkout" and @class="action primary checkout"]'); }

    async goToCart() {
        await this.myCartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
