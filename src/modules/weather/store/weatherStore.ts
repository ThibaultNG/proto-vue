import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type WeatherData from "../models/WeatherData";
import { MAX_LATITUDE, MAX_LONGITUDE, MIN_LATITUDE, MIN_LONGITUDE } from "../constants/coordinate";
import type { ErrorInfo } from "../models/ErrorInfo";
import { handleErrorFromService, setToNoError } from "../error/serviceErrorHandler";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<number>(0);
	const longitude = ref<number>(0);
	const data = ref<WeatherData>();
	const errorInfo = ref<ErrorInfo>({
		code: 0,
		message: "",
		happenedXTimes: 0
	});

	watchEffect(() => {
		if (latitude.value >= MAX_LATITUDE) {
			latitude.value = MAX_LATITUDE;
		} else if (latitude.value <= MIN_LATITUDE) {
			latitude.value = MIN_LATITUDE;
		}
		if (longitude.value >= MAX_LONGITUDE) {
			longitude.value = MAX_LONGITUDE;
		} else if (longitude.value <= MIN_LONGITUDE) {
			longitude.value = MIN_LONGITUDE;
		}
	});

	//TODO : see if the handling of error part should rather be dealt in service layer with a serviceHandler
	//which would be called by store instead of the store handling the errors itself
	watchEffect(() => {
		getInfoWeatherService(latitude.value, longitude.value)
			.then((response) => {
				data.value = response.data;
				errorInfo.value = setToNoError(errorInfo.value);
			})
			.catch((error: any) => {
				errorInfo.value = handleErrorFromService(error, errorInfo.value);
			});
	});

	return { latitude, longitude, data, errorInfo };
});
