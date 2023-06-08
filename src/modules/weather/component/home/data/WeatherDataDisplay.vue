<template>
	<ul>
		<template v-if="weatherStore.data != undefined && weatherStore.data != null">
			<p>
				<WeatherDataDisplayValueIcon
					v-if="weatherStore.data?.current_weather.is_day"
					icon="mdi-weather-sunny"
					value="day time"
					unit=""
				></WeatherDataDisplayValueIcon>
				<WeatherDataDisplayValueIcon
					v-else-if="!weatherStore.data?.current_weather.is_day"
					icon="mdi-weather-night"
					value="night time"
					unit=""
				></WeatherDataDisplayValueIcon>
			</p>
			<br />
			<p>
				<WeatherDataDisplayValueIcon
					icon="mdi-clock-time-one-outline"
					:value="weatherStore.data?.current_weather.time"
					unit=""
				></WeatherDataDisplayValueIcon>
			</p>
			<br />
			<p>
				<WeatherDataDisplayValueIcon
					icon="mdi-sun-thermometer-outline"
					:value="weatherStore.data?.current_weather.temperature"
					unit="°C"
				></WeatherDataDisplayValueIcon>
			</p>
			<br />
			<p>
				<WeatherDataDisplayValueIcon
					icon="mdi-weather-windy"
					:value="weatherStore.data?.current_weather.windspeed"
					unit="km/h"
				></WeatherDataDisplayValueIcon>
			</p>
			<br />
		</template>
	</ul>
</template>

<script lang="ts" setup>
import WeatherDataDisplayValueIcon from "./WeatherDataDisplayValueIcon.vue";
import { useWeatherStore } from "../../../store/weatherStore";

const weatherStore = useWeatherStore();
</script>
