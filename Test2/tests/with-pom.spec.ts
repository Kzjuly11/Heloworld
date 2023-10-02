// file dat ten kebab-case

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
                const clickX = page.locator("//div[@class='button-close']")
                await clickX.click()
            }

            await page.waitForTimeout(4 * 1000);
        });
    })

    test("Navigate to menu: Home", async ({ page }) => {
        await test.step("Go to home", async () => {
            await productPage.navigateToMenu("Home");
        })
    })


    test("Navigate to menu: all order", async ({ page }) => {
        await test.step("Go to order", async () => {
            await productPage.navigateToMenu("Orders");
        })

        await test.step("Go to all orders", async () => {
            // Click to menu home
        })
    })




    test("Navigate to menu: product", async ({ page }) => {
        await test.step("Go to product", async () => {
            await productPage.navigateToMenu("Products");
        })

        await test.step("Go to product", async () => {
            // Click to menu home
        })
    })
})