<template>
	<ul>
		<template v-if="weatherStore.data != undefined && weatherStore.data != null">
			<MeteoDataValueWithIcon
				v-if="weatherStore.data.current_weather.is_day"
				icon="mdi-weather-sunny"
				value="day time"
				unit=""
			></MeteoDataValueWithIcon>
			<MeteoDataValueWithIcon
				v-else-if="!weatherStore.data.current_weather.is_day"
				icon="mdi-weather-night"
				value="night time"
				unit=""
			></MeteoDataValueWithIcon>
			<br />
			<MeteoDataValueWithIcon
				icon="mdi-clock-time-one-outline"
				:value="weatherStore.data.current_weather.time"
				unit=""
			></MeteoDataValueWithIcon>
			<br />
			<MeteoDataValueWithIcon
				icon="mdi-sun-thermometer-outline"
				:value="weatherStore.data.current_weather.temperature"
				unit="°C"
			></MeteoDataValueWithIcon>
			<br />
			<MeteoDataValueWithIcon
				icon="mdi-weather-windy"
				:value="weatherStore.data.current_weather.windspeed"
				unit="km/h"
			></MeteoDataValueWithIcon>
			<br />
		</template>
	</ul>
</template>

<script lang="ts" setup>
import MeteoDataValueWithIcon from "./WeatherDataValueWithIcon.vue";
import { useWeatherStore } from "../store/weatherStore";

const weatherStore = useWeatherStore();
</script>
