import { test, expect } from "@playwright/test";
test.describe("Suite kiểm tra số lượng product", () => {
    test("kiem tra so luong product",async ({page})=>{
        await test.step("truy cap trang collection all", async() => {
            await page.goto("https://manual-product-gallery.myshopbase.net/collections/all"); 
            const product = page.locator("//span[text()='All products']") 
            await expect(product).toBeVisible() ; 
            const twelvesProduct = page.locator("//p[text()='12 Products']")
            await expect(twelvesProduct).toBeVisible() ;
        }) 
        
        await test.step("dem so luong san pham ",async () => {
            const xpathProductCard =  "//div[@class ='wrap-card d-block product-item h-100'] "
            const ProductCardLoc = page.locator(xpathProductCard)
            const count = await ProductCardLoc.count() ; 
            await expect(count).toEqual(12)
           

        })
    })
})