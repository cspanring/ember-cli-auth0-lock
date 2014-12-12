import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    login: function() {
      this.get('auth0').login();
    },
    signup: function() {
      this.get('auth0').signup();
    },
    logout: function() {
      this.get('auth0').logout();
    }
  }

});
