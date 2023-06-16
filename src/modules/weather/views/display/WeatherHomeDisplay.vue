<template>
	<br />
	<v-container>
		<v-row>
			<WeatherErrorDisplay
				:error-message="weatherStore.errorInfo.message"
			></WeatherErrorDisplay>
		</v-row>
		<v-row>
			<!-- LEFT -->
			<v-col>
				<WeatherInput></WeatherInput>
				<WeatherCopyPasteButtons></WeatherCopyPasteButtons>
				<WeatherGoogleMapButton></WeatherGoogleMapButton>
			</v-col>

			<v-divider vertical></v-divider>

			<!-- RIGHT -->
			<v-col>
				<WeatherDataDisplay></WeatherDataDisplay>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import WeatherErrorDisplay from "../../component/WeatherErrorDisplay.vue";
import WeatherDataDisplay from "../../component/home/data/WeatherDataDisplay.vue";
import WeatherInput from "../../component/home/input/WeatherInput.vue";
import WeatherGoogleMapButton from "../../component/home/WeatherGoogleMapButton.vue";
import WeatherCopyPasteButtons from "../../component/home/WeatherCopyPasteButtons.vue";

import { useWeatherStore } from "../../store/weatherStore";
const weatherStore = useWeatherStore();
</script>

<style scoped></style>
