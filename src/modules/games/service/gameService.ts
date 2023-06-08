import axios from "axios";
import type Shop from "../models/Shop";
import type GameBrief from "../models/GameBrief";
import type GameDeals from "../models/GameDeals";

export async function getShops(): Promise<Shop[]> {
	return axios
		.get("https://www.cheapshark.com/api/1.0/stores")
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

const GAME_LIST_LIMIT = 20;

export async function getGamesByTitle(title: string): Promise<GameBrief[]> {
	return axios
		.get("https://www.cheapshark.com/api/1.0/games", {
			params: {
				title: title,
				limit: GAME_LIST_LIMIT
			}
		})
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

export async function getDealsByGameID(gameID: number): Promise<GameDeals> {
	return axios
		.get("https://www.cheapshark.com/api/1.0/games", {
			params: {
				id: gameID
			}
		})
		.then((res) => res.data)
		.catch((err) => console.log(err));
}
