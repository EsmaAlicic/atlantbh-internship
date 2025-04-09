import { Builder, Key, until, By } from "selenium-webdriver";

async function addToCart() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://magento.softwaretestingboard.com/what-is-new.html");
        await driver.wait(until.elementLocated(By.css("a.block-promo.new-main")), 10000);
        await driver.findElement(By.css("a.block-promo.new-main")).click();
        await driver.wait(until.urlContains("yoga-new.html"), 10000);

        await driver.findElement(By.xpath("//a[@href='https://magento.softwaretestingboard.com/elisa-evercool-trade-tee.html']")).click();
        await driver.wait(until.urlContains("elisa-evercool-trade-tee.html"), 10000);

        // Selecting size (S)
        await driver.wait(until.elementLocated(By.css('*[id="option-label-size-143-item-167"]')), 10000);
        let sizeOption = await driver.findElement(By.css('*[id="option-label-size-143-item-167"]'));
        await sizeOption.click();

        // Selecting color (Purple)
        let colorOption = await driver.findElement(By.id("option-label-color-93-item-57"));
        await driver.wait(until.elementIsVisible(colorOption), 10000);
        await colorOption.click();

        // Click on the 'Add to Cart' button
        let addToCartButton = await driver.findElement(By.id("product-addtocart-button"));
        await driver.wait(until.elementIsVisible(addToCartButton), 10000); 
        await addToCartButton.click();

        await driver.wait(until.elementLocated(By.css(".message-success.success.message")), 10000);
        await driver.wait(until.elementTextContains(
            driver.findElement(By.css(".message-success.success.message")),
            "You added"
        ), 10000);
        
        console.log("The product has been successfully added to the cart.");
        console.log("The test has been successfully completed!");      
    } catch (error) {
        console.log("An error occurred: ", error);
    } finally {
        await driver.quit();
    }
}

addToCart();