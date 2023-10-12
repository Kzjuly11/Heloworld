import { test, expect } from "@playwright/test";
import { ProductPage } from "../pom/product";

test.describe("Navigate to menu", () => {
    test.describe.configure({ mode: 'serial' });

    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        await test.step("Pre-condition: Login to shop", async () => {
            // Khoi tao POM
            productPage = new ProductPage(page);

            await page.goto("https://accounts.shopbase.com/sign-in")

            const signIn = page.locator("//p[contains(normalize-space(),'Sign in')]")
            await expect(signIn).toBeVisible()
            const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
            await fillThisEmail.fill("kzjuly12@gmail.com")
            const fillThisPassword = page.locator("//input[@placeholder='Password']")
            await fillThisPassword.fill("Khang147852@")
            const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
            await clickSignIn.click()
            await page.waitForTimeout(5000)
            const popup = page.locator("//div[contains(@class,'onboarding-popup')]")
            if (await popup.isVisible()) {  // dong cai quang cao pop up 
                const clickX = page.locator("//div[@class='button-close']")
                await clickX.click()
            }

            await page.waitForTimeout(4 * 1000);
        });
    })
    test("Add Product", async ({ page }) => {
        // test.describe.configure({ mode: 'parallel' });
         await test.step("AddProduct", async () => {
             const clickProduct = page.locator("//span[contains(normalize-space(),'Products')]")
             await clickProduct.click()
             const clickAddProduct = page.locator("//span[contains(normalize-space(),'Add product')]")
             await clickAddProduct.click()
             const fillThisTittle = page.locator("//input[contains(@placeholder,'Short Sleeve T-Shirt')]")
             await fillThisTittle.fill("Ao Ngan")
             await page.waitForTimeout(5000)
             const description = page.frameLocator(`//iframe[contains(@title,"Rich Text Area")]`).locator("//body//p")
             await description.click()
             await page.keyboard.type("Do cho mua he")
             await page.waitForTimeout(5000)
             const fillThisPricing = page.locator("(//input[@id='price'])")
             await fillThisPricing.fill("100")
             const clickSave = page.locator("//button[contains(normalize-space(),'Save changes')]")
             await clickSave.click()
        })
    }) 
})