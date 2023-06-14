<template>
	<v-app-bar color="primary-lighten-1" class="pl-10">
		<v-icon size="x-large">mdi-vuejs</v-icon>
		<v-app-bar-title class="text-h4">PROTOTYPE VUE 3</v-app-bar-title>
		<ToggleThemes></ToggleThemes>
	</v-app-bar>
</template>

<script setup lang="ts">
import ToggleThemes from "./ToggleThemes.vue";
</script>
