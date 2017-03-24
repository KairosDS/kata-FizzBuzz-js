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
});