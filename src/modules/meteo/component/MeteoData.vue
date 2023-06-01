<script lang="ts" setup>
const props = defineProps(["data"]);
</script>

<template>
    <ul>
        <span v-for="(value, key, index) in props.data">
            <!-- <p>{{ typeof value }}</p> -->

            <template v-if="typeof value === 'object'">
                <br />
                <span v-for="(valueBis, keyBis, indexBis) in value">
                    [{{ index }}.{{ indexBis }}]{{ keyBis }}: {{ valueBis }}
                    <br />
                </span>
            </template>
            <template v-else> [{{ index }}]{{ key }}: {{ value }} </template>
            <br />
        </span>
        <br />
    </ul>
</template>
