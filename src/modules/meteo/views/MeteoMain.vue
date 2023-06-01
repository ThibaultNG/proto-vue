<script setup lang="ts">
import { ref, reactive } from "vue";
import { getInfoMeteo } from "../service/meteoService";
import MeteoData from "../component/MeteoData.vue";

const longitude = ref(1);
const latitude = ref(-1);
let data = ref("");
let valuesPresent = ref(false);
function clicked() {
    getInfoMeteo(longitude.value, latitude.value)
        .then((response) => {
            data.value = response;
            valuesPresent.value = true;
            console.log(data.value);
        })
        .catch((error) => {
            console.log("error = " + error);
        });
}

const inputCSS = "background-color: white";
</script>

<template>
    <div>
        <label> longitude : </label>
        <input :style="inputCSS" v-model="longitude" type="number" />
        <label> latitude : </label>
        <input :style="inputCSS" v-model="latitude" type="number" />
        <br />

        <p>{{ longitude }} + {{ latitude }}</p>
        <button @click="clicked()">click</button>

        <br />
        <MeteoData :data="data" :valuesPresent="valuesPresent"></MeteoData>
    </div>
</template>

<style>
/* input{
    background-color: white;    
} */
</style>
