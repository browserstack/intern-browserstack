define({
  proxyPort: 9000,

  capabilities: {
    name: 'BStack local test',
    build: 'intern-browserstack',
    "browserstack.local": true,
    fixSessionCapabilities: false
  },

  defaultTimeout: 300000,

  environments: [
    { browser: 'Chrome' },
  ],

  maxConcurrency: 1,

  tunnel: 'BrowserStackTunnel',

  tunnelOptions: {
    verbose: true,
    username: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    accessKey: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
  },

  reporters: [ 'Pretty' ],

  loaderOptions: {
    packages: null
  },

  suites: null,

  functionalSuites: [ 'tests/local_test' ],

  excludeInstrumentation: true
});
