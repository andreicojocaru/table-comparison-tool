import Ember from 'ember';

export default Ember.Component.extend({
  yes: Ember.computed('value', function () {
    return this.get('model').get(this.get('value')) === true;
  }),
  actions: {
    toggleValue() {
      var value = this.get('value');
      var model = this.get('model');

      var isTrue = this.get('yes');

      model.set(value, !isTrue);

      return model.save().then(() => {
        this.set('yes', !isTrue);
      });
    }
  }
});
