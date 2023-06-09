import type ApiDeal from "./api/ApiDeal";

export default class Deal {
	id: string;
	storeId: string;
	price: number;
	retailPrice: number;

	constructor(deal: ApiDeal) {
		this.id = deal.dealID;
		this.storeId = deal.storeID;
		this.price = deal.price;
		this.retailPrice = deal.retailPrice;
	}

	getReduction(): number {
		return 1 - this.price / this.retailPrice;
	}

	public static fromApiDealList(apiDeals: ApiDeal[]): Deal[] {
		const deals: Deal[] = [];

		apiDeals.forEach((apiDeal) => deals.push(new Deal(apiDeal)));

		return deals;
	}
}
