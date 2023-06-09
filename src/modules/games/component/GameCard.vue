<template>
	<v-hover v-slot="{ isHovering, props }">
		<v-card v-bind="props">
			<div class="text-center">
				<h3 class="headline pink--text text--accent-2">{{ game.title }}</h3>
			</div>

			<v-img :src="game.thumbnail" />
			<v-card-subtitle>{{ "Price : " + game.lowestPrice + "$" }}</v-card-subtitle>

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

defineProps<{
	game: Game;
}>();

const emit = defineEmits<{
	(e: "click", gameID: number): void;
}>();
</script>
