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
        await test.step("Create Collection", async () => {
            await productPage.clickButton("Products");
            //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
            // await expect(listProduct).toBeVisible()
            await productPage.clickButton("Collection");
            await productPage.clickButton("Create collection");
            await productPage.fillThisField("e.g Summer collection, Under $100, Staff picks", "Mùa thu")
            await productPage.clickButton("Manual");
            await productPage.clickButton("Save")
        })
    }) 
})