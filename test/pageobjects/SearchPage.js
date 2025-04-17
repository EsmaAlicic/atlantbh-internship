import { By, until, Key } from "selenium-webdriver";

export default class SearchPage {
    constructor(driver) {
        this.driver = driver;
        this.url = "https://magento.softwaretestingboard.com";
    }

    // GETTERS
    get searchInput() {
        return this.driver.findElement(By.id("search"));
    }

    get itemCount() {
        return this.driver.findElement(By.css(".toolbar-amount .toolbar-number:nth-of-type(3)"));
    }

    // METHODS
    async open() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(By.id("search")), 10000);
    }

    async searchItem(term) {
        await this.searchInput.then(input => input.clear());
        await this.searchInput.then(input => input.sendKeys(term, Key.ENTER));
        await this.driver.wait(until.elementLocated(By.css(".toolbar-amount .toolbar-number:nth-of-type(3)")), 10000);
        const countElement = await this.itemCount;
        return await countElement.getText();
    }
}
