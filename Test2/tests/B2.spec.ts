// import { test, expect } from "@playwright/test"

// test.describe("Add Product",()=>{
// test("Add Product",async ({page}) => {
//     await test.step("truy cap vao trang web",async()=>{
//         await page.goto("https://accounts.shopbase.com/sign-in")
//     })
//     await test.step("Sign in",async () => {
//        const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
//        await fillThisEmail.fill("kzjuly12@gmail.com")
//        const fillThisPassword = page.locator("//input[@placeholder='Password']")
//        await fillThisPassword.fill("Khang147852@")
//        const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
//        await clickSignIn.click()
//        await page.waitForTimeout(5000)
//        const popUP = page.locator("//div[contains(@class,'onboarding-popup')]")
//        if(await popUP.isVisible()){  // dong cai quang cao pop up 
//             const clickX = page.locator("//div[@class='button-close']")
//             await clickX.click()     
//        }
//        await page.waitForTimeout(5000)
//        const tittle = page.locator("//div[@class='heading']")
//        await expect(tittle).toBeVisible()
//     })
//     await test.step("AddProduct",async () => {   
//        const clickProduct = page.locator("//span[contains(normalize-space(),'Products')]")
//        await clickProduct.click()
//        //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
//        //await expect(listProduct).toBeVisible()
//       // const tittleProduct = page.locator("//h2[@class='p-b-sm']")
//        //await expect(tittleProduct).toBeVisible()
//        const clickAddProduct = page.locator("//span[contains(normalize-space(),'Add product')]")
//        await clickAddProduct.click()
//        const fillThisTittle = page.locator("//input[contains(@placeholder,'Short Sleeve T-Shirt')]")
//        await fillThisTittle.fill("Simple Product A")
//        await page.waitForTimeout(5000)
//        const fillThisPricing = page.locator("(//input[@id='price'])")
//        await fillThisPricing.fill("100")
//        const clickSave = page.locator("//button[contains(normalize-space(),'Save changes')]")
//        await clickSave.click()
//      })

// })


// })
// import { test, expect } from "@playwright/test";

// test.describe("Navigate to menu", () => {
//     test.beforeEach(async ({ page }) => {
//         await test.step("Pre-condition: Login to shop", async () => {
//             // Khoi tao POM
//             //productPage = new ProductPage(page);

//             await page.goto("https://accounts.shopbase.com/sign-in")

//             const signIn = page.locator("//p[contains(normalize-space(),'Sign in')]")
//             await expect(signIn).toBeVisible()
//             const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
//             await fillThisEmail.fill("kzjuly12@gmail.com")
//             const fillThisPassword = page.locator("//input[@placeholder='Password']")
//             await fillThisPassword.fill("Khang147852@")
//             const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
//             await clickSignIn.click()
//             await page.waitForTimeout(5000)
//             const popup = page.locator("//div[contains(@class,'onboarding-popup')]")
//             if (await popup.isVisible()) {  // dong cai quang cao pop up 
//                 const clickX = page.locator("//div[@class='button-close']")
//                 await clickX.click()
//             }

//             await page.waitForTimeout(4 * 1000);
//         })
//     })
    
//     test(" navigate to menu: Home", async ({ page }) => {
//         await test.step("click Home",async()=>{
//             const home = page.locator("//span[contains(normalize-space(),'Home')]")
//             await home.click()
//         })
//     })
//     test(" navigate to menu: Orders", async ({ page }) => {
//         await test.step("click Orders",async()=>{
//             const orders = page.locator("//span[contains(normalize-space(),'Orders')]")
//             await orders.click()
//         })
       
//     })
//     test(" navigate to menu: Orders > All Orders", async ({ page }) => {
//         await test.step("click All orders",async()=>{
//             const orders = page.locator("//span[contains(normalize-space(),'Orders')]")
//             await orders.click()
//             const all_Orders = page.locator("//span[contains(normalize-space(),'All orders')]")
//             await all_Orders.click() 
//         })
        
//     })
//     test(" navigate to menu: Home", async ({ page }) => {
//         await test.step("click All orders",async()=>{
//             const all_Orders = page.locator("//span[contains(normalize-space(),'All orders')]")
//             await all_Orders.click() 
//         })
//     })
// })

