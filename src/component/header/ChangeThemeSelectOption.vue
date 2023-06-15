<template>
	<button @click="clicked">
		(<v-icon>{{ icon }}</v-icon
		>) {{ displayedName }}
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	id: {
		type: String,
		default: ""
	},
	displayedName: {
		type: String,
		default: ""
	},
	icon: {
		type: String,
		default: ""
	}
});
const emits = defineEmits(["clicked"]);

function clicked() {
	emits("clicked", props.id, props.displayedName, props.icon);
}
</script>
