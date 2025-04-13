class ProductPage {
    get sizeOption() { return $('*[id="option-label-size-143-item-167"]'); }
    get colorOption() { return $('#option-label-color-93-item-57'); }
    get addToCartButton() { return $('#product-addtocart-button'); }
    get messageSuccess() { return $('.message-success.success.message'); }

    async selectSize() {
        await this.sizeOption.click();
    }

    async selectColor() {
        await this.colorOption.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async waitForSuccessMessage() {
        await browser.waitUntil(async () => {
            return (await this.messageSuccess.getText()).includes('You added');
        }, 10000);
    }
}

export default new ProductPage();
