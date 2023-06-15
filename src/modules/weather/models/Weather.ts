import type WeatherDTO from "./api/WeatherDTO";
import type { CurrentWeatherDTO } from "./api/WeatherDTO";

export default class Weather {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeather;

	constructor(weatherDTO: WeatherDTO) {
		this.latitude = weatherDTO.latitude;
		this.longitude = weatherDTO.longitude;
		this.generationtime_ms = weatherDTO.generationtime_ms;
		this.current_weather = weatherDTO.current_weather;
	}
}

export class CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;

	constructor(currentWeatherAPI: CurrentWeatherDTO) {
		this.temperature = currentWeatherAPI.temperature;
		this.windspeed = currentWeatherAPI.windspeed;
		this.winddirection = currentWeatherAPI.winddirection;
		this.is_day = currentWeatherAPI.is_day;
		this.time = currentWeatherAPI.time;
	}
}
