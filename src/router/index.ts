import { createRouter, createWebHistory } from "vue-router";
import Album from "../modules/album/views/Album.vue";
import Meteo from "../modules/meteo/views/MeteoMain.vue";
import Games from "../modules/games/views/Games.vue";

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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Album
        },
        {
            path: "/games",
            name: "games",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Games
        }
    ]
});

export default router;
