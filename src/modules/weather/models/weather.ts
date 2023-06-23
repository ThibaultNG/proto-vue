import type WeatherDTO from "./service/weatherDTO";
import type { CurrentWeatherDTO } from "./service/weatherDTO";

export default class Weather {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeather;

	constructor() {
		this.latitude = 0;
		this.longitude = 0;
		this.generationtime_ms = 0;
		this.current_weather = new CurrentWeather();
	}

	public static fromDtoToModel(weatherDTO: WeatherDTO): Weather {
		const weather: Weather = new Weather();
		weather.latitude = weatherDTO.latitude;
		weather.longitude = weatherDTO.longitude;
		weather.generationtime_ms = weatherDTO.generationtime_ms;
		weather.current_weather = CurrentWeather.fromDtoToModel(weatherDTO.current_weather);
		return weather;
	}
}

export class CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;

	constructor() {
		this.temperature = 0;
		this.windspeed = 0;
		this.winddirection = 0;
		this.is_day = 0;
		this.time = "";
	}

	public static fromDtoToModel(currentWeatherDTO: CurrentWeatherDTO): CurrentWeather {
		const currentWeather: CurrentWeather = new CurrentWeather();
		currentWeather.temperature = currentWeatherDTO.temperature;
		currentWeather.windspeed = currentWeatherDTO.windspeed;
		currentWeather.winddirection = currentWeatherDTO.winddirection;
		currentWeather.is_day = currentWeatherDTO.is_day;
		currentWeather.time = currentWeatherDTO.time;
		return currentWeather;
	}
}
