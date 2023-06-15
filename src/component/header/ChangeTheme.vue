<template>
	<v-icon class="mr-2">{{ selectedIcon }}</v-icon>
	<v-select
		v-model="selectedDisplayedName"
		class="mt-2 w-auto"
		label="Theme"
		:items="themeItemListHeader"
		variant="underlined"
	>
		<template #item="{ item }">
			<ChangeThemeSelectOption
				:id="item.value.id"
				:displayed-name="item.value.displayedName"
				:icon="item.value.icon"
				@clicked="(id, displayedName, icon) => updateTheme(id, displayedName, icon)"
			>
			</ChangeThemeSelectOption>
			<br />
		</template>
	</v-select>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { themeItemListHeader } from "../../config/vuetify-theme";
import { ref } from "vue";
import ChangeThemeSelectOption from "./ChangeThemeSelectOption.vue";

const theme = useTheme();
let selectedDisplayedName = ref<string>();
let selectedIcon = ref<string>();

function updateTheme(id: string, displayedName: string, icon: string): void {
	theme.global.name.value = id;
	selectedDisplayedName.value = displayedName;
	selectedIcon.value = icon;
}
</script>
