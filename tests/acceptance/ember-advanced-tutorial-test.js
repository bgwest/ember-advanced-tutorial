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
  const appPaths = [root, about, contact];

  test.each(
    'verify each route has the top nav',
    appPaths,
    async (assert, path) => {
      await visit(path);
      assert.strictEqual(currentURL(), path);
      assert.dom('nav').exists();
      assert.dom('h1').hasText('SuperRentals');
    }
  );

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

  test('viewing the details of a rental property', async function (assert) {
    await visit(root);
    // TODO: would be nice to tie this to an actual 'fetch' from our public/api for data.length
    assert.dom('.rental').exists({ count: 3 });

    await click('.rental:first-of-type a');
    assert.strictEqual(currentURL(), '/rentals/grand-old-mansion');
  });

  test('visiting /rentals/grand-old-mansion', async function (assert) {
    await visit('/rentals/grand-old-mansion');

    assert.strictEqual(currentURL(), '/rentals/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('SuperRentals');
    assert.dom('h2').containsText('Grand Old Mansion');
    assert.dom('.rental.detailed').exists();
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
