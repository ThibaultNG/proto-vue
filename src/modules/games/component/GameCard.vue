<template>
	<v-hover v-slot="{ isHovering, props }">
		<v-card v-bind="props">
			<div class="text-center">
				<h3 class="headline pink--text text--accent-2">{{ game.external }}</h3>
			</div>
			<v-img :src="game.thumb" />
			<v-card-subtitle>{{ "Price : " + game.cheapest + "$" }}</v-card-subtitle>
			<v-overlay
				:model-value="isHovering"
				contained
				scrim="#03A9F4"
				class="align-center justify-center"
			>
				<v-btn variant="flat" @click.prevent="$emit('showGameDeals', $event, game.gameID)"
					>See more info</v-btn
				>
			</v-overlay>
		</v-card>
	</v-hover>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps(["game"]);

defineEmits<{
	(e: "showGameDeals", event: PointerEvent, gameID: number): void;
}>();

const dealsOverlay = ref(false);
</script>
