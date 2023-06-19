<template>
	<v-container class="w-100">
		<v-row>
			<v-col cols="5">
				<WeatherInputRandomizer width="85%" height="90%">Random</WeatherInputRandomizer>
			</v-col>
			<v-col>
				<WeatherInputCoordinates
					class="mt-2"
					variant="outlined"
					step="1"
				></WeatherInputCoordinates>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import WeatherInputRandomizer from "./WeatherInputRandomizer.vue";
import WeatherInputCoordinates from "./WeatherInputCoordinates.vue";
</script>
