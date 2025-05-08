export default class LoginPage {
    constructor() {
        this.baseUrl = browser.options.baseUrl;
    }

    get signInLink() {
        return $('li.authorization-link a:contains("Sign In")');
    }    

    async open() {
        await browser.url(this.baseUrl);
    }

    async enterEmail(email) {
        const emailInput = await $('#email');
        await emailInput.waitForDisplayed();
        await emailInput.setValue(email);
    }

    async enterPassword(password) {
        const passwordInput = await $('#pass');
        await passwordInput.waitForDisplayed();
        await passwordInput.setValue(password);
    }

    async clickSignIn() {
        const signInButton = await $('#send2');
        await signInButton.waitForDisplayed();
        await signInButton.click();
    }

    async clickSignInLink() {
        const link = await $('li.authorization-link a:contains("Sign In")');
        await link.waitForDisplayed();
        await link.click();
        const emailInput = await $('#email');
        await emailInput.waitForDisplayed();
    }
}
