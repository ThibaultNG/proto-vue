<template>
    <div>
        <div class="inputValues">
            <MeteoRandomizer>Au pif !</MeteoRandomizer>
            <MeteoInputValues></MeteoInputValues>
            <v-btn prepend-icon="$vuetify" append-icon="$vuetify">Valider</v-btn>
        </div>
        <br />

        <MeteoData v-if="meteoStore.data != null" :data="meteoStore.data"></MeteoData>
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
import MeteoData from "../component/MeteoData.vue";
import MeteoRandomizer from "../component/MeteoRandomizer.vue";
import MeteoInputValues from "../component/MeteoInputValues.vue";
import { useMeteoStore } from "../store/meteoStore";

const meteoStore = useMeteoStore();
</script>

<style scoped></style>
