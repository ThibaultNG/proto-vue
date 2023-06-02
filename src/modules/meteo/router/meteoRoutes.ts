import MeteoHome from "../MeteoHome.vue";

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
            }
        ]
    }
];
