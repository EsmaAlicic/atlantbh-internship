export default class RemoveProductPage {
    get url() {
        return `${this.baseUrl}/what-is-new.html`;
    }

    get categoryName() {
        return 'Jackets';
    }

    get productName() {
        return 'Olivia 1/4 Zip Light Jacket';
    }

    get expectedCategoryUrl() {
        return 'jackets';
    }

    get expectedProductUrl() {
        return 'olivia-1-4-zip-light-jacket';
    }

    get jacketsLink() {
        return $('a=Jackets');
    }

    get productImage() {
        return $(`img[alt*="${this.productName}"]`);
    }

    getSizeOption(size) {
        return $(`div.swatch-option.text[option-label="${size}"]`);
    }

    getColorOption(color) {
        return $(`div.swatch-option.color[option-label="${color}"]`);
    }

    get addToCartButton() {
        return $('#product-addtocart-button');
    }

    get cartIcon() {
        return $('[data-block="minicart"] .action.showcart');
    }

    get viewCartLink() {
        return $('a.action.viewcart');
    }

    get removeButton() {
        return $('a.action.action-delete[title="Remove item"]');
    }

    get removeButtons() {
        return $$('a.action.action-delete[title="Remove item"]');
    }

    async open() {
        await browser.url(this.url);
    }

    async selectCategory() {
        await this.jacketsLink.click();
    }

    async selectProduct() {
        await this.productImage.click();
    }

    async addToCart(size, color) {
        const sizeOption = await this.getSizeOption(size);
        await sizeOption.waitForDisplayed();
        await sizeOption.scrollIntoView();
        await sizeOption.click();

        const colorOption = await this.getColorOption(color);
        await colorOption.waitForDisplayed();
        await colorOption.scrollIntoView();
        await colorOption.click();

        await this.addToCartButton.click();
        await browser.pause(3000); 
    }

    async openCart() {
        await this.cartIcon.click();
        await this.viewCartLink.waitForDisplayed();
        await this.viewCartLink.click();
    }

    async removeProductFromCart() {
        await this.removeButton.waitForDisplayed();
        await this.removeButton.scrollIntoView();
        await this.removeButton.click();

        console.log("Product successfully removed from the cart!");

        await this.removeButton.waitForExist({ reverse: true }); 
    }
}
