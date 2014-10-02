'use strict';

var test = require('tape');
var roman2arabic = require('../');

test('roman2arabic', function(t) {
  t.equal(typeof roman2arabic, 'function', 'it should be a function');
  t.end();
});
