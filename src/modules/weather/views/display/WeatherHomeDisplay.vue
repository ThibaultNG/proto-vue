<template>
	<br />
	<v-container>
		<v-row>
			<WeatherErrorServiceDisplay></WeatherErrorServiceDisplay>
		</v-row>
		<v-row>
			<!-- LEFT -->
			<v-col>
				<WeatherInputCoordinates></WeatherInputCoordinates>
				<WeatherSeeOnGoogleMapButton></WeatherSeeOnGoogleMapButton>
			</v-col>

			<v-divider vertical></v-divider>

			<!-- RIGHT -->
			<v-col>
				<WeatherDataDisplay></WeatherDataDisplay>
				<WeatherRandomizer>Random</WeatherRandomizer>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import WeatherErrorServiceDisplay from "../../component/home/error/WeatherErrorServiceDisplay.vue";
import WeatherDataDisplay from "../../component/home/data/WeatherDataDisplay.vue";
import WeatherRandomizer from "../../component/home/WeatherRandomizer.vue";
import WeatherInputCoordinates from "../../component/home/WeatherInputCoordinates.vue";
import WeatherSeeOnGoogleMapButton from "../../component/home/WeatherSeeGoogleMapButton.vue";
</script>

<style scoped></style>
