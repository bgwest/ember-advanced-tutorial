import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-advanced-tutorial/tests/helpers';

// Acceptance tests are also known as "application tests" and are one of the few types of
// automated testing at our disposal in Ember
// They test our app from the user's perspective
// They're an automated version of the "click around and see if it works" manual approach
module('Acceptance | ember advanced tutorial', function (hooks) {
  setupApplicationTest(hooks);
  const root = '/';
  const about = '/about';
  const contact = '/getting-in-touch';

  test(`visiting ${root}`, async function (assert) {
    await visit(root);

    assert.strictEqual(currentURL(), root);
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');

    assert.dom('.jumbo a.button.home').hasText('Home');
    await click('.jumbo a.button.home');
    assert.strictEqual(currentURL(), root);
  });

  test(`visiting ${about}`, async function (assert) {
    await visit(about);

    assert.strictEqual(currentURL(), about);
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), contact);
  });

  test(`visiting ${contact}`, async function (assert) {
    await visit(contact);

    assert.strictEqual(currentURL(), contact);
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), about);
  });
});
