<template>
	<v-overlay
		:model-value="dealsOverlayIsActive"
		:scrim="true"
		:value="false"
		class="d-flex justify-center align-center"
		content-class="elevation-24"
		@click:outside="
			emit(
				'update:dealsOverlayIsActive',
				new Boolean(($event.target as HTMLInputElement).value).valueOf()
			)
		"
	>
		<v-card class="pop-up-card rounded-0">
			<v-card-title
				class="bg-primary text-h3 font-weight-bold"
				style="line-height: 50px; height: 64px; position: sticky; top: 0; z-index: 1"
			>
				{{ game?.title }}
				<v-btn
					:value="false"
					icon="mdi-close"
					class="bg-red"
					style="float: right"
					@click="emit('update:dealsOverlayIsActive', $event.target.value)"
				/>
			</v-card-title>

			<v-img :src="game?.thumbnail" />

			<OfferTable :deals="game?.deals" />
		</v-card>

		<!-- white space at the bottom of the overlay for smoother border -->
		<div
			class="rounded-b-xl"
			style="height: 20px; position: sticky; bottom: 0; z-index: 1; background: white"
		></div>
	</v-overlay>
</template>

<script setup lang="ts">
import Game from "../models/game";
import OfferTable from "./OfferTable.vue";

defineProps<{
	dealsOverlayIsActive: boolean | undefined;
	game: Game | undefined;
}>();

const emit = defineEmits<{
	(e: "update:dealsOverlayIsActive", dealsOverlayIsActive: boolean | null): void;
}>();
</script>

<style scoped>
.pop-up-card {
	overflow: auto;
	max-height: 80vh;
	padding-bottom: 5px;
}
</style>
