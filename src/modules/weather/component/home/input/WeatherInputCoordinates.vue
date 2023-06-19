<template>
	<v-text-field
		v-bind="$attrs"
		v-model="weatherStore.latitude"
		:rules="latitudeRules"
		label="Latitude"
		type="number"
	></v-text-field>
	<v-text-field
		v-bind="$attrs"
		v-model="weatherStore.longitude"
		:rules="longitudeRules"
		label="Longitude"
		type="number"
	></v-text-field>
</template>

<script setup lang="ts">
import { latitudeRules, longitudeRules } from "./WeatherInputRules";
import { useWeatherStore } from "../../../store/weatherStore";

const weatherStore = useWeatherStore();
</script>
