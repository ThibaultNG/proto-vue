<template>
	<h1>Shop List</h1>
	<v-table fixed-header height="60vh">
		<thead>
			<tr>
				<th width="60"></th>
				<th width="20" class="text-left">ID</th>
				<th class="text-left">Store name</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="shop in gameStore.shops" :key="shop.storeID">
				<td><v-img :src="shop.images.logo" width="50" height="50"></v-img></td>
				<td>{{ shop.storeID }}</td>
				<td>{{ shop.storeName }}</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script setup lang="ts">
import { useGameStore } from "../store/gameStore";

const gameStore = useGameStore();

gameStore.updateShops();
</script>

<style></style>
