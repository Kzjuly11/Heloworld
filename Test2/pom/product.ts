import { Page } from "@playwright/test";

export class ProductPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async navigateToMenu(menuName: string) {
        const clickProduct = this.page.locator(`//span[contains(normalize-space(),'${menuName}')]`)
        await clickProduct.click()
    }

    
    async navigateToMenuHome() {
        const clickProduct = this.page.locator(`//span[contains(normalize-space(),'Home')]`)
        await clickProduct.click()
    }

    
    async navigateToMenuProduct() {
        const clickProduct = this.page.locator(`//span[contains(normalize-space(),'Products')]`)
        await clickProduct.click()
    }
    async navigateToMenuAnalytics() {
        const clickProduct = this.page.locator(`(//span[contains(normalize-space(),'Analytics')])[1]`)
        await clickProduct.click()
    }
    async navigateToMenuApps() {
        const clickProduct = this.page.locator(`(//span[contains(normalize-space(),'Apps')])[1]`)
        await clickProduct.click()
    }
}