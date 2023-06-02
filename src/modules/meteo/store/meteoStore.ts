import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getInfoMeteoService } from "../service/MeteoService";

export const useMeteoStore = defineStore("meteoStore", () => {
    const latitude = ref(1.0);
    const longitude = ref(1.0);
    const data = ref();

    function updateInfoMeteo(latitudeNewValue: number, longitudeNewValue: number) {
        getInfoMeteoService(latitudeNewValue, longitudeNewValue)
            .then((response) => {
                data.value = response ? response.data : "";
            })
            .catch((error) => {
                console.log("error = " + error);
            });
    }

    return { latitude, longitude, data, updateInfoMeteo };
});
