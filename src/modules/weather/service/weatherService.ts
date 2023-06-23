import axios from "axios";
import Weather from "../models/weather";
import type { Ref } from "vue";
import type ErrorInfo from "../models/errorInfo";
import type WeatherDTO from "../models/service/weatherDTO";
import { handleErrorFromService, setToNoError } from "./serviceErrorHandler";

export const BACK_URL: string = "http://127.0.0.1:5000";

export async function updateInfoWeatherService(
	dataUpdated: Ref<Weather>,
	errorInfo: Ref<ErrorInfo>,
	latitude: Number,
	longitude: Number
): Promise<any> {
	return axios
		.get(
			BACK_URL +
				"/weather/getWeatherInfo" +
				"?latitude=" +
				latitude +
				"&longitude=" +
				longitude +
				"&current_weather=" +
				true
		)
		.then((response: any) => {
			const responseDataDTO: WeatherDTO = response.data as WeatherDTO;
			dataUpdated.value = Weather.fromDtoToModel(responseDataDTO);
			setToNoError(errorInfo);
		})
		.catch((error: any) => {
			handleErrorFromService(error, errorInfo);
		});
}
