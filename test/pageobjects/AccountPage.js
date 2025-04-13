import { By, until } from 'selenium-webdriver';

export default class AccountPage {
    constructor(driver) {
        this.driver = driver;
    }

    async waitForDashboard() {
        await this.driver.wait(until.urlContains('customer/account'), 10000);
    }

    async openDropdownMenu() {
        let changeButton = await this.driver.wait(until.elementLocated(By.css('button.action.switch')), 10000);
        await changeButton.click();
    }

    async clickSignOut() {
        await this.driver.wait(until.elementLocated(By.css('.customer-menu')), 10000);
        let signOutLink = await this.driver.wait(until.elementLocated(By.xpath("//a[contains(text(), 'Sign Out')]")), 10000);
        await signOutLink.click();
    }
}
