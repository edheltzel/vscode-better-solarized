/**
 * Flightdeck config powered by Eleventy
 * @module .eleventy
 * @see https://www.11ty.io/docs/config/
 * @param {Object} config
 */

module.exports = (config) => {
	return {
		dir: {
			input: "src",
			output: "test",
			data: "data",
		},
	};
};
