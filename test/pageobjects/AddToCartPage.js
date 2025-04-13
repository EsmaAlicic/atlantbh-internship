import { By, until } from "selenium-webdriver";

export default class AddToCartPage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://magento.softwaretestingboard.com/what-is-new.html";
    }

    // GETTERI
    get promoLink() {
        return this.driver.findElement(By.css("a.block-promo.new-main"));
    }

    get productLink() {
        return this.driver.findElement(By.xpath("//a[@href='https://magento.softwaretestingboard.com/elisa-evercool-trade-tee.html']"));
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

    // METODE
    async open() {
        await this.driver.get(this.url);
    }

    async navigateToProduct() {
        await this.driver.wait(until.elementLocated(By.css("a.block-promo.new-main")), 10000);
        await this.promoLink.click();
        await this.driver.wait(until.urlContains("yoga-new.html"), 10000);

        await this.productLink.click();
        await this.driver.wait(until.urlContains("elisa-evercool-trade-tee.html"), 10000);
    }

    async selectOptions() {
        await this.driver.wait(until.elementLocated(By.css('*[id="option-label-size-143-item-167"]')), 10000);
        await this.sizeOption.click();

        await this.driver.wait(until.elementIsVisible(this.colorOption), 10000);
        await this.colorOption.click();
    }

    async addToCart() {
        await this.driver.wait(until.elementIsVisible(this.addToCartButton), 10000);
        await this.addToCartButton.click();
    }

    async isProductAdded() {
        await this.driver.wait(until.elementLocated(By.css(".message-success.success.message")), 10000);
        await this.driver.wait(until.elementTextContains(this.successMessage, "You added"), 10000);
    }
}
