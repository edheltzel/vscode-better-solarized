module.exports = (config) => {
	config.addTransform("jsonMin", async (content, outputPath) => {
		if (outputPath?.endsWith(".json")) {
			try {
				const json = JSON.parse(content); // Convert string to JSON object
				return JSON.stringify(json); // Convert JSON object back to string with no white spaces
			} catch (error) {
				console.error("Error parsing JSON content:", error);
				return content; // Return original content on error
			}
		}
		return content;
	});
};
