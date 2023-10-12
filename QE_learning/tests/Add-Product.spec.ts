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
    
            await productPage.fillThisField("example@email.com", "kzjuly12@gmail.com")
            await productPage.fillThisField("Password", "Khang147852@")
            await productPage.clickButton("Sign in")
            await page.waitForTimeout(5000)
            await productPage.clickButton("ShopBasee_by_Khang")
            await page.waitForLoadState("networkidle")
            await page.waitForTimeout(5000)
            productPage.clickPopUp("onboarding-popup")
            await page.waitForTimeout(4 * 1000);
        });
    })
    test("Add Product", async ({ page }) => {
        // test.describe.configure({ mode: 'parallel' });
         await test.step("AddProduct", async () => {
            await productPage.clickButton("Products");
            await productPage.clickButton("Add product");
            await productPage.fillThisField("Short Sleeve T-Shirt", "Ao So Mi")
            await page.waitForTimeout(5000)
            // const description = page.frameLocator(`//iframe[contains(@title,"Rich Text Area")]`).locator("//body//p")
            // await description.click()
            await productPage.navigateDescription();
            await page.keyboard.type("Do cho mua he")
            await page.waitForTimeout(5000)
            await productPage.fillThisPrice("price", "100")
            await productPage.clickToSave()
        })
    }) 
})