import { defineStore } from "pinia";
import { ref } from "vue";
import { getShops } from "../service/gameService";
import type Shop from "../models/Shop";

export const useGameStore = defineStore("gameStore", () => {
	const shops = ref<Shop[]>([]);

	function getShopById(storeID: string): Shop | undefined {
		return shops.value.find((item) => item.storeID == storeID);
	}

	async function updateShops() {
		getShops().then((resShops) => {
			resShops.map((item) => {
				item.images.logo = "https://www.cheapshark.com" + item.images.logo;
				item.images.banner = "https://www.cheapshark.com" + item.images.banner;
				item.images.icon = "https://www.cheapshark.com" + item.images.icon;
			});
			shops.value = resShops;
		});
	}

	return { shops, updateShops, getShopById };
});
