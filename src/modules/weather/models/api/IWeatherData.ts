export default interface IWeatherData {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: ICurrentWeather;
}

export interface ICurrentWeather {
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: number;
	time: string;
}
