'use strict';

var fizzbuzz = function(n) {
    var result = '';
    if (typeof n === 'number' && n >= 1 && n <= 100) {
        if (n % 3 === 0) {
            result = 'Fizz';
        }
        if (n % 5 === 0) {
            result += 'Buzz';
        }
        if (result === '') { 
            result = n;
        }
        return result;
    }
};

var assert = require('assert');

describe('Existe FizzBuzz??', function(){
  it('Comprobar que existe la función', function(){
      assert.equal(fizzbuzz(), undefined);
  });
  
  it('Comprobar que devuelve un valor si se le envia un parametro', function(){
      assert.equal(fizzbuzz(1), 1);
      assert.equal(fizzbuzz(101), undefined);
      assert.equal(fizzbuzz(-1), undefined);
      assert.equal(fizzbuzz('a'), undefined);
  });

  it('Comprobar que el parámetro sea un número', function(){
      assert.equal(typeof fizzbuzz(2), 'number');
      assert.equal(fizzbuzz('a'), undefined);
  });

  it('Si el parámetro es multiplo de 3 y no de 5 devuelve fizz', function(){
      assert.equal(fizzbuzz(3), 'Fizz');
      assert.equal(fizzbuzz(6), 'Fizz');
      assert.equal(fizzbuzz(2), 2);
  });

  it('Si el parámetro es multiplo de 5 y no de 3 devuelve buzz', function(){
      assert.equal(fizzbuzz(5), 'Buzz');
      assert.equal(fizzbuzz(10), 'Buzz');
      assert.equal(fizzbuzz(2), 2);
  });

  it('Si el parámetro es multiplo de 5 y de 3 devuelve fizzbuzz', function(){
      assert.equal(fizzbuzz(15), 'FizzBuzz');
      assert.equal(fizzbuzz(30), 'FizzBuzz');
      assert.equal(fizzbuzz(2), 2);
  });
});