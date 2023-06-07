<template>
	<WeatherHomeDisplay />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import WeatherWaitingDisplay from "./system-views/WeatherWaitingDisplay.vue";
import WeatherErrorDisplay from "./system-views/WeatherErrorDisplay.vue";

//TODO : move the below to Weather.vue and apply it to RouterView instead of WeatherHomeDisplay
const WeatherHomeDisplay = defineAsyncComponent({
	loader: () => import("./WeatherHomeDisplay.vue"),
	loadingComponent: WeatherWaitingDisplay,
	delay: 200,
	errorComponent: WeatherErrorDisplay,
	timeout: 3000
});
</script>

<style scoped></style>
