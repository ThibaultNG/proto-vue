import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type Weather from "../models/Weather";
import ErrorInfo from "../models/errorInfo";
import { handleErrorFromService, setToNoError } from "../error/serviceErrorHandler";
import type weatherDTO from "../models/api/weatherDTO";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<number>(0);
	const longitude = ref<number>(0);
	const weather = ref<Weather>();
	const errorInfo = ref<ErrorInfo>(new ErrorInfo());

	//TODO : see if the handling of error part should rather be dealt in service layer with a serviceHandler
	//which would be called by store instead of the store handling the errors itself
	watchEffect(() => {
		getInfoWeatherService(latitude.value, longitude.value)
			.then((response: any) => {
				weather.value = response.data as weatherDTO;
				errorInfo.value = setToNoError(errorInfo.value);
			})
			.catch((error: any) => {
				errorInfo.value = handleErrorFromService(error, errorInfo.value);
			});
	});

	return { latitude, longitude, weather: weather, errorInfo };
});
