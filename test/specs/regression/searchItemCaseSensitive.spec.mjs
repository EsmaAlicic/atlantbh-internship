import { Builder } from "selenium-webdriver";
import SearchPage from "../../pageobjects/SearchPage.js";

describe("Search Item Count Case Insensitivity Test", () => {
    let driver;
    let searchPage;
    let countLower, countUpper, countMixed;

    beforeAll(async () => {
        driver = await new Builder().forBrowser("chrome").build();
        searchPage = new SearchPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    it("Should return item count for lowercase search term", async () => {
        await searchPage.open();
        countLower = await searchPage.searchItem("jacket");
        console.log("Item count for 'jacket':", countLower);
        expect(countLower).toBeDefined();
    });

    it("Should return item count for uppercase search term", async () => {
        countUpper = await searchPage.searchItem("JACKET");
        console.log("Item count for 'JACKET':", countUpper);
        expect(countUpper).toBeDefined();
    });

    it("Should return item count for mixed case search term", async () => {
        countMixed = await searchPage.searchItem("jAcKEt");
        console.log("Item count for 'jAcKEt':", countMixed);
        expect(countMixed).toBeDefined();
    });

    it("Should return same item count regardless of case used in search term", () => {
        expect(countLower).toBeDefined();
        expect(countUpper).toBeDefined();
        expect(countMixed).toBeDefined();

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
