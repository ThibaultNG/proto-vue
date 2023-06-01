<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { getShops } from "../service/gameService";

const MAX_SELECTED = 3;

const shops = ref(new Array());
const selectedShop = ref(null);
const searchShop = ref("");
const loading = ref(false);

// const shopNames = computed(() =>
//     shops.value[0] ? shops.value[0].map((s: { [x: string]: any }) => s["storeName"]) : []
// );

// getShops().then((s) => shops.value.push(s));

const shopNames = ["Steam", "Origin", "Epic Games", "Ubisoft"];
</script>

<template>
    <v-toolbar>
        <v-autocomplete
            v-model="selectedShop"
            v-model:search="searchShop"
            :loading="loading"
            :items="shopNames"
            class="mx-4"
            density="comfortable"
            hide-no-data
            hide-details
            label="Select shop"
            style="max-width: 300px"
        ></v-autocomplete>

        <v-btn icon="mdi-dots-vertical"></v-btn>
    </v-toolbar>
</template>

<style></style>
