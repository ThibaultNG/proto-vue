import axios from "axios";
import Shop from "../models/shop";
import Game from "../models/game";

export const API_URL: string = "http://127.0.0.1:5000";

export async function getShops(): Promise<Shop[]> {
	return axios.get(API_URL + "/game/shops").then((res) => res.data as Shop[]);
}

export async function getGamesByTitle(title: string): Promise<Game[]> {
	return axios
		.get(API_URL + "/game/games", {
			params: {
				title: title
			}
		})
		.then((res) => res.data as Game[]);
}

export async function getDealsByGameId(gameId: number): Promise<Game> {
	return axios.get(API_URL + "/game/deals/" + gameId).then((res) => res.data as Game);
}
