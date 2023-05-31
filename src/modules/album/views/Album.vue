<script setup lang="ts">
import { reactive } from "vue";
import { getMemes } from "../service/memeService";

const album = reactive({ memes: [] });
getMemes()
	.then(m => album.memes = m)
	.then(() => console.log(album.memes));

</script>

<template>
	<v-row>
		<v-col v-for="meme in album.memes" :key="meme['id']" class="d-flex child-flex" cols="4">
			<v-img :src="meme['url']" aspect-ratio="1" cover class="bg-grey-lighten-2">
				<template v-slot:placeholder>
					<v-row class="fill-height ma-0" align="center" justify="center">
						<v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
					</v-row>
				</template>
			</v-img>
		</v-col>
	</v-row>
</template>

<style></style>
