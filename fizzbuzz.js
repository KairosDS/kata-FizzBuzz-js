'use strict';

var fizzBuzz = () => {};

var fizzBuzzAux = (n) => {
	return n
};

var assert = require('assert');
describe('Debe existir la funcion fizzBuzz', function(){
	it('Cuando comprobamos el tipo de la variable fizzBuzz , debe ser function', function(){
		assert.equal(typeof fizzBuzz, 'function');
	});
	it('fizzBuzzAux should receive a number and return it', function(){
		var number = 1;
		assert.equal(fizzBuzzAux(number), number);
	});
	it('fizzBuzzAux should receive a number multiple of three and it must return "Fizz"', function(){
		var number = 3;
		assert.equal(fizzBuzzAux(number), 'Fizz');
	});
});