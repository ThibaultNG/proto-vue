<template>
	<v-container class="w-100">
		<v-row>
			<v-col cols="4">
				<WeatherInputRandomizer
					width="100%"
					height="85%"
					:min-latitude="coordinateRestrictions.MIN_LATITUDE"
					:max-latitude="coordinateRestrictions.MAX_LATITUDE"
					:min-longitude="coordinateRestrictions.MIN_LONGITUDE"
					:max-longitude="coordinateRestrictions.MAX_LONGITUDE"
					>Random
				</WeatherInputRandomizer>
			</v-col>
			<v-col>
				<WeatherInputCoordinates
					variant="underlined"
					step="1"
					:min-latitude="coordinateRestrictions.MIN_LATITUDE"
					:max-latitude="coordinateRestrictions.MAX_LATITUDE"
					:min-longitude="coordinateRestrictions.MIN_LONGITUDE"
					:max-longitude="coordinateRestrictions.MAX_LONGITUDE"
				>
				</WeatherInputCoordinates>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import WeatherInputRandomizer from "./WeatherInputRandomizer.vue";
import WeatherInputCoordinates from "./WeatherInputCoordinates.vue";

enum coordinateRestrictions {
	MAX_LATITUDE = 90,
	MIN_LATITUDE = -90,
	MAX_LONGITUDE = 180,
	MIN_LONGITUDE = -180
}
</script>
