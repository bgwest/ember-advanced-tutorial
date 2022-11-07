import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  /*
      The model hook is responsible for fetching and preparing any data that you need for your route. 
      Ember will automatically call this hook when entering a route, so that you can have an opportunity 
      to run your own code to get the data you need. The object returned from this hook is known as the 
      model for the route (surprise!).
    */
  async model() {
    return {
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      type: 'Standalone',
      bedrooms: 15,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description:
        'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    };
  }
}
