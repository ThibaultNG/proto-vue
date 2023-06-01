<script lang="ts" setup>
import {ref} from 'vue'
const props = defineProps(['data', 'valuesPresent'])


</script>

<template>
    <ul>
        <template v-if="valuesPresent">
                <p>{{data.length}}</p>
                <span v-for="(value, key, index) in props.data">
                    <!-- <p>{{ typeof value }}</p> -->

                    <template v-if="typeof value === 'object'">
                        <span v-for="(valueBis, keyBis, indexBis) in value">
                            [{{index}}.{{indexBis}}]{{keyBis}}: {{valueBis}}
                        <br>
                        </span>
                    </template>
                    <template v-else>
                        [{{index}}]{{key}}: {{value}}
                    </template>
                    <br>
                </span>
                <br>
    </template>
    </ul>
    <!-- <button @click="seeDataPropContent"> click meteo data</button> -->
</template>
