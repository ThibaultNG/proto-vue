<template>
	<v-btn @click="randomize()" stacked prepend-icon="mdi-dice-5-outline" class="randomizerButton">
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../../store/weatherStore";
import {
	MAX_LATITUDE,
	MIN_LATITUDE,
	MAX_LONGITUDE,
	MIN_LONGITUDE
} from "../../constants/coordinateRestrictions";

const weatherStore = useWeatherStore();

//randomize and update the coordinate values
function randomize(): void {
	weatherStore.latitude = Math.random() * (MAX_LATITUDE - MIN_LATITUDE) + MIN_LATITUDE;
	weatherStore.longitude = Math.random() * (MAX_LONGITUDE - MIN_LONGITUDE) + MIN_LONGITUDE;
}
</script>

<style>
.randomizerButton {
	background-color: #64b5f6;
	color: white;
}
</style>
