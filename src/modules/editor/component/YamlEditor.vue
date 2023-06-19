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

	<v-file-input
		v-model="configFile"
		accept=".yml,.yaml"
		label="File input"
		@update:model-value="getFile"
	></v-file-input>

	<v-snackbar v-model="showFileError" color="error" :timeout="10000">
		Error : File could not be loaded
	</v-snackbar>

	<v-snackbar v-model="showEnterWarning" color="warning" :timeout="2000">
		Use SHIFT+ENTER instead of ENTER
	</v-snackbar>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import "highlight.js/styles/default.css";
import Cursor from "../models/cursor";

hljs.configure({
	ignoreUnescapedHTML: true
});
hljs.registerLanguage("yaml", yaml);

const codeElement = ref<HTMLElement>();
const configFile = ref<File[]>();
const yamlCode = ref<string>("# Config starts here\n\n# End of file");
const showEnterWarning = ref<boolean>(false);
const showFileError = ref<boolean>(false);
let timeoutId: number;
let cursorPosition: number = 0;

onMounted(() => {
	hljs.highlightAll();
	codeElement.value?.addEventListener("click", getCursorPosition);
	codeElement.value?.addEventListener("keydown", getCursorPosition);
});

function saveYaml() {
	if (!codeElement.value) return;
	yamlCode.value = codeElement.value.innerText;
}

function edit(event: KeyboardEvent) {
	// Shows a warning to the user when he tries to add a new line with Enter instead of Shift+Enter
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		showEnterWarning.value = true;
		return;
	}

	// Highlights the text after X secs since the last input
	if (timeoutId) clearTimeout(timeoutId);
	timeoutId = window.setTimeout(() => {
		hljs.highlightAll();
		setCursorPosition();
	}, 2000);
}

function getFile() {
	const reader = new FileReader();
	const file: File | undefined = configFile.value?.[0];

	if (!file) return;
	reader.readAsText(file, "UTF-8");

	reader.onload = (event) => {
		yamlCode.value = event.target?.result as string;
		window.setTimeout(() => {
			hljs.highlightAll();
		}, 100);
	};
	reader.onerror = (event) => {
		console.error(event);
		showFileError.value = true;
	};
}

function getCursorPosition(): void {
	const selection: Selection = document.getSelection()!;
	selection.modify("extend", "backward", "documentboundary");
	const position: number = selection.toString().length;
	if (selection.anchorNode != undefined) selection.collapseToEnd();

	cursorPosition = position;
}

function setCursorPosition() {
	// let offset1 = Cursor.getCurrentCursorPosition(codeElement.value!);
	const offset: number = cursorPosition + 1;

	// insert code here that does stuff to the innerHTML, such as adding/removing <span> tags
	Cursor.setCurrentCursorPosition(offset, codeElement.value!);
	codeElement.value!.focus();
}

onUnmounted(() => {
	hljs.unregisterLanguage("yaml");
});
</script>
