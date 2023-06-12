<template>
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
