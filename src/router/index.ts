import { createRouter, createWebHistory } from "vue-router";
import Album from "@/modules/album/views/Album.vue";
import gameRoutes from "@/modules/games/routes/gameRoutes";
import meteoRoutes from "@/modules/meteo/routes/meteoRoutes";
import HomePageVue from "@/views/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: HomePageVue
        },
        ...meteoRoutes,
        {
            path: "/album",
            name: "album",
            component: Album
        },
        ...gameRoutes
    ]
});

export default router;
