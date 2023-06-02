import MeteoHome from "../MeteoHome.vue";
const meteoPage = () => import("../views/MeteoPage.vue");

export default [
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
