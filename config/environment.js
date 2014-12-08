/* jshint node: true */

'use strict';

module.exports = function() {
  return {
    auth0: {
      cid: 'your client id',
      domain: 'youraccount.auth0.com',
      authParams: {
        scope: 'openid user_id email nickname picture'
      },
      logoutUrl: '' // http://example.com/logout
    }
  };
};
