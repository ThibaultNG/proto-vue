import GamesVue from "../Games.vue";
import GamesHomeVue from "../views/GamesHome.vue";
import GameDeals from "../views/GameDeals.vue";
import GameShopList from "../views/GameShopsList.vue";

export default [
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
