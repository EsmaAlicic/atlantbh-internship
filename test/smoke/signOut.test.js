import { Builder, By, until } from "selenium-webdriver";

async function signOut(){
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        //Sign In
        await driver.get("https://magento.softwaretestingboard.com/customer/account/login");

        let emailInput = await driver.wait(until.elementLocated(By.id("email")), 10000);
        let passwordInput = await driver.wait(until.elementLocated(By.id("pass")), 10000);

        await emailInput.sendKeys("test.prvi@prvitest.ba");
        await passwordInput.sendKeys("prViTest#");
        console.log("Successfully entered email and password!");

        let signInButton = await driver.wait(until.elementLocated(By.id("send2")), 10000);
        await signInButton.click(); 
        console.log("Successfully clicked on Sign In!");

        //Sign Out
        await driver.wait(until.urlContains("customer/account"), 10000);

        let changeButton = await driver.wait(until.elementLocated(By.css('button.action.switch')), 10000);
        await changeButton.click();

        await driver.wait(until.elementLocated(By.css('.customer-menu')), 10000);

        let signOutLink = await driver.wait(until.elementLocated(By.xpath("//a[contains(text(), 'Sign Out')]")), 10000);
        await signOutLink.click();

        console.log("Successfully clicked Sign Out!");

    } catch (error) {
        console.log("An error occurred: ", error);
    } finally {
        await driver.quit(); 
    }
}

signOut();