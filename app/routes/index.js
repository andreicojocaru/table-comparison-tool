import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('car');
    // return [
    //   {
    //     URL: 'http://www.autotrader.co.uk/classified/advert/201606195068669'
    //   },
    //   {
    //     URL: 'http://www.autotrader.co.uk/classified/advert/201606175018146'
    //   },
    //   {
    //     URL: 'http://www.autotrader.co.uk/classified/advert/201604183093953'
    //   },
    //   {
    //     URL: 'http://www.autotrader.co.uk/classified/advert/201606164989912'
    //   },
    //   {
    //     URL: 'http://www.autotrader.co.uk/classified/advert/201606134868081'
    //   }
    // ];
  }
});
