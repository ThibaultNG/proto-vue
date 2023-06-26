<template>
	<v-file-input
		v-model="files"
		accept=".yml,.yaml"
		label="File input"
		hint="Choose a file from your PC"
		@update:model-value="getFile"
	></v-file-input>

	<v-snackbar v-model="showFileError" color="error" :timeout="10000">
		Error : File could not be loaded
	</v-snackbar>
</template>

<script setup lang="ts">
import { ref } from "vue";

const files = ref<File[]>();
const showFileError = ref<boolean>(false);

const emit = defineEmits<{
	(e: "input", content: string): void;
}>();

function getFile(): void {
	const reader: FileReader = new FileReader();
	const file: File = files.value![0];

	reader.readAsText(file, "UTF-8");

	reader.onload = (event) => {
		emit("input", event.target?.result as string);
	};
	reader.onerror = (event) => {
		console.error(event);
		showFileError.value = true;
	};
}
</script>
