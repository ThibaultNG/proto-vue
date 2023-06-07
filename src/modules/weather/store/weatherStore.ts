import { defineStore } from "pinia";
import { ref, watchEffect, type Ref } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type WeatherData from "../models/WeatherData";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<Number>(0);
	const longitude = ref<Number>(0);
	const data = ref<WeatherData>();

	watchEffect(() => {
		if(latitude.value ? latitude.value : 90 >= 90){latitude.value = 90;}
		else if(latitude.value ? latitude.value : -90 <= -90){latitude.value = -90;}
		if(longitude.value ? longitude.value : 180 >= 180){longitude.value = 180;}
		else if(longitude.value ? longitude.value : -180 <= -180){longitude.value = -180;}
	})
	watchEffect(() => {
		if (latitude.value != null && longitude.value != null){
			getInfoWeatherService(latitude.value, longitude.value).then((response) => {
				data.value = response.data ? response.data : "";
			});
		}
	});

	return { latitude, longitude, data };
});
