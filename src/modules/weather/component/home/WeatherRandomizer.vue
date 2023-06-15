<template>
	<v-btn
		stacked
		prepend-icon="mdi-dice-5-outline"
		class="randomizerButton bg-primary-lighten-1"
		@click="randomize()"
	>
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../../store/weatherStore";
import { coordinateRestrictions } from "../../constants/coordinateRestrictions";

const weatherStore = useWeatherStore();

//randomize and update the coordinate values
function randomize(): void {
	weatherStore.latitude =
		Math.random() *
			(coordinateRestrictions.MAX_LATITUDE - coordinateRestrictions.MIN_LATITUDE) +
		coordinateRestrictions.MIN_LATITUDE;
	weatherStore.longitude =
		Math.random() *
			(coordinateRestrictions.MAX_LONGITUDE - coordinateRestrictions.MIN_LONGITUDE) +
		coordinateRestrictions.MIN_LONGITUDE;
}
</script>
