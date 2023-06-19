export interface headerThemeItem {
	id: string;
	displayedName: string;
	icon: string;
}
export const headerThemeList: headerThemeItem[] = [
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
