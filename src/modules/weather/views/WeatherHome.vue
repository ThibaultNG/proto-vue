<template>
	<div>
		<div class="inputValues">
			<MeteoRandomizer>Random</MeteoRandomizer>
			<MeteoInputValues></MeteoInputValues>
		</div>
		<br />

		<MeteoData v-if="weatherStore.data != null" :data="weatherStore.data"></MeteoData>
		<p v-else>Please refresh the page...</p>

		<v-btn
			:href="
				'https://google.fr/maps/search/' +
				weatherStore.latitude +
				', ' +
				weatherStore.longitude
			"
			target="_blank"
			rel="noopener noreferrer"
			prepend-icon="$vuetify"
			append-icon="$vuetify"
			>See on Google Map</v-btn
		>
	</div>
</template>

<script setup lang="ts">
import MeteoData from "../component/WeatherData.vue";
import MeteoRandomizer from "../component/WeatherRandomizer.vue";
import MeteoInputValues from "../component/WeatherInputValues.vue";
import { useWeatherStore } from "../store/weatherStore";

const weatherStore = useWeatherStore();
</script>

<style scoped></style>
