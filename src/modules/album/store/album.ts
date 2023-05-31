import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAlbumStore = defineStore("counter", () => {
    const query = ref("");
    const photos = ref([]);

    const getQuery = computed(() => (query ? query : "Null"));

    function increment() {
        // test
    }

    return { query, photos, getQuery, increment };
});
