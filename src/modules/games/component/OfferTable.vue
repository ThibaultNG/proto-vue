<template>
	<v-table fixed-header>
		<tbody>
			<tr v-for="deal in deals" :key="deal.id">
				<!-- STORE ICON -->
				<td>
					<div style="display: grid; grid-column: 1" class="mt-2 mb-2">
						<v-img
							:src="gameStore.getShopById(deal.storeId)?.logo"
							width="50"
							height="50"
						></v-img>
						{{ gameStore.getShopById(deal.storeId)?.name }}
					</div>
				</td>

				<!-- REDUCTION -->
				<template v-if="Deal.getReduction(deal) > 0">
					<td>
						<v-chip
							class="text-decoration-line-through text-disabled"
							:text="gameStore.getPriceTag(deal.retailPrice)"
							variant="tonal"
							label
						/>
						<v-chip
							class="ml-1 text-h6 font-weight-bold"
							color="green"
							variant="elevated"
							:text="'-' + Deal.getReduction(deal) + '%'"
						/>
						<v-chip
							:text="gameStore.getPriceTag(deal.price)"
							class="mt-1 ml-1 text-h6 font-weight-medium"
							append-icon="mdi-cart-outline"
							label
							color="green"
							:href="'https://www.cheapshark.com/redirect?dealID=' + deal.id"
						/>
					</td>
				</template>

				<!-- NO REDUCTION -->
				<template v-else>
					<td>
						<v-chip
							:text="gameStore.getPriceTag(deal.retailPrice)"
							append-icon="mdi-cart-outline"
							label
							:href="'https://www.cheapshark.com/redirect?dealID=' + deal.id"
						/>
					</td>
				</template>
			</tr>
		</tbody>
	</v-table>
</template>

<script setup lang="ts">
import Deal from "../models/deal";
import { useGameStore } from "../store/gameStore";

const gameStore = useGameStore();

gameStore.updateShops();

defineProps<{
	deals: Deal[] | undefined;
}>();
</script>
