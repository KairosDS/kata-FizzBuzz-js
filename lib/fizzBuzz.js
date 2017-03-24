module.exports = function(num) {

  function isMultiploDe3(num) {
    return num % 3 === 0
  }

  function isMultiploDe5(num) {
    return num % 5 === 0
  }

  function isMultiploDe3y5(num) {
    return isMultiploDe3(num) && isMultiploDe5(num)
  }

  function isError(num){
    return !num || typeof num !== 'number' || num > 100
  }

  if( isError(num) ){
    return 'Error'
  }
  else if ( isMultiploDe3y5(num) ) {
    return 'FizzBuzz'
  }
  else if( isMultiploDe3(num) ){
    return 'Fizz'
  } else if ( isMultiploDe5(num) ) {
    return 'Buzz'
  } 
  else {
    return num
  } 
};