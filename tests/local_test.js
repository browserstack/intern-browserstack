const { assert } = intern.getPlugin('chai');
const { registerSuite } = intern.getPlugin('interface.object');

registerSuite('BrowserStack Local Testing', {
  async checkTunnelIsWorking() {
    await this.remote.get("http://bs-local.com:45454/")
      .end()
      .sleep(5000)
      .getPageTitle()
      .then(function(title){
        assert.strictEqual(title, 'BrowserStack Local')
      });
  }
});
