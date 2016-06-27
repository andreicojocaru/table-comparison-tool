import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  url: attr('string'),
  year: attr('string'),
  panoramicRoof: attr('boolean'),
  autoAc: attr('boolean'),
  leather: attr('boolean'),
  heatedSeats: attr('boolean'),
  satNav: attr('boolean'),
  parkingSensors: attr('boolean'),
  wheelSize: attr('string')
});
