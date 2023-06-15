import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Icons
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { defaultDarkTheme, defaultLightTheme, wineTheme } from "./config/vuetify-theme";

const vuetify = createVuetify({
	components,
	directives,
	display: {
		mobileBreakpoint: "xs"
	},
	theme: {
		defaultTheme: "defaultLightTheme",
		themes: {
			defaultDarkTheme,
			defaultLightTheme,
			wineTheme //TODO : make it so that we can enumerate all the theme here without having to write them one by one
		},
		variations: {
			colors: ["primary", "secondary", "warning", "error"],
			lighten: 5,
			darken: 5
		}
	}
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
