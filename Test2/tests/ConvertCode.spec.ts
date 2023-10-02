import { test, expect } from "@playwright/test";
test.describe("Bai tap so 3", () => {
    //test.describe.configure({ mode: 'parallel' });
    test.beforeEach("Sign in", async ({ page }) => {
        // Step: login vao shop
        await test.step("truy cap vao trang web", async() => {
            await page.goto("https://accounts.shopbase.com/sign-in")
        })   
        await test.step("Sign in",async () => {    
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
                 const clickX = page.locator("//div[@class='button-close")
                 await clickX.click()
            }
            //await page.waitForTimeout(5000)
            //const tittle = page.locator("//h2[contains(normalize-space(),'Good Evening, Pham')]")
             //await expect(tittle).toBeVisible()
        })
        // await test.step("Sign in",async () => {
        //     const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
        //     await fillThisEmail.fill("kzjuly12@gmail.com")
        //     const fillThisPassword = page.locator("//input[@placeholder='Password']")
        //     await fillThisPassword.fill("Khang147852@")
        //     const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
        //     await clickSignIn.click()
        //     await page.waitForTimeout(5000)
        //const popup = page.locator("//div[contains(@class,'onboarding-popup')]")
        // if(await popup.isVisible()){  // dong cai quang cao pop up 
        //      const clickX = page.locator("//div[@class='button-close']")
        //      await clickX.click()     
        // }
        // await page.waitForTimeout(5000)
        // const tittle = page.locator("//div[@class='heading']")
        // await expect(tittle).toBeVisible()
        //})
    });
    //test.beforeEach("Back to Main Shop Base", async ({ page }) => {
        // // Step: login vao shop // click vao chu shopbase de quay lai ban dau 
        // const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
        // await fillThisEmail.fill("kzjuly12@gmail.com")
        // const fillThisPassword = page.locator("//input[@placeholder='Password']")
        // await fillThisPassword.fill("Khang147852@")
        // const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
        // await clickSignIn.click()
        // await page.waitForTimeout(5000)
        // const popup = page.locator("//div[contains(@class,'onboarding-popup')]")
        // if (await popup.isVisible()) {  // dong cai quang cao pop up 
        //     const clickX = page.locator("//div[@class='button-close']")
        //     await clickX.click()
        // }
        // await page.waitForTimeout(5000)
        // const tittle = page.locator("//div[@class='heading']")
        // await expect(tittle).toBeVisible()
   // });
    // test.afterEach("Back to Main Shop Base",async ({page}) => {
    // // Step: dong trinh duyet
    // const clickShopBase = page.locator("//span[contains(normalize-space(),'Home')]")
    //     clickShopBase.click()
    // })
    // test.afterAll(() => {
    // // Step: dong trinh duyet
    // })
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
            const clickProduct = page.locator("//span[contains(normalize-space(),'Products')]")
            await clickProduct.click()
            //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
            // await expect(listProduct).toBeVisible()
            const clickCollection = page.locator("//span[contains(normalize-space(),'Collection')]")
            await clickCollection.click()
            const createCollection = page.locator("//span[contains(normalize-space(), 'Create collection')]")
            await createCollection.click()
            const fillTittleCollection = page.locator("//input [contains(@placeholder,'e.g Summer collection, Under $100, Staff picks')]")
            await fillTittleCollection.fill("Mùa thu")
            const clickType = page.locator("//span[contains(normalize-space(), 'Manual')]")
            await clickType.click()
            const clickSaveCollection = page.locator("//span[contains(normalize-space(),'Save')]")
            await clickSaveCollection.click()


        })
    })
    test("Add Product to Collection",async ({page}) => {
        await test.step("Click Collection",async () => {   
           const clickProduct = page.locator("//span[contains(normalize-space(),'Products')]")
           await clickProduct.click()
           //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
          // await expect(listProduct).toBeVisible()
           const clickCollection = page.locator("//span[contains(normalize-space(),'Collection')]")
           await clickCollection.click()
           const chooseCollection = page.locator("//a[contains(normalize-space(),'a simple collection')]")
           await chooseCollection.click()
           const simpleCollection = page.locator("//h2[normalize-space()='a simple collection']")
           await expect(simpleCollection).toBeVisible()
           
        })
         await test.step("add Product to Collection",async () => {   
             const clickAddProduct = page.locator("//button[contains(normalize-space(),'Add product')]")
             await clickAddProduct.click()
            // const listProduct = page.locator(")
            // await expect(listProduct).toBeVisible()
             const FillThisProduct = page.locator("//input[contains(@placeholder,'Search for product')]")
            await FillThisProduct.fill("Ao Dai")
            await page.waitForTimeout(3000)
             const clickproductSa = page.locator("(//span[@class='s-check'])[3]")
             await clickproductSa.click()
             
             const clickSaveProduct = page.locator("(//button[@type='button']//span[contains(normalize-space(),'Save')])[3]")
             
             await clickSaveProduct.click()
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