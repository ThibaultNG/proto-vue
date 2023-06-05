<template>
    <div class="inputValues">
        <label> latitude : </label>
        <input @paste="splitIfComma" v-model="meteoStore.latitude" type="number" />

        <label> longitude : </label>
        <input @paste="splitIfComma" v-model="meteoStore.longitude" type="number" />

        <v-btn @click="copyText" variant="tonal" outlined>Copier les coordonées</v-btn>
    </div>
</template>

<script setup lang="ts">
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();

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
    navigator.clipboard.writeText(meteoStore.latitude + ", " + meteoStore.longitude);
}
</script>

<style scoped>
input {
    background-color: whitesmoke;
    width: 20%;
    margin-right: 1em;
}
</style>
