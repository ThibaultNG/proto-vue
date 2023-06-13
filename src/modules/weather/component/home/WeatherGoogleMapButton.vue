<template>
	<v-btn
		class="bg-primary-darken-2 mt-5"
		width="100%"
		:href="
			'https://google.fr/maps/search/' + weatherStore.latitude + ', ' + weatherStore.longitude
		"
		elevation="9"
		size="large"
		target="_blank"
		rel="noopener noreferrer"
		prepend-icon="$vuetify"
		append-icon="$vuetify"
		>See on Google Map</v-btn
	>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../../store/weatherStore";

const weatherStore = useWeatherStore();
</script>
