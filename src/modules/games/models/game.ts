import Deal from "./deal";

export default class Game {
	id!: number;
	lowestPrice!: number;
	title!: string;
	thumbnail!: string;
	deals?: Deal[];

	constructor(id: number, lowestPrice: number, title: string, thumbnail: string, deals?: Deal[]) {
		this.id = id;
		this.lowestPrice = lowestPrice;
		this.title = title;
		this.thumbnail = thumbnail;
		this.deals = deals;
	}
}
