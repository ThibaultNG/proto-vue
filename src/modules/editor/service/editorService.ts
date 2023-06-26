import axios from "axios";

export const API_URL: string = "http://127.0.0.1:5000";

export async function getFile(): Promise<string> {
	return axios.get(API_URL + "/editor/config").then((res) => res.data);
}

export async function saveConfig(data: string): Promise<void> {
	axios
		.post(API_URL + "/editor/config", {
			data: data
		})
		.catch((error) => console.error(error));
}
