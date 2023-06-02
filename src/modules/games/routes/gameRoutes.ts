import GamesVue from "../Games.vue";
import GamesHomeVue from "../views/GamesHome.vue";
import GameDeals from "../views/GameDeals.vue";
import GameShopList from "../views/GameShopsList.vue";
import type { RouteRecordRaw } from "vue-router";

export const gameRoutes: RouteRecordRaw[] = [
    {
        path: "/games",
        component: GamesVue,
        redirect: { name: "game-home" },
        children: [
            {
                path: "home",
                name: "game-home",
                component: GamesHomeVue
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

export const gameNavLinks = [
    {
        groupName: "Games",
        itemList: [
            { name: "Home", link: "/games/home" },
            { name: "Shops", link: "/games/shops" },
            { name: "Deals", link: "/games/deals" }
        ]
    }
];
