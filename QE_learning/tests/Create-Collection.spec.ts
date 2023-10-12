import { test, expect } from "@playwright/test"

test.describe("Create Collection", () => {
    test("Create Collection", async ({ page }) => {
        await test.step("truy cap vao trang web", async () => {
            await page.goto("https://accounts.shopbase.com/sign-in")
        })
        await test.step("Sign in",async () => {
            const fillThisEmail = page.locator("//input[contains(@placeholder,'example@email.com')]")
            await fillThisEmail.fill("kzjuly12@gmail.com")
            const fillThisPassword = page.locator("//input[@placeholder='Password']")
            await fillThisPassword.fill("Khang147852@")
            const clickSignIn = page.locator("//button[contains(normalize-space(),'Sign in')]")
            await clickSignIn.click()
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


})