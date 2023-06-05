<template>
	<v-btn @click="randomize()" prepend-icon="$vuetify" stacked>
		<slot />
	</v-btn>
	<v-btn @click="randomize()" prepend-icon="$vuetify" stacked>
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
import { useMeteoStore } from "../store/meteoStore";
import { MAX_LATITUDE, MIN_LATITUDE, MAX_LONGITUDE, MIN_LONGITUDE } from "../constants/coordinate";

const meteoStore = useMeteoStore();

//randomize and update the coordinate values
function randomize(): void {
	meteoStore.latitude = Math.random() * (MAX_LATITUDE - MIN_LATITUDE) + MIN_LATITUDE;
	meteoStore.longitude = Math.random() * (MAX_LONGITUDE - MIN_LONGITUDE) + MIN_LONGITUDE;
}
</script>
