import { By, until } from 'selenium-webdriver';

export default class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = browser.options.baseUrl;
    }

    get signInLink() {
        return this.driver.findElement(By.xpath("//li[@class='authorization-link']/a[contains(text(), 'Sign In')]"));
    }    

    async open() {
        await this.driver.get(this.baseUrl);
    }

    async enterEmail(email) {
        let emailInput = await this.driver.wait(until.elementLocated(By.id('email')));
        await emailInput.sendKeys(email);
    }

    async enterPassword(password) {
        let passwordInput = await this.driver.wait(until.elementLocated(By.id('pass')));
        await passwordInput.sendKeys(password);
    }

    async clickSignIn() {
        let signInButton = await this.driver.wait(until.elementLocated(By.id('send2')));
        await signInButton.click();
    }

    async clickSignInLink() {
        const link = await this.driver.wait(until.elementLocated(By.xpath("//li[@class='authorization-link']/a[contains(text(), 'Sign In')]")));
        await link.click();
        await this.driver.wait(until.elementLocated(By.id('email')));
    }
    
}
