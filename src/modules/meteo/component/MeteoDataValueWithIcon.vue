<script lang="ts" setup>
const props = defineProps(["icon", "value", "unit"]);
</script>

<template>
    <p>
        <v-icon>{{ props.icon }}</v-icon> {{ props.value }} {{ props.unit }}
    </p>
</template>
