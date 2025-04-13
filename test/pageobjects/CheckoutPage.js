class CheckoutPage {
    get radioButton() { return $('//input[@type="radio" and @value="tablerate_bestway"]'); }
    get nextButton() { return $('//button[@data-role="opc-continue" and span[text()="Next"]]'); }
    get placeOrderButton() { return $('//button[@class="action primary checkout"]'); }

    async selectShippingMethod() {
        await this.radioButton.click();
    }

    async clickNext() {
        await this.nextButton.click();
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

export default new CheckoutPage();
