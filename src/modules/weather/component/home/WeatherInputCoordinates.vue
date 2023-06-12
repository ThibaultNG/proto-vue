<template>
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
</script>
