import { Builder } from 'selenium-webdriver';
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

    it('should sign in and sign out successfully', async () => {
        await loginPage.open();
        await loginPage.enterEmail('test.prvi@prvitest.ba');
        await loginPage.enterPassword('prViTest#');
        await loginPage.clickSignIn();
        console.log('Signed in successfully!');

        await accountPage.waitForDashboard();
        await accountPage.openDropdownMenu();
        await accountPage.clickSignOut();
        console.log('Signed out successfully!');
    });
});
