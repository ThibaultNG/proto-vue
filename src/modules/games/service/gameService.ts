import axios from "axios";
import type Shop from "../models/shop";
import type GameBrief from "../models/game";

export async function getShops(): Promise<Shop[]> {
	return await axios
		.get("https://www.cheapshark.com/api/1.0/stores")
		.then((res) => res.data)
		.catch((err) => console.log(err));
}

const GAME_LIST_LIMIT = 20;

export async function getGamesByTitle(title: string): Promise<GameBrief[]> {
	return await axios
		.get("https://www.cheapshark.com/api/1.0/games", {
			params: {
				title: title,
				limit: GAME_LIST_LIMIT
			}
		})
		.then((res) => res.data)
		.catch((err) => console.log(err));
}
