<template>
	<h1>Deals !</h1>

	<!-- SEARCH BAR -->
	<v-sheet max-width="1000">
		<v-form @submit.prevent @submit="search" class="d-flex" row>
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
				:key="game.gameID"
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

	<DealOverlay v-model:dealsOverlayIsActive="dealsOverlayIsActive" :game-deals="gameDeals" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type GameBrief from "../models/GameBrief";
import { getDealsByGameID, getGamesByTitle } from "../service/gameService";
import GameCard from "../component/GameCard.vue";
import type GameDeals from "../models/GameDeals";
import DealOverlay from "../component/DealOverlay.vue";

const searchedGame = ref<string>("");
const dealsOverlayIsActive = ref<boolean>(false);
const gameDeals = ref<GameDeals>();
const gameList = ref<GameBrief[]>([]);

const searchRules = [
	(input: string) => {
		if (input) return true;

		return "You must enter the title of the game you're looking for.";
	}
];

function search(): void {
	getGamesByTitle(searchedGame.value).then((items) => (gameList.value = items));
}

function showGameDeals(gameID: number): void {
	getDealsByGameID(gameID).then((deals) => {
		gameDeals.value = deals;
		dealsOverlayIsActive.value = true;
	});
}
</script>

<style scoped></style>
