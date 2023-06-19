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
