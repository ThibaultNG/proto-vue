<template>
	<p>{{ weatherStore.errorInfo.message }}</p>
</template>

<script setup lang="ts">
import { useWeatherStore } from "@/modules/weather/store/weatherStore";

const weatherStore = useWeatherStore();
</script>
