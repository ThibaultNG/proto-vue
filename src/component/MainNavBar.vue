<template>
	<v-navigation-drawer v-model:rail="isNavDrawerPinned">
		<v-card class="mx-auto" width="300">
			<v-list v-model:opened="openedListGroups" open-strategy="single">
				<v-list-item prepend-icon="mdi-home" title="Home" value="Home" to="/"></v-list-item>

				<v-divider />

				<v-list-group v-for="group in navLinkGroups" :key="group.groupName" :value="group.groupName">
					<template #activator="{ props }">
						<v-list-item
							v-bind="props"
							:prepend-icon="group.groupIcon"
							:title="group.groupName"
						/>
					</template>

					<v-list-group
						v-for="item in group.itemList"
						:key="group.groupName + item.name"
						:value="group.groupName + item.name"
					>
						<template #activator="{ props }">
							<v-list-item
								v-bind="props"
								:title="item.name"
								:to="item.link"
								:prepend-icon="item.icon"
							></v-list-item>
						</template>
					</v-list-group>
					<v-divider />
				</v-list-group>

				<v-divider />

				<v-list-item
					:prepend-icon="
						isNavDrawerPinned ? 'mdi-chevron-double-right' : 'mdi-chevron-double-left'
					"
					@click="toggleNavPin"
				>
				</v-list-item>
			</v-list>
		</v-card>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { gameNavLinks } from "../modules/games/routes/gameRoutes";
import { weatherNavLinks } from "../modules/weather/routes/weatherRoutes";

const isNavDrawerPinned = ref<boolean>(false);
const openedListGroups = ref<string[]>(["Home"]);

const navLinkGroups = [...gameNavLinks, ...weatherNavLinks];

function toggleNavPin() {
	if (isNavDrawerPinned.value) openedListGroups.value = ["Home"];
	isNavDrawerPinned.value = !isNavDrawerPinned.value;
}

watch(openedListGroups, (newList) => {
	if (newList[0] != undefined && newList[0] != "Home") isNavDrawerPinned.value = false;
});
</script>
