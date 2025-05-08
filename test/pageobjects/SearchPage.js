export default class SearchPage {
    constructor() {
        this.baseUrl = browser.options.baseUrl;
    }

    get searchInput() {
        return $('#search');
    }

    get itemCount() {
        return $('.toolbar-amount .toolbar-number:nth-of-type(3)');
    }

    async open() {
        await browser.url(this.url);
        await this.searchInput.waitForDisplayed({ timeout: 10000 });
    }

    async searchItem(term) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(term);
        await this.searchInput.addValue("\uE007");

        await this.itemCount.waitForDisplayed({ timeout: 10000 });
        const countText = await this.itemCount.getText();
        return countText;
    }
}
