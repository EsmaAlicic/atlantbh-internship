import AddToCartPage from "../../../pageobjects/AddToCartPage.js";

describe("Add to Cart Test", () => {
    let addToCartPage;

    beforeAll(() => {
        addToCartPage = new AddToCartPage();
    });

    it("Should successfully add a product to the cart", async () => {
        await addToCartPage.open();
        await addToCartPage.navigateToProduct();
        await addToCartPage.selectOptions();
        await addToCartPage.addToCart();
        await addToCartPage.isProductAdded();

        const isProductAdded = await addToCartPage.isProductAdded();
        expect(isProductAdded).toBe(true);
        console.log("The product has been successfully added to the cart.");
    });
});
