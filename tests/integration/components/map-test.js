import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-advanced-tutorial/tests/helpers';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import ENV from 'ember-advanced-tutorial/config/environment';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a map image for the specified parameters', async function (assert) {
    await render(hbs`<Map
      @lat="37.7797"
      @lng="-122.4184"
      @zoom="10"
      @width="150"
      @height="120"
    />`);

    assert
      .dom('.map img')
      .exists()
      .hasAttribute('alt', 'Map image at coordinates 37.7797,-122.4184')
      .hasAttribute('src')
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');

    let { src } = find('.map img');
    let token = encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);

    assert.ok(
      src.startsWith('https://api.mapbox.com/'),
      'the src starts with "https://api.mapbox.com/"'
    );
    assert.ok(
      src.includes('-122.4184,37.7797,10'),
      'the src should include the lng,lat,zoom parameter'
    );
    assert.ok(
      src.includes('150x120@2x'),
      'the src should include the width,height and @2x parameter'
    );
    assert.ok(
      src.includes(`access_token=${token}`),
      'the src should include the escaped access token'
    );
  });

  // IMPORTANT: to read and understand this RE: order of HTML attributes... see implementation example in the HBS version of this file
  // https://guides.emberjs.com/release/tutorial/part-1/reusable-components/#toc_overriding-html-attributes-in-attributes
  test('the default alt attribute can be overridden', async function (assert) {
    await render(hbs`<Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
        alt="A map of San Francisco"
      />`);

    assert.dom('.map img').hasAttribute('alt', 'A map of San Francisco');
  });

  // IMPORTANT: +1 to RE: order of HTML ATTRIBUTES...
  // https://guides.emberjs.com/release/tutorial/part-1/reusable-components/#toc_overriding-html-attributes-in-attributes
  test('the src, width and height attributes cannot be overridden', async function (assert) {
    await render(hbs`<Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
        src="/assets/images/teaching-tomster.png"
        width="200"
        height="300"
      />`);

    assert
      .dom('.map img')
      /* 
        very nice doc for qunit dom -- contains hasAttribute and many others in here:
        https://github.com/mainmatter/qunit-dom/blob/master/API.md                     
       */
      /* 
        Note that the hasAttribute test helper from qunit-dom supports using regular expressions 
        We used this feature to confirm that the src attribute starts with https://api.mapbox.com/, 
        as opposed to requiring it to be an exact match against a string. This allows us to be reasonably 
        confident that the code is working correctly, without being overly-detailed in our tests.
      */
      .hasAttribute('src', /^https:\/\/api\.mapbox\.com\//)
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');
  });
});
