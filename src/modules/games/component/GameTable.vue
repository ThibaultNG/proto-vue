<template>
	<v-container style="position: relative">
		<v-row class="v-row-wrap align-center">
			<v-col
				v-for="game in gameList"
				:key="game.id"
				cols="12"
				lg="3"
				md="4"
				sm="6"
				xs="12"
				class="d- align-center"
			>
				<GameCard :game="game" @click="emit('click', game.id)" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import type Game from "../models/Game";
import GameCard from "../component/GameCard.vue";

defineProps<{
	gameList: Game[];
}>();

const emit = defineEmits<{
	(e: "click", gameId: number): void;
}>();
</script>
