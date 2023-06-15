import type { ThemeDefinition } from "vuetify";

export interface themeItemHeader {
	id: string;
	displayedName: string;
	icon: string;
}
export const themeItemListHeader: themeItemHeader[] = [
	{
		id: "defaultLightTheme",
		displayedName: "light",
		icon: "mdi-white-balance-sunny"
	},
	{
		id: "defaultDarkTheme",
		displayedName: "dark",
		icon: "mdi-moon-waxing-crescent"
	},
	{
		id: "wineTheme",
		displayedName: "wine",
		icon: "mdi-glass-wine"
	}
];

//------------ ^ change themes ^ ------
//------------ v themes v -------------

export const defaultLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#FFFFFF",
		surface: "#FFFFFF",
		primary: "#2196F3",
		secondary: "#B0BEC5",
		//'secondary-darken-1': '#FFFFFF',
		error: "#B00020",
		info: "#2196F3",
		success: "#4CAF50",
		warning: "#FB8C00"
	}
};

export const defaultDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#424242",
		surface: "#424242",
		primary: "#424242",
		secondary: "#424242"
	}
};

export const wineTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#FFEBEE",
		surface: "#FFEBEE",
		primary: "#B71C1C",
		secondary: "#B71C1C"
	}
};
