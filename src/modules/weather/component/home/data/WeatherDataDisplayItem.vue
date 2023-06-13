<template>
	<p>
		<v-icon>{{ props.icon }}</v-icon> {{ props.value }} {{ props.unit }}
	</p>
</template>

<script lang="ts" setup>
const props = defineProps({
	icon: {
		type: String,
		default: "mdi-null",
		validator(value) {
			return String(value).includes("mdi");
		}
	},
	value: {
		type: [String, Number, Boolean, Date, Object],
		default: " --- "
	},
	unit: {
		type: [String, Object],
		required: true
	}
});
</script>
