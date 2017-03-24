'use strict';
var fizzBuzz = function() {
  for (var index = 0; index < 100; index++) {
    console.log(translate(index));
  }
}

var translate = function(value) {
  if ( value%3 == 0 && value%5 == 0 ) {
    return 'FizzBuzz';
  } else if ( value%3 == 0 ) {
    return 'Fizz';
  } else if ( value%5 == 0 ) {
    return 'Buzz';
  } else {
    return value;
  }
}

fizzBuzz();


// Tests
var assert = require('assert');

describe('Test unit translations', function(){
  it('check a 3 multiple', function() {
    assert.equal(translate(3), 'Fizz');
  });
  it('check a 5 multiple', function() {
    assert.equal(translate(5), 'Buzz');
  });
  it('check a 3 and 5 multiple', function() {
    assert.equal(translate(15), 'FizzBuzz');
  });
  it('check a not 3 multiple nether 5 multiple', function() {
    assert.equal(translate(4), 4);
  });

});
