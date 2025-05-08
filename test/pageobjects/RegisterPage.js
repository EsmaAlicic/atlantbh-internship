export default class RegisterPage {
    get createAccountLink() {
        return $('a[href*="create"]');
    }

    get firstNameInput() {
        return $('#firstname');
    }

    get lastNameInput() {
        return $('#lastname');
    }

    get emailInput() {
        return $('#email_address');
    }

    get passwordInput() {
        return $('#password');
    }

    get confirmPasswordInput() {
        return $('#password-confirmation');
    }

    get submitButton() {
        return $("button.action.submit.primary[title='Create an Account']");
    }

    async open() {
        await browser.url('/');
    }

    async clickCreateAccount() {
        await this.createAccountLink.waitForClickable();
        await this.createAccountLink.click();
        await browser.waitUntil(async () => (await browser.getUrl()).includes("customer/account/create"));
    }   

    async fillForm(firstName, lastName, email, password) {
        await this.firstNameInput.waitForDisplayed();
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(password);
    }

    async submitForm() {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
    }

    async isAccountCreated() {
        await browser.waitUntil(async () => (await browser.getUrl()).includes("customer/account"));
    }   
}
