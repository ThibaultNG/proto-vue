import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as themes from "./vuetifyTheme";

export const vuetifyPlugin = createVuetify({
	components,
	directives,
	display: {
		mobileBreakpoint: "xs"
	},
	theme: {
		defaultTheme: "defaultLightTheme",
		themes: {
			...themes
		},
		variations: {
			colors: ["primary", "secondary", "warning", "error"],
			lighten: 5,
			darken: 5
		}
	}
});
