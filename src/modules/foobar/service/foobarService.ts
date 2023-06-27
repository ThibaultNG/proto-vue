import axios from "axios";

export const API_URL: string = "http://127.0.0.1:5000";

export async function getNothing(param: number): Promise<void> {
	return axios.get(API_URL + "/" + param).then((res) => res.data);
}
