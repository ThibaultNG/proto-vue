<template>
	<v-btn @click="randomize()" stacked prepend-icon="mdi-dice-5-outline" class="randomizerButton">
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../../store/weatherStore";
import { MAX_LATITUDE, MIN_LATITUDE, MAX_LONGITUDE, MIN_LONGITUDE } from "../../constants/coordinate";

const meteoStore = useWeatherStore();

//randomize and update the coordinate values
function randomize(): void {
	meteoStore.latitude = Math.random() * (MAX_LATITUDE - MIN_LATITUDE) + MIN_LATITUDE;
	meteoStore.longitude = Math.random() * (MAX_LONGITUDE - MIN_LONGITUDE) + MIN_LONGITUDE;
}
</script>

<style>
.randomizerButton{
	background-color: #64B5F6;
    color: white;
}
</style>