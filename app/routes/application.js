import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service('router'),
  actions: {
    didTransition() {
      let url = this.get('router').get('url');
      rg4js('trackEvent', { type: 'pageView', path: url });
      return true; // Bubble the didTransition event
    }
  }
});
