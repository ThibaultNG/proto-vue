import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { updateInfoWeatherService } from "../service/weatherService";
import Weather from "../models/weather";
import ErrorInfo from "../models/errorInfo";

export const useWeatherStore = defineStore("weatherStore", () => {
	const latitude = ref<number>(0);
	const longitude = ref<number>(0);
	const weather = ref<Weather>(new Weather());
	const errorInfo = ref<ErrorInfo>(new ErrorInfo());

	watchEffect(() => {
		updateInfoWeatherService(weather, errorInfo, latitude.value, longitude.value);
	});

	return { latitude, longitude, weather: weather, errorInfo };
});
