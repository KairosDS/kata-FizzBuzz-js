'use strict';

var fizzbuzz = function(name) {
	//return;
}

var assert = require('assert');

describe('Let try fizz-buzz', function() {
	it('I have a function that return true', function() {
		assert.equal(fizzbuzz(), true);
	})
	it('I have a function that return true when i give a number', function() {
		assert.equal(fizzbuzz(3), true)
	})
})