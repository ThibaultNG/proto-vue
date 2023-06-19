import type { ThemeDefinition } from "vuetify";

//ATTENTION : when adding or deleting a theme here, do not forget to also modify in vuetifyThemeHeader.ts

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
