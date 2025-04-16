import { By, until } from "selenium-webdriver";

export default class AddToCartPage {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = browser.options.baseUrl;
    }

    // GETTERS
    get whatsNewButton() {
        return this.driver.findElement(By.id("ui-id-3"));
    }

    get promoLink() {
        return this.driver.findElement(By.css("a.block-promo.new-main"));
    }

    get productLink() {
        return this.driver.findElement(By.xpath("//a[@class='product-item-link' and contains(text(), 'Elisa EverCool')]"));
    }  

    get sizeOption() {
        return this.driver.findElement(By.css('*[id="option-label-size-143-item-167"]')); // S
    }

    get colorOption() {
        return this.driver.findElement(By.id("option-label-color-93-item-57")); // Purple
    }

    get addToCartButton() {
        return this.driver.findElement(By.id("product-addtocart-button"));
    }

    get successMessage() {
        return this.driver.findElement(By.css(".message-success.success.message"));
    }

    // METHODS
    async open() {
        await this.driver.get(this.baseUrl);
    }

    async navigateToProduct() {
        await this.driver.wait(until.elementLocated(By.id("ui-id-3")));  
        await this.whatsNewButton.click();  

        await this.driver.wait(until.elementLocated(By.css("a.block-promo.new-main")));
        await this.promoLink.click();
        await this.driver.wait(until.urlContains("yoga-new.html"));

        await this.productLink.click();
        await this.driver.wait(until.urlContains("elisa-evercool-trade-tee.html"));
    }

    async selectOptions() {
        await this.driver.wait(until.elementLocated(By.css('*[id="option-label-size-143-item-167"]')));
        await this.sizeOption.click();

        await this.driver.wait(until.elementIsVisible(this.colorOption));
        await this.colorOption.click();
    }

    async addToCart() {
        await this.driver.wait(until.elementIsVisible(this.addToCartButton));
        await this.addToCartButton.click();
    }

    async isProductAdded() {
        await this.driver.wait(until.elementLocated(By.css(".message-success.success.message")));
        await this.driver.wait(until.elementTextContains(this.successMessage, "You added"));
        return true;
    }
}
