import EmberObject from '@ember/object';
import StardustIndexRouteMixin from 'ember-stardust-hooks/mixins/stardust-index-route';
import { module, test } from 'qunit';

module('Unit | Mixin | stardust-index-route', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let StardustIndexRouteObject = EmberObject.extend(StardustIndexRouteMixin);
    let subject = StardustIndexRouteObject.create();
    assert.ok(subject);
  });
});
