import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { getInfoWeatherService } from "../service/weatherService";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref(0);
	const longitude = ref(0);
	const data = ref();

	watchEffect(() => {
		if (latitude.value != null && longitude.value != null)
			getInfoWeatherService(latitude.value, longitude.value).then((response) => {
				data.value = response ? response.data : "";
			});
	});

	return { latitude, longitude, data };
});
