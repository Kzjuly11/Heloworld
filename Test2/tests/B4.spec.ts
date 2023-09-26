import { test, expect } from "@playwright/test"

test.describe("Add Product to Collection",()=>{
test("Add Product to Collection",async ({page}) => {
    await test.step("truy cap vao trang web",async()=>{
        await page.goto("https://accounts.shopbase.com/sign-in")
    })
    await test.step("Sign in",async () => {
       const fillThisEmail = page.locator("//input[@placeholder='example@email.com']")
       await fillThisEmail.fill("kzjuly12@gmail.com")
       const fillThisPassword = page.locator("//input[@placeholder='Password']")
       await fillThisPassword.fill("Khang147852@")
       const clickSignIn = page.locator("//button[@class='s-button is-primary is-fullwidth']")
       await clickSignIn.click()
       await page.waitForTimeout(5000)
       const tittle = page.locator("//div[@class='heading']")
       await expect(tittle).toBeVisible()
    })
    await test.step("Click Collection",async () => {   
       const clickProduct = page.locator("(//a[@class='text-decoration-none'])[2]")
       await clickProduct.click()
       //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
      // await expect(listProduct).toBeVisible()
       const clickCollection = page.locator("(//li[@class='li-last-step title-child-menu-sidebar'])[6]")
       await clickCollection.click()
       const chooseCollection = page.locator("(//div[@class ='image-wrapper'])[3]")
       await chooseCollection.click()
       const simpleCollection = page.locator("//span [@class='s-tag is-success is-small']")
       await expect(simpleCollection).toBeVisible()
       
    })
     await test.step("add Product to Collection",async () => {   
         const clickAddProduct = page.locator("(//button[@class='s-button is-text'])[1]")
         await clickAddProduct.click()
        // const listProduct = page.locator(")
        // await expect(listProduct).toBeVisible()
         const FillThisProduct = page.locator("//input[@placeholder='Search for product']")
        await FillThisProduct.fill("Simple product a")
         const clickproductSa = page.locator("(//span[@class='s-check'])[8]")
         await clickproductSa.click()
         const clickSaveProduct = page.locator("(//button[@class='s-button is-primary'])[3]")
         await clickSaveProduct.click()
     })

})


})
//(//div[@class ="image-wrapper"])[3]