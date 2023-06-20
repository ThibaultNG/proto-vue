import type { RouteRecordRaw } from "vue-router";
import EditorMain from "../EditorMain.vue";
import type RouteGroupInfo from "@/router/RouteInfo";
import YamlEditor from "../views/YamlEditor.vue";
import GuiEditor from "../views/GuiEditor.vue";

export const editorRoutes: RouteRecordRaw[] = [
	{
		path: "/editor",
		component: EditorMain,
		redirect: { name: "editor-yaml" },
		children: [
			{
				path: "yaml",
				name: "editor-yaml",
				component: YamlEditor
			},
			{
				path: "gui",
				name: "editor-gui",
				component: GuiEditor
			}
		]
	}
];

export const editorNavLinks: RouteGroupInfo[] = [
	{
		groupName: "Editor",
		groupIcon: "mdi-file-document-edit",
		itemList: [
			{ name: "Yaml", link: "/editor/yaml", icon: "mdi-file-code-outline" },
			{ name: "GUI", link: "/editor/gui", icon: "mdi-button-cursor" }
		]
	}
];
