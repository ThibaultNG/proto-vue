<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { getStores } from "../service/gameService";

const stores = ref(new Array());
const selectedStores = ref([]);

const storeNames = computed(() =>
    stores.value[0] ? stores.value[0].map((s: { [x: string]: any }) => s["storeName"]) : []
);

getStores().then((s) => stores.value.push(s));
</script>

<template>
    <v-container fluid>
        <v-select v-model="selectedStores" :items="storeNames" label="Select stores" multiple>
            <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 4">
                    <span>{{ item.title }}</span>
                </v-chip>
                <span v-if="index === 4" class="text-grey text-caption align-self-center">
                    (+{{ selectedStores.length - 4 }} others)
                </span>
            </template>
        </v-select>
    </v-container>
</template>

<style></style>
