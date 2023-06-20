import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import * as themes from "../config/vuetifyTheme";

export const cookieThemeName = "defaultThemeDemMachines";
export const defaultThemeName = Object.keys(themes)[0];
export const expirationDate = new Date().setDate(7);

export function getAndSetCookieTheme(): string {
	const valueGetCookie = cookies.get(cookieThemeName);

	if (valueGetCookie == "null" || valueGetCookie == "undefined") {
		cookies.set(cookieThemeName, defaultThemeName, expirationDate);
		return defaultThemeName;
	} else {
		cookies.set(cookieThemeName, valueGetCookie, expirationDate);
		return valueGetCookie;
	}
}
