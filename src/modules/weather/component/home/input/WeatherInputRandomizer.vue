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
import { useWeatherStore } from "../../../store/weatherStore";

const weatherStore = useWeatherStore();

const props = defineProps({
	maxLatitude: {
		type: Number,
		default: 90
	},
	minLatitude: {
		type: Number,
		default: -90
	},
	maxLongitude: {
		type: Number,
		default: 180
	},
	minLongitude: {
		type: Number,
		default: -180
	}
});

//randomize and update the coordinate values
function randomize(): void {
	weatherStore.latitude =
		Math.random() * (props.maxLatitude - props.minLatitude) + props.minLatitude;
	weatherStore.longitude =
		Math.random() * (props.maxLongitude - props.minLongitude) + props.minLongitude;
}
</script>
