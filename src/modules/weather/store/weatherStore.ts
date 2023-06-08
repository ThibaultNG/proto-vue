import { defineStore } from "pinia";
import { ref, watchEffect, computed, type WritableComputedRef } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type WeatherData from "../models/WeatherData";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<number>(0);
	const longitude = ref<number>(0);
	const data = ref<WeatherData>();

	watchEffect(() => {
		if (latitude.value >= 90) {
			latitude.value = 90;
		} else if (latitude.value <= -90) {
			latitude.value = -90;
		}
		if (longitude.value >= 180) {
			longitude.value = 180;
		} else if (longitude.value <= -180) {
			longitude.value = -180;
		}
	});

	watchEffect(() => {
		if (latitude.value != null && longitude.value != null) {
			getInfoWeatherService(latitude.value, longitude.value).then((response) => {
				data.value = response.data ? response.data : "";
			});
		}
	});

	return { latitude, longitude, data };
});
