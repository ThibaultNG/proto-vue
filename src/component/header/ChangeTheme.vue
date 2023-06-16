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
							@clicked="
								(id, displayedName, icon) => updateTheme(id, displayedName, icon)
							"
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
<style scoped>
.container {
	width: 15%;
}
</style>
