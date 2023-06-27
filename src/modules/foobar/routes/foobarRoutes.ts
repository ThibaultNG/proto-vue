import type { RouteRecordRaw } from "vue-router";
import type RouteGroupInfo from "@/router/RouteInfo";

export const fooRoutes: RouteRecordRaw[] = [
	{
		path: "/foobar",
		component: () => import("@/modules/foobar/FooMain.vue"),
		redirect: { name: "game-home" },
		children: [
			{
				path: "foo",
				name: "foo-page",
				component: () => import("@/modules/foobar/views/FooPage.vue")
			},
			{
				path: "bar",
				name: "bar-page",
				component: () => import("@/modules/foobar/views/BarPage.vue")
			}
		]
	}
];

export const fooNavLinks: RouteGroupInfo[] = [
	{
		groupName: "FooBar",
		groupIcon: "mdi-food",
		itemList: [
			{ name: "Foo", link: "/foobar/foo", icon: "mdi-soccer" },
			{ name: "Bar", link: "/foobar/bar", icon: "mdi-dumbbell" }
		]
	}
];
