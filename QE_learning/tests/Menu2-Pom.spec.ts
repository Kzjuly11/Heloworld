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
            await productPage.navigateToMenu("All orders");
        })
    })
    test("Navigate to menu: abondended checkout", async ({ page }) => {
        await test.step("Go to order", async () => {
            await productPage.navigateToMenu("Orders");
        })

        await test.step("Go to all orders", async () => {
            await productPage.navigateToMenu("Abandoned checkouts");
        })
    })
    test("Navigate to menu: product", async ({ page }) => {
        await test.step("Go to product", async () => {
            await productPage.navigateToMenu("Products");
        })

        await test.step("Go to all product", async () => {
            await productPage.navigateToMenu("All products")
        })
    })
    test("Navigate to menu : inventory ",async()=>{
        await test.step("Go to product", async () => {
            await productPage.navigateToMenu("Products");
        })
        await test.step("go to inventory" ,async()=>{
            await productPage.navigateToMenu("Inventory")
        })
    })
    test("Navigate to menu : Collections",async ({page}) => {
        await test.step("go to Products",async()=>{
            await productPage.navigateToMenu("Products")
        })
        await test.step("Go to Collections" ,async () => {
            await productPage.navigateToMenu("Collections")
        })

    })

    test("Navigate to menu : Products Feed",async({page}) =>{
        await test.step("go to Products",async()=>{
            await productPage.navigateToMenu("Products")
        })
        await test.step("Go to Product feeds",async () => {
            await productPage.navigateToMenu("Product feeds")
        })
    })

    test("Navigate to menu : watermark",async({page}) =>{
        await test.step("go to Products",async()=>{
            await productPage.navigateToMenu("Products")
        })
        await test.step("Go to watermark",async () => {
            await productPage.navigateToMenu("Watermark")
        })
    })
    
    test("Navigate to menu : Size charts",async({page}) =>{
        await test.step("go to Products",async()=>{
            await productPage.navigateToMenu("Products")
        })
        await test.step("Go to Size charts",async () => {
            await productPage.navigateToMenu("Size charts")
        })
    })

    test("Navigate to menu :Bulk updates ",async({page}) =>{
        await test.step("go to Products",async()=>{
            await productPage.navigateToMenu("Products")
        })
        await test.step("Go to Bulk Updates",async () => {
            await productPage.navigateToMenu("Bulk updates")
        })
    })
    test("Navigate to menu: Fullfillment", async ({ page }) => {
        await test.step("Go to FullFillment", async () => {
            await productPage.navigateToMenu("Fulfillment")
        })
    })
    test("Navigate to menu: Analytics", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            await productPage.navigateToMenuAnalytics()
        })

    })
    test("Navigate to menu: Conversion Annalytics", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            await productPage.navigateToMenuAnalytics()
        })
        await test.step("Go to Conversion Analytics", async () => {
          await productPage.navigateToMenu("Conversion Analytics")
        })
    })
    test("Navigate to menu: Sales Reports", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
           await productPage.navigateToMenuAnalytics()
        })
        await test.step("Go to Sale report", async () => {
            await productPage.navigateToMenu("Sales Reports")
        })
    })
    
    test("Navigate to menu: Taxes Reports", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            await productPage.navigateToMenuAnalytics()
        })
        await test.step("Go to Taxes report", async () => {
            await productPage.navigateToMenu("Taxes Reports")
        })
    })
    test("Navigate to menu:Live view", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            await productPage.navigateToMenuAnalytics()
        })
        await test.step("Go to Live view", async () => {
            await productPage.navigateToMenu("Live View")
        })
    })    
    test("Navigate to menu:Traffic Sources", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            await productPage.navigateToMenuAnalytics()
        })
        await test.step("Go to Traffic Sources", async () => {
            await productPage.navigateToMenu("Traffic Sources")
        })
    })

    test("Navigate to menu:Sales Channels", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
          await productPage.navigateToMenu("Marketing & Sales") 
        })
        await test.step("Go to Sales Channels", async () => {
          await productPage.navigateToMenu("Sales channels")  
        })
    })
    test("Navigate to menu:Email marketing", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            await productPage.navigateToMenu("Marketing & Sales")
        })
        await test.step("Go to Email Markerting", async () => {
            await productPage.navigateToMenu("Email marketing")
        })
    })

    test("Navigate to menu:Discount", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            await productPage.navigateToMenu("Marketing & Sales")
        })
        await test.step("Go to Discount", async () => {
           await productPage.navigateToMenu("Discounts")
        })
    })

    test("Navigate to menu:Boost Upsells", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            await productPage.navigateToMenu("Marketing & Sales")
        })
        await test.step("Go to Boost Upsells", async () => {
           await productPage.navigateToMenu("Boost Upsell")
        })
    })

    test("Navigate to menu:Conversion Optimizer", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            await productPage.navigateToMenu("Marketing & Sales")
        })
        await test.step("Go to Sales Channels", async () => {
           await productPage.navigateToMenu("Conversion Optimizer")
        })
    })

    test("Navigate to menu: Contacts", async ({ page }) => {
        await test.step("Contacts", async () => {
           await productPage.navigateToMenu("Contacts")
        })

        await test.step("Go to all contacts", async () => {
           await productPage.navigateToMenu("All contacts")
        })
    })
    
    test("Navigate to menu: Apps", async ({ page }) => {
        await test.step("Go to Apps", async () => {
            await productPage.navigateToMenuApps()
        })
    })
    
    test("Navigate to menu: Intengrations", async ({ page }) => {
        await test.step("Go to Apps", async () => {
            await productPage.navigateToMenuApps()
        })

        await test.step("Go to all Integrations", async () => {
            await productPage.navigateToMenu("Integrations")
        })
    })

    test("Navigate to menu: Private Apps", async ({ page }) => {
        await test.step("Go to Apps", async () => {
            await productPage.navigateToMenuApps()
        })

        await test.step("Go to all Private Apps", async () => {
            await productPage.navigateToMenu("Private apps")
        })
    })

    test("Navigate to menu: Setting", async ({ page }) => {
        await test.step("Go to Setting", async () => {
            await productPage.navigateToMenu("Setting")
        })
    })
    test("Navigate to menu: Design", async ({ page }) => {
        await test.step("Online Stores", async () => {
          await productPage.navigateToMenu("Online Store")
        })

        await test.step("Go to all Design", async () => {
           await productPage.navigateToMenu("Design")
        })

    }) 
    test("Navigate to menu: Pages", async ({ page }) => {
        await test.step("Online Stores", async () => {
            await productPage.navigateToMenu("Online Store") 
        })

        await test.step("Go to all Pages ", async () => {
            await productPage.navigateToMenu("Pages")
        })
    })
    test("Navigate to menu: Blog Posts", async ({ page }) => {
        await test.step("Online Stores", async () => {
            await productPage.navigateToMenu("Online Store") 
        })

        await test.step("Go to Blog Posts", async () => {
           await productPage.navigateToMenu("Blog posts")
        })
    })
    
    test("Navigate to menu: Filter", async ({ page }) => {
        await test.step("Online Stores", async () => {
            await productPage.navigateToMenu("Online Store")
        })

        await test.step("Go to Filter", async () => {
           await productPage.navigateToMenu("Filter")
        })
    })
    
    test("Navigate to menu: Domains", async ({ page }) => {
        await test.step("Online Stores", async () => {
           await productPage.navigateToMenu("Online Store")
        })

        await test.step("Go to all Domains", async () => {
            await productPage.navigateToMenu("Domains")
        })
    })      
})