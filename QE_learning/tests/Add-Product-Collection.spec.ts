import { test, expect } from "@playwright/test"

test.describe("Add Product to Collection",()=>{
test("Add Product to Collection",async ({page}) => {
    await test.step("truy cap vao trang web",async()=>{
        await page.goto("https://accounts.shopbase.com/sign-in")
    })
    await test.step("Sign in",async () => {
        const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
        await fillThisEmail.fill("kzjuly12@gmail.com")
        const fillThisPassword = page.locator("//input[@placeholder='Password']")
        await fillThisPassword.fill("Khang147852@")
        const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
        await clickSignIn.click()
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(5000)
        const popUP = page.locator("//div[contains(@class,'onboarding-popup')]")
        if(await popUP.isVisible()){  // dong cai quang cao pop up 
             const clickX = page.locator("//div[@class='button-close']")
             await clickX.click()     
        }
        await page.waitForTimeout(5000)
        const tittle = page.locator("//div[@class='heading']")
        await expect(tittle).toBeVisible()
     })
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
         const clickproductSa = page.locator("(//span[@class='s-check'])[9]")
         await clickproductSa.click()
         await page.waitForTimeout(5000)
         const clickSaveProduct = page.locator("(//button[@type='button']//span[contains(normalize-space(),'Save')])[3]")
         
         await clickSaveProduct.click()
     })

})


})
//(//div[@class ="image-wrapper"])[3]