<script setup lang="ts">import { computed, ref } from 'vue';

	const chosen = ref(0);
	const color = computed(()=>{
        switch (chosen.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }	
	});
	
</script>

<template>
	<v-layout class="overflow-visible" style="height: 56px;">
		<h1 class="text-h3 font-weight-medium">Games</h1>

		<v-bottom-navigation v-model="chosen" :bg-color="color" mode="shift">

			<v-btn to="home">
				<v-icon size="x-large">mdi-home-outline</v-icon>

				<span>Home</span>
			</v-btn>

			<v-btn to="shops">
				<v-icon size="x-large">mdi-store-outline</v-icon>

				<span>Shops</span>
			</v-btn>

			<v-btn to="deals">
				<v-icon size="x-large">mdi-tag-outline</v-icon>

				<span>Deals</span>
			</v-btn>
		</v-bottom-navigation>
	</v-layout>
	<RouterView />
</template>

<style></style>
