import Ember from 'ember';

export default Ember.Component.extend({
  cell: null,
  editAction: null,
  isNumber: false,
  isEditing: false,
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
      // var newValue = this.get('newValue');
      // this.sendAction('editAction', this.get('cell'), newValue);
      return this.get('cell').save().then(() => {
        this.set('isEditing', false);
      });
    }
  }
});
