import { defineStore } from "pinia";
import { ref, watchEffect, type Ref } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type WeatherData from "../models/WeatherData";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref(0);
	const longitude = ref(0);
	//	const data: Ref<WeatherData | undefined> = ref();
	const data = ref<WeatherData>();

	watchEffect(() => {
		if (latitude.value != null && longitude.value != null)
			getInfoWeatherService(latitude.value, longitude.value).then((response) => {
				data.value = response ? response.data : "";
			});
	});

	return { latitude, longitude, data };
});
