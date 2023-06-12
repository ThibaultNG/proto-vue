<template>
	<div class="grid-container">
		<v-img
			v-for="meme in album.memes"
			:key="meme['id']"
			:src="meme['url']"
			max-width="200px"
			max-height="200px"
			class="bg-transparent"
		>
			<template #placeholder>
				<v-row class="fill-height ma-0" align="center" justify="center">
					<v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
				</v-row>
			</template>
		</v-img>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getMemes } from "../service/memeService";

const album = reactive({ memes: [] });
getMemes().then((resMemes) => (album.memes = resMemes));
</script>

<style>
.grid-container {
	display: grid;
	grid-template-columns: auto auto auto auto;
	gap: 10px;
	columns: 5;
}
</style>
