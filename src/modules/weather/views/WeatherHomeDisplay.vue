<template>
	<div>
		<div class="inputValues">
			<WeatherRandomizer>Random</WeatherRandomizer>
			<WeatherInputValues></WeatherInputValues>
		</div>
		<br />

		<WeatherData v-if="weatherStore.data != null" :data="weatherStore.data"></WeatherData>
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
import WeatherData from "../component/WeatherDataDisplay.vue";
import WeatherRandomizer from "../component/WeatherRandomizer.vue";
import WeatherInputValues from "../component/WeatherInputValues.vue";
import { useWeatherStore } from "../store/weatherStore";

const weatherStore = useWeatherStore();
</script>

<style scoped></style>
