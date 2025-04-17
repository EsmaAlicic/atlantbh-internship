import { By, until } from "selenium-webdriver";

export default class RegisterPage {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = browser.options.baseUrl;
    }

    get createAccountLink() {
        return this.driver.findElement(By.xpath("//a[text()='Create an Account']"));
    }    

    get firstNameInput() {
        return this.driver.findElement(By.id("firstname"));
    }

    get lastNameInput() {
        return this.driver.findElement(By.id("lastname"));
    }

    get emailInput() {
        return this.driver.findElement(By.id("email_address"));
    }

    get passwordInput() {
        return this.driver.findElement(By.id("password"));
    }

    get confirmPasswordInput() {
        return this.driver.findElement(By.id("password-confirmation"));
    }

    get submitButton() {
        return this.driver.findElement(By.css("button.action.submit.primary[title='Create an Account']"));
    }

    async open() {
        await this.driver.get(this.baseUrl);
    }

    async clickCreateAccount() {
        await this.createAccountLink.click();
        await this.driver.wait(until.urlContains("customer/account/create"));
    }

    async fillForm(firstName, lastName, email, password) {
        await this.driver.wait(until.elementLocated(By.id("firstname")));
        await this.firstNameInput.then(el => el.sendKeys(firstName));
        await this.lastNameInput.then(el => el.sendKeys(lastName));
        await this.emailInput.then(el => el.sendKeys(email));
        await this.passwordInput.then(el => el.sendKeys(password));
        await this.confirmPasswordInput.then(el => el.sendKeys(password));
    }

    async submitForm() {
        await this.driver.wait(until.elementLocated(By.css("button.action.submit.primary[title='Create an Account']")));
        await this.submitButton.then(btn => btn.click());
    }

    async isAccountCreated() {
        await this.driver.wait(until.urlContains("customer/account"));
    }
}
