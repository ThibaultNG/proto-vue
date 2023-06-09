<template>
	<h1>Deals !</h1>

	<!-- SEARCH BAR -->
	<v-sheet max-width="1000">
		<v-form class="d-flex" row @submit.prevent @submit="search">
			<v-text-field
				v-model="searchedGame"
				:rules="searchRules"
				placeholder="Search game by title"
			></v-text-field>
			<v-btn type="submit" class="mt-2 ml-10">Search</v-btn>
		</v-form>
	</v-sheet>

	<!-- GAME TABLE -->
	<v-container style="position: relative">
		<v-row class="v-row-wrap align-center">
			<v-col
				v-for="game in gameList"
				:key="game.id"
				cols="12"
				sm="6"
				md="4"
				lg="3"
				class="d- align-center"
			>
				<GameCard :game="game" @click="showGameDeals" />
			</v-col>
		</v-row>
	</v-container>

	<DealOverlay v-model:dealsOverlayIsActive="dealsOverlayIsActive" :game="selectedGame" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getDealsByGameId, getGamesByTitle } from "../service/gameService";
import GameCard from "../component/GameCard.vue";
import DealOverlay from "../component/DealOverlay.vue";
import type Game from "../models/Game";

const searchedGame = ref<string>("");
const dealsOverlayIsActive = ref<boolean>(false);
const selectedGame = ref<Game>();
const gameList = ref<Game[]>([]);

const searchRules = [
	(input: string) => {
		if (input) return true;

		return "You must enter the title of the game you're looking for.";
	}
];

function search(): void {
	getGamesByTitle(searchedGame.value).then((items) => (gameList.value = items));
}

function showGameDeals(gameId: number): void {
	getDealsByGameId(gameId).then((resGame) => {
		selectedGame.value = resGame;
		dealsOverlayIsActive.value = true;
	});
}
</script>

<style scoped></style>
