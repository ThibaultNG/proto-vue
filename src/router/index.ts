import { createRouter, createWebHistory } from "vue-router";
import Album from "../modules/album/views/Album.vue";
import Meteo from "../modules/meteo/views/MeteoMain.vue";

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
        }
    ]
});

export default router;
