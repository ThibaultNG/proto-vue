<template>
    <div @keyup.enter="updateData">
        <div class="inputValues">
            <MeteoRandomizer @randomized="updateData">Au pif !</MeteoRandomizer>
            <MeteoInputValues @updateLatitudeLongitude="updateData"></MeteoInputValues>

            <v-btn @click="updateData" prepend-icon="$vuetify" append-icon="$vuetify"
                >Valider</v-btn
            >
        </div>
        <br />

        <MeteoData v-if="dataPresent" :data="meteoStore.data"></MeteoData>
        <p v-else-if="firstRender">Ici la météo !</p>
        <p v-else>Veuillez rafraîchir !</p>

        <v-btn
            :href="
                'https://google.fr/maps/search/' + meteoStore.latitude + ', ' + meteoStore.longitude
            "
            target="_blank"
            rel="noopener noreferrer"
            prepend-icon="$vuetify"
            append-icon="$vuetify"
            >Regarder sur google map</v-btn
        >
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MeteoData from "../component/MeteoData.vue";
import MeteoRandomizer from "../component/MeteoRandomizer.vue";
import MeteoInputValues from "../component/MeteoInputValues.vue";
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();

let firstRender = ref(true);
let dataPresent = ref(false);
function updateData(): void {
    meteoStore.updateInfoMeteo(meteoStore.latitude, meteoStore.longitude);
    //TODO : add a check to verify that Data has been updated according to new values
    dataPresent.value = true;
    firstRender.value = false;
}
</script>

<style scoped></style>
