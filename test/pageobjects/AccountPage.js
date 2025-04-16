import { By, until } from 'selenium-webdriver';

export default class AccountPage {
    constructor(driver) {
        this.driver = driver;
    }

    async openDropdownMenu() {
        const toggleButton = await this.driver.findElement(By.css('button.action.switch'));
        await toggleButton.click();
        const dropdown = await this.driver.wait(until.elementLocated(By.css('.customer-menu')));
        await this.driver.wait(until.elementIsVisible(dropdown));
    }

    async clickSignOut() {
        await this.driver.wait(until.elementLocated(By.css('.customer-menu')));
        let signOutLink = await this.driver.wait(until.elementLocated(By.xpath("//a[contains(text(), 'Sign Out')]")));
        await signOutLink.click();
    }
}
