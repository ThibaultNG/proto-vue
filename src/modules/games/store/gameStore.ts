import { defineStore } from "pinia";
import { ref } from "vue";
import { getShops } from "../service/gameService";
import Shop from "../models/Shop";
import Currency from "../models/Currency";
import { currencies } from "../constants/currencies";

export const useGameStore = defineStore("gameStore", () => {
	const shops = ref<Shop[]>([]);
	const chosenCurrency = ref<string>("USD");

	function getPriceTag(price: number): string {
		return Currency.getPriceTag(price, currencies.get(chosenCurrency.value)!);
	}

	function getShopById(id: string): Shop | undefined {
		return shops.value.find((shop) => shop.id == id);
	}

	async function updateShops(): Promise<void> {
		getShops().then((resShops) => (shops.value = resShops));
	}

	return { shops, updateShops, getShopById, chosenCurrency, getPriceTag };
});
