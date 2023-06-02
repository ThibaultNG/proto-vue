<script setup lang="ts">
import { ref } from "vue";
import MeteoData from "../component/MeteoData.vue";
import MeteoRandomizer from "../component/MeteoRandomizer.vue";
import MeteoInputValues from "../component/MeteoInputValues.vue";
import { useMeteoStore } from "../store/MeteoStore";

const meteoStore = useMeteoStore();

let firstRender = ref(true);
let valuesPresent = ref(false);

function updateValues(latitudeNewValue: number, longitudeNewValue: number) {
    meteoStore.latitude = latitudeNewValue;
    meteoStore.longitude = longitudeNewValue;
    clicked();
}
function clicked() {
    meteoStore.updateInfoMeteo(meteoStore.latitude, meteoStore.longitude);
    valuesPresent.value = true;
    firstRender.value = false;
}
</script>

<template>
    <div @keyup.enter="clicked()">
        <div class="inputValues">
            <MeteoRandomizer @randomized="updateValues">Au pif !</MeteoRandomizer>
            <MeteoInputValues
                @updateLatitudeLongitude="updateValues"
                :latitude="meteoStore.latitude"
                :longitude="meteoStore.longitude"
            ></MeteoInputValues>

            <v-btn @click="clicked()" prepend-icon="$vuetify" append-icon="$vuetify">Valider</v-btn>
        </div>
        <br />

        <MeteoData v-if="valuesPresent" :data="meteoStore.data"></MeteoData>
        <p v-else-if="firstRender">ah chargement initial ou le site météo à buguer !</p>
        <p v-else>ah chargement initial ou le site météo à buguer !</p>
    </div>
</template>

<style scoped></style>
