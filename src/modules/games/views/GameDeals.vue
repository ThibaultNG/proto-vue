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
				<GameCard
					:game="game"
					@show-game-deals.prevent="(e) => showGameDeals(e, game.gameID)"
				/>
			</v-col>
		</v-row>
		<v-overlay v-model="dealsOverlay" contained :scrim="true">
			<v-card :style="overlayStyle">
				<v-card-text>{{ gameDeals }}</v-card-text>
			</v-card>
		</v-overlay>
	</v-container>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import type GameBrief from "../models/GameBrief";
import { getDealsByGameID, getGamesByTitle } from "../service/gameService";
import GameCard from "../component/GameCard.vue";
import type GameDeals from "../models/GameDeals";
import { type CSSProperties } from "vue";

const searchedGame = ref("");
const dealsOverlay = ref(false);
const gameDeals = ref<GameDeals>();
const overlayStyle = ref<CSSProperties>({
	position: "relative"
});

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

function showGameDeals(event: PointerEvent, gameID: number) {
	overlayStyle.value.top = event.y + "px";
	overlayStyle.value.left = event.x + "px";
	console.log(overlayStyle.value);
	console.log(event);

	getDealsByGameID(gameID).then((g) => {
		gameDeals.value = g;
		dealsOverlay.value = true;
	});
}
</script>

<style></style>
