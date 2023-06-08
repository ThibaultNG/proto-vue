<template>
	<WeatherHomeDisplay />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import WeatherWaitingDisplay from "./display/WeatherHomeWaitingDisplay.vue";
import WeatherErrorDisplay from "./display/WeatherHomeErrorDisplay.vue";

const WeatherHomeDisplay = defineAsyncComponent({
	loader: () => import("./display/WeatherHomeDisplay.vue"),
	loadingComponent: WeatherWaitingDisplay,
	delay: 200,
	errorComponent: WeatherErrorDisplay,
	timeout: 3000
});
</script>

<style scoped></style>
