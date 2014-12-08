import Ember from 'ember';
import Auth0ProtectionMixin from 'ember-cli-auth0-lock/mixins/auth0-protection';

module('Auth0ProtectionMixin');

// Replace this with your real tests.
test('it works', function() {
  var Auth0ProtectionObject = Ember.Object.extend(Auth0ProtectionMixin);
  var subject = Auth0ProtectionObject.create();
  ok(subject);
});
