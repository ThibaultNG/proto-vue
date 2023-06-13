<template>
	<WeatherHomeDisplay />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import WeatherWaitingDisplay from "./display/WeatherHomeWaitingDisplay.vue";
import WeatherErrorDisplay from "./display/WeatherHomeErrorDisplay.vue";

//TODO : put the testing code into a test
const WeatherHomeDisplay = defineAsyncComponent({
	loader: () =>
		//normal case v
		import("./display/WeatherHomeDisplay.vue"),
	//for testing waiting component v
	// new Promise<typeof import("./display/WeatherHomeDisplay.vue")>((resolve) => {
	// setTimeout(() => {
	// 	resolve(import("./display/WeatherHomeDisplay.vue"));
	// }, 3000); // Delay the import by 3000 milliseconds (3 seconds)
	// }),
	loadingComponent: WeatherWaitingDisplay,
	delay: 200,
	errorComponent: WeatherErrorDisplay,
	timeout: 3000
});
</script>

<style scoped></style>
