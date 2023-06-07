<template>
	<v-text-field 
		:label="'Latitude : must be between ' + MAX_LATITUDE + ' and ' + MIN_LATITUDE"
		@paste="pasteCoordinates" v-model="meteoStore.latitude" type="number"></v-text-field>
	<v-text-field 
		:label="'Longitude : must be between ' + MAX_LONGITUDE + ' and ' + MIN_LONGITUDE"
		@paste="pasteCoordinates" v-model="meteoStore.longitude" type="number"></v-text-field>
	<v-row>
		<v-col>
			<v-btn class="copyPasteButtons" @click="copyCoordinates" prepend-icon="mdi-clipboard-arrow-down-outline">Copy</v-btn>
		</v-col>
		<v-col>
			<v-btn class="copyPasteButtons" @click="pasteCoordinates" prepend-icon="mdi-clipboard-arrow-up-outline">Paste</v-btn>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../../store/weatherStore";
import { MAX_LATITUDE, MIN_LATITUDE, MAX_LONGITUDE, MIN_LONGITUDE } from "../../constants/coordinate";

const meteoStore = useWeatherStore();


function pasteCoordinates(event: any): void {
	let pastedText: string = "0, 0";
	pastedText = event.clipboardData.getData("text");
	console.log("pastedText = " + pastedText);
	let textPieces = pastedText.split(",");
	console.log(textPieces[0])
	console.log(textPieces[1])
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
.copyPasteButtons {
	width: 100%
}


</style>
