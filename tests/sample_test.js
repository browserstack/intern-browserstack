const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');

registerSuite('Testing with Bstackdemo', {
  async addProductToCart() {
    await this.remote.get("https://bstackdemo.com/");

    const title = await this.remote.getPageTitle();
    assert.include(title, 'StackDemo');

    const productOnScreen = await this.remote.findByXpath('//*[@id="1"]/p');
    const productOnScreenText = await productOnScreen.getVisibleText();

    const addToCart = await this.remote.findByXpath('//*[@id="1"]/div[4]');
    await addToCart.click();

    const productInCart = await this.remote.findByXpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');
    const productInCartText = await productInCart.getVisibleText();
    assert.strictEqual(productInCartText, productOnScreenText);
  }
});
