import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { getInfoMeteoService } from "../service/meteoService";

export const useMeteoStore = defineStore("meteoStore", () => {
    const latitude = ref(1);
    const longitude = ref(1);
    const data = ref();

    //TODO : calculate value of time, temperature and other array of values with getters/computed
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
