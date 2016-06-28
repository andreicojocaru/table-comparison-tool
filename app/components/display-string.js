import Ember from 'ember';

export default Ember.Component.extend({
  model: null,
  value: null,
  isEditing: false,
  isNumber: false,
  newValue: Ember.computed.alias('modelValue'),
  modelValue: Ember.computed('value', function () {
    return this.get('model').get(this.get('value'));
  }),
  actions: {
    toggleEditing() {
      this.toggleProperty('isEditing');

      //todo: kinda ugly -> make an focusable-input component instead
      if(this.get('isEditing')) {
         Ember.run.scheduleOnce('afterRender', this, function() {
            $('.input-edit')[0].focus();
        });
      }
    },
    edit() {
      var newValue = this.get('newValue');

      var model = this.get('model');
      var prop = this.get('value');

      model.set(prop, newValue);

      return model.save().then(() => {
        this.set('modelValue', newValue);
        this.set('isEditing', false);
      });
    }
  }
});
