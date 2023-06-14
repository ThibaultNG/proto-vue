<template>
	<ul>
		<!-- IS_DAY -->
		<WeatherDataDisplayValueIcon
			v-if="weatherStore.data?.current_weather.is_day"
			icon="mdi-weather-sunny"
			:value="weatherStore.data ? 'day time' : undefined"
			unit=""
		></WeatherDataDisplayValueIcon>
		<WeatherDataDisplayValueIcon
			v-else-if="!weatherStore.data?.current_weather.is_day"
			icon="mdi-weather-night"
			:value="weatherStore.data ? 'night time' : undefined"
			unit=""
		></WeatherDataDisplayValueIcon>
		<br />

		<!-- TIME -->
		<WeatherDataDisplayValueIcon
			icon="mdi-clock-time-one-outline"
			:value="weatherStore.data ? weatherStore.data.current_weather.time : undefined"
			unit=""
		></WeatherDataDisplayValueIcon>
		<br />

		<!-- TEMPERATURE -->
		<WeatherDataDisplayValueIcon
			icon="mdi-sun-thermometer-outline"
			:value="weatherStore.data ? weatherStore.data.current_weather.temperature : undefined"
			unit="°C"
		></WeatherDataDisplayValueIcon>
		<br />

		<!-- WINDSPEED -->
		<WeatherDataDisplayValueIcon
			icon="mdi-weather-windy"
			:value="weatherStore.data ? weatherStore.data.current_weather.windspeed : undefined"
			unit="km/h"
		></WeatherDataDisplayValueIcon>
		<br />
	</ul>
</template>

<script lang="ts" setup>
import WeatherDataDisplayValueIcon from "./WeatherDataDisplayItem.vue";
import { useWeatherStore } from "../../../store/weatherStore";

const weatherStore = useWeatherStore();
</script>
