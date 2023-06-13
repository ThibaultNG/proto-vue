import type RouteGroupInfo from "@/router/RouteInfo";
import type { RouteRecordRaw } from "vue-router";
const weatherHome = () => import("../views/WeatherHome.vue");
const weather = () => import("../WeatherMain.vue");

export const weatherRoutes: RouteRecordRaw[] = [
	{
		path: "/weather",
		name: "weather",
		component: weather,
		redirect: { name: "WeatherHome" },
		children: [
			{
				path: "home",
				name: "WeatherHome",
				component: weatherHome
			}
		]
	}
];

export const weatherNavLinks: RouteGroupInfo[] = [
	{
		groupName: "Weather",
		groupIcon: "mdi-cloud",
		itemList: [{ name: "Home", link: "/weather/home", icon: "mdi-home-outline" }]
	}
];
