<template>
	<!-- Warning for mobile users -->
	<v-card class="d-md-none" color="error">
		<v-card-title class="text-wrap">This feature is not available on your device</v-card-title>
		<v-card-text>
			You need a keyboard to insert new lines. You can only use this feature if you can copy
			and paste the text
		</v-card-text>
	</v-card>

	<pre>
		<code ref="codeElement" class="language-yaml" contenteditable @keydown="edit">{{ yamlCode }}</code>
		<v-btn color="primary" @click="saveYaml">Save</v-btn>
	</pre>

	<FileInput @input="getFileContent" />

	<v-snackbar v-model="showEnterWarning" color="warning" :timeout="2000">
		Use SHIFT+ENTER instead of ENTER
	</v-snackbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHighlight } from "../composables/highlight";
import FileInput from "./FileInput.vue";

const codeElement = ref<HTMLElement>();
const yamlCode = ref<string>("# Config starts here\n\n# End of file");
const showEnterWarning = ref<boolean>(false);

const { highlight, highlightOnInput } = useHighlight(codeElement, 2000);

function saveYaml() {
	yamlCode.value = codeElement.value!.innerText;
	// The texts turns back to normal when a new value is assigned, that is why we highlight again
	highlight();
}

function edit(event: KeyboardEvent) {
	// Shows a warning to the user when he tries to add a new line with Enter instead of Shift+Enter
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		showEnterWarning.value = true;
		return;
	}

	highlightOnInput();
}

function getFileContent(content: string) {
	yamlCode.value = content;
	highlight();
}
</script>
