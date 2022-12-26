const { assert } = intern.getPlugin('chai');
const { suite, test } = intern.getInterface('tdd');

suite('BrowserStack Local Testing', () => {
  test('can check tunnel working', async ({remote}) => {
    await remote.get("http://bs-local.com:45454/")
    
    const title = await remote.getPageTitle();
    assert.include(title, 'BrowserStack Local');
  });
});
