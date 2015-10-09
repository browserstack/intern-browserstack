define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'search',

    'google search': function () {
      return this.remote
        .get(require.toUrl('https://www.google.com'))
        .findByName("q")
          .type("BrowserStack\n")
          .end()
        .sleep(5000)
        .takeScreenshot();
    }
  });
});
