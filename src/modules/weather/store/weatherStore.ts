import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { getInfoWeatherService } from "../service/weatherService";
import type WeatherData from "../models/WeatherData";
import { MAX_LATITUDE, MAX_LONGITUDE, MIN_LATITUDE, MIN_LONGITUDE } from "../constants/coordinate";
import type { ErrorInfo } from "../models/ErrorInfo";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<number>(0);
	const longitude = ref<number>(0);
	const data = ref<WeatherData>();
	const errorInfo = ref<ErrorInfo>({
		code: 0,
		message: ""
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

	watchEffect(() => {
		getInfoWeatherService(latitude.value, longitude.value)
			.then((response) => {
				data.value = response.data;
				setToNoError(errorInfo.value);
			})
			.catch((error: any) => {
				handleErrorFromService(error, errorInfo.value);
			});
	});

	return { latitude, longitude, data, errorInfo };
});

function setToNoError(errorInfo: ErrorInfo) {
	errorInfo.code = 0;
	errorInfo.message = "";
}

function handleErrorFromService(error: any, errorInfo: ErrorInfo) {
	if (error.response) {
		if (error.response.status == 400) {
			errorInfo.code = 400;
			errorInfo.message = "Please enter correct values";
		}
	} else if (String(error).includes("Network Error")) {
		errorInfo.code = -1;
		errorInfo.message = "Error : no internet connection";
	}
}
