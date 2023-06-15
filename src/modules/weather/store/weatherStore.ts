import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type Weather from "../models/Weather";
import {
	MAX_LATITUDE,
	MAX_LONGITUDE,
	MIN_LATITUDE,
	MIN_LONGITUDE
} from "../constants/coordinateRestrictions";
import ErrorInfo from "../models/ErrorInfo";
import { handleErrorFromService, setToNoError } from "../error/serviceErrorHandler";
import type WeatherDTO from "../models/api/WeatherDTO";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<number>(0);
	const longitude = ref<number>(0);
	const weather = ref<Weather>();
	const errorInfo = ref<ErrorInfo>(new ErrorInfo());

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
			.then((response: any) => {
				weather.value = response.data as WeatherDTO;
				errorInfo.value = setToNoError(errorInfo.value);
			})
			.catch((error: any) => {
				errorInfo.value = handleErrorFromService(error, errorInfo.value);
			});
	});

	return { latitude, longitude, weather: weather, errorInfo };
});
