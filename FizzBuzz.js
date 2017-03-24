'use strict';
var fizzBuzz = function() {
  for (var index = 0; index < 100; index++) {
    console.log(translate(index));
  }
}

var translate = function(value) {
  return value%3 == 0 ? 'Fizz': value;
}


// Tests
var assert = require('assert');

describe('Test unit translations', function(){
  it('check a 3 multiple', function() {
    assert.equal(translate(3), 'Fizz');
  });
});
