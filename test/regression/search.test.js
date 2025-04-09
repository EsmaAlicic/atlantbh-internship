import { Builder, By, until, Key } from 'selenium-webdriver';

async function searchAndGetItemCount() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://magento.softwaretestingboard.com");

        // Wait for the page to load and the search element to be available
        await driver.wait(until.elementLocated(By.id("search")), 10000);
        
        // Enter "jacket" into the search box and press Enter
        await driver.findElement(By.id("search")).sendKeys("jacket");
        await driver.findElement(By.id("search")).sendKeys(Key.ENTER);
        
        // Wait for the item count to load, select the 3rd toolbar-number element
        let itemCountElement1 = await driver.wait(until.elementLocated(By.css(".toolbar-amount .toolbar-number:nth-of-type(3)")), 20000);
        let itemCountText1 = await itemCountElement1.getText();
        console.log("Item count for 'jacket': " + itemCountText1); // This should print the number of products, e.g., "23"
        
        // Clear the search box for the next case
        await driver.findElement(By.id("search")).clear();
        
        // Enter "JACKET" into the search box and press Enter
        await driver.findElement(By.id("search")).sendKeys("JACKET");
        await driver.findElement(By.id("search")).sendKeys(Key.ENTER);
        
        // Wait for the item count to load
        let itemCountElement2 = await driver.wait(until.elementLocated(By.css(".toolbar-amount .toolbar-number:nth-of-type(3)")), 20000);
        let itemCountText2 = await itemCountElement2.getText();
        console.log("Item count for 'JACKET': " + itemCountText2); // This should print the number of products
        
        // Clear the search box for the next case
        await driver.findElement(By.id("search")).clear();
        
        // Enter "jAcKEt" into the search box and press Enter
        await driver.findElement(By.id("search")).sendKeys("jAcKEt");
        await driver.findElement(By.id("search")).sendKeys(Key.ENTER);
        
        // Wait for the item count to load
        let itemCountElement3 = await driver.wait(until.elementLocated(By.css(".toolbar-amount .toolbar-number:nth-of-type(3)")), 20000);
        let itemCountText3 = await itemCountElement3.getText();
        console.log("Item count for 'jAcKEt': " + itemCountText3); // This should print the number of products
        
        // Now, compare all cases (case-insensitive)
        if (itemCountText1.toLowerCase() === itemCountText2.toLowerCase() && itemCountText1.toLowerCase() === itemCountText3.toLowerCase()) {
            console.log("Test passed - the item count is the same for all variations.");
        } else {
            console.log("Test failed - the item count is not the same.");
        }

    } catch (error) {
        console.log("An error occurred: ", error);
    } finally {
        await driver.quit();
    }
}

searchAndGetItemCount();
