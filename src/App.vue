<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
const navDrawerPinned = ref(false);
</script>

<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model:rail="navDrawerPinned">
                <v-list-item prepend-icon="mdi-vuejs" title="Proto-Vue"></v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item
                        prepend-icon="mdi-gamepad-variant-outline"
                        title="Games"
                        value="games"
                        to="/games"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-weather-partly-cloudy"
                        title="Meteo"
                        value="meteo"
                        to="/meteo"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-emoticon-excited-outline"
                        title="Memes"
                        value="memes"
                        to="/album"
                    ></v-list-item>
                </v-list>
                <v-btn icon @click="navDrawerPinned = !navDrawerPinned" location="top center">
                    <v-icon v-if="!navDrawerPinned">mdi-chevron-double-left</v-icon>
                    <v-icon v-else>mdi-chevron-double-right</v-icon>
                </v-btn>
            </v-navigation-drawer>

            <v-main>
                <div class="main-container">
                    <RouterView />
                </div>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
.main-container {
    padding-left: 10%; /* Add padding of 5% on all sides */
    padding-right: 10%;
    padding-top: 100px;
    padding-bottom: 100px;
    box-sizing: border-box;
}
</style>
