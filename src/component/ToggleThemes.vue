<template>
	<select v-model="selected" label="mode" variant="outlined">
		<option
			v-for="themeItem in themeList"
			:key="themeItem.name"
			:value="themeItem.name"
			:icon="themeItem.icon"
		>
			<v-icon>{{ themeItem.icon }}</v-icon>
			{{ themeItem.name }}
		</option>
	</select>
</template>

<script setup lang="ts">
import { useTheme, type ThemeInstance } from "vuetify";
import { themeList } from "../config/vuetify-theme";
import { ref } from "vue";
import { watchEffect } from "vue";

const theme: ThemeInstance = useTheme();
const selected = ref<string>(theme.global.name.value);

watchEffect(() => {
	for (let index: number = 0; index < themeList.length; index++) {
		if (selected.value == themeList[index].name) {
			theme.global.name.value = themeList[index].name;
		}
	}
});
</script>
