import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  car: null,
  actions: {
    remove() {
      var car = this.get('car');
      car.deleteRecord();
      return car.save();
    },
    updateImage(newImageUrl) {
      if(!newImageUrl) {
        return;
      }

      var car = this.get('car');
      car.imageUrl = newImageUrl;

      return car.save();
    }
  }
});
