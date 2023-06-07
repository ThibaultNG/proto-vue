<template>
	<v-table fixed-header>
		<thead>
			<tr>
				<th></th>
				<th class="text-left">Price</th>
				<th class="text-left">Retail price</th>
				<th class="text-left">Savings</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="deal in deals" :key="deal.dealID">
				<td>
					<v-img
						:src="gameStore.getShopById(deal.storeID)?.images.logo"
						width="50"
						height="50"
					></v-img>
				</td>
				<td>{{ deal.price }}</td>
				<td>{{ deal.retailPrice }}</td>
				<td>{{ deal.savings }}</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script setup lang="ts">
import type Deal from "../models/Deal";
import { useGameStore } from "../store/gameStore";

const gameStore = useGameStore();

gameStore.updateShops();

defineProps<{
	deals: Deal[] | undefined;
}>();
</script>
