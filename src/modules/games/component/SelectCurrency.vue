<template>
	<v-select
		v-model="gameStore.chosenCurrency"
		:items="[...currencies.keys()]"
		variant="solo-filled"
		style="max-width: 85px"
	></v-select>
</template>

<script setup lang="ts">
import { useGameStore } from "../store/gameStore";
import { currencies } from "../constants/currencies";

const gameStore = useGameStore();
</script>
