'use strict';

var test = require('tape');
var int2roman = require('../');

test('roman2arabic', function(t) {
  t.equal(typeof int2roman, 'function', 'it should be a function');
  t.equal(int2roman(), '', 'if no arguments, give back empty string');

  t.end();
});
