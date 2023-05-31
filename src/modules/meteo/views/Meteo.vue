<script setup lang="ts">
import { ref, reactive } from "vue";
import { getInfoMeteo } from "../service/meteoService";
import axios from "axios";

const longitude = ref(1);
const latitude = ref(-1);
let test = ref(0);
//const infoMeteo = getInfoMeteo();

async function getInfoMeteoTmp() {
    const resp = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
    );
    console.log(resp.data.current_weather.temperature);
    test.value = resp.data.current_weather.temperature;
}
</script>

<template>
    <label> longitude : </label>
    <input v-model="longitude" type="number" />
    <label> latitude : </label>
    <input v-model="latitude" type="number" />
    <br />
    <p>{{ test }}</p>
    <button @click="getInfoMeteoTmp">click</button>

    <p>{{ longitude }} + {{ latitude }}</p>
</template>
