define([
 //'intern!object',
  'tests/intern-parallel',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'search',

    'google search 2': function () {
      return this.remote
        .get(require.toUrl('https://www.google.com/ncr'))
        .findByName("q")
          .type("Selenium\n")
          .end()
        .sleep(5000)
        .takeScreenshot();
    }
  });
});
