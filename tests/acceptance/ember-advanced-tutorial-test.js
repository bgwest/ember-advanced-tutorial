import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-advanced-tutorial/tests/helpers';

// Acceptance tests are also known as "application tests" and are one of the few types of
// automated testing at our disposal in Ember
// They test our app from the user's perspective
// They're an automated version of the "click around and see if it works" manual approach
module('Acceptance | ember advanced tutorial', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /ember-advanced-tutorial', async function (assert) {
    await visit('/ember-advanced-tutorial');

    assert.strictEqual(currentURL(), '/ember-advanced-tutorial');
  });
});
