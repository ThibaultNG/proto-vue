<template>
	<v-overlay
		:model-value="dealsOverlayIsActive"
		:scrim="true"
		value="false"
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
				{{ gameDeals?.info.title }}
				<v-btn
					value="false"
					icon="mdi-close"
					class="bg-red"
					style="float: right"
					@click="emit('update:dealsOverlayIsActive', $event.target.value)"
				/>
			</v-card-title>

			<v-img :src="gameDeals?.info.thumb" />

			<OfferTable :deals="gameDeals?.deals" />

			<v-card-actions>
				<v-btn
					value="false"
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
import type GameDeals from "../models/GameDeals";
import OfferTable from "./OfferTable.vue";

defineProps<{
	dealsOverlayIsActive: boolean | undefined;
	gameDeals: GameDeals | undefined;
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
	min-width: 300px;
	width: 80vw;
	max-height: 80vh;
}
</style>
