import RegisterPage from '../../pageobjects/RegisterPage.js';

describe("User Registration Test", () => {
    let registerPage;

    // SETUP
    beforeAll(async () => {
        registerPage = new RegisterPage();
    });

    afterAll(async () => {
        try {
          await browser.quit();
        } catch (err) {
          console.log('Error closing the session:', err);
        }
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
