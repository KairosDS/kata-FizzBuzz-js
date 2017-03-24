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
  it('1 return 1', function() {
    assert.equal(fizzBuzz(1), 1 ); 
  });
  it('2 return 2', function() {
    assert.equal(fizzBuzz(2), 2 ); 
  });
  it('3 return Fizz', function() {
    assert.equal(fizzBuzz(3), 'Fizz' ); 
  });
  it('5 return Buzz', function() {
    assert.equal(fizzBuzz(5), 'Buzz' ); 
  });
  it('15 return FizzBuzz', function() {
    assert.equal(fizzBuzz(15), 'FizzBuzz' ); 
  });
  it('null return error', function() {
    assert.equal(fizzBuzz(null), 'Error' ); 
  });
  it('undefined return error', function() {
    assert.equal(fizzBuzz(undefined), 'Error' ); 
  });
  it('not is a number', function() {
    assert.equal(fizzBuzz('string'), 'Error' ); 
  });
  it('not is a array', function() {
    assert.equal(fizzBuzz([]), 'Error' ); 
  });
  it('not is a object', function() {
    assert.equal(fizzBuzz({}), 'Error' ); 
  });
  it('number is greater than 100', function() {
    assert.equal(fizzBuzz(101), 'Error' ); 
  });
});