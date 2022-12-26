const { assert } = intern.getPlugin('chai');
const { suite, test } = intern.getInterface('tdd');

suite('Testing with Bstackdemo', () => {
  test('add product to cart', async ({remote}) => {
    await remote.get("https://bstackdemo.com/");

    const title = await remote.getPageTitle();
    assert.include(title, 'StackDemo');
    await remote.setFindTimeout(5000);

    const productOnScreen = await remote.findByXpath('//*[@id="1"]/p');
    const productOnScreenText = await productOnScreen.getVisibleText();

    const addToCart = await remote.findByXpath('//*[@id="1"]/div[4]');
    await addToCart.click();

    const productInCart = await remote.findByXpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');
    const productInCartText = await productInCart.getVisibleText();
    assert.strictEqual(productInCartText, productOnScreenText);
  });
});
