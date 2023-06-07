<template>
	<v-overlay :model-value="dealsOverlayIsActive" :scrim="true">
		<v-card class="pop-up-card bg-grey-darken-4">
			<v-card-title
				class="bg-blue text-h3 font-weight-bold"
				style="line-height: 50px; height: 64px"
			>
				{{ gameDeals?.info.title }}
				<v-btn
					value="false"
					@click="$emit('update:dealsOverlayIsActive', $event.target.value)"
					icon="mdi-close"
					class="bg-red"
					style="float: right"
				/>
			</v-card-title>

			<v-img :src="gameDeals?.info.thumb" />

			<v-card-text>{{ gameDeals }}</v-card-text>

			<v-card-actions>
				<v-btn
					value="false"
					@click="$emit('update:dealsOverlayIsActive', $event.target.value)"
					prepend-icon="mdi-close"
					class="bg-red"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-overlay>
</template>

<script setup lang="ts">
import type GameDeals from "../models/GameDeals";

defineProps<{
	dealsOverlayIsActive: boolean;
	gameDeals: GameDeals | undefined;
}>();

defineEmits<{
	(e: "update:dealsOverlayIsActive", dealsOverlayIsActive: boolean): void;
}>();
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
