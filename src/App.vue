<template>
    <v-app>
        <v-app-bar color="blue-lighten-1" class="pl-10">
            <v-icon size="x-large">mdi-vuejs</v-icon>
            <v-app-bar-title class="text-h4">PROTOTYPE VUE 3</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <div class="main-container">
                <RouterView />
            </div>
        </v-main>

        <MainNavBar />
        <v-footer app>
            <div class="text-center w-100">
                {{ new Date().getFullYear() }} — <strong>DUNG</strong>
            </div>
        </v-footer>
    </v-app>
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
