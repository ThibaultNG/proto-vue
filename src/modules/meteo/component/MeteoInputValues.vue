<script setup lang="ts">
const props = defineProps(["latitude", "longitude"]);
const emits = defineEmits(["updateLatitudeLongitude"]);

function splitIfComma(event: any) {
    let pastedText: string = event.clipboardData.getData("text");
    let textPieces = pastedText.split(",");
    if (textPieces.length == 2) {
        let latitudeNewValue = parseFloat(textPieces[0]);
        let longitudeNewValue = parseFloat(textPieces[1]);

        // console.log(textPieces[0]);
        // console.log(textPieces[1]);

        emits("updateLatitudeLongitude", latitudeNewValue, longitudeNewValue);
    }
}
</script>
<template>
    <div class="inputValues">
        <label> latitude : </label>
        <input @paste="splitIfComma" v-model="props.latitude" type="number" />

        <label> longitude : </label>
        <input @paste="splitIfComma" v-model="props.longitude" type="number" />

        <p>for copy pasting :</p>
        <p>{{ props.latitude }}, {{ props.longitude }}</p>
    </div>
</template>

<style scoped>
input {
    background-color: whitesmoke;
    width: 20%;
}
</style>
