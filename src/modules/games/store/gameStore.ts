import { defineStore } from "pinia";
import { ref } from "vue";
import { getShops } from "../service/gameService";
import Shop from "../models/Shops";

export const useGameStore = defineStore("gameStore", () => {
	const shops = ref<Shop[]>([]);

	function getShopById(id: string): Shop | undefined {
		return shops.value.find((shop) => shop.id == id);
	}

	async function updateShops(): Promise<void> {
		getShops().then((resShops) => (shops.value = resShops));
	}

	return { shops, updateShops, getShopById };
});
