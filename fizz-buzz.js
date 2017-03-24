'use strict';

var fizzbuzz = function(name) {
	if(typeof name === 'number') return true;
}

var assert = require('assert');

describe('Let try fizz-buzz', function() {

	it('I have a function that return true when i give a number', function() {
		assert.equal(fizzbuzz(3), true)
	})
	it('I have a function that return fizz when i give a number multiple of 3', function() {
		assert.equal(fizzbuzz(3), 'fizz')
	})
	it('I have a function that return buzz when i give a number multiple of 5', function() {
		assert.equal(fizzbuzz(5), 'buzz')
	})
})