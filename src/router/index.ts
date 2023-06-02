import { createRouter, createWebHistory, type Router } from "vue-router";
import Album from "@/modules/album/views/Album.vue";
import { gameRoutes } from "@/modules/games/routes/gameRoutes";
import { meteoRoutes } from "@/modules/meteo/routes/meteoRoutes";
import HomePageVue from "@/views/HomePage.vue";

const router: Router = createRouter({
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
        ...gameRoutes,
		{
			path: "/:pathMatch(.*)*",
			component: ()=>import("@/views/Error404Page.vue")
		}
    ]
});

export default router;
