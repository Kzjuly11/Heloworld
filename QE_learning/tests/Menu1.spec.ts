import { test, expect } from "@playwright/test"
test.describe("Navigate to menus", () => {
    test.describe.configure({ mode: 'serial' });

    //let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        await test.step("Pre-condition: Login to shop", async () => {
            // Khoi tao POM
            //      productPage = new ProductPage(page);

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
            const home = page.locator("//span[contains(normalize-space(),'Home')]")
            await home.click()
        })
    })
   
    test("Navigate to menu:order", async ({ page }) => {
        await test.step("Go to order", async () => {
            const orders = page.locator("//span[contains(normalize-space(),'Orders')]")
            await orders.click()
        })
    })

    test("Navigate to menu: all order", async ({ page }) => {
        await test.step("Go to order", async () => {
            const orders = page.locator("//span[contains(normalize-space(),'Orders')]")
            await orders.click()
        })

        await test.step("Go to all orders", async () => {
            const all_orders = page.locator("//span[contains(normalize-space(),'All orders')]")
            await all_orders.click()
        })
    })
    test("Navigate to menu: abandon checkout", async ({ page }) => {
        await test.step("Go to order", async () => {
            const orders = page.locator("//span[contains(normalize-space(),'Orders')]")
            await orders.click()
        })

        await test.step("Go to all orders", async () => {
            const all_orders = page.locator("//span[contains(normalize-space(),'Abandoned checkouts')]")
            await all_orders.click()
        })
    })
   test("Navigate to menu: product", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

    })
    test("Navigate to menu: all products", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to all products", async () => {
            const all_product = page.locator("//span[contains(normalize-space(),'All products')]")
            await all_product.click()
        })
    })
    test("Navigate to menu: iventory", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to inventory", async () => {
            const inventory = page.locator("//span[contains(normalize-space(),'Inventory')]")
            await inventory.click()
        })
    })
    test("Navigate to menu: Collections", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to Collection", async () => {
            const collection = page.locator("//span[contains(normalize-space(),'Collections')]")
            await collection.click()
        })
    })
    test("Navigate to menu: Product Feed", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to Product feed", async () => {
            const inventory = page.locator("//span[contains(normalize-space(),'Product feeds')]")
            await inventory.click()
        })
    })
    test("Navigate to menu: Watermark", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to Watermark", async () => {
            const watermark = page.locator("//span[contains(normalize-space(),'Watermark')]")
            await watermark.click()
        })
    })
    test("Navigate to menu: size chant", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to size chants", async () => {
            const size_chant = page.locator("//span[contains(normalize-space(),'Size charts')]")
            await size_chant.click()
        })
    })
    test("Navigate to menu: Bulk Updates", async ({ page }) => {
        await test.step("Go to product", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Products')]")
            await product.click()
        })

        await test.step("Go to Bulk Updates", async () => {
            const bulk_update = page.locator("//span[contains(normalize-space(),'Bulk updates')]")
            await bulk_update.click()
        })
    })
    test("Navigate to menu: Fullfillment", async ({ page }) => {
        await test.step("Go to FullFillment", async () => {
            const product = page.locator("//span[contains(normalize-space(),'Fulfillment')]")
            await product.click()
        })

    })
    test("Navigate to menu: Analytics", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            const product = page.locator("(//span[contains(normalize-space(),'Analytics')])[1]")
            await product.click()
        })

    })
    test("Navigate to menu: Conversion Analytics", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            const product = page.locator("(//span[contains(normalize-space(),'Analytics')])[1]")
            await product.click()
        })
        await test.step("Go to Conversion Analytics", async () => {
            const conversion_analytics = page.locator("//span[contains(normalize-space(),'Conversion Analytics')]")
            await conversion_analytics.click()
        })
    })
    test("Navigate to menu: Sales Reports", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            const product = page.locator("(//span[contains(normalize-space(),'Analytics')])[1]")
            await product.click()
        })
        await test.step("Go to Sale report", async () => {
            const sale_report = page.locator("//span[contains(normalize-space(),'Sales Reports')]")
            await sale_report.click()
        })
    })
    test("Navigate to menu: Taxes Reports", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            const product = page.locator("(//span[contains(normalize-space(),'Analytics')])[1]")
            await product.click()
        })
        await test.step("Go to Taxes report", async () => {
            const taxes_report = page.locator("//span[contains(normalize-space(),'Taxes Reports')]")
            await taxes_report.click()
        })
    })
    test("Navigate to menu:Live view", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            const product = page.locator("(//span[contains(normalize-space(),'Analytics')])[1]")
            await product.click()
        })
        await test.step("Go to Live view", async () => {
            const live_view = page.locator("//span[contains(normalize-space(),'Live View')]")
            await live_view.click()
        })
    })
    test("Navigate to menu:Traffic Sources", async ({ page }) => {
        await test.step("Go to Analytics", async () => {
            const product = page.locator("(//span[contains(normalize-space(),'Analytics')])[1]")
            await product.click()
        })
        await test.step("Go to Traffic Sources", async () => {
            const traffic_sources = page.locator("//span[contains(normalize-space(),'Traffic Sources')]")
            await traffic_sources.click()
        })
    })
    test("Navigate to menu:Sales Channels", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            const marketing = page.locator("//span[contains(normalize-space(),'Marketing & Sales')]")
            await marketing.click()
        })
        await test.step("Go to Sales Channels", async () => {
            const traffic_sources = page.locator("//span[contains(normalize-space(),'Sales channels')]")
            await traffic_sources.click()
        })
    })
    test("Navigate to menu:Email marketing", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            const marketing = page.locator("//span[contains(normalize-space(),'Marketing & Sales')]")
            await marketing.click()
        })
        await test.step("Go to Email Markerting", async () => {
            const email_marketing = page.locator("//span[contains(normalize-space(),'Email marketing')]")
            await email_marketing.click()
        })
    })
    test("Navigate to menu:Discount", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            const marketing = page.locator("//span[contains(normalize-space(),'Marketing & Sales')]")
            await marketing.click()
        })
        await test.step("Go to Discount", async () => {
            const discount = page.locator("//span[contains(normalize-space(),'Discounts')]")
            await discount.click()
        })
    })
    test("Navigate to menu:Boost Upsells", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            const marketing = page.locator("//span[contains(normalize-space(),'Marketing & Sales')]")
            await marketing.click()
        })
        await test.step("Go to Boost Upsells", async () => {
            const boost_upsells = page.locator("//span[contains(normalize-space(),'Boost Upsell')]")
            await boost_upsells.click()
        })
    })
    test("Navigate to menu:Conversion Optimizer", async ({ page }) => {
        await test.step("Go to Marketing & Sales", async () => {
            const marketing = page.locator("//span[contains(normalize-space(),'Marketing & Sales')]")
            await marketing.click()
        })
        await test.step("Go to Sales Channels", async () => {
            const sales_channels = page.locator("//span[contains(normalize-space(),'Conversion Optimizer')]")
            await sales_channels.click()
        })
    })
    test("Navigate to menu: Contacts", async ({ page }) => {
        await test.step("Contacts", async () => {
            const contacts = page.locator("//span[contains(normalize-space(),'Contacts')]")
            await contacts.click()
        })

        await test.step("Go to all contacts", async () => {
            const all_contact = page.locator("//span[contains(normalize-space(),'All contacts')]")
            await all_contact.click()
        })
    })
    test("Navigate to menu: Apps", async ({ page }) => {
        await test.step("Go to Apps", async () => {
            const apps = page.locator("(//span[contains(normalize-space(),'Apps')])[1]")
            await apps.click()
        })

        await test.step("Go to all Apps", async () => {
            const all_apps = page.locator("(//span[contains(normalize-space(),'Apps')])[2]")
            await all_apps.click()
        })
    })
    test("Navigate to menu: Intengrations", async ({ page }) => {
        await test.step("Go to Apps", async () => {
            const apps = page.locator("(//span[contains(normalize-space(),'Apps')])[1]")
            await apps.click()
        })

        await test.step("Go to all Integrations", async () => {
            const intengrations = page.locator("(//span[contains(normalize-space(),'Integrations')])")
            await intengrations.click()
        })
    })
    test("Navigate to menu: Private Apps", async ({ page }) => {
        await test.step("Go to Apps", async () => {
            const apps = page.locator("(//span[contains(normalize-space(),'Apps')])[1]")
            await apps.click()
        })

        await test.step("Go to all Private Apps", async () => {
            const private_apps = page.locator("//span[contains(normalize-space(),'Private apps')]")
            await private_apps.click()
        })
    })
    test("Navigate to menu: Setting", async ({ page }) => {
        await test.step("Go to Setting", async () => {
            const setting = page.locator("//span[contains(normalize-space(),'Setting')]")
            await setting.click()
        })
    }) 
    test("Navigate to menu: Design", async ({ page }) => {
        await test.step("Online Stores", async () => {
            const online_store = page.locator("//span[contains(normalize-space(),'Online Store')]")
            await online_store.click()
        })

        await test.step("Go to all Design", async () => {
            const design = page.locator("//span[contains(normalize-space(),'Design')]")
            await design.click()
        })
    })
    test("Navigate to menu: Pages", async ({ page }) => {
        await test.step("Online Stores", async () => {
            const online_store = page.locator("//span[contains(normalize-space(),'Online Store')]")
            await online_store.click()
        })

        await test.step("Go to all Pages ", async () => {
            const pages = page.locator("//span[contains(normalize-space(),'Pages')]")
            await pages.click()
        })
    })   
    test("Navigate to menu: Blog Posts", async ({ page }) => {
        await test.step("Online Stores", async () => {
            const online_store = page.locator("//span[contains(normalize-space(),'Online Store')]")
            await online_store.click()
        })

        await test.step("Go to Blog Posts", async () => {
            const blog_posts = page.locator("//span[contains(normalize-space(),'Blog posts')]")
            await blog_posts.click()
        })
    })   
    test("Navigate to menu: Filter", async ({ page }) => {
        await test.step("Online Stores", async () => {
            const online_store = page.locator("//span[contains(normalize-space(),'Online Store')]")
            await online_store.click()
        })

        await test.step("Go to Filter", async () => {
            const filter = page.locator("//span[contains(normalize-space(),'Filter')]")
            await filter.click()
        })
    })   
    test("Navigate to menu: Domains", async ({ page }) => {
        await test.step("Online Stores", async () => {
            const online_store = page.locator("//span[contains(normalize-space(),'Online Store')]")
            await online_store.click()
        })

        await test.step("Go to all Domains", async () => {
            const domains = page.locator("//span[contains(normalize-space(),'Domains')]")
            await domains.click()
        })
    })      
})