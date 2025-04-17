import { Builder } from "selenium-webdriver";
import SearchPage from "../../pageobjects/SearchPage.js";

describe("Search Item Count Case Insensitivity Test", () => {
    let driver;
    let searchPage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        searchPage = new SearchPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    it("Should return same item count regardless of case used in search term", async () => {
        await searchPage.open();

        const countLower = await searchPage.searchItem("jacket");
        const countUpper = await searchPage.searchItem("JACKET");
        const countMixed = await searchPage.searchItem("jAcKEt");

        console.log("Item count for 'jacket':", countLower);
        console.log("Item count for 'JACKET':", countUpper);
        console.log("Item count for 'jAcKEt':", countMixed);

        if (
            countLower.toLowerCase() === countUpper.toLowerCase() &&
            countLower.toLowerCase() === countMixed.toLowerCase()
        ) {
            console.log("Test passed - item count is the same for all case variations.");
        } else {
            console.log("Test failed - item counts do not match.");
        }
    });
});
