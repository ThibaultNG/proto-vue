<template>
	<v-container class="container">
		<v-row class="mt-1">
			<v-col cols="2">
				<v-icon class="mt-5 mr-2">{{ selectedIcon }}</v-icon>
			</v-col>
			<v-col>
				<v-select
					v-model="selectedDisplayedName"
					class="selectSize"
					label="Theme"
					:items="themeItemListHeader"
					variant="underlined"
				>
					<template #item="{ item }">
						<ChangeThemeSelectOption
							:id="item.value.id"
							:displayed-name="item.value.displayedName"
							:icon="item.value.icon"
							@clicked="(id) => updateTheme(id)"
						>
						</ChangeThemeSelectOption>
						<br />
					</template>
				</v-select>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { themeItemListHeader } from "../../config/vuetify-theme-switch";
import { ref } from "vue";
import ChangeThemeSelectOption from "./ChangeThemeSelectOption.vue";

const theme = useTheme();
let selectedDisplayedName = ref<string>();
let selectedIcon = ref<string>();

updateTheme(theme.global.name.value); //first render

function updateTheme(id: string): void {
	theme.global.name.value = id;
	for (let index: number = 0; index < themeItemListHeader.length; index++) {
		if (themeItemListHeader[index].id == theme.global.name.value) {
			selectedDisplayedName.value = themeItemListHeader[index].displayedName;
			selectedIcon.value = themeItemListHeader[index].icon;
		}
	}
}
</script>
<style scoped>
.container {
	width: 15%;
}
</style>
