import { createRouter, createWebHistory } from "vue-router";
import Album from "../modules/album/views/Album.vue";
import gameRoutes from "@/modules/games/router/gameRoutes";
import MeteoRouter from "@/modules/meteo/router/MeteoRouter";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...MeteoRouter,
        {
            path: "/album",
            name: "album",
            component: Album
        },
        ...gameRoutes
    ]
});

export default router;
