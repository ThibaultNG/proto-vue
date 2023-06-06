import type Deal from "./Deal";

export default interface GameDeals {
	info: {
		title: string;
		steamAppID: string;
		thumb: string;
	};
	cheapestPriceEver: {
		price: number;
		date: Date;
	};
	deals: Deal[];
}
