'use strict';
var printFizzBuzz = function() {
  for (var index = 0; index < 100; index++) {
    console.log(fizzBuzz(index));
  }
}

var fizzBuzz = function(number) {
  if ( number%3 == 0 && number%5 == 0 ) {
    return 'FizzBuzz';
  } else if ( number%3 == 0 ) {
    return 'Fizz';
  } else if ( number%5 == 0 ) {
    return 'Buzz';
  } else {
    return number;
  }
}

printFizzBuzz();



// Tests
var assert = require('assert');

describe('Test unit translations', function(){
  it('check a 3 multiple', function() {
    assert.equal(fizzBuzz(3), 'Fizz');
  });
  it('check a 5 multiple', function() {
    assert.equal(fizzBuzz(5), 'Buzz');
  });
  it('check a 3 and 5 multiple', function() {
    assert.equal(fizzBuzz(15), 'FizzBuzz');
  });
  it('check a not 3 multiple nether 5 multiple', function() {
    assert.equal(fizzBuzz(4), 4);
  });

});
