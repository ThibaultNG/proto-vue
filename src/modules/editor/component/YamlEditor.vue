<template>
	<!-- Warning for mobile users -->
	<v-card class="d-sm-none" color="error">
		<v-card-title class="text-wrap">This feature is not available on your device</v-card-title>
		<v-card-text>
			You need a keyboard to insert new lines. You can only use this feature if you can copy
			and paste the text
		</v-card-text>
	</v-card>

	<pre>
		<code class="language-yaml" contenteditable @keydown="edit">{{ yamlCode }}</code>
	</pre>

	<v-snackbar v-model="showWarning" color="warning" :timeout="2000">
		Use SHIFT+ENTER instead of ENTER
	</v-snackbar>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import "highlight.js/styles/default.css";

hljs.configure({
	ignoreUnescapedHTML: true
});
hljs.registerLanguage("yaml", yaml);

const yamlCode = ref<string>("");
const showWarning = ref<boolean>(false);
let timeoutId: number;

onMounted(() => {
	hljs.highlightAll();
});

function edit(event: KeyboardEvent) {
	// Shows a warning to the user when he tries to add a new line with Enter instead of Shift+Enter
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		showWarning.value = true;
		return;
	}

	// Highlights the text after X secs since the last input
	if (timeoutId) clearTimeout(timeoutId);
	timeoutId = window.setTimeout(() => {
		// yamlCode.value = (event.target as HTMLElement).innerText;
		hljs.highlightAll();
		console.log((event.target as HTMLElement).innerText);
	}, 2000);
}

onUnmounted(() => {
	hljs.unregisterLanguage("yaml");
});
</script>
