<template>
	<v-autocomplete
		v-model="selectedShop"
		v-model:search="searchShop"
		:loading="loading"
		:items="shopNames"
		class="mx-4"
		density="comfortable"
		hide-no-data
		hide-details
		label="Select shop"
		style="max-width: 300px"
	></v-autocomplete>

	<v-btn icon="mdi-dots-vertical"></v-btn>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { getShops } from "../service/gameService";

const shops = ref(new Array());
const selectedShop = ref(null);
const searchShop = ref("");
const loading = ref(false);

const shopNames = computed(() =>
	shops.value[0] ? shops.value[0].map((s: { [x: string]: any }) => s["storeName"]) : []
);

getShops().then((resShops) => shops.value.push(resShops));
</script>

<style></style>
