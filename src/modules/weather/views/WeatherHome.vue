<template>
	<WeatherHomeDisplay />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import WeatherWaitingDisplay from "./WeatherWaitingDisplay.vue";
import WeatherErrorDisplay from "./WeatherErrorDisplay.vue";

const WeatherHomeDisplay = defineAsyncComponent({
	loader: () => import("./WeatherHomeDisplay.vue"),
	loadingComponent: WeatherWaitingDisplay,
	delay: 200,
	errorComponent: WeatherErrorDisplay,
	timeout: 3000
});
</script>

<style scoped></style>
