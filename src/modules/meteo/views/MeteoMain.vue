<script setup lang="ts">
import {ref} from 'vue'
import {getInfoMeteo} from "../service/meteoService"
import MeteoData from '../component/MeteoData.vue'
import Randomizer from '../component/Randomizer.vue'

let latitude = ref(-1);
let longitude = ref(1);
let data = ref('')
let valuesPresent = ref(false)
function clicked(){
    getInfoMeteo(longitude.value, latitude.value)
    .then((response) => {
        data.value = response
        valuesPresent.value = true
    }).catch((error) => {console.log("error = "+ error)})
}

function updateValueRandomized(latitudeNewValue: number, longitudeNewValue: number){
    latitude.value = latitudeNewValue
    longitude.value = longitudeNewValue
    clicked();
}

const inputCSS = "background-color: white"
</script>

<template>
    <div  @keyup.enter="clicked()">
        <div class="inputValues">
            <div>
                <div class="getRandomValues">
                    <Randomizer @randomized="updateValueRandomized">Au pif !</Randomizer>
                </div>
                <div class="inputWantedValues">
                    <label> latitude : </label>
                    <input  :style="inputCSS" v-model="latitude" type="number"/>

                    <label> longitude : </label>
                    <input  :style="inputCSS" v-model="longitude" type="number"/>
                </div>    
            </div>
            <br><br>
            <div class="validateValues">
                <v-btn @click="clicked()" prepend-icon="$vuetify" append-icon="$vuetify">Valider</v-btn>
            </div>
        </div>
        
        <br>
        <MeteoData :data="data" :valuesPresent="valuesPresent"></MeteoData>
    </div>
</template>

<style>
/* input{
    background-color: white;    
} */
</style>
