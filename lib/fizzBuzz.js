module.exports = function() {
		var result = [];
		var item;
		for (var i = 1; i<= 100; i++) {
			if (i % 3 === 0) {
				item = 'Fizz';
			} else if ( i%5 === 0) {
				item = 'Buzz';
			} else {
				item = i;
			}
			result.push(item);
		}
		return result;
	}

	