import Component from '@glimmer/component';
import ENV from 'ember-advanced-tutorial/config/environment';

/*
  The -gc flag stands for Glimmer component, but you may also remember it as "generate class":
  ember -gc map --with-component-class
*/

export default class MapComponent extends Component {
  get token() {
    // It's important to URL-encode the token, just in case it contains any special characters that are not URL-safe
    // https://javascript.info/url#encoding-strings
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
