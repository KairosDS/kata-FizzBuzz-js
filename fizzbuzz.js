'use strict';

var fizzBuzzPrinter = () => {};

var fizzBuzz = n => {
	if (n === 3) return 'Fizz'
	return n
};

var assert = require('assert');
describe('Debe existir la funcion fizzBuzz', function(){
	it('Cuando comprobamos el tipo de la variable fizzBuzz , debe ser function', function(){
		assert.equal(typeof fizzBuzzPrinter, 'function');
	});
	it('fizzBuzz should receive a number and return it', function(){
		var number = 1;
		assert.equal(fizzBuzz(number), number);
	});
	it('fizzBuzz should receive a number multiple of three and it must return "Fizz"', function(){
		var number = 3;
		assert.equal(fizzBuzz(number), 'Fizz');
		assert.equal(fizzBuzz(6), 'Fizz')
	});
});
