<template>
	<v-card
		class="bg-error text-center"
		title="Could not connect to server"
		subtitle="Try again later"
	></v-card>
</template>

<script setup lang="ts">
defineEmits<{
	(e: "click"): false; // Prevent @click
}>();
</script>
