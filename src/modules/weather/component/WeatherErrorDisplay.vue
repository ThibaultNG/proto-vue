<template>
	<p class="errorMessage text-error">{{ errorMessage }}</p>
</template>

<script setup lang="ts">
defineProps({
	errorMessage: {
		type: String,
		default: ""
	}
});
</script>
