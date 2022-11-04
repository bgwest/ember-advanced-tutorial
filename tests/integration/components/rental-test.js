import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-advanced-tutorial/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function (assert) {
    await render(hbs`<Rental />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('Grand Old Mansion');
    assert.dom('article .detail.owner').includesText('Owner:');
    assert.dom('article .detail.owner').includesText('Veruca Salt');
    assert.dom('article .detail.type').includesText('Type:');
    assert.dom('article .detail.type').includesText('Standalone');
    assert.dom('article .detail.location').includesText('Location:');
    assert.dom('article .detail.location').includesText('San Francisco');
    assert.dom('article .detail.bedrooms').includesText('Number of bedrooms:');
    assert.dom('article .detail.bedrooms').includesText('15');
    assert.dom('article .image').exists();
  });
});
