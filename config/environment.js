/* jshint node: true */

'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    // sensible defaults
    'ember-cli-auth0-lock': {
      cdnUrl: 'http://cdn.auth0.com/js/lock-6.min.js',
      authParams: {
        scope: 'openid user_id email nickname picture'
      }
    }
  };
};
