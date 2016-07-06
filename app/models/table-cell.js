import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  value: attr('string'),
  table: belongsTo('table'),
  column: belongsTo('table-column'),
  row: belongsTo('table-row')
});
