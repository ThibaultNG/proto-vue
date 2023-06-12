import type IWeatherData from "./api/IWeatherData";
import type { ICurrentWeather } from "./api/IWeatherData";

export default class WeatherData {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeather;

	constructor(weatherDataAPI: IWeatherData) {
		this.latitude = weatherDataAPI.latitude;
		this.longitude = weatherDataAPI.longitude;
		this.generationtime_ms = weatherDataAPI.generationtime_ms;
		this.current_weather = weatherDataAPI.current_weather;
	}
}

export class CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;

	constructor(currentWeatherAPI: ICurrentWeather) {
		this.temperature = currentWeatherAPI.temperature;
		this.windspeed = currentWeatherAPI.windspeed;
		this.winddirection = currentWeatherAPI.winddirection;
		this.is_day = currentWeatherAPI.is_day;
		this.time = currentWeatherAPI.time;
	}
}
