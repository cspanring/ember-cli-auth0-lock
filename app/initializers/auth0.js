import Ember from 'ember';
import config from '../config/environment';


var auth0 = Ember.Object.extend({

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
    authParams: config.auth0.authParams,
  },

  // read cached session from localstorage
  init: function() {
    this.authClient = new Auth0Lock(config.auth0.cid, config.auth0.domain);
  },

  login: function() {
    this.authClient.showSignin(
      this.get('lockOptions'),
      function onLogin(err, profile, token) {
        if (err) {
          return alert(err.message);
        }

        this.set('isAuthed', true);
        this.set('token', token);
        this.set('profile', profile);
      }.bind(this)
    );
  },

  signup: function() {
    this.authClient.showSignup();
  },

  logout: function() {
    this.authClient.logout({
      returnTo: config.auth0.logoutUrl
    });
  }

});


export function initialize(container, application) {
  application.register('auth0:main', auth0, { singleton: true });
  application.inject('controller', 'auth0', 'auth0:main');
  application.inject('route', 'auth0', 'auth0:main');
}

export default {
  name: 'auth0',
  initialize: initialize
};
