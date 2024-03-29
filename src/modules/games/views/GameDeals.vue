<template>
	<h1>Deals !</h1>
	<v-divider class="mb-5" />

	<!-- SEARCH BAR -->
	<v-form style="display: flex; flex-wrap: wrap" @submit.prevent @submit="search">
		<v-text-field
			v-model="searchedGame"
			:rules="searchRules"
			placeholder="Search game by title"
			style="max-width: 500px; width: 70vw"
		></v-text-field>
		<v-btn type="submit" class="mt-2 ml-10 mr-10" color="primary">Search</v-btn>
		<SelectCurrency />
	</v-form>

	<!-- GAME TABLE -->

	<GameTablePlaceHolder
		v-if="loadTable"
		:game-list="gameList"
		@click="(gameId : number) => showGameDeals(gameId)"
	/>

	<DealOverlay v-model:dealsOverlayIsActive="dealsOverlayIsActive" :game="selectedGame" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { getDealsByGameId, getGamesByTitle } from "../service/gameService";
import DealOverlay from "../component/DealOverlay.vue";
import type Game from "../models/game";
import type Deal from "../models/deal";
import SelectCurrency from "../component/SelectCurrency.vue";
import LoadingTable from "../component/loading/LoadingTable.vue";
import LoadingError from "../component/error/ConnectionError.vue";
import type { Component } from "vue";

const searchedGame = ref<string>("");
const dealsOverlayIsActive = ref<boolean>(false);
const gameList = ref<Game[]>([]);
const selectedGame = ref<Game>();
const loadTable = ref<boolean>(false);

const searchRules = [
	(input: string) => {
		if (input) return true;

		return "You must enter the title of the game you're looking for.";
	}
];

function search(): void {
	getGamesByTitle(searchedGame.value).then((items) => {
		gameList.value = items;
		loadTable.value = true;
		GameTablePlaceHolder = getTable();
	});
}

function showGameDeals(gameId: number): void {
	getDealsByGameId(gameId).then((resGame) => {
		resGame.deals?.sort((dealA: Deal, dealB: Deal) => dealA.price - dealB.price); // order by price DESC
		selectedGame.value = resGame;
		dealsOverlayIsActive.value = true;
	});
}

let GameTablePlaceHolder: Component = getTable();

function getTable() {
	return defineAsyncComponent({
		loader: async () => {
			await new Promise((r) => setTimeout(r, 1000));
			return import("../component/GameTable.vue");
		},

		loadingComponent: LoadingTable,
		delay: 0,

		errorComponent: LoadingError,
		timeout: 5000
	});
}
</script>

<style scoped></style>
