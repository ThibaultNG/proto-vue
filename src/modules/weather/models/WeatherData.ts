export default interface weatherData {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	current_weather: {
		temperature: number;
		windspeed: number;
		winddirection: number;
		is_day: number;
		time: string;
	};
}
