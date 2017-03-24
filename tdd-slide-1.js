'use strict';
var sayHi = function(name){
	return 'Hi ' + name;
}

var assert = require('assert');
describe('Lets try to say Hi', function(){
	it('when I give my name, it says Hi back to me with my name', function(){
		assert.equal(sayHi('Helder'), 'Hi Helder');
	});
});