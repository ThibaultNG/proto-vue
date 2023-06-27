import { createRouter, createWebHistory, type Router } from "vue-router";
import { fooRoutes } from "@/modules/foobar/routes/foobarRoutes";

const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			component: () => import("@/views/HomePage.vue")
		},
		...fooRoutes,
		{
			path: "/:pathMatch(.*)*",
			component: () => import("@/views/Error404Page.vue")
		}
	]
});

export default router;
