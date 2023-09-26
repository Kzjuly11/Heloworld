import { test, expect } from "@playwright/test"

test.describe("Sign up",()=>{
test("Sign in",async ({page}) => {
    await test.step("truy cap vao trang web",async()=>{
        await page.goto("https://accounts.shopbase.com/sign-in?return_url=https%3A%2F%2Faccounts.shopbase.com%2Fshop%2Fselect")
    })
    await test.step("click vao sign up",async () => {
       const signup = page.locator("//span [text()='Sign up.']")
       await signup.click()
       await page.waitForTimeout(5000)
       const shopbase = page.locator("//div[@class='unite-ui-login__main']")
       await expect(shopbase).toBeVisible()
       const fillThisEmail = page.locator("//input [@placeholder='example@email.com']")
       await fillThisEmail.fill("kzjuly12@gmail.com")
       const fillThisPassword = page.locator("//input[@placeholder='Password']")
       await fillThisPassword.fill("Khang147852@")
       const fillThisNameShop = page.locator("//input[@placeholder='Your shop name']")
       await fillThisNameShop.fill("Khangzzzz")
       const clickSignup = page.locator("//button[@class='s-button width-100 m-t-sm is-primary']")
       await clickSignup.click()
    })
})
})