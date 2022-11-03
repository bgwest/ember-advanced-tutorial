import EmberRouter from '@ember/routing/router';
import config from 'ember-advanced-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // route = name or route, not the path
  // { path } = actual uri. in fact, if uri = route name then a
  //            path declaration isn't needed
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
});
