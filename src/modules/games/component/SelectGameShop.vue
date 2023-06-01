<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { getShops } from "../service/gameService";

const shops = ref(new Array());
const selectedShops = ref([]);

const shopNames = computed(() =>
    shops.value[0] ? shops.value[0].map((s: { [x: string]: any }) => s["storeName"]) : []
);

getShops().then((s) => shops.value.push(s));

</script>

<template>
    <v-container fluid>
        <v-select v-model="selectedShops" :items="shopNames" label="Select stores" multiple>
            <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 4">
                    <span>{{ item.title }}</span>
                </v-chip>
                <span v-if="index === 4" class="text-grey text-caption align-self-center">
                    (+{{ selectedShops.length - 4 }} others)
                </span>
            </template>
        </v-select>
    </v-container>
</template>

<style></style>
