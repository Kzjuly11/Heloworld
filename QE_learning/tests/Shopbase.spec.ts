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
            // productPage.navigateToMenu("Products");
            // productPage.navigateTOSubMenu("All products");

            // productPage.clickAddProductButton();

            // productPage.enterProductInfo("title", "Description");

            // POM.navigateToSubMenu("")
        })
    })
    test("Create Collection", async ({ page }) => {
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
    test("Add Product to Collection", async ({ page }) => {
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

    //    // test.afterEach("Back to Main Shop Base", async ({ page }) => {
    // //         // Step: dong trinh duyet
    //         const user = page.locator("//p[contains(@class,'user-email')]")
    //         await user.click()
    //         const logout = page.locator("(//div[contains(normalize-space(),'Logout')])[4]")
    //         await logout.click()
    //     })
});
// Test hook
// Binh thuong: noi dung test
// Co before: beforeEach ~> noi dung test
// Co before + after: beforeEach ~> noi dung test ~> after
// Gia su co 3 test:
// ~> thu tu chay: t1 ~> t2 ~> t3
// co beforeAll: beforeAll ~> t1 ~> t2 ~> t3
// co beforeALl, cos beforeEach: beforeAll ~> beforeEach ~> t1 ~> beforeEach ~> t2 ~> beforeEach ~> t3.