import Component from '@glimmer/component';
import ENV from 'ember-advanced-tutorial/config/environment';

/*
  The -gc flag stands for Glimmer component, but you may also remember it as "generate class":
  ember -gc map --with-component-class
*/

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
const defaultCoordinates = {
  latitude: 37.7749,
  longitude: -122.4194,
};

export default class MapComponent extends Component {
  lng = defaultCoordinates.longitude;
  lat = defaultCoordinates.latitude;
  width = 150;
  height = 150;
  zoom = 8.79;

  get token() {
    // It's important to URL-encode the token, just in case it contains any special characters that are not URL-safe
    // https://javascript.info/url#encoding-strings
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

  get src() {
    const {
      lng: lngArg,
      lat: latArg,
      width: widthArg,
      height: heightArg,
      zoom: zoomArg,
    } = this.args;

    console.log({
      widthArg,
      width: this.width,
      heightArg,
      height: this.height,
    });

    const coordinates = `${lngArg ?? this.lng},${latArg ?? this.lat},${
      zoomArg ?? this.zoom
    }`;
    const dimensions = `${widthArg ?? this.width}x${heightArg ?? this.height}`;
    const accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }
}
