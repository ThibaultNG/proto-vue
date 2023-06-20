import hljs from "highlight.js/lib/core";
import yaml from "highlight.js/lib/languages/yaml";
import "highlight.js/styles/default.css";
import { onMounted, onUnmounted, type Ref } from "vue";
import { useSelection } from "./selection";

export function useHighlight(
	codeElement: HTMLElement | Ref<HTMLElement | undefined>,
	inputHighlightTime: number = 2000
) {
	let timeoutId: number;

	const { resetCursorPosition } = useSelection(codeElement);

	onMounted(() => {
		hljs.configure({
			ignoreUnescapedHTML: true
		});
		hljs.registerLanguage("yaml", yaml);
		hljs.highlightAll();
	});

	onUnmounted(() => {
		hljs.unregisterLanguage("yaml");
	});

	function highlight() {
		window.setTimeout(() => {
			hljs.highlightAll();
		}, 100);
	}

	function highlightOnInput() {
		// Highlights the text after X secs since the last input
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = window.setTimeout(() => {
			hljs.highlightAll();
			resetCursorPosition();
		}, inputHighlightTime);
	}

	return { highlight, highlightOnInput };
}
