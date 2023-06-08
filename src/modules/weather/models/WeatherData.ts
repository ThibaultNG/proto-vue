export default interface weatherData {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: CurrentWeather;
}

export interface CurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;
}
