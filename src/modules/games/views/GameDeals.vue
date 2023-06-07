<template>
	<h1>Deals !</h1>
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
				<GameCard :game="game" @show-game-deals="showGameDeals" />
			</v-col>
		</v-row>
	</v-container>

	<v-overlay v-model="dealsOverlay" :scrim="true">
		<v-card class="pop-up-card bg-grey-darken-4">
			<v-card-title
				class="bg-blue text-h3 font-weight-bold"
				style="line-height: 50px; height: 64px"
			>
				{{ gameDeals?.info.title }}
				<v-btn
					@click="dealsOverlay = false"
					icon="mdi-close"
					class="bg-red"
					style="float: right"
				/>
			</v-card-title>
			<v-img :src="gameDeals?.info.thumb" />
			<v-card-text>{{ gameDeals }}</v-card-text>
			<v-card-actions>
				<v-btn @click="dealsOverlay = false" prepend-icon="mdi-close" class="bg-red"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-overlay>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import type GameBrief from "../models/GameBrief";
import { getDealsByGameID, getGamesByTitle } from "../service/gameService";
import GameCard from "../component/GameCard.vue";
import type GameDeals from "../models/GameDeals";

const searchedGame = ref("");
const dealsOverlay = ref(false);
const gameDeals = ref<GameDeals>();

const searchRules = [
	(input: string) => {
		if (input) return true;

		return "You must enter the title of the game you're looking for.";
	}
];

const gameList: Ref<GameBrief[]> = ref([]);

function search() {
	getGamesByTitle(searchedGame.value).then((g) => (gameList.value = g));
}

function showGameDeals(gameID: number) {
	getDealsByGameID(gameID).then((g) => {
		gameDeals.value = g;
		dealsOverlay.value = true;
	});
}
</script>

<style scoped>
.pop-up-card {
	position: sticky;
	margin-top: 5%;
	margin-left: 20%;
	margin-bottom: 10%;
	overflow: auto;
	width: 60%;
	max-height: 80vh;
}
</style>
