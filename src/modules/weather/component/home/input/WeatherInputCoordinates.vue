<template>
	<v-text-field
		v-bind="$attrs"
		v-model="weatherStore.latitude"
		:label="'Latitude : must be between ' + maxLatitude + ' and ' + minLatitude"
		type="number"
		:max="maxLatitude"
		:min="minLatitude"
	></v-text-field>
	<v-text-field
		v-bind="$attrs"
		v-model="weatherStore.longitude"
		:label="'Longitude : must be between ' + maxLongitude + ' and ' + minLongitude"
		type="number"
		:max="props.maxLongitude"
		:min="props.minLongitude"
	></v-text-field>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../../../store/weatherStore";

const weatherStore = useWeatherStore();

const props = defineProps({
	maxLatitude: {
		type: Number,
		default: 90
	},
	minLatitude: {
		type: Number,
		default: -90
	},
	maxLongitude: {
		type: Number,
		default: 180
	},
	minLongitude: {
		type: Number,
		default: -180
	}
});
</script>
