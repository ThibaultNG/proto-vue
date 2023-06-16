<template>
	<WeatherHomeDisplay />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import WeatherWaitingDisplay from "./display/WeatherHomeWaitingDisplay.vue";
import WeatherErrorDisplay from "./display/WeatherHomeErrorDisplay.vue";
import type { Component } from "vue";

//TODO : put the testing code into a test
const WeatherHomeDisplay: Component = defineAsyncComponent({
	loader: () =>
		//normal case v
		//import("./display/WeatherHomeDisplay.vue"),
		//for testing waiting component v
		new Promise<Component>((resolve) => {
			setTimeout(() => {
				resolve(import("./display/WeatherHomeDisplay.vue"));
			}, 1500); // Delay the import by 1500 milliseconds (1,5 seconds)
		}),
	loadingComponent: WeatherWaitingDisplay,
	delay: 200,
	errorComponent: WeatherErrorDisplay,
	timeout: 3000
});
</script>

<style scoped></style>
