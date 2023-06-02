import { createRouter, createWebHistory } from "vue-router";
import Album from "../modules/album/views/Album.vue";
import gameRoutes from "@/modules/games/router/gameRoutes";
import meteoRoutes from "@/modules/meteo/router/meteoRoutes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
