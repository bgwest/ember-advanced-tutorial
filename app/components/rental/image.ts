/*
  @glimmer/component, or Glimmer component, is one of the several component classes available 
  to use. They are a great starting point whenever you want to add behavior to your components. 
  In this tutorial, we will be using Glimmer components exclusively. In general, Glimmer components 
  should be used whenever possible. However, you may also see @ember/components, or classic components, 
  used in older apps. You can tell them apart by looking at their import path (which is helpful for 
  looking up the respective documentation, as they have different and incompatible APIs).
*/
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// The typescript setup will sadly eat too much time before my interview
// Will need to circle back to that. Found lots of good docs, but it will deter
// My core learning of Ember and trade it for env config
export default class RentalImageComponent extends Component {
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
