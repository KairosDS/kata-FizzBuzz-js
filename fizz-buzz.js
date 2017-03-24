'use strict';

var fizzbuzz = function(number) {
	if(typeof number === 'number') {
		if(number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
		if(number % 3 === 0) return 'fizz';
		else if(number % 5 === 0) return 'buzz';
		else return number;
	}
}

var assert = require('assert');

describe('Let try fizz-buzz', function() {

	it('I have a function that return true when i give a number', function() {
		assert.equal(fizzbuzz(4), 4)
	})
	it('I have a function that return fizz when i give a number multiple of 3', function() {
		assert.equal(fizzbuzz(3), 'fizz')
	})
	it('I have a function that return buzz when i give a number multiple of 5', function() {
		assert.equal(fizzbuzz(5), 'buzz')
	})
	it('I have a function that return fizzbuzz when i give a number multiple of 3 and 5', function() {
		assert.equal(fizzbuzz(15), 'fizzbuzz')
	})
})