import { By, until } from 'selenium-webdriver';

export default class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://magento.softwaretestingboard.com/customer/account/login';
    }

    async open() {
        await this.driver.get(this.url);
    }

    async enterEmail(email) {
        let emailInput = await this.driver.wait(until.elementLocated(By.id('email')), 10000);
        await emailInput.sendKeys(email);
    }

    async enterPassword(password) {
        let passwordInput = await this.driver.wait(until.elementLocated(By.id('pass')), 10000);
        await passwordInput.sendKeys(password);
    }

    async clickSignIn() {
        let signInButton = await this.driver.wait(until.elementLocated(By.id('send2')), 10000);
        await signInButton.click();
    }
}
