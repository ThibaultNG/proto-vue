import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { getInfoMeteoService } from "../service/meteoService";

export const useMeteoStore = defineStore("meteoStore", () => {
    const latitude = ref(0);
    const longitude = ref(0);
    const data = ref();

    watchEffect(() => {
        if (latitude.value != null && longitude.value != null)
            getInfoMeteoService(latitude.value, longitude.value).then((response) => {
                data.value = response ? response.data : "";
            });
    });

    return { latitude, longitude, data };
});
