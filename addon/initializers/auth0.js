import Ember from 'ember';


var auth0 = Ember.Object.extend({

  // Redirect after use has been successfully logged out
  logoutUrl: null,

  isAuthed: false,
  isAnonymous: Ember.computed.not('isAuthed'),

  // Auth0 user profile
  profile: null,

  // Auth0 access token
  token: null,

  // Auth0Lock configurable options
  // https://github.com/auth0/lock/wiki/Auth0Lock-customization
  lockOptions: {
    // allow users to reset password in login widget
    disableResetAction: false,
    authParams: {},
  },

  login: function() {
    this.authClient.showSignin(
      this.get('lockOptions'),
      function onLogin(err, profile, token) {
        if (err) {
          return window.alert(err.message);
        }

        this.set('token', token);
        this.set('isAuthed', true);
        this.set('profile', profile);
      }.bind(this)
    );
  },

  signup: function() {
    this.authClient.showSignup();
  },

  logout: function() {
    this.authClient.logout({
      returnTo: this.get('logoutUrl')
    });
  }

});


export function initialize(container, application) {
  var config = container.lookupFactory('config:environment'),
      auth0Config = config ? config['ember-cli-auth0-lock'] : null;

  application.register('auth0:main', auth0, { singleton: true });
  application.inject('controller', 'auth0', 'auth0:main');
  application.inject('route', 'auth0', 'auth0:main');
  application.inject('adapter', 'auth0', 'auth0:main');

  // add APP auth0 config options
  if (auth0Config) {
    auth0.reopen({

      logoutUrl: auth0Config.logoutUrl,

      init: function() {
        var authParams = Ember.merge(this.get('lockOptions.authParams'), auth0Config.authParams);

        // update authparams config
        this.set('lockOptions.authParams', authParams);

        this.authClient = new Auth0Lock(auth0Config.cid, auth0Config.domain);
      }
    });
  }
}

export default {
  name: 'auth0',
  initialize: initialize
};
