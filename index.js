/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-auth0-lock',

  // FIXME: auth0-lock.js import in ember-cli production build won't work
  included: function(app) {
    this._super.included(app);

    if (app.env !== 'production') {
      app.import(app.bowerDirectory + '/auth0-lock/build/auth0-lock.js');
    }
  },

  // WORKAROUND: add script tag to auth0-lock CDN in production
  contentFor: function (type, config) {
    var content = '',
        cdnUrl = config['ember-cli-auth0-lock'].cdnUrl;

    if (config.environment === 'production' && type === 'head') {
      content = '<script src="' + cdnUrl + '"></script>';
    }

    return content;
  }
};
