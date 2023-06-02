import { createRouter, createWebHistory } from "vue-router";
import Album from "../modules/album/views/Album.vue";
import Meteo from "../modules/meteo/views/MeteoMain.vue";
import Games from "../modules/games/views/GamesHome.vue";
import gameRoutes from "@/modules/games/router/gameRoutes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/meteo",
            name: "meteo",
            component: Meteo
        },
        {
            path: "/album",
            name: "album",
            component: Album
        },
        ...gameRoutes
    ]
});

export default router;
