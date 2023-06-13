<template>
	<v-navigation-drawer v-model:rail="isNavDrawerPinned">
		<v-card class="mx-auto" width="300">
			<v-list v-model:opened="openedListGroups" open-strategy="multiple">
				<v-list-item
					prepend-icon="mdi-home"
					title="Home"
					to="/home"
					active-class="bg-primary-darken-2"
					@click="emptyOpenedListGroup"
				/>

				<v-divider />

				<v-list-group
					v-for="group in navLinkGroups"
					:key="group.groupName"
					:value="group.groupName"
					:class="getGroupClass(group.groupName)"
				>
					<template #activator="{ props }">
						<v-list-item
							v-bind="props"
							:prepend-icon="group.groupIcon"
							:title="group.groupName"
							:class="getGroupHeaderClass(group.groupName)"
						/>
					</template>

					<v-list-item
						v-for="item in group.itemList"
						:key="group.groupName + item.name"
						:title="item.name"
						:to="item.link"
						:prepend-icon="item.icon"
						active-class="bg-primary"
						@click="setActiveGroup(group.groupName)"
					/>

					<v-divider />
				</v-list-group>

				<v-divider />

				<v-list-item
					:prepend-icon="
						isNavDrawerPinned ? 'mdi-chevron-double-right' : 'mdi-chevron-double-left'
					"
					@click="toggleNavPin"
				/>
			</v-list>
		</v-card>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { gameNavLinks } from "../modules/games/routes/gameRoutes";
import { weatherNavLinks } from "../modules/weather/routes/weatherRoutes";
import type RouteGroupInfo from "@/router/RouteInfo";

const isNavDrawerPinned = ref<boolean>(false);
const activeGroupName = ref<string>();
const openedListGroups = ref<string[]>([]);

function getGroupClass(groupName: string): string {
	if (groupName == activeGroupName.value) return "bg-primary-lighten-5";
	return "bg-white";
}

function getGroupHeaderClass(groupName: string): string {
	if (groupName == activeGroupName.value) return "bg-primary-darken-2";
	return "bg-white";
}

function setActiveGroup(groupName: string): void {
	activeGroupName.value = groupName;
}

const navLinkGroups: RouteGroupInfo[] = [...gameNavLinks, ...weatherNavLinks];

function toggleNavPin(): void {
	isNavDrawerPinned.value = !isNavDrawerPinned.value;
	if (isNavDrawerPinned.value) openedListGroups.value = [];
}

watch(openedListGroups, (newList) => {
	if (newList.length) isNavDrawerPinned.value = false;
});

function emptyOpenedListGroup(): void {
	openedListGroups.value = [];
	activeGroupName.value = "";
}
</script>
