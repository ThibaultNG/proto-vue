import type ApiDeal from "./ApiDeal";

export default interface GameLookup {
	info: {
		title: string;
		steamAppID: string;
		thumb: string;
	};
	cheapestPriceEver: {
		price: number;
		date: Date;
	};
	deals: ApiDeal[];
}
