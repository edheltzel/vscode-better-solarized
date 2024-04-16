import { makeMainColorsDark, makeMainColorsLight } from "../helper";
import type { Theme, ThemeColors, ThemeLevels } from "../typing";

const solarizedColors: ThemeColors = {
	blue: "#399fe8",
	green: "#94a522",
	greenAlt: "#A4EF58",
	orange: "#d8822c",
	pink: "#ce81c8",
	purple: "#767cde",
	red: "#eb4937",
	salmon: "#e54b95",
	turquoize: "#38bbb0",
	yellow: "#dfbe5a",
};

const solarizedLevels: ThemeLevels = {
	danger: solarizedColors.red,
	info: solarizedColors.blue,
	success: solarizedColors.green,
	warning: solarizedColors.yellow,
};

export const betterSolarizedDark: Theme = {
	colors: solarizedColors,
	levels: solarizedLevels,
	ui: makeMainColorsDark({ base: "#132c34", primary: "#47cfc4" }),
};

export const betterSolarizedReversed: Theme = {
	colors: solarizedColors,
	levels: solarizedLevels,
	ui: makeMainColorsDark({
		base: "#102128",
		primary: "#47cfc4",
		reversed: true,
	}),
};

export const betterSolarizedLight: Theme = {
	colors: solarizedColors,
	levels: solarizedLevels,
	ui: makeMainColorsLight({
		base: "#fdf6e3",
		desaturated: true,
		primary: "#2aa198",
	}),
};
