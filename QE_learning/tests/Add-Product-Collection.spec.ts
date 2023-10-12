import { test, expect } from "@playwright/test"
import { ProductPage } from "../pom/product";
test.describe("Add Product to Collection",()=>{
    let productPage: ProductPage;
test("Add Product to Collection",async ({page}) => {
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
      
        await test.step("Click Collection", async () => {
            await productPage.clickButton("Products");
            //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
            // await expect(listProduct).toBeVisible()
            await productPage.clickButton("Collection");
            await productPage.chooseCollection();  
           // const simpleCollection = page.locator("//h2[normalize-space()='a simple collection']")
           // await expect(simpleCollection).toBeVisible()

        })
        await test.step("add Product to Collection", async () => {
           await productPage.clickButtonAddProducts()
            // const listProduct = page.locator(")
            // await expect(listProduct).toBeVisible()
           await productPage.fillThisField("Search for product","Ao dai")
            await page.waitForTimeout(3000)
            await page.waitForLoadState("networkidle")
            await productPage.clickproducttoCollection()
            await productPage.clickSaveproducttoCollection()
        })

})


})
//(//div[@class ="image-wrapper"])[3]