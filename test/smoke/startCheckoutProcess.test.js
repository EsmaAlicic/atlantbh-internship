import { Builder, By, until } from "selenium-webdriver";

async function startCheckoutProcess() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Prijava
        await driver.get("https://magento.softwaretestingboard.com/customer/account/login");

        let emailInput = await driver.wait(until.elementLocated(By.id("email")), 10000);
        let passwordInput = await driver.wait(until.elementLocated(By.id("pass")), 10000);

        await emailInput.sendKeys("test.prvi@prvitest.ba");
        await passwordInput.sendKeys("prViTest#");
        console.log("Successfully entered email and password!");

        let signInButton = await driver.wait(until.elementLocated(By.id("send2")), 10000);
        await signInButton.click(); 
        console.log("Successfully clicked on Sign In!");

        // Čekaj da element postane dostupan (vidljiv)
        let whatsNewLink = await driver.wait(until.elementLocated(By.id("ui-id-3")), 10000);

        // Klikni na "What's New" link
        await whatsNewLink.click();

        await driver.wait(until.elementLocated(By.css("a.block-promo.new-main")), 10000);
        await driver.findElement(By.css("a.block-promo.new-main")).click();
        await driver.wait(until.urlContains("yoga-new.html"), 10000);

        // Klik na proizvod
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
        await driver.wait(until.elementIsVisible(addToCartButton), 15000); 
        await addToCartButton.click();

        await driver.wait(until.elementLocated(By.css(".message-success.success.message")), 10000);
        await driver.wait(until.elementTextContains(
            driver.findElement(By.css(".message-success.success.message")),
            "You added"
        ), 10000);

        console.log("The product has been successfully added to the cart.");

        // KORPICA
        let myCartLink = await driver.wait(until.elementLocated(By.xpath("//a[@class='action showcart']")), 10000);
        await myCartLink.click();
        console.log("Successfully clicked on 'My Cart' link!");

        // Proceed to Checkout
        let checkoutButton = await driver.wait(until.elementLocated(By.xpath("//button[@id='top-cart-btn-checkout' and @class='action primary checkout']")), 15000); 
        await driver.wait(until.elementIsVisible(checkoutButton), 15000); // Dodajemo čekanje da dugme bude vidljivo
        await checkoutButton.click();
        console.log("Successfully clicked on 'Proceed to Checkout' button!");

        let radioButton = await driver.wait(until.elementLocated(By.xpath("//input[@type='radio' and @value='tablerate_bestway']")), 15000);
        await radioButton.click();
        console.log("Rrrrradio");

        // NEXT
        let nextButton = await driver.wait(until.elementLocated(By.xpath("//button[@data-role='opc-continue' and span[text()='Next']]")), 15000);
        await nextButton.click();
        console.log("Successfully clicked on 'Next' button!");

        // Place Order        
        let placeOrderButton = await driver.wait(
            until.elementLocated(By.xpath("//button[@class='action primary checkout']")), 15000);    
        await driver.actions({ bridge: true }).move({ origin: placeOrderButton }).click().perform();
        console.log("Successfully clicked on 'Place Order'!");
        
        
        // Potvrda narudžbe
        try {
            await driver.wait(until.urlContains("checkout/onepage/success"), 20000);
            console.log("Order placed and success page reached!");
        } catch (e) {
            console.log("Order might not have been placed. Could not detect success page.");
        }
        
        // Continue Shopping
        let continueShoppingLink = await driver.wait(
            until.elementLocated(By.xpath("//a[@class='action primary continue' and contains(@href, 'magento.softwaretestingboard.com')]/span[text()='Continue Shopping']")),
            20000
        );
        await continueShoppingLink.click();
        console.log("Successfully clicked on 'Continue Shopping' link!");

        console.log("The test has been successfully completed!");
    } catch (error) {
        console.log("An error occurred: ", error);
    } finally {
        await driver.quit(); 
    }
}

startCheckoutProcess();