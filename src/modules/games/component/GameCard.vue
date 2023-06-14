<template>
	<v-hover v-slot="{ isHovering, props }">
		<v-card v-bind="props" class="bg-secondary-lighten-1">
			<v-card-title>{{ game.title }}</v-card-title>

			<v-img :src="game.thumbnail" />

			<v-card-subtitle>{{ gameStore.getPriceTag(game.lowestPrice) }}</v-card-subtitle>

			<v-overlay
				:model-value="isHovering"
				contained
				scrim="#03A9F4"
				class="align-center justify-center"
			>
				<v-btn variant="flat" @click.prevent="emit('click', game.id)">See more info</v-btn>
			</v-overlay>
		</v-card>
	</v-hover>
</template>

<script setup lang="ts">
import Game from "../models/Game";
import { useGameStore } from "../store/gameStore";

const gameStore = useGameStore();

defineProps<{
	game: Game;
}>();

const emit = defineEmits<{
	(e: "click", gameId: number): void;
}>();
</script>
