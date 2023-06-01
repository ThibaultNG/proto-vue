<script setup lang="ts">
import { ref } from "vue";
import MeteoData from "../component/MeteoData.vue";
import Randomizer from "../component/Randomizer.vue";
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();
// let data = meteoStore.data;

let firstRender = ref(true);
let valuesPresent = ref(false);
function clicked() {
    meteoStore.updateInfoMeteo(meteoStore.latitude, meteoStore.longitude);
    valuesPresent.value = true;
    firstRender.value = false;
}

function updateValueRandomized(latitudeNewValue: number, longitudeNewValue: number) {
    meteoStore.latitude = latitudeNewValue;
    meteoStore.longitude = longitudeNewValue;
    clicked();
}

function splitIfComma(event: any){
    let pastedText: string = event.clipboardData.getData('text');
    let textPieces = pastedText.split(',')
    if(textPieces.length == 2){
        meteoStore.latitude = parseFloat(textPieces[0])
        meteoStore.longitude = parseFloat(textPieces[1])
    }
}

</script>

<template>
    <div @keyup.enter="clicked()">
        <div class="inputValues">
            <div>
                <div class="getRandomValues">
                    <Randomizer @randomized="updateValueRandomized">Au pif !</Randomizer>
                </div>
                <div class="inputWantedValues">
                    <label> latitude : </label>
                    <input class="inputWantedValue1" @paste="splitIfComma" v-model="meteoStore.latitude" type="number" />

                    <label> longitude : </label>
                    <input class="inputWantedValue2" @paste="splitIfComma" v-model="meteoStore.longitude" type="number" />
                </div>
            </div>
            <br /><br />
            <div class="validateValues">
                <v-btn @click="clicked()" prepend-icon="$vuetify" append-icon="$vuetify"
                    >Valider</v-btn
                >
            </div>
        </div>
        <br />
        <MeteoData v-if="valuesPresent" :data="meteoStore.data"></MeteoData>
        <p v-else-if="firstRender">ah chargement initial ou le site météo à buguer !</p>
        <p v-else>ah chargement initial ou le site météo à buguer !</p>
    </div>
</template>

<style>
.inputWantedValue1, .inputWantedValue2{
    background-color: whitesmoke;
    width: 20%;
}
</style>
