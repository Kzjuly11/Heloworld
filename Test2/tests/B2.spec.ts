import { test, expect } from "@playwright/test"

test.describe("Add Product",()=>{
test("Add Product",async ({page}) => {
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
    await test.step("AddProduct",async () => {   
       const clickProduct = page.locator("(//a[@class='text-decoration-none'])[2]")
       await clickProduct.click()
       //const listProduct = page.locator("(//ul[@class='menu_level_1'])[1]")
       //await expect(listProduct).toBeVisible()
      // const tittleProduct = page.locator("//h2[@class='p-b-sm']")
       //await expect(tittleProduct).toBeVisible()
       const clickAddProduct = page.locator("//button[@class='s-button pull-right s-button is-primary m-l-sm is-default']")
       await clickAddProduct.click()
       const fillThisTittle = page.locator("//input[@placeholder='Short Sleeve T-Shirt']")
       await fillThisTittle.fill("Simple Product A")
       await page.waitForTimeout(5000)
       const fillThisPricing = page.locator("(//input[@class='s-input__inner'])[2]")
       await fillThisPricing.fill("100")
       const clickSave = page.locator("//button[@class='btn btn-primary']")
       await clickSave.click()
     })

})


})