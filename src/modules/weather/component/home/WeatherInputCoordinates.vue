<template>
	<v-text-field
		v-model="weatherStore.latitude"
		:label="
			'Latitude : must be between ' +
			coordinateRestrictions.MAX_LATITUDE +
			' and ' +
			coordinateRestrictions.MIN_LATITUDE
		"
		type="number"
		:max="coordinateRestrictions.MAX_LATITUDE"
		:min="coordinateRestrictions.MIN_LATITUDE"
		step="1"
	></v-text-field>
	<v-text-field
		v-model="weatherStore.longitude"
		:label="
			'Longitude : must be between ' +
			coordinateRestrictions.MAX_LONGITUDE +
			' and ' +
			coordinateRestrictions.MIN_LONGITUDE
		"
		type="number"
		:max="coordinateRestrictions.MAX_LONGITUDE"
		:min="coordinateRestrictions.MIN_LONGITUDE"
		step="1"
	></v-text-field>
</template>

<script setup lang="ts">
import { useWeatherStore } from "../../store/weatherStore";
import { coordinateRestrictions } from "../../constants/coordinateRestrictions";

const weatherStore = useWeatherStore();
</script>
