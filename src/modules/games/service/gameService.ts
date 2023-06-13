import axios from "axios";
import Shop from "../models/Shops";
import Game from "../models/Game";
import type StoreInfo from "../models/api/StoreInfo";
import type GameLookup from "../models/api/GameLookup";
import type GameBrief from "../models/api/GameBrief";

export const CHEAPSHARK_URL: string = "https://www.cheapshark.com";
const API_URL: string = "/api/1.0";
const GAME_LIST_LIMIT: number = 20;

export async function getShops(): Promise<Shop[]> {
	return axios
		.get(CHEAPSHARK_URL + API_URL + "/stores")
		.then((res) => res.data as StoreInfo[])
		.then((storeInfoList) => storeInfoList.map((storeInfoList) => new Shop(storeInfoList)));
}

export async function getGamesByTitle(title: string): Promise<Game[]> {
	return axios
		.get(CHEAPSHARK_URL + API_URL + "/games", {
			params: {
				title: title,
				limit: GAME_LIST_LIMIT
			}
		})
		.then((res) => res.data as GameBrief[])
		.then((gameBriefList) =>
			gameBriefList.map((gameBrief) => Game.fromGameBrief(gameBrief) as Game)
		);
}

export async function getDealsByGameId(gameId: number): Promise<Game> {
	return axios
		.get(CHEAPSHARK_URL + API_URL + "/games", {
			params: {
				id: gameId
			}
		})
		.then((res) => res.data as GameLookup)
		.then((gameLookUp) => Game.fromGameLookUp(gameLookUp, gameId));
}
