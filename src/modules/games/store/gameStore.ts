import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { getShops } from "../service/gameService";
import type Shop from "../models/shop";

export const useGameStore = defineStore("gameStore", () => {
	const shops: Ref<Shop[]> = ref([]);

	async function updateShops() {
		getShops().then((s) => {
			s.map((s) => {
				s.images.logo = "https://www.cheapshark.com" + s.images.logo;
				s.images.banner = "https://www.cheapshark.com" + s.images.banner;
				s.images.icon = "https://www.cheapshark.com" + s.images.icon;
			});
			shops.value = s;
		});
	}

	return { shops, updateShops };
});
