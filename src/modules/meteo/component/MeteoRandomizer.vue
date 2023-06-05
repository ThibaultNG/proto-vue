<template>
	<v-btn @click="randomize()" prepend-icon="$vuetify" stacked>
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();

//randomize and update the coordinate values
function randomize(): void {
	const maxLatitude = 90;
	const minLatitude = -90;
	const maxLongitude = 180;
	const minLLongitude = -180;

	meteoStore.latitude = Math.random() * (maxLatitude - minLatitude) + minLatitude;
	meteoStore.longitude = Math.random() * (maxLongitude - minLLongitude) + minLLongitude;
}
</script>
