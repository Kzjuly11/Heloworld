import { Page } from "@playwright/test";

export class ProductPage {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async clickButton(menuName: string) {
        const clickProduct = this.page.locator(`//span[contains(normalize-space(),'${menuName}')]`).first() // nth()
        await clickProduct.click()
    }
    async fillThisField(menuName: string,fillName :string) {
        await this.page.locator(`//input[contains(@placeholder,'${menuName}')]`).fill(`${fillName}`)
        
    }
    async fillThisPrice(menuName: string,fillName :string) {
        await this.page.locator(`//input[contains(@id,'${menuName}')]`).first().fill(`${fillName}`)
        
    }
    
    
    async clickPopUp(div: string) {
        const clickPopup = this.page.locator(`//div[contains(@class,'${div}')]`)
        if(await clickPopup.isVisible()){
            const clickX = this.page.locator("//div[@class='button-close']")
            clickX.click()
        }
        
    }

    
    async clickToSave() {
        const clickSave = this.page.locator("//button[contains(normalize-space(),'Save changes')]")
        await clickSave.click()
    }
    async clickButtonAddProducts() {
        const clickButtonAddProducts = this.page.locator("//button[contains(normalize-space(),'Add product')]")
        await clickButtonAddProducts.click()
    }
    async navigateToMenuAnalytics() {
        const clickProduct = this.page.locator(`(//span[contains(normalize-space(),'Analytics')])[1]`)
        await clickProduct.click()
    }
    async navigateToMenuApps() {
        const clickProduct = this.page.locator(`(//span[contains(normalize-space(),'Apps')])[1]`)
        await clickProduct.click()
    }
    async navigateDescription() {
        const description = this.page.frameLocator(`//iframe[contains(@title,"Rich Text Area")]`).locator("//body//p")
        await description.click()
       
}
    async chooseCollection() {
    const chooseCollection = this.page.locator(`//a[contains(normalize-space(),'Mùa hè')]`)
     await chooseCollection.click()
}

async clickproducttoCollection(){
    const clickproductSa = this.page.locator("(//span[@class='s-check'])[3]")
    await clickproductSa.click()
}
async clickSaveproducttoCollection(){
    const clickproductSa = this.page.locator("(//button[@type='button']//span[contains(normalize-space(),'Save')])[3]")
    await clickproductSa.click()
}

}
