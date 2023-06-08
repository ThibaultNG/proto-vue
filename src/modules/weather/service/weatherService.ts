import axios from "axios";
export async function getInfoWeatherService(latitude: Number, longitude: Number): Promise<any> {
	return axios.get(
		"https://api.open-meteo.com/v1/forecast" +
			"?latitude=" +
			latitude +
			"&longitude=" +
			longitude +
			"&current_weather=" +
			true
	);
}
