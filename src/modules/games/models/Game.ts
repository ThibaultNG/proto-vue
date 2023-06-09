import Deal from "./Deal";
import type GameBrief from "./api/GameBrief";
import type GameLookup from "./api/GameLookup";

export default class Game {
	id!: number;
	lowestPrice!: number;
	title!: string;
	thumbnail!: string;
	deals?: Deal[];

	public static fromGameBrief(gameBrief: GameBrief): Game {
		const game: Game = new Game();
		game.id = gameBrief.gameID;
		game.lowestPrice = gameBrief.cheapest;
		game.title = gameBrief.external;
		game.thumbnail = gameBrief.thumb;

		return game;
	}

	public static fromGameLookUp(gameLookup: GameLookup, id: number): Game {
		const game: Game = new Game();

		game.id = id;
		game.lowestPrice = gameLookup.cheapestPriceEver.price;
		game.title = gameLookup.info.title;
		game.thumbnail = gameLookup.info.thumb;
		game.deals = Deal.fromApiDealList(gameLookup.deals);

		return game;
	}
}
