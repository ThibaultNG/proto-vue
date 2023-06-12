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
				<template v-if="deal.getReduction() > 0">
					<td>
						<v-chip
							class="text-decoration-line-through text-disabled"
							:text="'$' + deal.retailPrice.toString()"
							variant="tonal"
							label
						/>
						<v-chip
							class="ml-1 text-h6 font-weight-bold"
							color="green"
							variant="elevated"
							:text="'-' + deal.getReduction() + '%'"
						/>
						<v-chip
							:text="'$' + deal.price.toString()"
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
							:text="'$' + deal.price.toString()"
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
import Deal from "../models/Deal";
import { useGameStore } from "../store/gameStore";

const gameStore = useGameStore();

gameStore.updateShops();

defineProps<{
	deals: Deal[] | undefined;
}>();
</script>
