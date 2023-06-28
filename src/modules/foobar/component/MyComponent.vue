<template>
	<v-btn
		prepend-icon="mdi-cursor-default-click-outline"
		text="Click me"
		color="primary"
		@click="hello"
	/>
	<h1 v-if="showHello">HELLO !</h1>
</template>

<script setup lang="ts">
import { ref } from "vue";

const showHello = ref<boolean>(false);

function hello() {
	showHello.value = !showHello.value;
}
</script>
