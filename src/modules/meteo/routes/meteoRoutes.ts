import type { RouteRecordRaw } from "vue-router";
import MeteoHome from "../MeteoHome.vue";
const meteoPage = () => import("../views/MeteoPage.vue");

export const meteoRoutes: RouteRecordRaw[] = [
    {
        path: "/meteo",
        name: "meteo",
        redirect: { name: "MeteoHome" },
        children: [
            {
                path: "home",
                name: "MeteoHome",
                component: MeteoHome
                //component: meteoPage //TODO : change this from Page to Home
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
