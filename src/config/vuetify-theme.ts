import type { ThemeDefinition } from "vuetify";

export interface toggleTheme {
	name: string;
	icon: string;
}
export const themeList: toggleTheme[] = [
	{
		name: "defaultLightTheme",
		icon: "mdi-white-balance-sunny"
	},
	{
		name: "defaultDarkTheme",
		icon: "mdi-moon-waxing-crescent"
	}
];

//------------ ^ toggle themes ^ ------
//------------ v themes v -------------

export const defaultLightTheme: ThemeDefinition = {
	//TODO : change the name to defaultLightTheme
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
