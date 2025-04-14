import { By, until } from 'selenium-webdriver';

export default class RemoveProductPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://magento.softwaretestingboard.com/what-is-new.html';
    }

    async getJacketsLink() {
        return await this.driver.findElement(By.linkText('Jackets'));
    }

    async getProductImage() {
        return await this.driver.findElement(By.css('img[alt="Olivia 1/4 Zip Light Jacket"]'));
    }

    async getSizeOption(size) {
        return await this.driver.findElement(By.css(`div.swatch-option.text[option-label="${size}"]`));
    }

    async getColorOption(color) {
        return await this.driver.findElement(By.css(`div.swatch-option.color[option-label="${color}"]`));
    }

    async getAddToCartButton() {
        return await this.driver.findElement(By.id('product-addtocart-button'));
    }

    async getCartIcon() {
        return await this.driver.findElement(By.css('[data-block="minicart"] .action.showcart'));
    }

    async getViewCartLink() {
        return await this.driver.findElement(By.css('a.action.viewcart'));
    }

    async getRemoveButton() {
        return await this.driver.findElement(By.css('a.action.action-delete[title="Remove item"]'));
    }

    async open() {
        await this.driver.get(this.url);
    }

    async selectCategory(categoryName) {
        if (categoryName === "Jackets") {
            const jackets = await this.getJacketsLink();
            await jackets.click();
        }
    }

    async selectProduct(productName) {
        if (productName === "Olivia 1/4 Zip Light Jacket") {
            const product = await this.getProductImage();
            await product.click();
        }
    }

    async addToCart(size, color) {
        const sizeOption = await this.getSizeOption(size);
        await this.driver.wait(until.elementIsVisible(sizeOption), 5000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", sizeOption);
        await sizeOption.click();

        const colorOption = await this.getColorOption(color);
        await this.driver.wait(until.elementIsVisible(colorOption), 5000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", colorOption);
        await colorOption.click();

        const addToCartBtn = await this.getAddToCartButton();
        await addToCartBtn.click();
        await this.driver.sleep(3000); 
    }

    async openCart() {
        const cartIcon = await this.getCartIcon();
        await cartIcon.click();
        await this.driver.wait(until.elementLocated(By.css('a.action.viewcart')), 5000);
        const viewCart = await this.getViewCartLink();
        await viewCart.click();
    }

    async removeProductFromCart() {
        const removeBtn = await this.driver.wait(until.elementLocated(By.css('a.action.action-delete[title="Remove item"]')), 5000);
        await this.driver.wait(until.elementIsVisible(removeBtn), 5000);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", removeBtn);
        await removeBtn.click();

        console.log("Product successfully removed from the cart!");

        await this.driver.wait(until.stalenessOf(removeBtn), 5000);
    }
}