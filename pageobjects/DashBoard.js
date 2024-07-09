class DashBoard {
  get listOfAllProductElements() {
    return $$(
      "//div[@class='inventory_item_label']//div[@class='inventory_item_name ']"
    );
  }
  get filterDrpDwn() {
    return $("//select[@class='product_sort_container']");
  }
  get CartDetails() {
    return $("//a[@class='shopping_cart_link']/span");
  }
  get checkOutBtn() {
    return $("//button[text()='Checkout']");
  }
  get fName() {
    return $("//input[@id='first-name']");
  }
  get lName() {
    return $("//input[@id='last-name']");
  }
  get ZIP() {
    return $("//input[@id='postal-code']");
  }
  get continueBtn() {
    return $("//input[@id='continue']");
  }
  get finishBtn() {
    return $("//button[@id='finish']");
  }

  async filCheckOutDetails(firstname, lastname, zip) {
    await this.fName.setValue(firstname);
    await this.lName.setValue(lastname);
    await this.ZIP.setValue(zip);
    await this.continueBtn.click();
  }

  async addItemsToCart(itemNames) {
    for (const itemName of itemNames) {
      await this.AddToCartBtn(itemName);
    }
  }

  async AddToCartBtn(element) {
    await $(
      "//div[contains(text(),'" +
        element +
        "')]/../../following-sibling::div//button"
    ).click();
  }

  async validateCinfirmationMessage(ConfirmMsg) {
    const isDisplayed = await $(
      "//*[text()='" + ConfirmMsg + "']"
    ).isDisplayed();
    await expect(isDisplayed).toBe(true);
  }

  async selectFilterDropDown(Val, Option) {
    await this.filterDrpDwn.selectByAttribute(Val, Option);
    await browser.pause(2000);
  }

  async getNamesOfAllProducts() {
    const arr = [];
    const elements = await this.listOfAllProductElements;
    console.log("Number of products: " + elements.length);
    for (const element of elements) {
      const text = await element.getText();
      console.log("Product name: " + text);
      arr.push(text);
    }
    console.log("Product array: " + arr);
    return arr;
  }

  async VerifyEqualArray(arrNonUI, arrUI) {
    for (let i = 0; i < arrUI.length; i++) {
      expect(arrUI[i]).toEqual(arrNonUI[i]);
    }
  }
}
export default new DashBoard();
