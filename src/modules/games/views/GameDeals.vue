<template>
	<h1>Deals !</h1>
	<v-sheet width="50vw">
		<v-form @submit.prevent @submit="search" class="d-flex" row>
			<v-text-field
				v-model="searchedGame"
				:rules="searchRules"
				placeholder="Search game by title"
			></v-text-field>
			<v-btn type="submit" class="mt-2 ml-10">Search</v-btn>
		</v-form>
	</v-sheet>
	<v-container>
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
				<v-card>
					<div class="text-center">
						<h3 class="headline pink--text text--accent-2">{{ game.external }}</h3>
						<div></div>
					</div>
					<v-spacer>
						<v-img :src="game.thumb"></v-img>
					</v-spacer>
					<v-card-subtitle>{{ "Price " + game.cheapest + "$" }}</v-card-subtitle>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import type GameBrief from "../models/game";
import { getGamesByTitle } from "../service/gameService";

const searchedGame = ref("");

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
</script>

<style></style>
