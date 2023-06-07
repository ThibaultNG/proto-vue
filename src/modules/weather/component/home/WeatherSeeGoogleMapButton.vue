<template>		
	<v-btn class="googleMapButton"
	:href="
		'https://google.fr/maps/search/' +
		weatherStore.latitude +
		', ' +
		weatherStore.longitude
	"
	elevation="9"
	size="large"
	target="_blank"
	rel="noopener noreferrer"
	prepend-icon="$vuetify"
	append-icon="$vuetify"
	>See on Google Map</v-btn>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../../store/weatherStore";

const weatherStore = useWeatherStore();
</script>

<style>
.googleMapButton {
    background-color: #1976D2;
    color: white;
	width: 100%;
	margin-top : 5%;
}
</style>