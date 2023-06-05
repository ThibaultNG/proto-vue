<template>
    <v-navigation-drawer v-model:rail="navDrawerPinned">
        <v-card class="mx-auto" width="300">
            <v-list v-model:opened="open" open-strategy="single">
                <v-list-item prepend-icon="mdi-home" title="Home" value="Home" to="/"></v-list-item>

                <v-divider />

                <v-list-group v-for="group in groups" :value="group.groupName">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            :prepend-icon="group.groupIcon"
                            :title="group.groupName"
                        />
                    </template>

                    <v-list-group
                        v-for="item in group.itemList"
                        :value="group.groupName + item.name"
                    >
                        <template v-slot:activator="{ props }">
                            <v-list-item
                                v-bind="props"
                                :title="item.name"
                                :to="item.link"
                                :prepend-icon="item.icon"
                            ></v-list-item>
                        </template>
                    </v-list-group>
                    <v-divider />
                </v-list-group>

                <v-divider />

                <v-list-item
                    :prepend-icon="
                        navDrawerPinned ? 'mdi-chevron-double-right' : 'mdi-chevron-double-left'
                    "
                    @click="navDrawerPinned = !navDrawerPinned"
                >
                </v-list-item>
            </v-list>
        </v-card>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { gameNavLinks } from "../modules/games/routes/gameRoutes";
import { meteoNavLinks } from "../modules/meteo/routes/meteoRoutes";

const navDrawerPinned = ref(false);
const open = ref(["Home"]);

const groups = [...gameNavLinks, ...meteoNavLinks];
</script>
