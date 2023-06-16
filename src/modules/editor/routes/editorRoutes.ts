import type { RouteRecordRaw } from "vue-router";
import EditorMain from "../EditorMain.vue";
import EditorHome from "../views/EditorHome.vue";
import type RouteGroupInfo from "@/router/RouteInfo";

export const editorRoutes: RouteRecordRaw[] = [
	{
		path: "/editor",
		component: EditorMain,
		redirect: { name: "editor-home" },
		children: [
			{
				path: "home",
				name: "editor-home",
				component: EditorHome
			}
		]
	}
];

export const editorNavLinks: RouteGroupInfo[] = [
	{
		groupName: "Editor",
		groupIcon: "mdi-file-document-edit",
		itemList: [{ name: "Home", link: "/editor/home", icon: "mdi-home-edit-outline" }]
	}
];
