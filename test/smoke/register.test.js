import { Builder, By, until } from "selenium-webdriver";

async function register(){
    let driver = await new Builder().forBrowser("chrome").build();

    try{
        await driver.get("https://magento.softwaretestingboard.com/what-is-new.html")

        // Click on the "Create an Account" link
        await driver.findElement(By.xpath('//a[@href="https://magento.softwaretestingboard.com/customer/account/create/"]')).click();
        // Wait for the "Create Account" page to load
        await driver.wait(until.urlContains("customer/account/create"));

        // Wait for the first name input field to be available, then enter data
        await driver.wait(until.elementLocated(By.id("firstname")), 10000);
        await driver.findElement(By.id("firstname")).sendKeys("Test"); 
        await driver.findElement(By.id("lastname")).sendKeys("User");
        await driver.findElement(By.id("email_address")).sendKeys("testuser@autotests.com");
        await driver.findElement(By.id("password")).sendKeys("Test@12345!");
        await driver.findElement(By.id("password-confirmation")).sendKeys("Test@12345!");

        // Click the "Create an Account" button
        await driver.wait(until.elementLocated(By.css("button.action.submit.primary[title='Create an Account']")), 10000); 
        await driver.findElement(By.css("button.action.submit.primary[title='Create an Account']")).click();
      
        await driver.wait(until.urlContains("customer/account"), 10000); 
        console.log("User account successfully created");
    } catch (error) {
        console.log("An error occurred: ", error);
    } finally {
        await driver.quit(); 
    }
}

register();
