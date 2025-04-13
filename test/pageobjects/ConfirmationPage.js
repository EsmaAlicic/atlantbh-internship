class ConfirmationPage {
    get continueShoppingLink() { return $('//a[@class="action primary continue" and contains(@href, "magento.softwaretestingboard.com")]/span[text()="Continue Shopping"]'); }

    async continueShopping() {
        await this.continueShoppingLink.click();
    }
}

export default new ConfirmationPage();
