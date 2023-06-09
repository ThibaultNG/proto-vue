<template>
	<v-table fixed-header>
		<thead>
			<tr>
				<th style="width: 50px"></th>
				<th style="width: 50px">Price</th>
				<th style="width: 50px">Retail price</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="deal in deals" :key="deal.id">
				<td>
					<v-img
						:src="gameStore.getShopById(deal.storeId)?.logo"
						width="50"
						height="50"
					></v-img>
				</td>
				<td>{{ deal.price }}</td>
				<td>{{ deal.retailPrice }}</td>
				<td>
					<v-chip
						v-if="deal.getReduction() > 0"
						class="ma-2 text-h6 font-weight-bold"
						color="green"
						text-color="white"
					>
						- {{ deal.getReduction() }} %
					</v-chip>
				</td>
			</tr>
		</tbody>
	</v-table>
</template>

<script setup lang="ts">
import Deal from "../models/Deal";
import { useGameStore } from "../store/gameStore";

const gameStore = useGameStore();

gameStore.updateShops();

defineProps<{
	deals: Deal[] | undefined;
}>();
</script>
