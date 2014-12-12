/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    'ember-cli-auth0-lock': {
      // REQUIRED
      // Auth0 credentials
      cid: 'nu8KrtMcxWg9Ohh38TyUbn7lYmJkOwA8',
      domain: 'cspanring.auth0.com',
      // redirect from Auth0 when a user logs out
      logoutUrl: 'http://localhost:4200/',

      // Configurable DEFAULTS
      // Auth0 Lock authentication options
      authParams: {
        scope: 'openid user_id email nickname picture'
      },
      // Auth0 Lock CDN url, used in production build
      cdnUrl: 'http://cdn.auth0.com/js/lock-6.min.js'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'font-src': "'self' data: cdn.auth0.com",
      'style-src': "'self' 'unsafe-inline'",
      'script-src': "'self' 'unsafe-eval' *.auth0.com",
      'img-src': '*.gravatar.com *.wp.com',
      'connect-src': "'self' *.auth0.com"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
