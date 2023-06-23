export default class Deal {
	id: string;
	storeId: string;
	price: number;
	retailPrice: number;

	constructor(id: string, storeId: string, price: number, retailPrice: number) {
		this.id = id;
		this.storeId = storeId;
		this.price = price;
		this.retailPrice = retailPrice;
	}

	static getReduction(deal: Deal): number {
		return Math.ceil((1 - deal.price / deal.retailPrice) * 100);
	}
}
