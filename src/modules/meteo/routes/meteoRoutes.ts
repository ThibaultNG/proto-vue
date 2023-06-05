import type { RouteRecordRaw } from "vue-router";
const meteoHome = () => import("../views/MeteoHome.vue");

export const meteoRoutes: RouteRecordRaw[] = [
    {
        path: "/meteo",
        name: "meteo",
        redirect: { name: "MeteoHome" },
        children: [
            {
                path: "home",
                name: "MeteoHome",
                component: meteoHome
            }
        ]
    }
];

export const meteoNavLinks = [
    {
        groupName: "Meteo",
        itemList: [{ name: "Home", link: "/meteo/home" }]
    }
];
