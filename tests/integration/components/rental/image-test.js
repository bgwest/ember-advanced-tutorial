import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-advanced-tutorial/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    /*
      These comments were moved from the HTML files because no comments are allowed in the hbs files
      Once I feel like I know this stuff stronger I can delete these
    */
    /*
      https://guides.emberjs.com/release/tutorial/part-1/more-about-components/#toc_forwarding-html-attributes-with-attributes
      "... In general, it is a good idea to add ...attributes to the primary element 
      in your component. This will allow for maximum flexibility, as the invoker 
      may need to pass along classes for styling or ARIA attributes to improve 
      accessibility."
  
      Note, below, the Rental::Image (double colon) syntax is the Namespaced Syntax
      https://guides.emberjs.com/release/tutorial/part-1/more-about-components/#toc_organizing-code-with-namespaced-components 
    */
    await render(
      hbs`<Rental::Image src="/assets/images/teaching-tomster.png" 
      alt="Teaching Tomster"/>`
    );

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/teaching-tomster.png')
      .hasAttribute('alt', 'Teaching Tomster');
  });

  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
