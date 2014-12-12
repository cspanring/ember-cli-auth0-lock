import Ember from 'ember';
import Auth0Protection from 'ember-cli-auth0-lock/mixins/auth0-protection';

export default Ember.Route.extend(Auth0Protection, {
  model: function() {
    return ['This', 'is', 'a', 'protected', 'route'];
  }
});
