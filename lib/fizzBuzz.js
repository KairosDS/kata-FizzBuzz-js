module.exports = function() {
		var result = [];
		for (var i = 1; i<= 100; i++) {
			if (i % 3 === 0) {
				result.push('Fizz');
				continue;
			} 
			result.push(i);
		}
		return result;
	}

	