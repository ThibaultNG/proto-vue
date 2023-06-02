<script setup lang="ts">
import { ref } from "vue";

import gameLinks from "../modules/games/constants/gameGroupLinks";

const navDrawerPinned = ref(false);
const open = ref(["Games"]);

const groups = [...gameLinks];
</script>

<template>
    <v-navigation-drawer v-model:rail="navDrawerPinned">
        <v-list-item prepend-icon="mdi-vuejs" title="Proto-Vue"></v-list-item>

        <v-divider />

        <v-card class="mx-auto" width="300">
            <v-list v-model:opened="open">
                <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>

                <v-divider />

                <v-list-group v-for="group in groups" :value="group.groupName">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            prepend-icon="mdi-account-circle"
                            title="Games"
                        />
                    </template>

                    <v-list-group v-for="item in group.itemList" :value="item.name">
                        <template v-slot:activator="{ props }">
                            <v-list-item
                                v-bind="props"
                                :title="item.name"
                                :to="item.link"
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
