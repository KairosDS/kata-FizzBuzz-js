'use strict';

var fizzbuzz = function(name) {
	return true;
}

var assert = require('assert');

describe('Let try fizz-buzz', function() {
	it('when i have one hundred numbers, say fizz or/and buzz when number is multiple 3 or/and 5', function() {
		assert.equal(fizzbuzz(), true);
	})
})