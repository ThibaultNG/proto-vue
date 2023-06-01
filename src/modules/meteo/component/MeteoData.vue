<script lang="ts" setup>
import {ref} from 'vue'
const props = defineProps(['data', 'valuesPresent'])


</script>

<template>
    
    <ul>
        <template v-if="valuesPresent">
            <!-- <li v-for="item in props.data">
                <p>valuesPresent = {{ valuesPresent }}</p>
                <p>{{data.length}}</p>
                <span v-for="(value, key, index) in item">
                    {{key}}: {{value}} - {{index}}<br>    
                </span>
                <br>
            </li> -->
    </template>
    </ul>
    <!-- <button @click="seeDataPropContent"> click meteo data</button> -->
    <div>props = {{ props }}</div>
</template>
