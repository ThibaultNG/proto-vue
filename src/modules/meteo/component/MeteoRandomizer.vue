<template>
    <v-btn @click="randomize()" prepend-icon="$vuetify" stacked>
        <slot />
    </v-btn>
</template>

<script lang="ts" setup>
const emit = defineEmits(["randomized"]);
function randomize() {
    const maxLatitude = 90;
    const minLatitude = -90;
    const maxLongitude = 180;
    const minLLongitude = -180;

    Math.random();

    let latitudeNewValue = Math.random() * (maxLatitude - minLatitude) + minLatitude;
    let longitudeNewValue = Math.random() * (maxLongitude - minLLongitude) + minLLongitude;
    emit("randomized", latitudeNewValue, longitudeNewValue);
}
</script>
