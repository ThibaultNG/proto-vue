<template>
    <div class="inputValues">
        <label> latitude : </label>
        <input @paste="splitIfComma" v-model="props.latitude" type="number" />

        <label> longitude : </label>
        <input @paste="splitIfComma" v-model="props.longitude" type="number" />

        <v-btn @click="copyText" variant="tonal" outlined>Copier les coordonées</v-btn>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(["latitude", "longitude"]);
const emits = defineEmits(["updateLatitudeLongitude"]);

function splitIfComma(event: any) {
    let pastedText: string = event.clipboardData.getData("text");
    let textPieces = pastedText.split(",");
    if (textPieces.length == 2) {
        let latitudeNewValue = parseFloat(textPieces[0]);
        let longitudeNewValue = parseFloat(textPieces[1]);

        emits("updateLatitudeLongitude", latitudeNewValue, longitudeNewValue);
    }
}

function copyText() {
    navigator.clipboard.writeText(props.latitude + ", " + props.longitude);
}
</script>

<style scoped>
input {
    background-color: whitesmoke;
    width: 20%;
    margin-right: 1em;
}
</style>
