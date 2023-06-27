<template>
	<h1 class="text-h1 font-weight-black">HELLO WORLD !</h1>
	<div style="display: flex; justify-content: flex-start">
		<FormExample class="ma-10" style="max-width: 150px" />
		<CardExample class="ma-10" />
		<TableExample />
	</div>
	<GalleryExample />
</template>

<script setup lang="ts">
import CardExample from "../component/home/CardExample.vue";
import FormExample from "../component/home/FormExample.vue";
import TableExample from "../component/home/TableExample.vue";
import GalleryExample from "../component/home/GalleryExample.vue";
</script>
