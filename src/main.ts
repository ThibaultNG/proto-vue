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
import * as themes from "./config/vuetifyTheme";
const vuetify = createVuetify({
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

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
