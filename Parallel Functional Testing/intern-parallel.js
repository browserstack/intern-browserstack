define([
  'intern!object',
  'intern/chai!assert',
  'require',
  'intern/dojo/node!leadfoot/Command',
  'intern/dojo/Promise',
  './intern'
], function (registerSuite, assert, require, Command, Promise, config, registry) {
  return function (descriptor) {
    var test;
    for (k in descriptor) {
      test = descriptor[k];

      switch (k) {
      case 'name':
      case 'timeout':
      case 'setup':
      case 'before':
      case 'after':
      case 'beforeEach':
      case 'afterEach':
      case 'teardown':
        break;

      default:
        // TODO
        if (typeof test !== 'function') {
          test.name = test.name || k;
          //registerSuite(test, suite);
        }
        else {
          descriptor[k] = function(){
            var runTest = function(remote, resolve){
              var driver = test.apply({remote: remote});
              if(driver) driver.quit();
              resolve(remote);
            }
            var remote = this.remote;

            return new Promise(function(resolve, reject){
              if(remote.done || false){
                session = remote.session;
                for(var i in config.capabilities){
                  session.capabilities[i] = config.capabilities[i];  
                }

                session.server.createSession(session.capabilities).then(function(newSession){
                  var remote = new Command(newSession)
                  runTest(remote, resolve);
                });
              }
              else {
                remote.done = true;
                runTest(remote, resolve);
              }
            })
          }
        }
      }
    }

    registerSuite(descriptor);
  };
});