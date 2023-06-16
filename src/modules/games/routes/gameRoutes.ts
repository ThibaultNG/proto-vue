import GamesMain from "../GamesMain.vue";
import GamesHome from "../views/GamesHome.vue";
import GameDeals from "../views/GameDeals.vue";
import GameShopList from "../views/GameShopsList.vue";
import type { RouteRecordRaw } from "vue-router";
import type RouteGroupInfo from "@/router/RouteInfo";

export const gameRoutes: RouteRecordRaw[] = [
	{
		path: "/games",
		component: GamesMain,
		redirect: { name: "game-home" },
		children: [
			{
				path: "home",
				name: "game-home",
				component: GamesHome
			},
			{
				path: "deals",
				name: "game-deals",
				component: GameDeals
			},
			{
				path: "shops",
				name: "game-shop",
				component: GameShopList
			}
		]
	}
];

export const gameNavLinks: RouteGroupInfo[] = [
	{
		groupName: "Games",
		groupIcon: "mdi-controller",
		itemList: [
			{ name: "Home", link: "/games/home", icon: "mdi-home-outline" },
			{ name: "Shops", link: "/games/shops", icon: "mdi-store-outline" },
			{ name: "Deals", link: "/games/deals", icon: "mdi-tag-text-outline" }
		]
	}
];
