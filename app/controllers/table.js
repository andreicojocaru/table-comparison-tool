import Ember from 'ember';

export default Ember.Controller.extend({
  _createCell(row, column, table) {
    var cell = this.store.createRecord('table-cell', {
      row,
      column,
      table
    });

    return cell.save();
  },
  actions: {
    addTable() {
      var table = this.store.createRecord('table', {
        title: "Demo"
      });

      return table.save();
    },
    addRow(table) {
      var title = this.get('newRowTitle');
      var row = this.store.createRecord('table-row', {
        title,
        table
      });

      return row.save().then(() => {

        table.get('columns').then((columns) => {
          columns.forEach((column) => {
            return this._createCell(row, column, table).then(() => {
              // not needed [no relationship definded]
              return column.save();
            });

          });

          return row.save();
        });

        return table.save();
      });
    },
    addColumn(table) {
      var title = this.get('newColumnTitle');

      var column = this.store.createRecord('table-column', {
        title,
        table
      });

      return column.save().then(() => {
        table.get('rows').then((rows) => {
          rows.forEach((row) => {
            return this._createCell(row, column, table).then(() => {
              return row.save();
            });
          });

          return column.save();
        });

        return table.save();
      });
    }
  }
});
