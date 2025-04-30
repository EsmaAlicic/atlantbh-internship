import { Builder, By } from 'selenium-webdriver';
import LoginPage from '../../pageobjects/LoginPage.js';
import AccountPage from '../../pageobjects/AccountPage.js';

describe('Sign Out Test', () => {
    let driver;
    let loginPage;
    let accountPage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
        accountPage = new AccountPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    it('should sign in successfully', async () => {
        await loginPage.open();
        console.log("Opened base URL");
        await loginPage.clickSignInLink();

        await loginPage.enterEmail('first.test@gmail.com');
        await loginPage.enterPassword('fIrstTEst#');
        await loginPage.clickSignIn();
        console.log('Signed in successfully!');
    });

    it('should sign out successfully', async () => {
        await accountPage.openDropdownMenu();
        await accountPage.clickSignOut();
        console.log('Signed out successfully!');
    });
});
