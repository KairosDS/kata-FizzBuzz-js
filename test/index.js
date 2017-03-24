'use strict';

var sayHi = function(name){
  return 'Hi ' + name;
}

var assert = require('assert');
var fizzBuzz = require('../lib/fizzBuzz');

describe('FizzBuzz', function(){
  it('should exists fizzBuzz', function() {
    assert.ok(typeof fizzBuzz === 'function'); 
  });

  it('should return 100 elements', function() {
  	var result = fizzBuzz();
    assert.ok(result.length === 100); 
  });

  it('should 1 on first element', function() {
  	var result = fizzBuzz();
    assert.ok(result[0] === 1); 
  });

  it('should \'Fizz\' on third element', function() {
  	var result = fizzBuzz();
    assert.equal(result[2], 'Fizz');
  });
});