import Ember from 'ember';

export default Ember.Controller.extend({
  tableHeadColumns: [
    'URL',
    'Reg Number',
    'Mileage',
    'Year',
    'Panoramic Roof',
    'Leather',
    'Heated seats',
    'Sat NAV',
    'Parking sensors',
    'Wheel size',
    'Warranty',
    'Price',
    'Extra details'],
  tableRows: Ember.computed.alias('model'),
  actions: {
    addCar() {
      var newCarUrl = this.get('newCarUrl');

      if (!newCarUrl) {
        return;
      }

      var model = this.store.createRecord('car', {
        url: newCarUrl
      });

      return model.save();
    }
  }
});
