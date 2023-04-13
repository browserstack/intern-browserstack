define({
  proxyPort: 9000,

  capabilities: {
    name: 'parallel_test',
    build: 'intern-browserstack',
    "browserstack.local": false,
    fixSessionCapabilities: false
  },

  defaultTimeout: 300000,

  environments: [
    { browser: 'Chrome' },
    { browser: 'Safari' },
    { browser: 'Edge' },
  ],

  maxConcurrency: 4,

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

  functionalSuites: [ 'tests/single_test' ],

  excludeInstrumentation: true
});
