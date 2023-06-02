<template>
    <v-card>
        <v-layout>
            <MainNavBar />

            <v-main>
                <div class="main-container">
                    <RouterView />
                </div>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import MainNavBar from "./component/MainNavBar.vue";
</script>

<style scoped>
.main-container {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 50px;
    padding-bottom: 100px;
    box-sizing: border-box;
}
</style>
