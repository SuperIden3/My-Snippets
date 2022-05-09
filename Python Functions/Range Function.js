var range = {
	/**
	 * @param {number} start The starting number
	 * @param {number} end The ending number
	 * @returns {any} array The array produced and returned from the function
	 */
	forward: (start, end) => {

		if (start != end) {
			let array = [];
			for (let i = start; i <= end; i++) {
				array.push(i);
			}
			return array;
		} else {
			throw new RangeError("First argument cannot be the same as second argument. You can use `[range([first], [first + 1]).pop()]`");
		}
	},
	/**
	 * @param {number} start The starting number
	 * @param {number} end The ending number
	 * @returns {any} array The array produced and returned from the function
	 */
	backward: (start, end) => {
		if (start != end) {
			let array = [];
			for (let i = start; i >= end; i--) {
				array.push(i);
			}
			return array;
		} else {
			throw new RangeError("First argument cannot be the same as second argument. You can use `[range([first], [first + 1]).pop()]`");
		}
	}
}
