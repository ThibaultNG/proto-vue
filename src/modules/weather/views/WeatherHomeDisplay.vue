<template>
	<br />
	<v-container>
		<v-row>
			<WeatherErrorServiceDisplay></WeatherErrorServiceDisplay>
		</v-row>
		<v-row>
			<v-col>
				<WeatherInputValues></WeatherInputValues>
				<WeatherSeeOnGoogleMapButton></WeatherSeeOnGoogleMapButton>
			</v-col>
			<v-divider vertical></v-divider>
			<v-col>
				<WeatherData></WeatherData>
				<WeatherRandomizer>Random</WeatherRandomizer>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import WeatherErrorServiceDisplay from "../component/home/error/WeatherErrorServiceDisplay.vue";
import WeatherData from "../component/home/data/WeatherDataDisplay.vue";
import WeatherRandomizer from "../component/home/WeatherRandomizer.vue";
import WeatherInputValues from "../component/home/WeatherInputValues.vue";
import WeatherSeeOnGoogleMapButton from "../component/home/WeatherSeeGoogleMapButton.vue";
</script>

<style scoped></style>
