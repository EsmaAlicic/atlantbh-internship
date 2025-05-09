export default class AddToCartPage {
    constructor() {
        this.baseUrl = browser.options.baseUrl;
    }

    get whatsNewButton() {
        return $('#ui-id-3');
    }

    get promoLink() {
        return $('a.block-promo.new-main');
    }

    get productLink() {
        return $('.product-item-link:contains("Elisa EverCool")'); 
    }  

    get sizeOption() {
        return $('#option-label-size-143-item-167');
    }

    get colorOption() {
        return $('#option-label-color-93-item-57');
    }

    get addToCartButton() {
        return $('#product-addtocart-button');
    }

    get successMessage() {
        return $('.message-success.success.message');
    }

    get expectedPromoUrl() { 
        return 'yoga-new.html'; 
    }

    get expectedProductUrl() { 
        return 'elisa-evercool-trade-tee.html';
    }

    async open() {
        await browser.url(this.baseUrl);
    }

    async navigateToProduct() {
        await this.whatsNewButton.waitForDisplayed();  
        await this.whatsNewButton.click();  

        await this.promoLink.waitForDisplayed();
        await this.promoLink.click();

        await browser.waitUntil(async () => (await browser.getUrl()).includes(this.expectedPromoUrl), {
            timeout: 10000,
            timeoutMsg: 'Expected promo URL was not found'
        });
        
        await this.productLink.waitForDisplayed();
        await this.productLink.click();

        await browser.waitUntil(async () => (await browser.getUrl()).includes(this.expectedProductUrl), {
            timeout: 10000,
            timeoutMsg: 'Expected product URL was not found'
        });
    }

    async selectOptions() {
        await this.sizeOption.waitForDisplayed();
        await this.sizeOption.click();

        await this.colorOption.waitForDisplayed();
        await this.colorOption.click();
    }

    async addToCart() {
        await this.addToCartButton.waitForDisplayed();
        await this.addToCartButton.click();
    }

    async isProductAdded() {
        await this.successMessage.waitForDisplayed();
        const messageText = await this.successMessage.getText();
        return messageText.includes("You added");
    }
}

