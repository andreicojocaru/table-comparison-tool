import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  imgRgx: /<img[^>]+src="(http:\/\/[^">]+)"/g,
  url: null,
  updateAction: null,
  init() {
    this._super(...arguments);
    if(this.get('url')) {
      this.makeAjaxCall();
    }
  },
  dataChanged: Ember.observer('data', function () {
    var data = this.get('data');
    var imgs = this.get('imgRgx').exec(data);

    if(imgs && imgs.length > 1) {
      this.set('imgSrc', imgs[1]);
      this.sendAction('updateAction', imgs[1]);
    }
  }),
  makeAjaxCall() {
      var url = "https://crossorigin.me/" + this.get('url');

      return this.get('ajax').request(url, {
        dataType: 'text'
      }).then((response) => {
        console.info(`${url} sent content with ${response.length} length.`);
        this.set('data', response);
      }).catch((reason) => {
        console.error('Error while getting page', url, reason);
      });
  }
});
