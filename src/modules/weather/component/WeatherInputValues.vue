<template>
	<div class="inputValues">
		<p>Latitude must be between {{ MAX_LATITUDE }} and {{ MIN_LATITUDE }}</p>
		<p>Longitude must be between {{ MAX_LONGITUDE }} and {{ MIN_LONGITUDE }}</p>
		<label> latitude : </label>
		<input @paste="splitIfComma" v-model="meteoStore.latitude" type="number" />

		<label> longitude : </label>
		<input @paste="splitIfComma" v-model="meteoStore.longitude" type="number" />

		<v-btn @click="copyCoordinates" variant="tonal" outlined>Copier les coordonées</v-btn>
	</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../store/weatherStore";
import { MAX_LATITUDE, MIN_LATITUDE, MAX_LONGITUDE, MIN_LONGITUDE } from "../constants/coordinate";

const meteoStore = useWeatherStore();

//update coordinates according to pasted values if the syntax is correct
//i.e. '-59.91232133' + ',' + '12.029222' with -59.xxx for latitude and 12.xxx for longitude
function splitIfComma(event: any): void {
	let pastedText: string = event.clipboardData.getData("text");
	let textPieces = pastedText.split(",");
	if (textPieces.length == 2) {
		meteoStore.latitude = parseFloat(textPieces[0]);
		meteoStore.longitude = parseFloat(textPieces[1]);
	}
}

function copyCoordinates(): void {
	navigator.clipboard.writeText(meteoStore.latitude + ", " + meteoStore.longitude);
}
</script>

<style scoped>
input {
	background-color: whitesmoke;
	width: 20%;
	margin-right: 1em;
}
</style>
