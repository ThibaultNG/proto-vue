<template>
	<pre>
	  <code class="language-yaml" contenteditable @input="edit">
		{{ yamlCode }}
	  </code>
	</pre>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import "highlight.js/styles/default.css";

hljs.registerLanguage("yaml", yaml);

const yamlCode = ref<string>("");

let timeoutId: number;

onMounted(() => {
	hljs.highlightAll();
});

function edit() {
	if (timeoutId) clearTimeout(timeoutId);
	timeoutId = setTimeout(() => {
		hljs.highlightAll();
	}, 1000);
}

onUnmounted(() => {
	hljs.unregisterLanguage("yaml");
});
</script>
