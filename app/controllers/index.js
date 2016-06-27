import Ember from 'ember';

export default Ember.Controller.extend({
  tableHeadColumns: ['URL', 'Year', 'Panoramic Roof', 'Auto AC', 'Leather', 'Heated seats', 'Sat NAV', 'Parking sensors', 'Wheels'],
  tableRows: Ember.computed.alias('model'),
  actions: {
    addCar() {
      var newCarUrl = this.get('newCarUrl');

      if (!newCarUrl) {return;}

      var model = this.store.createRecord({
        url: newCarUrl
      });

      return model.save();
    }
  }
});
