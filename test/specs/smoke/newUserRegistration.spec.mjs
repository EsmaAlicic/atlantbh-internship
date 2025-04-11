import { Builder } from "selenium-webdriver";
import RegisterPage from "../pageobjects/RegisterPage.js";

describe("User Registration Test", () => {
    let driver;
    let registerPage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        registerPage = new RegisterPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    it("Should successfully register a new user", async () => {
        await registerPage.open();
        await registerPage.clickCreateAccount();
        await registerPage.fillForm(
            "Test", 
            "User", 
            "testuser" + Date.now() + "@autotests.com", 
            "Test@12345!"
        );
        await registerPage.submitForm();
        await registerPage.isAccountCreated();
        console.log("User account successfully created");
    });
});