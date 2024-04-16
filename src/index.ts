// cSpell: disable
import { writeFile, writeFileSync } from "node:fs";

import bridge from "../bridge.json" assert { type: "json" };
import syntax from "./scopes/scopes";
import semanticTokens from "./scopes/semanticTokens";
import type { Theme } from "./typing";
import ui from "./ui";
import {
	betterSolarizedDark,
	betterSolarizedLight,
	betterSolarizedReversed,
} from "./variations/solarized";
interface ThemeOptions {
	desaturateInputs?: boolean;
	hc?: boolean;
	light?: boolean;
	untindedSelection?: boolean;
}

interface BridgeItem {
	name: string;
	slug: string;
	theme: Theme;
	uiTheme: string;
}

const bfile: BridgeItem[] = JSON.parse(JSON.stringify(bridge));

/**
 * Generates a theme template and writes it to a JSON file.
 * @param name - The name of the theme.
 * @param theme - The theme object containing color definitions.
 * @param options - Optional configuration for the theme generation.
 * @param options.desaturateInputs - Whether to desaturate input colors. Default is false.
 * @param options.hc - Whether to generate a high contrast theme. Default is false.
 * @param options.light - Whether to generate a light theme. Default is false.
 * @param options.untindedSelection - Whether to generate an untinted selection color. Default is false.
 * @returns A Promise that resolves when the theme file is written successfully.
 */
async function makeTheme(
	name: string,
	theme: Theme,
	{ desaturateInputs, hc, light, untindedSelection }: ThemeOptions = {
		desaturateInputs: false,
		hc: false,
		light: false,
		untindedSelection: false,
	},
): Promise<void> {
	const themeTemplate = {
		$schema: "vscode://schemas/color-theme",
		colors: ui(theme, hc, light, untindedSelection, desaturateInputs),
		name: `BetterSolarized ${name.charAt(0).toUpperCase()}${name.slice(1)}`,
		semanticHighlighting: true,
		semanticTokenColors: semanticTokens(theme),
		tokenColors: syntax(theme, hc),
	};

	writeFile(
		`themes/better-solarized-${name}.json`,
		JSON.stringify(themeTemplate),
		(err) => {
			if (err) console.log("error", err);
		},
	);

	// Generate bridge.json
	const themeName = name
		.split("-")
		.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
		.join(" ");

	bfile.push({
		name: `Better Solarized ${themeName}`,
		slug: name.split(" ").join("-").toLowerCase(),
		theme,
		uiTheme: "vs-dark",
	});

	if (bfile.length === new Set(bfile.map((item) => item.name)).size) {
		writeFileSync("bridge.json", JSON.stringify(bfile), {
			encoding: "utf8",
		});
	}
}

// Better Solarized
makeTheme("better-solarized-dark", betterSolarizedDark);
makeTheme("better-solarized-light", betterSolarizedLight, {
	desaturateInputs: true,
	light: true,
});
makeTheme("better-solarized-reversed", betterSolarizedReversed);
