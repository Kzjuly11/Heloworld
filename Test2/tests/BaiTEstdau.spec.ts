import { test, expect } from "@playwright/test"

test.describe("Suite Add to Cart ", () => {
  test("Add to Cart", async ({ page }) => {
    await test.step("truy cap vao trang web", async () => {
      await page.goto("https://manual-product-gallery.myshopbase.net/collections/all")
    })

    await test.step("Click vao san pham Product D", async () => {
      const productD = page.locator("(//a[@class=':hover-no-underline text-color-5 d-block name'])[1]")
      await productD.click()
      const clickProductD = page.locator("(//span [text() = 'Product D'])[2]")

      await expect(clickProductD).toBeVisible()
      await page.waitForTimeout(5000)
    })

    // await test.step("Them so luong san pham",async() => {
    //     const xpathIncrQuantity = page.locator("//div[contains(@class,'button-quantity__layout-vertical__increase')]")
    //     const boudingBox = await xpathIncrQuantity.boundingBox();
    //     await xpathIncrQuantity.click({
    //         position: {
    //             x: boudingBox?.x + boudingBox?.width / 2,
    //             y: boudingBox?.y + boudingBox?.height/ 2,
    //         }
    //     })  

    // const xpathInputQuantity = "//input[contains(@class, 'quantity-input')]";
    // const value = await page.locator(xpathInputQuantity).inputValue();
    // expect(value).toEqual("2");



    await test.step("Add to card ", async () => {
      const fillThisField = page.locator("//input[@placeholder='Please fill out this field']")
      await fillThisField.fill("Khang")
      const addtoCart = page.locator("//div[contains(@class,'btn-animation')][1]")
      await addtoCart.click()
      const productDtwo = page.locator("//p[text()='Product D']")
      await expect(productDtwo).toBeVisible()
    })
    await test.step("Click checkout", async () => {
      const btnCheckout = page.locator("//button [@class='py-0 w-100 btn-secondary']")
      await btnCheckout.click()
      const checkout = page.locator("//span[@class='breadcrumb--current']")
      await expect(checkout).toBeVisible()
    })
    await test.step("Dien thong tin checkout", async () => {
     // await page.waitForTimeout(5000)
      const fillThisEmail = page.locator("//input[@placeholder ='Email']")
      await fillThisEmail.fill("Khang2145@gmail.com")
      const fillThisFirstname = page.locator("//input[@placeholder='First name']")
      await fillThisFirstname.fill("Khang")
      const fillThisLastName = page.locator("//input[contains(@placeholder, 'Last name')]")
      // await fillThisLastName.fill("Pham")
      await fillThisLastName.fill("Cheese")
      const fillThisAdress = page.locator("//input[@placeholder='Address']")
      await fillThisAdress.fill("123 street")
      const fillThisApartment = page.locator("//input[@placeholder ='Apartment, suite, etc. (optional)']")
      await fillThisApartment.fill("309 HH2 tc")
      const fillThisCompany = page.locator("//input[@placeholder ='Company name (optional)']")
      await fillThisCompany.fill("KhangZZZ company")
      const fillThisCity = page.locator("(//input[contains(@placeholder, 'City')])[2]")
      await fillThisCity.fill("KhangCity")

      const clickCountry = page.locator("(//input[contains(@placeholder,'Country')])[2]")
      await clickCountry.click()
      const listCountry = page.locator("//div[@class='pt-4 absolute s-select-searchable__container']")
      await expect(listCountry).toBeVisible()
      const chooseCountry = page.locator("//span[text()='United States']")
      await chooseCountry.click()
      const fillThisCode = page.locator("(//input[contains(@placeholder,'Zip Code')])[2]")
      await fillThisCode.fill("KhangZZZ company")
      const fillPhoneNumber = page.locator("//input[@placeholder ='Phone number (optional)']")
      await fillPhoneNumber.fill("09142421414")
      const fillThisNote = page.locator("//textarea[contains(@placeholder,'Notes about your order, e.g. special notes for delivery (optional)')]")
      await fillThisNote.fill("KhangZZZ company")
    })
  })
})