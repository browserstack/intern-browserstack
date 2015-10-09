define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'test',

    'local test': function () {
      return this.remote
        .get(require.toUrl('http://127.0.0.1:8000/index.html'))
        .findByCssSelector("input")
          .click()
          .type('Stack')
          .end()
        .findByCssSelector('h1')
          .click()
          .getVisibleText()
          .then(function(text) {
            assert.strictEqual(text, 'BrowserStack');
          })
          .end()
        .sleep(5000)
        .takeScreenshot();
    }
  });
});
