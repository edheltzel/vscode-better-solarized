/**
 * Flightdeck powered by Eleventy
 * @module .eleventy
 * @see https://www.11ty.io/docs/config/
 * @param {Object} config
 */

const isProd = process.env.ENV === "prod";
const addTransforms = require("./_flightdeck/transforms");
module.exports = (config) => {
	if (isProd) {
		addTransforms(config);
	}

	return {
		dir: {
			input: "src",
			output: "themes",
			data: "data",
		},
	};
};
