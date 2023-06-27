<template>
	<h1>Gui Editor !</h1>
	<AddDevice class="ma-10" @click="addComponent" />
	<GPSEditor v-if="showGPS" @click="removeGPS"/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AddDevice from "../component/AddDevice.vue";
import GPSEditor from "../component/device/GPSeditor.vue";

const showGPS = ref<boolean>(false);

function addComponent(name: string) {
	if (name === "GPS") {
		showGPS.value = true;
	}
}

function removeGPS(){
	showGPS.value = false;
}
</script>
