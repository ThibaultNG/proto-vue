<template>
    <div class="inputValues">
        <label> latitude : </label>
        <input @paste="splitIfComma" v-model="meteoStore.latitude" type="number" />

        <label> longitude : </label>
        <input @paste="splitIfComma" v-model="meteoStore.longitude" type="number" />

        <v-btn @click="copyCoordinates" variant="tonal" outlined>Copier les coordonées</v-btn>
    </div>
</template>

<script setup lang="ts">
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();
const emits = defineEmits(["coordinatesUpdated"]);

//update coordinates according to pasted values if the syntax is correct
//i.e. '-59.91232133' + ',' + '12.029222' with -59.xxx for latitude and 12.xxx for longitude
function splitIfComma(event: any): void {
    let pastedText: string = event.clipboardData.getData("text");
    let textPieces = pastedText.split(",");
    if (textPieces.length == 2) {
        meteoStore.latitude = parseFloat(textPieces[0]);
        meteoStore.longitude = parseFloat(textPieces[1]);

        emits("coordinatesUpdated");
    }
}

function copyCoordinates(): void {
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
