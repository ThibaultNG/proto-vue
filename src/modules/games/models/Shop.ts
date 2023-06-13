import type StoreInfo from "./api/StoreInfo";
import { CHEAPSHARK_URL } from "../service/gameService";

export default class Shop {
	id: string;
	name: string;
	logo: string;

	constructor(storeInfo: StoreInfo) {
		this.id = storeInfo.storeID;
		this.name = storeInfo.storeName;
		this.logo = CHEAPSHARK_URL + storeInfo.images.logo;
	}
}
