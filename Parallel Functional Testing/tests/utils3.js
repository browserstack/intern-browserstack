define([
  //'intern!object',
  'tests/intern-parallel',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require, registry) {
  registerSuite({
    name: 'search',

    'google search 3': function () {
      return this.remote
        .get(require.toUrl('https://www.google.com/ncr'))
        .findByName("q")
          .type("Intern Testing\n")
          .end()
        .sleep(5000)
        .takeScreenshot();
    }
  });
});
