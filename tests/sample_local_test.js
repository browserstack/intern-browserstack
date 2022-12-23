const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');

registerSuite('BrowserStack Local Testing', {
  async checkTunnelIsWorking() {
    await this.remote.get("http://bs-local.com:45454/")
    
    const title = await this.remote.getPageTitle();
    assert.include(title, 'BrowserStack Local');
  }
});
