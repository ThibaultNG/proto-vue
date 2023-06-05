import axios from "axios";
export async function getInfoWeatherService(latitude: number, longitude: number): Promise<any> {
	return await axios
		.get(
			"https://api.open-meteo.com/v1/forecast" +
				"?latitude=" +
				latitude +
				"&longitude=" +
				longitude +
				"&current_weather=" +
				true
		)
		.catch((error) => {
			console.log("error = " + error);
			return null;
		});
}
