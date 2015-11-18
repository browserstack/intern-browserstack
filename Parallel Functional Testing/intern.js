define({
  proxyPort: 9000,

  capabilities: {
    name: 'Sample Intern Live-Testing',
    build: 'build',
    'browserstack.selenium-version': '2.45.0',
    'browserstack.local': false,
    fixSessionCapabilities: false
  },

  defaultTimeout: 300000,

  environments: [
    { browser: 'Chrome', browser_version: '44.0', os: 'OS X', os_version: 'Yosemite' }
  ],

  maxConcurrency: 2,

  tunnel: 'BrowserStackTunnel',

  tunnelOptions: {
    verbose: true,
    username: process.env.BROWSERSTACK_USERNAME,
    accessKey: process.env.BROWSERSTACK_KEY
  },

  reporters: [ 'Pretty' ],

  loaderOptions: {
    packages: null
  },

  suites: null,

  functionalSuites: [ 'tests/utils1' ,'tests/utils2' ,'tests/utils3' ],

  excludeInstrumentation: true
});
