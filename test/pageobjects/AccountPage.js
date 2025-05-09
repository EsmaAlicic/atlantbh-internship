export default class AccountPage {
    async openDropdownMenu() {
        const toggleButton = await $('button.action.switch');
        await toggleButton.click();
        const dropdown = await $('.customer-menu');
        await dropdown.waitForDisplayed();
    }

    async clickSignOut() {
        const dropdown = await $('.customer-menu');
        await dropdown.waitForDisplayed();
        const signOutLink = await $('a=Sign Out');
        await signOutLink.click();
    }
}
