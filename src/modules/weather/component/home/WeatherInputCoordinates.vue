<template>
	<!-- COORDINATES INPUT -->
	<v-text-field
		v-model="weatherStore.latitude"
		:label="'Latitude : must be between ' + MAX_LATITUDE + ' and ' + MIN_LATITUDE"
		type="number"
		:max="MAX_LATITUDE"
		:min="MIN_LATITUDE"
		step="1"
	></v-text-field>
	<v-text-field
		v-model="weatherStore.longitude"
		:label="'Longitude : must be between ' + MAX_LONGITUDE + ' and ' + MIN_LONGITUDE"
		type="number"
		:max="MAX_LONGITUDE"
		:min="MIN_LONGITUDE"
		step="1"
	></v-text-field>

	<!-- COPY PASTE BUTTONS -->
	<v-row>
		<v-col>
			<v-btn
				class="copyPasteButtons"
				prepend-icon="mdi-clipboard-arrow-down-outline"
				@click="copyCoordinates"
				>Copy</v-btn
			>
		</v-col>
		<v-col>
			<v-btn
				class="copyPasteButtons"
				prepend-icon="mdi-clipboard-arrow-up-outline"
				@click="pasteCoordinates"
				>Paste</v-btn
			>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../../store/weatherStore";
import {
	MAX_LATITUDE,
	MIN_LATITUDE,
	MAX_LONGITUDE,
	MIN_LONGITUDE
} from "../../constants/coordinateRestrictions";

const weatherStore = useWeatherStore();

async function pasteCoordinates(): Promise<void> {
	navigator.clipboard.readText().then((pastedText) => {
		let textPieces = pastedText.split(",");
		if (textPieces.length == 2) {
			weatherStore.latitude = parseFloat(textPieces[0]);
			weatherStore.longitude = parseFloat(textPieces[1]);
		}
	});
}

function copyCoordinates(): void {
	navigator.clipboard.writeText(weatherStore.latitude + ", " + weatherStore.longitude);
}
</script>

<style scoped>
.copyPasteButtons {
	width: 100%;
}
</style>
