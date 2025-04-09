import { Builder, until, By } from "selenium-webdriver";

async function startCheckoutProcess() {
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

        // My Cart
        let myCartLink = await driver.findElement(By.css("a.action.showcart"));
        await driver.wait(until.elementIsVisible(myCartLink), 10000); 
        await myCartLink.click();

        // Proceed to Checkout
        let checkoutButton = await driver.findElement(By.id("top-cart-btn-checkout"));
        await driver.wait(until.elementIsVisible(checkoutButton), 10000);
        await checkoutButton.click();

        await driver.findElement(By.css('input[name="username"]')).sendKeys('test.prvi@prvitest.ba');

        await driver.findElement(By.xpath('//input[@name="firstname"]')).sendKeys('Test');

        await driver.findElement(By.xpath('//input[@name="lastname"]')).sendKeys('User');

        await driver.findElement(By.xpath('//input[@name="street[0]"]')).sendKeys('123 Main St');

        await driver.findElement(By.xpath('//input[@name="street[1]"]')).sendKeys('Apt 4B');

        await driver.findElement(By.xpath('//input[@name="city"]')).sendKeys('New York');

        await driver.findElement(By.xpath('//select[@name="region_id"]')).sendKeys('New York'); //dropdown

        await driver.findElement(By.xpath('//input[@name="postcode"]')).sendKeys('10001');

        await driver.findElement(By.xpath('//select[@name="country_id"]')).sendKeys('United States'); //dropdown

        await driver.findElement(By.xpath('//input[@name="telephone"]')).sendKeys('1234567890');

        await driver.findElement(By.css('button.action.login.primary')).click();


        await driver.wait(until.elementLocated(By.xpath("//input[@type='radio' and @value='tablerate_bestway']")), 10000);
        let shippingMethodRadio = await driver.findElement(By.xpath("//input[@type='radio' and @value='tablerate_bestway']"));
        await shippingMethodRadio.click();

        // Next
        let nextButton = await driver.findElement(By.css("button[data-role='opc-continue']"));
        await driver.wait(until.elementIsVisible(nextButton), 10000);
        await nextButton.click();

        // Place Order
        await driver.wait(until.elementLocated(By.xpath("//button[@title='Place Order']")), 10000);
        let placeOrderButton = await driver.findElement(By.xpath("//button[@title='Place Order']"));
        await placeOrderButton.click();

        // Continue Shopping
        let continueShoppingButton = await driver.findElement(By.css("a.action.primary.continue"));
        await driver.wait(until.elementIsVisible(continueShoppingButton), 10000);
        await continueShoppingButton.click();
        console.log("The test has been successfully completed!");

    } catch (error) {
        console.log("An error occurred: ", error);
    } finally {
        await driver.quit();
    }
}

startCheckoutProcess();