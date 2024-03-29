import { createRouter, createWebHistory, type Router } from "vue-router";
import Album from "@/modules/album/views/MemeGallery.vue";
import { gameRoutes } from "@/modules/games/routes/gameRoutes";
import { weatherRoutes } from "@/modules/weather/routes/weatherRoutes";
import HomePageVue from "@/views/HomePage.vue";
import { editorRoutes } from "@/modules/editor/routes/editorRoutes";

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
		{
			path: "/album",
			name: "album",
			component: Album
		},
		...weatherRoutes,
		...gameRoutes,
		...editorRoutes,
		{
			path: "/:pathMatch(.*)*",
			component: () => import("@/views/Error404Page.vue")
		}
	]
});

export default router;
