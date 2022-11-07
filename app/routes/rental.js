import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalRoute extends Route {
  async model(params) {
    // path is from the perspective of "public" folder as the "root"
    let response = await fetch(`/api/rentals/${params.rental_id}.json`);
    let { data } = await response.json(); // data, in this case (and at this time), is an Obj and not an Array

    let { id, attributes } = data;
    let type;

    if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
      type = 'Community';
    } else {
      type = 'Standalone';
    }

    return { id, type, ...attributes };
  }
}
