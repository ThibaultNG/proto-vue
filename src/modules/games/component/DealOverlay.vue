<template>
	<v-overlay
		:model-value="dealsOverlayIsActive"
		:scrim="true"
		:value="false"
		@click:outside="
			emit(
				'update:dealsOverlayIsActive',
				new Boolean(($event.target as HTMLInputElement).value).valueOf()
			)
		"
	>
		<v-card class="pop-up-card bg-grey-darken-4">
			<v-card-title
				class="bg-blue text-h3 font-weight-bold"
				style="line-height: 50px; height: 64px"
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

			<v-card-actions>
				<v-btn
					:value="false"
					prepend-icon="mdi-close"
					class="bg-red"
					@click="emit('update:dealsOverlayIsActive', $event.target.value)"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-overlay>
</template>

<script setup lang="ts">
import Game from "../models/Game";
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
	position: sticky;
	margin-top: 5%;
	margin-bottom: 5%;
	margin-left: 10%;
	margin-right: 10%;
	overflow: auto;
	min-width: 350px;
	width: 80vw;
	max-width: 550px;
	max-height: 80vh;
}
</style>
