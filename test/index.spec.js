'use strict';

var test = require('tape');
var int2roman = require('../');

test('roman2arabic', function(t) {
  t.equal(typeof int2roman, 'function', 'it should be a function');
//  t.equal(int2roman(), '', 'if no arguments, give back empty string');
//  t.throws(function() {
//    int2roman(3001);
//  }, 'should throw error if the number is bigger than 3000');
//  t.throws(function() {
//    int2roman(0);
//  }, 'should throw error if the number is smaller than 1');

//  t.equal(int2roman(1), 'I');
//  t.equal(int2roman(5), 'V');
//  t.equal(int2roman(10), 'X');
//  t.equal(int2roman(50), 'L');
//  t.equal(int2roman(100), 'C');
//  t.equal(int2roman(500), 'D');
//  t.equal(int2roman(1000), 'M');

//  t.equal(int2roman(3), 'III');
//  t.equal(int2roman(4), 'IV');
//  t.equal(int2roman(7), 'VII');
//  t.equal(int2roman(9), 'IX');
//  t.equal(int2roman(16), 'XVI');
//  t.equal(int2roman(20), 'XX');
//  t.equal(int2roman(40), 'XL');
//  t.equal(int2roman(473), 'CDLXXIII');
//  t.equal(int2roman(1999), 'MCMXCIX');

  t.end();
});
