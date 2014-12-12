import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function() {
    if (!this.get('auth0.isAuthed')) {
      this.transitionTo('/');
    }
  }
});
