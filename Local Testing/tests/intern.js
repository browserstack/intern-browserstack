define({
  proxyPort: 9000,

  proxyUrl: 'http://localhost:9000/',

  capabilities: {
    build: 'build',
    'browserstack.selenium-version': '2.45.0',
    'browserstack.local': true
  },

  defaultTimeout: 300000,

  environments: [
    { browser: 'Opera', browser_version: '12.16', os: 'Windows', os_version: '8.1' },
    { browser: 'Firefox', browser_version: '40.0', os: 'Windows', os_version: 'XP' },
    { browser: 'IE', browser_version: '8.0', os: 'Windows', os_version: '7' },
    { browser: 'Chrome', browser_version: '44.0', os: 'OS X', os_version: 'Yosemite' },
    { browserName: 'android', platform: 'ANDROID', device: 'Samsung Galaxy S5' }
  ],

  maxConcurrency: 2,

  tunnel: 'BrowserStackTunnel',
  //tunnel: 'NullTunnel',

  tunnelOptions: {
    verbose: true,
    username: process.env.BROWSERSTACK_USERNAME,
    accessKey: process.env.BROWSERSTACK_KEY
  },

  reporters: [ 'Console' ],

  loaderOptions: {
    packages: null
  },

  suites: null,

  functionalSuites: [ 'tests/utils' ],

  excludeInstrumentation: true
});
